# Sauti Digital Uganda

Youth Internet Governance platform — Learn, Spot It, Voice, and live Brief PDF.

**Stack:** React + Tailwind (Vite) · Node/Express · Neon Postgres

## Quick start

### 1. Neon database

1. Create a project at [neon.tech](https://neon.tech)
2. Copy your connection string

### 2. Server setup

```bash
cd server
cp .env.example .env
# Paste your Neon DATABASE_URL into server/.env
npm run db:init
npm run dev
```

API runs at `http://localhost:3001`

### 3. Client setup

```bash
cd client
npm run dev
```

App runs at `http://localhost:5173` (proxies `/api` to the server)

### Or run both from root

```bash
npm install
npm run install:all
# Set server/.env first, then:
npm run db:init
npm run dev
```

## Modules

| Route | Module |
|-------|--------|
| `/` | Landing + live session counter |
| `/learn` | 5 governance cards |
| `/spot-it` | 8 Uganda misinformation scenarios |
| `/voice` | 5 pulse polls |
| `/brief` | Live dashboard + PDF download |

## Brand colors

- Navy `#0B2545` · Gold `#F4B400` · Cream `#F7F7F5` · Slate `#1E293B`
