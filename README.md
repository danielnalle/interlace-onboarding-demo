# Interlace Onboarding Demo — Wall of Interns

Repo ini dipakai untuk mempraktikkan langsung materi onboarding: **alur kerja
GitHub (branch, commit, push, Pull Request, review, merge), CI lint otomatis,
dan container/Docker.**

Tugasnya sederhana: tambahkan data dirimu ke "Wall of Interns" lewat Pull
Request, lalu lihat bagaimana pemeriksaan lint berjalan otomatis di PR-mu.

---

## 1. Yang perlu disiapkan

- Akun GitHub
- [Git](https://git-scm.com/downloads) terpasang di komputer
- [Node.js](https://nodejs.org/) versi 20 ke atas (opsional, hanya kalau ingin
  menjalankan aplikasinya secara lokal tanpa Docker)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (opsional,
  hanya kalau ingin mencoba menjalankan lewat container)

---

## 2. Langkah mengikuti sesi

### a. Fork repo ini

Klik tombol **Fork** di pojok kanan atas halaman repo ini di GitHub. Ini akan
membuat salinan repo di akun GitHub kamu sendiri.

### b. Clone hasil fork ke komputer

```bash
git clone https://github.com/<username-kamu>/interlace-onboarding-demo.git
cd interlace-onboarding-demo
```

### c. Buat branch baru

```bash
git checkout -b tambah-data-<nama-kamu>
```

### d. Tambahkan data dirimu

Buka `src/interns.js`, lalu tambahkan satu baris baru mengikuti format yang
sudah ada di dalam array `interns`:

```js
{ name: "Nama Kamu", role: "Fullstack Developer", funFact: "Suka kopi tanpa gula" },
```

Perhatikan gaya penulisan yang sudah ada (tanda kutip ganda, titik koma,
indentasi) — ini akan diperiksa otomatis oleh CI lint.

### e. Commit & push

```bash
git add src/interns.js
git commit -m "Tambah data <nama kamu> ke Wall of Interns"
git push origin tambah-data-<nama-kamu>
```

### f. Buka Pull Request

Buka repo hasil fork kamu di GitHub, klik **Compare & pull request**, arahkan
ke branch `main` di repo **asli** (bukan repo fork kamu), lalu buat PR-nya.

Setelah PR dibuka, GitHub Actions akan otomatis menjalankan pemeriksaan lint.
Tunggu beberapa detik dan lihat hasilnya langsung di halaman PR.

### g. Kalau lint gagal

Baca pesan error yang muncul di tab **Checks** pada PR-mu, perbaiki di
komputer, lalu:

```bash
git add src/interns.js
git commit -m "Perbaiki lint"
git push
```

PR akan otomatis diperiksa ulang setiap kali ada commit baru — tidak perlu
membuka PR baru.

---

## 3. Menjalankan aplikasi secara lokal

```bash
npm install
npm start
```

Buka `http://localhost:3000` di browser.

Untuk memeriksa lint secara manual sebelum push:

```bash
npm run lint
```

---

## 4. Menjalankan lewat Docker

Sebagai gambaran konsep container yang dibahas di materi — aplikasi ini juga
bisa dijalankan tanpa perlu install Node.js sama sekali, karena semua yang
dibutuhkan sudah dikemas di dalam image Docker-nya:

```bash
docker compose up --build
```

Buka `http://localhost:3000` di browser. Tekan `Ctrl+C` untuk menghentikan.

Catatan: demo ini disederhanakan jadi satu container saja. Di aplikasi nyata,
biasanya ada beberapa container yang berjalan bersamaan (aplikasi, database,
cache, dan seterusnya) — persis seperti yang dibahas di materi presentasi.

---

## 5. Istilah yang dipraktikkan di sini

| Istilah            | Dipraktikkan di langkah                                       |
| ------------------ | ------------------------------------------------------------- |
| Clone              | 2b                                                            |
| Branch             | 2c                                                            |
| Commit             | 2e                                                            |
| Push               | 2e                                                            |
| Pull Request       | 2f                                                            |
| Review             | Dilakukan oleh reviewer di GitHub setelah PR dibuka           |
| Merge              | Dilakukan setelah PR disetujui dan lint lolos                 |
| CI / Lint          | Berjalan otomatis setiap PR dibuka dan setiap ada commit baru |
| Container / Docker | Bagian 4 di atas                                              |

---

## 6. Pertanyaan umum

**Lint gagal terus, padahal menurutku sudah benar?**
Baca detail error-nya di tab Checks pada PR — biasanya menyebutkan baris dan
alasan yang spesifik (misalnya tanda kutip salah, atau lupa titik koma).

**PR menunjukkan conflict?**
Ini bisa terjadi kalau ada perubahan lain yang sudah lebih dulu digabungkan
ke `main`. Ini hal yang wajar terjadi — tanyakan ke fasilitator atau lihat
kembali materi soal merge conflict.

**Boleh menjalankan lewat Docker maupun langsung dengan Node.js?**
Boleh salah satu saja, hasilnya sama — ini justru bagian dari poin yang mau
didemonstrasikan: environment yang konsisten di mana pun dijalankan.
