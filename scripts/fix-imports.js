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
  content = content.replace(/(from\s+['"])(\.\.\/|\.\/)([^'".][^'"']*)(['"];?)/g, (m, prefix, rel, name, suffix) => {
    return `${prefix}${rel}${name}.js${suffix}`;
  });
  content = content.replace(/(import\(\s*['"])(\.\.\/|\.\/)([^'".][^'"']*)(['"]\s*\))/g, (m, prefix, rel, name, suffix) => {
    return `${prefix}${rel}${name}.js${suffix}`;
  });

  fs.writeFileSync(p, content, 'utf8');
  console.log('Fixed imports in', p);
}
