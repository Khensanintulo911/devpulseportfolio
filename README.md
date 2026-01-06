# Hi there, I'm Khensani 👋

🚀 **Aspiring Full-Stack Developer | 🐍 Python • 🎯 Django • ⚡ JavaScript/TypeScript**

📚 On a journey to master software engineering, 🤝 contribute to real-world projects, and ✨ leave my mark in the tech world.

---

## 💻 Current Stack

**Frontend (TypeScript + JavaScript + CSS + HTML)** – Handles everything the user sees and interacts with — fast, safe, and stylish.

**Backend (Python-Django)** – Does the heavy lifting — secure, scalable, and perfect for data-heavy tasks.

💡 *It’s a modern full-stack approach:*  
- **TypeScript** = Stability in frontend code  
- **Python-django** = Flexibility and speed in backend processing  

---

## 🛠 Skills & Tools
- **Languages:** Python, TypeScript, JavaScript, HTML, CSS, SQL  
- **Frameworks & Libraries:** Django, Bootstrap  
- **Databases:** SQLite, PostgreSQL  
- **Tools:** Git, GitHub, VS Code  

---

## 📌 Featured Projects

### 🗳️ VoteSphere: VoteSA  
**Tech Stack:** Django • Python • HTML/CSS • JavaScript • SQLite/PostgreSQL  

VoteSA is a comprehensive web-based voting platform designed for South African political parties.  
It enables users to:  
- Learn about political parties  
- Engage in democratic discussions  
- Cast secure votes online  

Rebuilt using the **Django stack** for an intuitive interface, strong security, and scalability — making it a reliable platform for civic participation.

🔗 [View Repository](https://github.com/yourusername/votesphere) | 🌐 [Live Demo](#)

---

### 📦 StockTracker SA  
**Tech Stack:** Python • Django • HTML/CSS • JavaScript • SQLite  

StockTracker SA is an inventory management system built for **small-scale businesses** in South Africa.  
It helps business owners:  
- Track stock levels in real-time  
- Calculate profits automatically  
- Flag expired goods  
- Identify fast- and slow-moving products  
- Highlight sold-out items  

This system makes it easier for entrepreneurs to make informed business decisions and manage inventory efficiently.

🔗 [View Repository](https://github.com/yourusername/stocktracker-sa) | 🌐 [Live Demo](#)

---

## 📈 Goals for 2025
- 🚀 Build and deploy **4 full-stack projects** (aim for 1 production-ready app every ~quarter)  
- 🤝 Contribute to at least **2 open-source repositories** (start with docs/bugfixes, then move to features)  
- 🗄️ Learn **Database Systems** (relational & NoSQL: data modelling, indexing, transactions, PostgreSQL)  
- 🤖 Learn **software integration with Machine Learning** — model training basics, pipelines, model serving & inference via APIs  
- 🧰 Level up skills in **Django** and **APIs** (REST & GraphQL, security, testing, performance)  

---

## Deployment & Environment Variables

- Local development:
  - Copy `.env.example` to `.env` and fill values (do NOT commit `.env`).
  - Example `DATABASE_URL` format (Postgres):
    `postgres://username:password@host:5432/dbname`
  - Run locally with `npm run dev` — `.env` is loaded automatically in development.
- Production (Render):
  - In your Render service → **Environment**, add required variables such as `DATABASE_URL` and `MY_API_KEY`.
  - Render sets `PORT` automatically for web services; set `NODE_ENV=production`.
  - For most managed DB providers, the app enables SSL for connections automatically in production.
- The app validates required envs at startup and will fail fast if `DATABASE_URL` is missing.

### Render deployment
- Connect your GitHub repo and create a **Web Service**.
- **Runtime**: Node
- **Build Command**: `npm run build` (this compiles the server into `dist` and builds the client)
- **Start Command**: `npm start` (runs `node dist/server/index.js`)
- Make sure `DATABASE_URL` (and any other secrets) are set in Render's Environment settings.

**Troubleshooting: "Cannot find module '/opt/render/project/src/dist/index.js'"**
- This happens when the server build output path doesn't match the start command (e.g., compiled server is `dist/server/index.js`).
- Fixes:
  - Ensure your repo has the updated `package.json` (build script should run `tsc` to compile server TS into `dist`).
  - Run locally to verify: `npm run build && ls dist` — confirm `dist/server/index.js` exists.
  - Push changes and redeploy on Render; the Build step must run `npm run build` (not just `vite build`).
  - Set `NODE_ENV=production` in Render environment variables if your code relies on it.

### Manual migrations (recommended)
- We use Drizzle's migration tooling (`drizzle-kit`). The repository exposes convenient npm scripts:
  - `npm run migrate:generate -- --name my_migration` — generate a new migration (edit the generated file as needed)
  - `npm run migrate:push` — apply pending migrations to the DB
  - `npm run migrate:status` — show migration status
- For production safety we recommend applying migrations manually using the GitHub Action below.

#### One-click production migration via GitHub Actions
- There is a manual action available: **Actions → Manual Migrations → Run workflow** (or use the `workflow_dispatch` event).
- It requires the repository secret `PROD_DATABASE_URL` to be set (in GitHub repo Settings → Secrets). The workflow runs `npx drizzle-kit push --config ./drizzle.config.ts` against the production DB.

**Best practices**
- Generate and test migrations locally and apply them to a staging DB first.
- Back up the production DB before applying the migration.
- Use the manual GitHub Action in a controlled release window; never auto-apply unknown migrations on a push to `main`.

### Using the DB in code
- A simple database helper is available at `server/db.ts`:

```ts
import { db } from "./server/db";

// Example: select rows (Drizzle query syntax depends on your schema)
// await db.select().from(users);
```

If you want, I can add a small example query and tests to exercise the DB connection locally.
## 📫 Let's Connect!
[![LinkedIn](https://img.shields.io/badge/LinkedIn-blue?logo=linkedin&logoColor=white)](https://linkedin.com/in/YOUR-LINK)  
[![Email](https://img.shields.io/badge/Email-D14836?logo=gmail&logoColor=white)](mailto:YOUR-EMAIL)  

---

⭐ **Fun Fact:** I believe learning never stops — every bug fixed is a step forward! 🐛➡️✅
