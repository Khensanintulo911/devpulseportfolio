const fs = require('fs');
const path = require('path');

const dir = path.resolve(__dirname, '..', 'dist', 'server');
if (!fs.existsSync(dir)) {
  console.log('dist/server not found, nothing to fix');
  process.exit(0);
}

const files = fs.readdirSync(dir).filter(f => f.endsWith('.js'));
for (const file of files) {
  const p = path.join(dir, file);
  let content = fs.readFileSync(p, 'utf8');
  // Add .js extension to local relative imports and dynamic imports if missing
  // Patterns: from "./foo"; from './foo' ; import('./foo')
  // Add .js extension only when the import specifier does not already include an extension
  content = content.replace(/(from\s+['"])(\.\.\/|\.\/)([^'"\)]+?)(['"];?)/g, (m, prefix, rel, name, suffix) => {
    // If the specifier already ends with a recognized file extension, don't change it
    if (name.match(/\.(js|mjs|cjs|json|ts|tsx|jsx)$/)) return `${prefix}${rel}${name}${suffix}`;
    return `${prefix}${rel}${name}.js${suffix}`;
  });
  content = content.replace(/(import\(\s*['"])(\.\.\/|\.\/)([^'"\)]+?)(['"]\s*\))/g, (m, prefix, rel, name, suffix) => {
    if (name.match(/\.(js|mjs|cjs|json|ts|tsx|jsx)$/)) return `${prefix}${rel}${name}${suffix}`;
    return `${prefix}${rel}${name}.js${suffix}`;
  });

  // Collapse accidental repeated .js (e.g. .js.js -> .js)
  content = content.replace(/(\.js){2,}/g, '.js');

  // Rewrite path-alias imports (e.g. @shared/schema) to relative dist paths
  // We assume compiled output places shared under dist/shared
  content = content.replace(/from\s+['"]@shared\/(.+?)['"]/g, (m, name) => {
    return `from "../shared/${name}.js"`;
  });
  content = content.replace(/import\(\s*['"]@shared\/(.+?)['"]\s*\)/g, (m, name) => {
    return `import("../shared/${name}.js")`;
  });

  fs.writeFileSync(p, content, 'utf8');
  console.log('Fixed imports in', p);
}
