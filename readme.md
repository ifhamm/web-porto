# Web Porto - Muhamad Ilham Fauzi

Portfolio website bergaya brutalism dengan Next.js (App Router), TypeScript, Tailwind CSS, dan Framer Motion.

## Tech Stack
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion

## Jalankan Lokal (Opsional, untuk cek sebelum deploy)
1. Install dependency:

```bash
npm install
```

2. Jalankan development server:

```bash
npm run dev
```

3. Buka:

http://localhost:3000

## Pre-deploy Checklist
Jalankan ini dulu supaya aman:

```bash
npm run lint
npm run build
```

Jika dua command di atas sukses, project siap deploy.

## Deploy ke Vercel (Paling Cepat)
1. Push project ini ke GitHub (branch utama).
2. Login ke https://vercel.com.
3. Klik **Add New...** -> **Project**.
4. Pilih repository portfolio ini.
5. Vercel otomatis mendeteksi **Next.js**.
6. Biarkan setting default:
   - Framework Preset: Next.js
   - Build Command: `next build`
   - Output: otomatis
7. Klik **Deploy**.
8. Tunggu proses build selesai, lalu buka URL production dari Vercel.

## Redeploy Setelah Update
Setiap kali kamu push commit baru ke branch yang terhubung, Vercel akan auto-deploy versi terbaru.

## Troubleshooting Cepat
- Kalau `npm start` gagal karena port 3000 dipakai proses lain, gunakan:

```bash
npm run dev -- -p 3001
```

- Kalau perubahan tidak muncul di browser: hard refresh dengan `Ctrl+F5`.
