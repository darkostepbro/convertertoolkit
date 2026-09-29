# Converter Toolkit (Konversian Stage) ⚡📄

Studio Konversi Berkas & Dokumen Modern, Cepat, dan **100% Client-Side** yang dikembangkan oleh **Seroja Labs**. Berjalan langsung di peramban pengguna (browser) tanpa mengirim dokumen ke server pihak ketiga, menjamin kerahasiaan data dan privasi penuh.

Dilengkapi antarmuka desktop modern (*One-Page Stage & Cursor Backlight*) serta **Versi Mobile Khusus (`/mobile`)** yang responsif dengan navigasi native browser back/forward dan tombol refresh terdedikasi.

Home|Right Click|M-Home|M-Image|M-Donate
|--|--|--|--|--|
![img](https://raw.githubusercontent.com/darkostepbro/convertertoolkit/refs/heads/main/images/home.png)|![img](https://raw.githubusercontent.com/darkostepbro/convertertoolkit/refs/heads/main/images/right-click.png)|![img](https://raw.githubusercontent.com/darkostepbro/convertertoolkit/refs/heads/main/images/mob-home.png)|![img](https://raw.githubusercontent.com/darkostepbro/convertertoolkit/refs/heads/main/images/mob-image.png)|![img](https://raw.githubusercontent.com/darkostepbro/convertertoolkit/refs/heads/main/images/mob-donate.png)

---

## 🌟 Fitur Utama

- 🔒 **100% Client-Side Privacy:** Seluruh proses konversi dokumen, gambar, dan enkripsi PDF diproses menggunakan memori peramban (Canvas API, WebAssembly, SheetJS, docx-preview, PDF-Lib). Berkas tidak pernah diunggah ke cloud.
- 📱 **Mobile Native Experience (`/mobile`):**
  - Deteksi otomatis perangkat ponsel & tablet dengan pengalihan cerdas ke antarmuka mobile.
  - Struktur rute terpisah per folder (`/mobile/image`, `/mobile/pdf`, `/mobile/tool`, `/mobile/about`, `/mobile/donate`) sehingga tombol **Back fisik/gesture HP** berfungsi secara alami.
  - Floating & Top Action Bar dengan tombol **Refresh** dan **Back** di setiap halaman.
- 📊 **Excel Multi-Sheet Selector:** Konversi spreadsheet Excel (.xlsx, .xls) ke PDF dengan pratinjau lembar kerja (*sheet*) dan selektor dinamis untuk memilih sheet yang ingin dikonversi.
- 📄 **Office to PDF Engine:** Konversi DOCX, PPTX, dan Excel ke PDF langsung di browser.
- 💖 **Donasi Sederhana & Transparan:** Pilihan dukungan langsung via **QRIS Nasional** dan **PayPal**.
- 🌐 **Dukungan Multi-Bahasa:** Bahasa Indonesia, English, العربية, Deutsch, Русский, 中文.
- 🌗 **Dark & Light Mode:** Transisi tema yang mulus dan nyaman untuk mata.

---

## 🧭 Daftar Fitur & Tools

### 1. 🖼️ Image Converter Tools
- **A. Compressing Image:**
  - Kompresi fleksibel untuk format JPG, JPEG, PNG, WEBP, HEIC, BMP dengan slider kualitas dan batas resolusi.
- **B. Converting Image:**
  - JPG ➔ PNG / WEBP / BMP
  - JPEG ➔ PNG / WEBP / BMP
  - PNG ➔ JPG / WEBP / BMP
  - WEBP ➔ JPG / PNG
  - BMP ➔ PNG / JPG
  - HEIC ➔ JPEG / JPG / PNG

### 2. 📑 PDF Converter Tools
- **A. Standard PDF:**
  - **Image to PDF:** Konversi multi-gambar ke satu PDF dengan pengaturan margin & orientasi.
  - **Merge PDF:** Menggabungkan banyak file PDF menjadi satu dokumen berurutan.
  - **Merge PDF & Image:** Menggabungkan lembaran PDF dan gambar ke dalam satu berkas PDF terpadu.
  - **Split PDF:** Memecah dokumen PDF berdasarkan rentang halaman yang dipilih.
  - **Compress PDF:** Mengurangi bobot file PDF tanpa mengorbankan keterbacaan teks.
- **B. Document to PDF:**
  - **Text to PDF:** Editor teks langsung diubah ke PDF rapi.
  - **DOCX to PDF:** Konversi dokumen Word (.docx) ke PDF.
  - **PPT to PDF:** Konversi presentasi PowerPoint (.pptx) ke PDF.
  - **Excel to PDF:** Konversi spreadsheet (.xlsx, .xls) ke PDF dengan selektor multi-sheet interaktif.
- **C. Security Document:**
  - **Lock PDF:** Menambahkan proteksi sandi dan watermark dokumen.
  - **Unlock PDF:** Membuka enkripsi PDF.

---

## 📂 Struktur Repositori

```text
convertertoolkit/
├── index.html            # Halaman utama desktop + auto-redirect mobile
├── app.js                # Engine converter desktop
├── styles.css            # Styling desktop & responsive
├── qris.jpg              # Barcode QRIS resmi
├── paper.ico             # Favicon
├── vercel.json           # Konfigurasi routing static Vercel
├── README.md             # Dokumentasi proyek
└── mobile/               # Antarmuka web khusus mobile
    ├── index.html        # Beranda mobile
    ├── mobile.css        # Styling UI mobile & bottom navigation
    ├── mobile.js         # Navigasi, toast, dan tema mobile
    ├── mobile-tools.js   # Engine converter khusus mobile
    ├── image/index.html  # Halaman tools gambar mobile
    ├── pdf/index.html    # Halaman tools PDF mobile
    ├── tool/index.html   # Workspace converter mobile
    ├── about/index.html  # Profil Seroja Labs minimalis
    └── donate/index.html # Halaman donasi QRIS + PayPal
```

---

## 🚀 Panduan Deployment

### Deploy ke Vercel (Rekomendasi)
1. Fork atau clone repositori ini ke akun GitHub Anda.
2. Buka [Vercel Dashboard](https://vercel.com/) dan pilih **Add New... ➔ Project**.
3. Import repositori `convertertoolkit`.
4. Pada bagian **Framework Preset**, pilih **Other** (karena murni Static HTML/JS/CSS).
5. Klik **Deploy**. Website akan langsung aktif dalam hitungan detik.

### Menjalankan Secara Lokal
Cukup buka file `index.html` menggunakan peramban modern (Chrome, Edge, Brave, Firefox) atau gunakan ekstensi Live Server di VS Code.

---

## ☕ Donasi & Kontribusi

Jika aplikasi ini bermanfaat untuk produktivitas Anda, dukung pengembangannya melalui:
- **QRIS:** Pindai barcode QRIS di menu Donasi aplikasi.
- **PayPal:** [paypal.me/serojalabs](https://paypal.me/serojalabs)

---

**© 2026 Seroja Labs.** Berorientasi pada privasi dan utilitas digital terbuka.
