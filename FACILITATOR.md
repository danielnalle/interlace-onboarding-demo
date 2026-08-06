# Catatan untuk Fasilitator

Checklist persiapan sebelum sesi berlangsung, dan beberapa tips menjalankan
simulasi ini secara live di depan peserta.

## Sebelum sesi

1. **Push repo ini ke akun/organisasi GitHub yang dipakai untuk sesi.**
   Lihat bagian bawah dokumen ini untuk perintahnya.

2. **Aktifkan branch protection pada `main`** agar lint benar-benar wajib
   lolos sebelum merge (Settings → Branches → Add branch protection rule):
   - Branch name pattern: `main`
   - Centang **Require status checks to pass before merging**
   - Pilih status check `lint` (baru muncul di daftar setelah workflow ini
     berjalan minimal satu kali)

3. **Update URL di README.md** — ganti placeholder
   `<username-kamu>/interlace-onboarding-demo` sesuai lokasi repo yang
   sebenarnya, supaya instruksi fork/clone langsung akurat.

4. Uji coba sendiri dulu: fork, clone, bikin PR percobaan, pastikan CI lint
   benar-benar jalan dan muncul di halaman PR.

## Saat sesi berlangsung

- Untuk peserta dalam jumlah besar, tidak semua PR perlu benar-benar
  di-merge satu per satu secara live — cukup tunjukkan beberapa PR sebagai
  contoh (satu yang lolos lint, satu yang sengaja dibuat gagal untuk
  demonstrasi), sisanya bisa direview/merge setelah sesi selesai.
- Kalau ingin mendemokan lint yang gagal secara langsung: minta salah satu
  peserta (atau lakukan sendiri di layar) sengaja memakai tanda kutip
  tunggal alih-alih ganda, atau menghapus titik koma, lalu push ulang.
- Kalau banyak peserta mengedit `src/interns.js` di baris yang berdekatan,
  sebagian PR kemungkinan akan menampilkan conflict setelah PR lain
  di-merge lebih dulu — ini justru momen bagus untuk menjelaskan konsep
  merge conflict secara langsung dari kejadian nyata, bukan cuma teori.

## Push repo ini ke GitHub

Dari folder hasil ekstrak repo ini:

```bash
cd interlace-onboarding-demo
git init
git add -A
git commit -m "Initial commit: repo simulasi GitHub workflow, CI lint, dan Docker"
git branch -M main
git remote add origin https://github.com/<akun-atau-org>/interlace-onboarding-demo.git
git push -u origin main
```

Ganti `<akun-atau-org>` dengan akun atau organisasi GitHub yang dipakai.
