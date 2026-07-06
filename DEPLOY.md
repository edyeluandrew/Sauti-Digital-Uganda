# Deploy Sauti Digital Uganda

## Quick answer — what you can claim after deploy

| Feature | After deploy |
|---------|----------------|
| Public URL | ✅ Vercel link for judges |
| Near real-time brief | ✅ 3-second polling |
| UIGF submit helper | ✅ Copy text + open uigf.ug |
| Harm stats on Brief | ✅ Live charts |
| Luganda | ✅ Subtitles on Learn + FAQ |
| Audio | ✅ Browser read-aloud on Learn cards |
| FAQ assistant | ✅ "Ask Sauti" — static, no AI |
| Auto-submit to Google Form | ❌ Not possible (no UIGF API) |
| User login | ❌ Not needed for hackathon |
| Live government API feed | ❌ Curated tracker only |

---

## Live URLs

| Service | URL |
|---------|-----|
| **App (Vercel)** | https://sauti-digital-uganda.vercel.app |
| **API (Render)** | https://sauti-digital-uganda.onrender.com |
| **Health check** | https://sauti-digital-uganda.onrender.com/api/health |

---

## 1. Deploy API (Render — live)

1. Push repo to GitHub
2. [render.com](https://render.com) → New **Web Service** → connect repo
3. **Root directory:** `server`
4. **Build:** `npm install`
5. **Start:** `npm start`
6. **Environment variables:**
   - `DATABASE_URL` = your Neon connection string
   - `CLIENT_URL` = your Vercel URL (add after step 2)
7. Copy Render URL e.g. `https://sauti-api.onrender.com`

Run once locally or via Render shell:
```bash
npm run db:init
```

---

## 2. Deploy frontend (Vercel)

1. [vercel.com](https://vercel.com) → Import GitHub repo
2. **Root directory:** `client`
3. **Environment variable:**
   - `VITE_API_URL` = `https://sauti-api.onrender.com` (your Render URL)
4. Deploy → copy Vercel URL e.g. `https://sauti-digital.vercel.app`
5. Go back to Render → set `CLIENT_URL` to Vercel URL → redeploy API

---

## 3. Test production

1. Open Vercel URL on phone
2. Complete Voice poll
3. Open Brief → refresh → download PDF
4. Tap **Copy brief text for UIGF submission**

---

## Local dev (unchanged)

```bash
npm run dev
```

Client proxies `/api` to localhost:3001 when `VITE_API_URL` is empty.
