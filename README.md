# Konversian Stage ⚡📄

Studio Konversi File dan Dokumen Modern oleh **Seroja Labs** dengan antarmuka **One-Page Fixed Viewport (tanpa scroll)** pada halaman utama, efek **Cursor Backlight**, sistem navigasi 3 tingkat (*Home → Category Overview → Dedicated Workspace*), serta dukungan tema **Light & Dark**.

Semua pemrosesan yang didukung berjalan **100% Client-Side** langsung di peramban tanpa mengunggah berkas ke server luar demi privasi data mutlak.
Home|Right Click
|--|--|
![img](https://raw.githubusercontent.com/darkostepbro/convertertoolkit/refs/heads/main/images/home.png)|![img](https://raw.githubusercontent.com/darkostepbro/convertertoolkit/refs/heads/main/images/right-click.png)

---

## 🌟 Fitur Baru (v2.2)

### 1. 🖱️ Custom Context Menu (Klik Kanan) & Bubble Light Effect
- **Animasi Cahaya Gelembung (*Bubble Light Burst*):** Setiap kali pengguna melakukan klik kanan di mana saja pada layar, muncul animasi gelombang cahaya gelembung transparan yang membesar dan memudar halus dari titik kursor.
- **Menu Pilihan Interaktif:**
  1. 🔄 **Segarkan (*Refresh*)** — Memuat ulang halaman aplikasi.
  2. ℹ️ **Tentang Seroja Labs (*About*)** — Membuka halaman profil Seroja Labs & Konversian Stage.
  3. ── *(Pemisah Garis Estetik)* ──
  4. 💖 **Donasi Sekarang (*Donate Now*)** — Langsung menuju halaman donasi & dukungan.

### 2. 🏛️ Halaman Baru: Tentang Seroja Labs (*About View*)
- Menjelaskan bahwa **Konversian Stage dibangun oleh Seroja Labs** untuk inisiatif utilitas digital terbuka berorientasi privasi bagi Workspace, Komunitas, dan Publik.
- Menyajikan pilar utama:
  - **100% Client-Side Privacy:** Berkas pengguna tidak pernah meninggalkan peramban.
  - **Performa Instan:** Ditenagai Canvas API, WebAssembly, PDF.js, dan PDF-Lib tanpa batasan harian.
  - **Untuk Workspace & Komunitas:** Solusi efisien tanpa paywall atau watermark.
  - **Transparan & Independen:** Bebas dari pelacak agresif dan iklan pengintai.

### 3. ☕ Halaman Baru: Open Donate & Dukungan Komunitas
- **Headline Utama:**
  > *"Dukung kami terus untuk perkembangan yang lebih baik dan kami akan selalu menjaga privasi anda, file anda tidak akan tersimpan di server kami."*
- **4 Pilihan Kanal Donasi:**
  1. **PayPal:** Mendukung donasi global via saldo PayPal atau kartu kredit internasional (`paypal.me/serojalabs`).
  2. **Ko-fi:** Traktir secangkir kopi untuk pengembang Seroja Labs (`ko-fi.com/serojalabs`).
  3. **SociaBuzz:** Pembayaran lokal Indonesia via GoPay, OVO, DANA, LinkAja, atau ShopeePay.
  4. **QRIS Nasional:** QR code interaktif berstandar Bank Indonesia dengan selektor nominal instan (*Rp 10.000, Rp 25.000, Rp 50.000, Rp 100.000*) serta tombol salin kode bayar / NMID.

### 4. 🌐 Sistem Multi-Bahasa (6 Bahasa)
Tombol *Language Selector* di bilah header mendukung terjemahan penuh di seluruh halaman:
- 🇮🇩 **Bahasa Indonesia**
- 🇬🇧 **English**
- 🇸🇦 **العربية (Arab)** *(Dilengkapi dukungan layout RTL otomatis)*
- 🇩🇪 **Deutsch (Jerman)**
- 🇷🇺 **Русский (Rusia)**
- 🇨🇳 **中文 (Mandarin / China)**

Pilihan bahasa tersimpan otomatis di `localStorage` peramban.

---

## 🧭 Struktur Menu & Fitur Konversi

### 1. Image Converter Tools
- **A. Compressing Image:**
  - Compress JPG, JPEG, PNG, WEBP, HEIC, BMP *(Slider kualitas % dan lebar maksimal px)*
- **B. Converting Image:**
  - JPG ke PNG / WEBP / BMP
  - JPEG ke PNG / WEBP / BMP
  - PNG ke JPG / WEBP / BMP
  - WEBP ke JPG / PNG
  - BMP ke PNG / JPG
  - HEIC ke JPEG / JPG / PNG

### 2. PDF Converter Tools
- **A. Standard Convert:**
  - Image to PDF *(Multi-file, orientasi otomatis/potret/lanskap, margin, format kertas)*
  - PDF to Image *(Ekstrak lembaran halaman ke PNG/JPG, unduh per halaman atau bulk .ZIP)*
  - Merge PDF *(Urutkan naik/turun dan gabungkan beberapa PDF)*
  - Merge PDF & Image
  - Split PDF *(Pecah dokumen berdasarkan rentang halaman yang fleksibel)*
  - Compress PDF *(Optimasi ukuran berkas)*
- **B. Document to PDF:**
  - Text to PDF *(Editor teks langsung diubah ke PDF rapi)*
  - DOCX to PDF, PPT to PDF, Excel to PDF
- **C. PDF to Document:**
  - PDF to Text *(Ekstraksi teks langsung dengan tombol Salin & Unduh .txt)*
  - PDF to DOCX, PDF to PPT, PDF to Excel
- **D. Security Document:**
  - Lock PDF *(Proteksi watermark visual "CONFIDENTIAL" atau kustom)*
  - Unlock PDF

---

## 🚀 Cara Menjalankan
Buka file [`index.html`](file:///C:/Users/DARKO/.gemini/antigravity/scratch/docshift-converter/index.html) menggunakan **Brave Browser** atau klik ganda [`start.bat`](file:///C:/Users/DARKO/.gemini/antigravity/scratch/docshift-converter/start.bat).
