/**
 * Konversian Stage — Application Logic v2.2
 * built by Seroja Labs
 * ==========================================
 * Features:
 * - 3-level navigation: Home → Category → Workspace
 * - Custom right-click menu with bubble light animation
 * - Dedicated About Seroja Labs View & Open Donate View (PayPal, Ko-fi, SociaBuzz, QRIS)
 * - Complete 6-Language Switcher (ID, EN, AR, DE, RU, ZH) with RTL support
 * - 100% Client-side conversion engines (jsPDF, PDF-Lib, pdf.js, JSZip)
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

  // Setup pdf.js worker
  if (window.pdfjsLib) {
    window.pdfjsLib.GlobalWorkerOptions.workerSrc =
      'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
  }

  // ===========================================================================
  // 1. COMPREHENSIVE TRANSLATION DICTIONARIES (ID, EN, AR, DE, RU, ZH)
  // ===========================================================================
  const TRANSLATIONS = {
    id: {
      logo_sub: 'File Conversion',
      privacy_badge: '100% Client-Side',
      hero_title_prefix: 'Konversi File Workspace',
      hero_title_accent: 'Workspace',
      hero_sub: 'Pilih kategori alat di bawah ini. Semua operasi berjalan langsung di perangkat Anda — tanpa upload, tanpa watermark, tanpa batas.',
      img_card_badge: '2 Kategori · 14 Alat',
      img_card_title: 'Image Converter',
      tools_word: 'Tools',
      img_card_overview: 'Kompres ukuran foto tanpa kehilangan kualitas berarti, atau konversikan antar format gambar populer — semua dikerjakan langsung di browser menggunakan teknologi Canvas API.',
      sec_img_compress: 'A. Compressing Image',
      sec_img_convert: 'B. Converting Image',
      chip_6_format: '6 format',
      img_card_cta: 'Jelajahi Tools Gambar',
      pdf_card_badge: '4 Kategori · 20 Alat',
      pdf_card_title: 'PDF Converter',
      pdf_card_overview: 'Kelola dokumen PDF secara menyeluruh — dari konversi standar, gabung, pisah, kompres, hingga proteksi dokumen. Termasuk konversi ke/dari format dokumen populer seperti DOCX, PPT, dan Excel.',
      sec_pdf_standard: 'A. Standard Convert',
      sec_doc2pdf: 'B. Document to PDF',
      sec_pdf2doc: 'C. PDF to Document',
      sec_security: 'D. Security Document',
      chip_6_tools: '6 alat',
      chip_4_tools: '4 alat',
      chip_2_tools: '2 alat',
      pdf_card_cta: 'Jelajahi Tools PDF',
      footer_privacy: 'Privasi terjaga — File anda tidak akan tersimpan diserver kami.',
      footer_built_for: 'Built for Workspace, Community and General.',
      footer_donate: 'Open Donate',
      esc_hint: 'kembali ke menu utama',
      btn_home: 'Beranda',
      btn_tools: 'Alat',
      badge_ready: 'Siap',
      badge_soon: 'Segera',
      cs_title: 'Segera Hadir',
      cs_desc: 'Fitur ini sedang dalam pengembangan aktif dan akan segera tersedia di platform ini.',
      cs_tag_server: 'Server-Side Processing',
      cs_tag_dev: 'Dalam Pengembangan',
      btn_back_home: '← Kembali ke Menu Utama',
      dz_drag_drop_img: 'Tarik & Lepaskan Gambar di Sini',
      dz_hint_compress: 'Pilih gambar untuk dikompres',
      dz_hint_convert: 'Pilih gambar sumber yang ingin dikonversi',
      dz_hint_multi_img: 'PNG, JPG, JPEG, WEBP — bisa banyak sekaligus',
      dz_choose_pdf: 'Pilih Dokumen PDF',
      dz_hint_single_pdf: 'Satu file PDF untuk diekstrak halamannya',
      dz_choose_multi_pdf: 'Pilih Beberapa Dokumen PDF',
      dz_hint_min_2: 'Minimal 2 file untuk digabungkan menjadi satu',
      dz_split_title: 'Pilih PDF yang Ingin Dipecah',
      dz_split_hint: 'Tentukan rentang halaman setelah file dipilih',
      dz_compress_pdf_title: 'Pilih PDF untuk Dikompres',
      dz_compress_pdf_hint: 'File PDF yang ingin diperkecil ukurannya',
      dz_hint_extract_text: 'Teks akan diekstrak dari semua halaman PDF',
      dz_lock_title: 'Pilih PDF yang Ingin Diproteksi',
      dz_lock_hint: 'File akan dilindungi dengan tanda proteksi watermark halaman',
      btn_choose_device: 'Pilih File dari Perangkat',
      btn_choose_images: 'Pilih File Gambar',
      btn_choose_pdf: 'Pilih Dokumen PDF',
      btn_clear_all: 'Hapus Semua',
      btn_change_file: 'Ganti File',
      btn_copy: 'Salin',
      btn_download_zip: 'Unduh Semua (.ZIP)',
      btn_create_pdf: 'Buat Dokumen PDF',
      btn_merge_docs: 'Gabungkan Dokumen',
      btn_split_docs: 'Pecah Dokumen PDF',
      btn_compress_pdf: 'Kompres PDF',
      btn_compress_all: 'Kompres Semua Gambar',
      btn_convert_all: 'Konversi Semua',
      btn_create_text_pdf: 'Buat PDF dari Teks',
      btn_extract_text: 'Ekstrak Teks dari PDF',
      btn_download_txt: 'Unduh .txt',
      btn_add_watermark: 'Tambahkan Watermark',
      btn_add_range: '+ Tambah Rentang',
      settings_compression: 'Pengaturan Kompresi',
      settings_convert_format: 'Format Konversi',
      settings_doc: 'Pengaturan Dokumen',
      settings_format_res: 'Format & Resolusi',
      settings_merge_info: 'Info Penggabungan',
      settings_split: 'Pengaturan Split',
      settings_compress_pdf: 'Pengaturan Kompresi PDF',
      settings_pdf_format: 'Format PDF',
      settings_text_extract: 'Ekstraksi Teks',
      settings_protection: 'Pengaturan Proteksi',
      label_compress_queue: 'Antrian Kompresi',
      label_convert_queue: 'Antrian Konversi',
      label_img_list: 'Daftar Gambar',
      label_page_preview: 'Pratinjau Halaman',
      label_doc_order: 'Urutan Dokumen',
      label_split_ranges: 'Rentang Halaman yang Dipecah',
      label_extracted_text: 'Teks Terekstrak',
      label_output_quality: 'Kualitas Output',
      quality_small: 'Kecil',
      quality_balanced: 'Seimbang',
      quality_high: 'Tinggi',
      label_max_width: 'Lebar Maksimal (px)',
      opt_keep_original: 'Pertahankan Ukuran Asli',
      label_detected_src: 'Format Sumber (Terdeteksi)',
      label_convert_to: 'Konversi Ke Format',
      label_jpg_quality: 'Kualitas JPG/JPEG',
      label_page_size: 'Ukuran Halaman',
      opt_fit_image: 'Pas Ukuran Gambar',
      label_orientation: 'Orientasi',
      opt_auto: 'Otomatis',
      opt_portrait: 'Potret',
      opt_landscape: 'Lanskap',
      label_margin: 'Margin',
      opt_no_margin: 'Tanpa Margin',
      opt_small_margin: 'Kecil (10mm)',
      opt_std_margin: 'Standar (20mm)',
      label_filename: 'Nama File',
      label_output_filename: 'Nama File Output',
      label_output_format: 'Format Output',
      label_render_scale: 'Resolusi Render',
      label_total_files: 'Total Berkas:',
      label_total_pages: 'Total Halaman:',
      label_file: 'File:',
      label_basename: 'Nama Dasar File',
      label_font_size: 'Ukuran Font',
      label_watermark_text: 'Teks Watermark',
      label_ready_protect: 'Siap diproteksi',
      label_compress_result: 'Hasil Kompresi:',
      title_text_editor: 'Teks / Konten Dokumen',
      desc_compress_pdf: 'Kompresi berbasis optimasi metadata dan penghapusan objek tidak terpakai.',
      desc_text_extract: 'Ekstrak teks dari PDF yang mengandung teks digital.',
      desc_lock_notice: 'Catatan: Menambahkan watermark transparan semi-permanen pada setiap lembar halaman sebagai penanda visual dokumen aman.',
      hint_auto_download: 'File terkompresi akan diunduh satu per satu.',
      hint_single_download: 'Atau klik tombol unduh di setiap kartu halaman.',
      hint_split_download: 'Setiap rentang akan diunduh sebagai file PDF terpisah.',
      ph_text_editor: 'Ketikkan atau tempel teks di sini untuk diubah menjadi dokumen PDF...',
      ctx_refresh: 'Segarkan',
      ctx_about: 'Tentang',
      ctx_donate: 'Donasi Sekarang',
      about_title: 'Tentang Seroja Labs',
      about_hero_h1: 'Konversian Stage dibangun oleh',
      about_hero_sub: 'Sebuah platform utilitas file modern yang dirancang untuk mendukung kebutuhan alur kerja harian individu, komunitas open-source, dan lingkungan profesional tanpa kompromi pada privasi data pengguna.',
      pillar_privacy_title: '100% Client-Side Privacy',
      pillar_privacy_desc: 'File Anda tidak pernah dikirim ke server cloud mana pun. Seluruh operasi kompresi, konversi, rendering, dan penggabungan berkas dieksekusi murni di dalam memori browser lokal perangkat Anda.',
      pillar_speed_title: 'Performa Instan Tanpa Batas',
      pillar_speed_desc: 'Didukung Canvas API, WebAssembly, PDF-Lib, dan PDF.js. Tidak ada antrian upload jaringan, tidak ada watermark yang disisipkan, dan tidak ada pembatasan jumlah file harian.',
      pillar_community_title: 'Untuk Workspace & Komunitas',
      pillar_community_desc: 'Seroja Labs menciptakan ekosistem perangkat lunak yang berfokus pada efisiensi kerja tim, kemudahan penggunaan umum, dan dukungan berkelanjutan bagi komunitas kreatif.',
      pillar_open_title: 'Transparan & Independen',
      pillar_open_desc: 'Bebas dari pelacak agresif dan iklan pengintai privasi. Pengembangan proyek ini didorong secara independen dan didukung melalui donasi sukarela komunitas global.',
      btn_support_us: 'Dukung Kami (Donasi)',
      btn_explore_tools: 'Mulai Menggunakan Alat',
      donate_title: 'Open Donate',
      donate_badge: 'Dukungan Komunitas & Riset',
      donate_headline: 'Dukung kami terus untuk perkembangan yang lebih baik dan kami akan selalu menjaga privasi anda, file anda tidak akan tersimpan di server kami.',
      donate_sub: 'Setiap donasi Anda memperkuat keberlangsungan platform ini, mendanai pengembangan fitur-fitur baru, dan memastikan seluruh utilitas tetap dapat diakses bebas tanpa paywall.',
      tag_intl: 'Internasional',
      paypal_desc: 'Dukungan global aman melalui saldo PayPal, Kartu Kredit (Visa, Mastercard), atau Debit internasional.',
      btn_open_paypal: 'Buka PayPal',
      kofi_desc: 'Traktir secangkir kopi untuk pengembang Seroja Labs dengan donasi satu kali atau dukungan bulanan.',
      btn_open_kofi: 'Traktir di Ko-fi',
      sociabuzz_desc: 'Metode termudah untuk pengguna di Indonesia menggunakan GoPay, OVO, DANA, LinkAja, atau ShopeePay.',
      btn_open_sociabuzz: 'Dukung via SociaBuzz',
      qris_desc: 'Pindai langsung dari aplikasi Mobile Banking (BCA, Mandiri, BRI, BNI) atau aplikasi dompet digital apa saja.',
      label_qris_amount: 'Pilih Nominal Donasi:',
      btn_copy_qris: 'Salin Kode Bayar QRIS',
      donate_thankyou_title: 'Terima Kasih Banyak Atas Dukungan Anda!',
      donate_thankyou_desc: 'Kebaikan Anda adalah energi utama bagi tim kami di Seroja Labs untuk terus berinovasi dan menjaga platform ini tetap bebas biaya selamanya.',
      // Lock / Unlock PDF
      dz_lock_pwd_hint: 'Dokumen akan dienkripsi dengan kata sandi (Password Protect)',
      desc_lock_real_enc: 'Keamanan Terjamin: PDF dienkripsi menggunakan standar industri (AES-256 / RC4). Siapa pun yang membuka berkas ini wajib memasukkan kata sandi yang Anda tentukan.',
      label_user_password: 'Kata Sandi Buka File (Wajib)',
      label_confirm_password: 'Konfirmasi Kata Sandi',
      label_owner_password: 'Kata Sandi Izin / Pemilik (Opsional)',
      label_encryption_algo: 'Standar Enkripsi',
      btn_lock_pdf: 'Kunci & Lindungi PDF',
      dz_unlock_title: 'Pilih PDF Terkunci untuk Dibuka',
      dz_unlock_hint: 'Masukkan kata sandi saat ini untuk menghapus proteksi secara permanen',
      settings_unlock: 'Buka Proteksi PDF',
      label_current_password: 'Kata Sandi Dokumen Saat Ini',
      desc_unlock_notice: 'Setelah kata sandi yang valid dimasukkan, salinan PDF baru yang tidak terkunci akan dibuat dan langsung dapat diunduh.',
      btn_unlock_pdf: 'Buka Kunci Dokumen',
      // Stirling-PDF
      dz_stirling_o2p_title: 'Pilih Dokumen Office (DOCX / PPT / Excel)',
      settings_stirling_o2p: 'Konfigurasi Stirling-PDF',
      btn_convert_to_pdf: 'Konversi ke PDF',
      desc_stirling_api_info: 'Didukung oleh arsitektur open-source Stirling-Tools/Stirling-PDF via REST API. Mendukung LibreOffice headless engine untuk hasil tata letak dokumen yang presisi.',
      dz_stirling_p2o_title: 'Pilih Dokumen PDF untuk Dikonversi',
      settings_stirling_p2o: 'Format Target Dokumen',
      label_target_office: 'Konversi Ke',
      btn_convert_to_office: 'Konversi ke Dokumen',
      desc_stirling_p2o_info: 'Mengonversi struktur berkas PDF menjadi dokumen Office yang sepenuhnya dapat disunting teks, tabel, dan gambarnya.',
    },
    en: {
      logo_sub: 'File Conversion',
      privacy_badge: '100% Client-Side',
      hero_title_prefix: 'Workspace File Conversion',
      hero_title_accent: 'Conversion',
      hero_sub: 'Choose a tool category below. All operations execute directly on your device — no uploads, no watermarks, unlimited.',
      img_card_badge: '2 Categories · 14 Tools',
      img_card_title: 'Image Converter',
      tools_word: 'Tools',
      img_card_overview: 'Compress photo sizes without losing noticeable quality, or convert between popular image formats — all directly in your browser using Canvas API.',
      sec_img_compress: 'A. Compressing Image',
      sec_img_convert: 'B. Converting Image',
      chip_6_format: '6 formats',
      img_card_cta: 'Explore Image Tools',
      pdf_card_badge: '4 Categories · 20 Tools',
      pdf_card_title: 'PDF Converter',
      pdf_card_overview: 'Manage PDF documents comprehensively — standard convert, merge, split, compress, and document protection. Includes DOCX, PPT, and Excel support.',
      sec_pdf_standard: 'A. Standard Convert',
      sec_doc2pdf: 'B. Document to PDF',
      sec_pdf2doc: 'C. PDF to Document',
      sec_security: 'D. Security Document',
      chip_6_tools: '6 tools',
      chip_4_tools: '4 tools',
      chip_2_tools: '2 tools',
      pdf_card_cta: 'Explore PDF Tools',
      footer_privacy: 'Privacy guaranteed — we never collect any data of your files.',
      footer_built_for: 'Built for Workspace, Community and General.',
      footer_donate: 'Open Donate',
      esc_hint: 'press ESC to return home',
      btn_home: 'Home',
      btn_tools: 'Tools',
      badge_ready: 'Ready',
      badge_soon: 'Soon',
      cs_title: 'Coming Soon',
      cs_desc: 'This feature is under active development and will be available soon on this platform.',
      cs_tag_server: 'Server-Side Processing',
      cs_tag_dev: 'In Development',
      btn_back_home: '← Back to Main Menu',
      dz_drag_drop_img: 'Drag & Drop Images Here',
      dz_hint_compress: 'Select images to compress',
      dz_hint_convert: 'Select source images to convert',
      dz_hint_multi_img: 'PNG, JPG, JPEG, WEBP — multiple files supported',
      dz_choose_pdf: 'Select PDF Document',
      dz_hint_single_pdf: 'One PDF file to extract pages from',
      dz_choose_multi_pdf: 'Select Multiple PDF Documents',
      dz_hint_min_2: 'At least 2 files to merge into one',
      dz_split_title: 'Select PDF to Split',
      dz_split_hint: 'Specify page ranges after choosing the file',
      dz_compress_pdf_title: 'Select PDF to Compress',
      dz_compress_pdf_hint: 'PDF file you want to optimize size for',
      dz_hint_extract_text: 'Text will be extracted from all PDF pages',
      dz_lock_title: 'Select PDF to Protect',
      dz_lock_hint: 'File will be secured with visual page watermarks',
      btn_choose_device: 'Choose File from Device',
      btn_choose_images: 'Choose Image Files',
      btn_choose_pdf: 'Choose PDF Document',
      btn_clear_all: 'Clear All',
      btn_change_file: 'Change File',
      btn_copy: 'Copy',
      btn_download_zip: 'Download All (.ZIP)',
      btn_create_pdf: 'Create PDF Document',
      btn_merge_docs: 'Merge Documents',
      btn_split_docs: 'Split PDF Document',
      btn_compress_pdf: 'Compress PDF',
      btn_compress_all: 'Compress All Images',
      btn_convert_all: 'Convert All',
      btn_create_text_pdf: 'Create PDF from Text',
      btn_extract_text: 'Extract Text from PDF',
      btn_download_txt: 'Download .txt',
      btn_add_watermark: 'Apply Watermark',
      btn_add_range: '+ Add Range',
      settings_compression: 'Compression Settings',
      settings_convert_format: 'Conversion Format',
      settings_doc: 'Document Settings',
      settings_format_res: 'Format & Resolution',
      settings_merge_info: 'Merge Info',
      settings_split: 'Split Settings',
      settings_compress_pdf: 'PDF Compress Settings',
      settings_pdf_format: 'PDF Format',
      settings_text_extract: 'Text Extraction',
      settings_protection: 'Protection Settings',
      label_compress_queue: 'Compression Queue',
      label_convert_queue: 'Conversion Queue',
      label_img_list: 'Image List',
      label_page_preview: 'Page Previews',
      label_doc_order: 'Document Order',
      label_split_ranges: 'Split Page Ranges',
      label_extracted_text: 'Extracted Text',
      label_output_quality: 'Output Quality',
      quality_small: 'Small',
      quality_balanced: 'Balanced',
      quality_high: 'High',
      label_max_width: 'Max Width (px)',
      opt_keep_original: 'Keep Original Dimensions',
      label_detected_src: 'Detected Source Format',
      label_convert_to: 'Convert To Format',
      label_jpg_quality: 'JPG/JPEG Quality',
      label_page_size: 'Page Size',
      opt_fit_image: 'Fit to Image Size',
      label_orientation: 'Orientation',
      opt_auto: 'Auto',
      opt_portrait: 'Portrait',
      opt_landscape: 'Landscape',
      label_margin: 'Margin',
      opt_no_margin: 'No Margin',
      opt_small_margin: 'Small (10mm)',
      opt_std_margin: 'Standard (20mm)',
      label_filename: 'Filename',
      label_output_filename: 'Output Filename',
      label_output_format: 'Output Format',
      label_render_scale: 'Render Resolution',
      label_total_files: 'Total Files:',
      label_total_pages: 'Total Pages:',
      label_file: 'File:',
      label_basename: 'Base Filename',
      label_font_size: 'Font Size',
      label_watermark_text: 'Watermark Text',
      label_ready_protect: 'Ready to protect',
      label_compress_result: 'Compression Result:',
      title_text_editor: 'Text / Document Content',
      desc_compress_pdf: 'Compression based on metadata optimization and unused object stripping.',
      desc_text_extract: 'Extract text from digital PDF documents.',
      desc_lock_notice: 'Note: Adds semi-permanent transparent watermarks to every page as a secure document visual marker.',
      hint_auto_download: 'Compressed files will download individually.',
      hint_single_download: 'Or click the download button on each preview card.',
      hint_split_download: 'Each range will download as a separate PDF file.',
      ph_text_editor: 'Type or paste text here to convert into a clean PDF document...',
      ctx_refresh: 'Refresh',
      ctx_about: 'About',
      ctx_donate: 'Donate Now',
      about_title: 'About us',
      about_hero_h1: 'Konversian Stage is built by',
      about_hero_sub: 'A modern file utility studio engineered to empower daily workflows for individuals, open-source communities, and enterprise teams without compromising data privacy.',
      pillar_privacy_title: '100% Client-Side Privacy',
      pillar_privacy_desc: 'Your files are never transmitted to any cloud servers. All compression, conversion, rendering, and merging operations occur strictly within your local browser memory.',
      pillar_speed_title: 'Instant Unlimited Performance',
      pillar_speed_desc: 'Powered by HTML5 Canvas, WebAssembly, PDF-Lib, and PDF.js. No upload queues, no injected watermarks, and no arbitrary daily quotas.',
      pillar_community_title: 'Built for Workspaces & Communities',
      pillar_community_desc: 'Seroja Labs crafts software ecosystems emphasizing team efficiency, accessible UX, and sustained open-source development.',
      pillar_open_title: 'Transparent & Independent',
      pillar_open_desc: 'Free from telemetry trackers and invasive ads. Development is independently sustained through voluntary community patronage.',
      btn_support_us: 'Support Us (Donate)',
      btn_explore_tools: 'Start Using Tools',
      donate_title: 'Open Donate',
      donate_badge: 'Community & Research Support',
      donate_headline: 'Keep supporting us for better progress and we will always safeguard your privacy; your files will never be stored on our servers.',
      donate_sub: 'Every contribution powers development, funds new features, and ensures all tools remain 100% free and paywall-free forever.',
      tag_intl: 'International',
      paypal_desc: 'Secure global support via PayPal balance, Credit Card (Visa, Mastercard), or international Debit.',
      btn_open_paypal: 'Open PayPal',
      kofi_desc: 'Buy Seroja Labs developers a coffee with a one-time gift or monthly membership.',
      btn_open_kofi: 'Tip on Ko-fi',
      sociabuzz_desc: 'Easiest checkout for Indonesian supporters using GoPay, OVO, DANA, LinkAja, or ShopeePay.',
      btn_open_sociabuzz: 'Support via SociaBuzz',
      qris_desc: 'Scan instantly from any Mobile Banking application or digital wallet.',
      label_qris_amount: 'Select Donation Amount:',
      btn_copy_qris: 'Copy QRIS Payment Code',
      donate_thankyou_title: 'Thank You So Much For Your Support!',
      donate_thankyou_desc: 'Your generosity fuels our mission at Seroja Labs to keep innovating while keeping this platform free forever.',
      dz_lock_pwd_hint: 'Document will be encrypted with a password (Password Protect)',
      desc_lock_real_enc: 'Security Guaranteed: PDF is encrypted using industry standards (AES-256 / RC4). Anyone opening this file must enter the password you set.',
      label_user_password: 'File Open Password (Required)',
      label_confirm_password: 'Confirm Password',
      label_owner_password: 'Owner / Permission Password (Optional)',
      label_encryption_algo: 'Encryption Standard',
      btn_lock_pdf: 'Lock & Protect PDF',
      dz_unlock_title: 'Select Locked PDF to Unlock',
      dz_unlock_hint: 'Enter the current password to permanently remove protection',
      settings_unlock: 'Unlock PDF Protection',
      label_current_password: 'Current Document Password',
      desc_unlock_notice: 'After entering a valid password, a new unlocked PDF copy will be created and ready to download.',
      btn_unlock_pdf: 'Unlock Document',
      dz_stirling_o2p_title: 'Select Office Document (DOCX / PPT / Excel)',
      settings_stirling_o2p: 'Stirling-PDF Configuration',
      btn_convert_to_pdf: 'Convert to PDF',
      desc_stirling_api_info: 'Powered by the open-source Stirling-Tools/Stirling-PDF architecture via REST API. Supports LibreOffice headless engine for precise document layout results.',
      dz_stirling_p2o_title: 'Select PDF Document to Convert',
      settings_stirling_p2o: 'Target Document Format',
      label_target_office: 'Convert To',
      btn_convert_to_office: 'Convert to Document',
      desc_stirling_p2o_info: 'Converts PDF structure into a fully editable Office document with text, tables, and images intact.',
    },
    ar: {
      logo_sub: 'استوديو تحويل الملفات',
      privacy_badge: 'محلي 100% في المتصفح',
      hero_title_prefix: 'استوديو تحويل الملفات',
      hero_title_accent: 'الأشمل',
      hero_sub: 'اختر فئة الأدوات أدناه. تتم جميع العمليات مباشرة على جهازك دون رفع أي ملفات أو علامات مائية وبلا حدود.',
      img_card_badge: 'فئتان · 14 أداة',
      img_card_title: 'أدوات الصور',
      tools_word: 'Image Converter',
      img_card_overview: 'اضغط أحجام الصور دون فقدان الجودة، أو حوّل بين صيغ الصور الشائعة مباشرة في متصفحك.',
      sec_img_compress: 'أ. ضغط الصور',
      sec_img_convert: 'ب. تحويل صيغ الصور',
      chip_6_format: '6 صيغ',
      img_card_cta: 'استكشف أدوات الصور',
      pdf_card_badge: '4 فئات · 20 أداة',
      pdf_card_title: 'أدوات PDF',
      pdf_card_overview: 'إدارة شاملة لملفات PDF — تحويل، دمج، تقسيم، ضغط، وحماية المستندات بالكامل محلياً.',
      sec_pdf_standard: 'أ. التحويل القياسي',
      sec_doc2pdf: 'ب. تحويل المستندات إلى PDF',
      sec_pdf2doc: 'ج. تحويل PDF إلى مستندات',
      sec_security: 'د. أمان المستندات',
      chip_6_tools: '6 أدوات',
      chip_4_tools: '4 أدوات',
      chip_2_tools: 'أداتان',
      pdf_card_cta: 'استكشف أدوات PDF',
      footer_privacy: 'الخصوصية مضمونة — لا تغادر ملفاتك جهازك أبداً.',
      footer_built_for: 'مبني لمساحات العمل والمجتمع والاستخدام العام.',
      footer_donate: 'التبرع والدعم',
      esc_hint: 'اضغط ESC للعودة للرئيسية',
      btn_home: 'الرئيسية',
      btn_tools: 'الأدوات',
      badge_ready: 'جاهز',
      badge_soon: 'قريباً',
      cs_title: 'قريباً جداً',
      cs_desc: 'هذه الميزة قيد التطوير النشط وستتوفر قريباً على هذه المنصة.',
      cs_tag_server: 'معالجة عبر الخادم',
      cs_tag_dev: 'قيد التطوير',
      btn_back_home: '← العودة للقائمة الرئيسية',
      dz_drag_drop_img: 'اسحب وأفلت الصور هنا',
      dz_hint_compress: 'اختر الصور للضغط',
      dz_hint_convert: 'اختر الصور المراد تحويلها',
      dz_hint_multi_img: 'PNG, JPG, JPEG, WEBP — يدعم ملفات متعددة',
      dz_choose_pdf: 'اختر مستند PDF',
      dz_hint_single_pdf: 'ملف PDF واحد لاستخراج صفحاته',
      dz_choose_multi_pdf: 'اختر عدة ملفات PDF',
      dz_hint_min_2: 'ملفان على الأقل للدمج',
      dz_split_title: 'اختر PDF لتقسيمه',
      dz_split_hint: 'حدد نطاقات الصفحات بعد اختيار الملف',
      dz_compress_pdf_title: 'اختر PDF للضغط',
      dz_compress_pdf_hint: 'ملف PDF المراد تصغير حجمه',
      dz_hint_extract_text: 'سيتم استخراج النصوص من جميع الصفحات',
      dz_lock_title: 'اختر PDF لحمايته',
      dz_lock_hint: 'سيتم تأمين الملف بعلامة مائية',
      btn_choose_device: 'اختر ملفاً من جهازك',
      btn_choose_images: 'اختر ملفات الصور',
      btn_choose_pdf: 'اختر مستند PDF',
      btn_clear_all: 'مسح الكل',
      btn_change_file: 'تغيير الملف',
      btn_copy: 'نسخ',
      btn_download_zip: 'تحميل الكل (.ZIP)',
      btn_create_pdf: 'إنشاء مستند PDF',
      btn_merge_docs: 'دمج المستندات',
      btn_split_docs: 'تقسيم ملف PDF',
      btn_compress_pdf: 'ضغط PDF',
      btn_compress_all: 'ضغط جميع الصور',
      btn_convert_all: 'تحويل الكل',
      btn_create_text_pdf: 'إنشاء PDF من النص',
      btn_extract_text: 'استخراج النص من PDF',
      btn_download_txt: 'تحميل .txt',
      btn_add_watermark: 'إضافة علامة مائية',
      btn_add_range: '+ إضافة نطاق',
      settings_compression: 'إعدادات الضغط',
      settings_convert_format: 'صيغة التحويل',
      settings_doc: 'إعدادات المستند',
      settings_format_res: 'الصيغة والدقة',
      settings_merge_info: 'معلومات الدمج',
      settings_split: 'إعدادات التقسيم',
      settings_compress_pdf: 'إعدادات ضغط PDF',
      settings_pdf_format: 'تنسيق PDF',
      settings_text_extract: 'استخراج النص',
      settings_protection: 'إعدادات الحماية',
      label_compress_queue: 'قائمة الضغط',
      label_convert_queue: 'قائمة التحويل',
      label_img_list: 'قائمة الصور',
      label_page_preview: 'معاينة الصفحات',
      label_doc_order: 'ترتيب المستندات',
      label_split_ranges: 'نطاقات التقسيم',
      label_extracted_text: 'النص المستخرج',
      label_output_quality: 'جودة الإخراج',
      quality_small: 'صغير',
      quality_balanced: 'متوازن',
      quality_high: 'عالي',
      label_max_width: 'أقصى عرض (بكسل)',
      opt_keep_original: 'الاحتفاظ بالأبعاد الأصلية',
      label_detected_src: 'الصيغة المصدرية',
      label_convert_to: 'تحويل إلى',
      label_jpg_quality: 'جودة JPG',
      label_page_size: 'حجم الصفحة',
      opt_fit_image: 'ملاءمة أبعاد الصورة',
      label_orientation: 'الاتجاه',
      opt_auto: 'تلقائي',
      opt_portrait: 'عمودي',
      opt_landscape: 'أفقي',
      label_margin: 'الهامش',
      opt_no_margin: 'بدون هوامش',
      opt_small_margin: 'صغير (10مم)',
      opt_std_margin: 'قياسي (20مم)',
      label_filename: 'اسم الملف',
      label_output_filename: 'اسم ملف الإخراج',
      label_output_format: 'صيغة الإخراج',
      label_render_scale: 'دقة العرض',
      label_total_files: 'إجمالي الملفات:',
      label_total_pages: 'إجمالي الصفحات:',
      label_file: 'الملف:',
      label_basename: 'الاسم الأساسي',
      label_font_size: 'حجم الخط',
      label_watermark_text: 'نص العلامة المائية',
      label_ready_protect: 'جاهز للحماية',
      label_compress_result: 'نتيجة الضغط:',
      title_text_editor: 'محتوى النص / المستند',
      desc_compress_pdf: 'ضغط عبر تحسين البيانات الوصفية وإزالة الكائنات غير المستخدمة.',
      desc_text_extract: 'استخراج النصوص الرقمية من ملفات PDF.',
      desc_lock_notice: 'ملاحظة: تضيف علامة مائية شفافة وشبه دائمة على كل صفحة كإجراء أمان مرئي.',
      hint_auto_download: 'سيتم تحميل الملفات المضغوطة تباعاً.',
      hint_single_download: 'أو اضغط زر التحميل على كل بطاقة معاينة.',
      hint_split_download: 'سيتم تنزيل كل جزء كملف PDF مستقل.',
      ph_text_editor: 'اكتب أو الصق النص هنا لتحويله إلى مستند PDF أنيق...',
      ctx_refresh: 'تحديث الصفحة',
      ctx_about: 'عن Seroja Labs',
      ctx_donate: 'تبرع الآن',
      about_title: 'عن Seroja Labs',
      about_hero_h1: 'تم بناء Konversian Stage بواسطة',
      about_hero_sub: 'استوديو أدوات ملفات حديث صُمم لخدمة مساحات العمل والمجتمع والاستخدام الاحترافي بأعلى معايير الخصوصية.',
      pillar_privacy_title: 'خصوصية تامة 100%',
      pillar_privacy_desc: 'لا يتم إرسال ملفاتك إلى أي خادم خارجي. جميع العمليات تجري بالكامل في ذاكرة متصفحك المحلية.',
      pillar_speed_title: 'أداء فوري بلا حدود',
      pillar_speed_desc: 'مدعوم بتقنيات WebAssembly و Canvas API و PDF-Lib. بدون طوابير انتظار، بدون علامات مائية إجبارية.',
      pillar_community_title: 'لمساحات العمل والمجتمع',
      pillar_community_desc: 'يبني مختبر Seroja Labs حلولاً رقمية لرفع كفاءة الأفراد والفرق الإبداعية مع دعم التطوير المفتوح.',
      pillar_open_title: 'مستقل وشفاف',
      pillar_open_desc: 'خالٍ من الإعلانات التتبعية والمتطفلة. التطوير مستمر بفضل التبرعات المجتمعية المستقلة.',
      btn_support_us: 'ادعمنا (تبرع)',
      btn_explore_tools: 'ابدأ باستخدام الأدوات',
      donate_title: 'دعم المنصة',
      donate_badge: 'دعم المجتمع والبحث',
      donate_headline: 'ادعمنا باستمرار لتقديم الأفضل ونعدك بالحفاظ الدائم على خصوصيتك، فلن تُخزن ملفاتك في أي خادم.',
      donate_sub: 'كل تبرع يدعم تطوير ميزات جديدة ويبقي هذه الأدوات مجانية بالكامل ومتاحة للجميع دون اشتراكات خفية.',
      tag_intl: 'دولي',
      paypal_desc: 'دعم عالمي آمن عبر حساب PayPal أو بطاقات الائتمان والخصم الدولية.',
      btn_open_paypal: 'فتح PayPal',
      kofi_desc: 'ادعم مطوري Seroja Labs بفنجان قهوة كهدية لمرة واحدة أو شهرياً.',
      btn_open_kofi: 'دعم عبر Ko-fi',
      sociabuzz_desc: 'طريقة دفع مرنة تدعم مختلف المحافظ الإلكترونية الرقمية.',
      btn_open_sociabuzz: 'دعم عبر SociaBuzz',
      qris_desc: 'امسح الرمز مباشرة من أي تطبيق مصرفي أو محفظة إلكترونية رقمية.',
      label_qris_amount: 'اختر قيمة الدعم:',
      btn_copy_qris: 'نسخ رمز QRIS',
      donate_thankyou_title: 'شكراً جزيلاً لدعمكم الكريم!',
      donate_thankyou_desc: 'كرمكم هو الدافع الأكبر لفريق Seroja Labs لمواصلة الابتكار والحفاظ على المنصة مجانية للأبد.',
      dz_lock_pwd_hint: 'سيتم تشفير المستند بكلمة مرور (حماية بكلمة مرور)',
      label_user_password: 'كلمة مرور الفتح (مطلوبة)',
      label_confirm_password: 'تأكيد كلمة المرور',
      label_owner_password: 'كلمة مرور المالك / الأذونات (اختياري)',
      label_encryption_algo: 'معيار التشفير',
      btn_lock_pdf: 'تأمين وحماية PDF',
      dz_unlock_title: 'اختر ملف PDF المقفل لفتحه',
      dz_unlock_hint: 'أدخل كلمة المرور الحالية لإزالة الحماية نهائياً',
      settings_unlock: 'فتح حماية PDF',
      label_current_password: 'كلمة مرور المستند الحالية',
      btn_unlock_pdf: 'فتح قفل المستند',
      dz_stirling_o2p_title: 'اختر مستند Office (DOCX / PPT / Excel)',
      settings_stirling_o2p: 'إعداد Stirling-PDF',
      btn_convert_to_pdf: 'تحويل إلى PDF',
      dz_stirling_p2o_title: 'اختر مستند PDF للتحويل',
      settings_stirling_p2o: 'تنسيق المستند المستهدف',
      label_target_office: 'تحويل إلى',
      btn_convert_to_office: 'تحويل إلى مستند',
    },
    de: {
      logo_sub: 'File Conversion',
      privacy_badge: '100% Client-Side',
      hero_title_prefix: 'Das umfassende',
      hero_title_accent: 'Konvertierungs',
      hero_sub: 'Wählen Sie unten eine Tool-Kategorie. Alle Aktionen laufen direkt auf Ihrem Gerät — kein Upload, kein Wasserzeichen, unbegrenzt.',
      img_card_badge: '2 Kategorien · 14 Tools',
      img_card_title: 'Image Converter',
      tools_word: 'Tools',
      img_card_overview: 'Bildgrößen verlustarm komprimieren oder zwischen gängigen Bildformaten direkt im Browser konvertieren.',
      sec_img_compress: 'A. Bildkomprimierung',
      sec_img_convert: 'B. Bildkonvertierung',
      chip_6_format: '6 Formate',
      img_card_cta: 'Bild-Tools entdecken',
      pdf_card_badge: '4 Kategorien · 20 Tools',
      pdf_card_title: 'PDF Converter',
      pdf_card_overview: 'PDF-Dokumente flexibel verwalten — Konvertieren, Zusammenführen, Teilen, Komprimieren und Sichern. Inklusive Office-Unterstützung.',
      sec_pdf_standard: 'A. Standard-Konvertierung',
      sec_doc2pdf: 'B. Dokument zu PDF',
      sec_pdf2doc: 'C. PDF zu Dokument',
      sec_security: 'D. Dokumentensicherheit',
      chip_6_tools: '6 Tools',
      chip_4_tools: '4 Tools',
      chip_2_tools: '2 Tools',
      pdf_card_cta: 'PDF-Tools entdecken',
      footer_privacy: 'Datenschutz garantiert — Dateien verlassen niemals Ihr Gerät.',
      footer_built_for: 'Built for Workspace, Community and General.',
      footer_donate: 'Spenden',
      esc_hint: 'ESC drücken für Hauptmenü',
      btn_home: 'Startseite',
      btn_tools: 'Tools',
      badge_ready: 'Bereit',
      badge_soon: 'Bald',
      cs_title: 'Demnächst verfügbar',
      cs_desc: 'Diese Funktion befindet sich in aktiver Entwicklung und ist bald verfügbar.',
      cs_tag_server: 'Server-Side Processing',
      cs_tag_dev: 'In Entwicklung',
      btn_back_home: '← Zurück zum Hauptmenü',
      dz_drag_drop_img: 'Bilder hierher ziehen & ablegen',
      dz_hint_compress: 'Bilder zum Komprimieren auswählen',
      dz_hint_convert: 'Quellbilder zum Konvertieren auswählen',
      dz_hint_multi_img: 'PNG, JPG, JPEG, WEBP — mehrere Dateien unterstützt',
      dz_choose_pdf: 'PDF-Dokument auswählen',
      dz_hint_single_pdf: 'Eine PDF-Datei zum Extrahieren wählen',
      dz_choose_multi_pdf: 'Mehrere PDFs auswählen',
      dz_hint_min_2: 'Mindestens 2 Dateien zum Zusammenfügen',
      dz_split_title: 'PDF zum Teilen auswählen',
      dz_split_hint: 'Seitenbereiche nach Dateiauswahl festlegen',
      dz_compress_pdf_title: 'PDF zum Komprimieren wählen',
      dz_compress_pdf_hint: 'PDF-Datei zur Größenoptimierung wählen',
      dz_hint_extract_text: 'Text wird aus allen Seiten extrahiert',
      dz_lock_title: 'PDF zum Schützen auswählen',
      dz_lock_hint: 'Datei wird mit optischem Wasserzeichen geschützt',
      btn_choose_device: 'Datei vom Gerät wählen',
      btn_choose_images: 'Bilder auswählen',
      btn_choose_pdf: 'PDF auswählen',
      btn_clear_all: 'Alle löschen',
      btn_change_file: 'Datei wechseln',
      btn_copy: 'Kopieren',
      btn_download_zip: 'Alle herunterladen (.ZIP)',
      btn_create_pdf: 'PDF-Dokument erstellen',
      btn_merge_docs: 'Dokumente zusammenführen',
      btn_split_docs: 'PDF aufteilen',
      btn_compress_pdf: 'PDF komprimieren',
      btn_compress_all: 'Alle Bilder komprimieren',
      btn_convert_all: 'Alle konvertieren',
      btn_create_text_pdf: 'PDF aus Text erstellen',
      btn_extract_text: 'Text aus PDF extrahieren',
      btn_download_txt: '.txt herunterladen',
      btn_add_watermark: 'Wasserzeichen hinzufügen',
      btn_add_range: '+ Bereich hinzufügen',
      settings_compression: 'Komprimierungseinstellungen',
      settings_convert_format: 'Konvertierungsformat',
      settings_doc: 'Dokumenteinstellungen',
      settings_format_res: 'Format & Auflösung',
      settings_merge_info: 'Zusammenführungs-Info',
      settings_split: 'Aufteilungseinstellungen',
      settings_compress_pdf: 'PDF-Komprimierungseinstellungen',
      settings_pdf_format: 'PDF-Format',
      settings_text_extract: 'Textextraktion',
      settings_protection: 'Schutzeinstellungen',
      label_compress_queue: 'Komprimierungs-Warteschlange',
      label_convert_queue: 'Konvertierungs-Warteschlange',
      label_img_list: 'Bilderliste',
      label_page_preview: 'Seitenvorschau',
      label_doc_order: 'Dokumentenreihenfolge',
      label_split_ranges: 'Aufteilungsbereiche',
      label_extracted_text: 'Extrahierter Text',
      label_output_quality: 'Ausgabequalität',
      quality_small: 'Klein',
      quality_balanced: 'Ausgewogen',
      quality_high: 'Hoch',
      label_max_width: 'Maximale Breite (px)',
      opt_keep_original: 'Originalgröße beibehalten',
      label_detected_src: 'Erkanntes Quellformat',
      label_convert_to: 'Konvertieren in',
      label_jpg_quality: 'JPG/JPEG Qualität',
      label_page_size: 'Seitengröße',
      opt_fit_image: 'An Bild anpassen',
      label_orientation: 'Ausrichtung',
      opt_auto: 'Automatisch',
      opt_portrait: 'Hochformat',
      opt_landscape: 'Querformat',
      label_margin: 'Seitenrand',
      opt_no_margin: 'Kein Rand',
      opt_small_margin: 'Klein (10mm)',
      opt_std_margin: 'Standard (20mm)',
      label_filename: 'Dateiname',
      label_output_filename: 'Ausgabedateiname',
      label_output_format: 'Ausgabeformat',
      label_render_scale: 'Renderauflösung',
      label_total_files: 'Dateien insgesamt:',
      label_total_pages: 'Seiten insgesamt:',
      label_file: 'Datei:',
      label_basename: 'Basis-Dateiname',
      label_font_size: 'Schriftgröße',
      label_watermark_text: 'Wasserzeichen-Text',
      label_ready_protect: 'Bereit zum Schützen',
      label_compress_result: 'Komprimierungsergebnis:',
      title_text_editor: 'Text / Dokumentinhalt',
      desc_compress_pdf: 'Optimierung durch Metadaten-Bereinigung und Objekt-Kompression.',
      desc_text_extract: 'Text digitaler PDF-Dateien direkt auslesen.',
      desc_lock_notice: 'Hinweis: Fügt ein transparentes Wasserzeichen auf jeder Seite als visuellen Schutz ein.',
      hint_auto_download: 'Komprimierte Dateien werden einzeln heruntergeladen.',
      hint_single_download: 'Oder nutzen Sie den Download-Button der jeweiligen Karte.',
      hint_split_download: 'Jeder Bereich wird als separate PDF gespeichert.',
      ph_text_editor: 'Geben Sie hier Text ein, um ein sauberes PDF-Dokument zu erstellen...',
      ctx_refresh: 'Aktualisieren',
      ctx_about: 'Über',
      ctx_donate: 'Jetzt spenden',
      about_title: 'Über Seroja Labs',
      about_hero_h1: 'Konversian Stage wurde entwickelt von',
      about_hero_sub: 'Ein modernes Datei, entwickelt für Workspaces, Open-Source-Communities und professionelle Nutzung bei maximalem Datenschutz.',
      pillar_privacy_title: '100% Client-Side Datenschutz',
      pillar_privacy_desc: 'Dateien werden niemals auf Cloud-Server übertragen. Alle Operationen laufen isoliert im lokalen Browser-Speicher.',
      pillar_speed_title: 'Sofortige Leistung ohne Limits',
      pillar_speed_desc: 'Unterstützt von Canvas API, WebAssembly und PDF-Lib. Keine Warteschlangen, keine Wasserzeichen, keine Limits.',
      pillar_community_title: 'Für Teams & Community',
      pillar_community_desc: 'Seroja Labs baut Software-Werkzeuge mit Fokus auf Effizienz, Barrierefreiheit und nachhaltige Entwicklung.',
      pillar_open_title: 'Unabhängig & Transparent',
      pillar_open_desc: 'Frei von Werbetrackern und Datenhandel. Finanziert rein durch freiwillige Community-Spenden.',
      btn_support_us: 'Unterstützen (Spenden)',
      btn_explore_tools: 'Tools verwenden',
      donate_title: 'Spenden & Fördern',
      donate_badge: 'Community & Forschung',
      donate_headline: 'Unterstützen Sie uns für kontinuierliche Verbesserungen. Wir garantieren: Ihre Dateien werden niemals auf unseren Servern gespeichert.',
      donate_sub: 'Jede Spende sichert den Betrieb, finanziert neue Funktionen und hält diese Plattform dauerhaft kostenlos für alle.',
      tag_intl: 'International',
      paypal_desc: 'Sichere weltweite Zahlung via PayPal-Guthaben oder Kreditkarte.',
      btn_open_paypal: 'PayPal öffnen',
      kofi_desc: 'Laden Sie die Entwickler von Seroja Labs auf einen Kaffee ein.',
      btn_open_kofi: 'Auf Ko-fi unterstützen',
      sociabuzz_desc: 'Schnelle Unterstützung über E-Wallets und Online-Banking.',
      btn_open_sociabuzz: 'Via SociaBuzz spenden',
      qris_desc: 'Direkt per QR-Code mit jeder Banking-App scannen.',
      label_qris_amount: 'Spendenbetrag wählen:',
      btn_copy_qris: 'QRIS-Code kopieren',
      donate_thankyou_title: 'Herzlichen Dank für Ihre Unterstützung!',
      donate_thankyou_desc: 'Ihre Großzügigkeit motiviert unser Team bei Seroja Labs, Konversian Stage stetig weiterzuentwickeln.',
      label_user_password: 'Datei-Öffnungspasswort (Erforderlich)',
      label_confirm_password: 'Passwort bestätigen',
      label_owner_password: 'Besitzer-/Berechtigungspasswort (Optional)',
      label_encryption_algo: 'Verschlüsselungsstandard',
      btn_lock_pdf: 'PDF sperren & schützen',
      settings_unlock: 'PDF-Schutz aufheben',
      label_current_password: 'Aktuelles Dokumentenpasswort',
      btn_unlock_pdf: 'Dokument entsperren',
      settings_stirling_o2p: 'Stirling-PDF Konfiguration',
      btn_convert_to_pdf: 'In PDF konvertieren',
      settings_stirling_p2o: 'Zieldokumentformat',
      label_target_office: 'Konvertieren zu',
      btn_convert_to_office: 'In Dokument konvertieren',
    },
    ru: {
      logo_sub: 'Студия конвертации файлов',
      privacy_badge: '100% в браузере',
      hero_title_prefix: 'Студия конвертации файлов',
      hero_title_accent: 'Нового поколения',
      hero_sub: 'Выберите категорию инструментов ниже. Все операции выполняются прямо на вашем устройстве — без загрузки на сервер, без водяных знаков и ограничений.',
      img_card_badge: '2 категории · 14 инструментов',
      img_card_title: 'Конвертер изображений',
      tools_word: 'Tools',
      img_card_overview: 'Сжимайте фото без заметной потери качества или конвертируйте между популярными форматами прямо в браузере с помощью Canvas API.',
      sec_img_compress: 'А. Сжатие изображений',
      sec_img_convert: 'Б. Конвертация изображений',
      chip_6_format: '6 форматов',
      img_card_cta: 'Открыть инструменты изображений',
      pdf_card_badge: '4 категории · 20 инструментов',
      pdf_card_title: 'Конвертер PDF',
      pdf_card_overview: 'Полное управление PDF: объединение, разделение, сжатие, защита и конвертация в форматы DOCX, PPT и Excel.',
      sec_pdf_standard: 'А. Стандартная конвертация',
      sec_doc2pdf: 'Б. Документы в PDF',
      sec_pdf2doc: 'В. PDF в документы',
      sec_security: 'Г. Безопасность документов',
      chip_6_tools: '6 утилит',
      chip_4_tools: '4 утилиты',
      chip_2_tools: '2 утилиты',
      pdf_card_cta: 'Открыть инструменты PDF',
      footer_privacy: 'Конфиденциальность гарантирована — файлы не покидают ваше устройство.',
      footer_built_for: 'Создано для рабочих пространств, сообщества и личного пользования.',
      footer_donate: 'Поддержать проект',
      esc_hint: 'нажмите ESC для возврата в меню',
      btn_home: 'Главная',
      btn_tools: 'Инструменты',
      badge_ready: 'Готово',
      badge_soon: 'Скоро',
      cs_title: 'Скоро появится',
      cs_desc: 'Эта функция находится в активной разработке и скоро станет доступна.',
      cs_tag_server: 'Серверная обработка',
      cs_tag_dev: 'В разработке',
      btn_back_home: '← В главное меню',
      dz_drag_drop_img: 'Перетащите изображения сюда',
      dz_hint_compress: 'Выберите изображения для сжатия',
      dz_hint_convert: 'Выберите исходные изображения для конвертации',
      dz_hint_multi_img: 'PNG, JPG, JPEG, WEBP — поддерживается несколько файлов',
      dz_choose_pdf: 'Выберите документ PDF',
      dz_hint_single_pdf: 'Один PDF-файл для извлечения страниц',
      dz_choose_multi_pdf: 'Выберите несколько PDF-файлов',
      dz_hint_min_2: 'Минимум 2 файла для объединения',
      dz_split_title: 'Выберите PDF для разделения',
      dz_split_hint: 'Укажите диапазоны страниц после выбора файла',
      dz_compress_pdf_title: 'Выберите PDF для сжатия',
      dz_compress_pdf_hint: 'PDF-файл для уменьшения размера',
      dz_hint_extract_text: 'Текст будет извлечен со всех страниц',
      dz_lock_title: 'Выберите PDF для защиты',
      dz_lock_hint: 'Файл будет защищен визуальным водяным знаком',
      btn_choose_device: 'Выбрать файл с устройства',
      btn_choose_images: 'Выбрать изображения',
      btn_choose_pdf: 'Выбрать документ PDF',
      btn_clear_all: 'Очистить все',
      btn_change_file: 'Сменить файл',
      btn_copy: 'Копировать',
      btn_download_zip: 'Скачать все (.ZIP)',
      btn_create_pdf: 'Создать PDF документ',
      btn_merge_docs: 'Объединить документы',
      btn_split_docs: 'Разделить PDF',
      btn_compress_pdf: 'Сжать PDF',
      btn_compress_all: 'Сжать все изображения',
      btn_convert_all: 'Конвертировать все',
      btn_create_text_pdf: 'Создать PDF из текста',
      btn_extract_text: 'Извлечь текст из PDF',
      btn_download_txt: 'Скачать .txt',
      btn_add_watermark: 'Добавить водяной знак',
      btn_add_range: '+ Добавить диапазон',
      settings_compression: 'Настройки сжатия',
      settings_convert_format: 'Формат конвертации',
      settings_doc: 'Настройки документа',
      settings_format_res: 'Формат и разрешение',
      settings_merge_info: 'Информация об объединении',
      settings_split: 'Настройки разделения',
      settings_compress_pdf: 'Настройки сжатия PDF',
      settings_pdf_format: 'Формат PDF',
      settings_text_extract: 'Извлечение текста',
      settings_protection: 'Настройки защиты',
      label_compress_queue: 'Очередь сжатия',
      label_convert_queue: 'Очередь конвертации',
      label_img_list: 'Список изображений',
      label_page_preview: 'Предпросмотр страниц',
      label_doc_order: 'Порядок документов',
      label_split_ranges: 'Диапазоны страниц',
      label_extracted_text: 'Извлеченный текст',
      label_output_quality: 'Качество вывода',
      quality_small: 'Малый размер',
      quality_balanced: 'Баланс',
      quality_high: 'Высокое',
      label_max_width: 'Макс. ширина (px)',
      opt_keep_original: 'Сохранить исходный размер',
      label_detected_src: 'Исходный формат',
      label_convert_to: 'Конвертировать в',
      label_jpg_quality: 'Качество JPG/JPEG',
      label_page_size: 'Размер страницы',
      opt_fit_image: 'По размеру изображения',
      label_orientation: 'Ориентация',
      opt_auto: 'Автоматически',
      opt_portrait: 'Книжная',
      opt_landscape: 'Альбомная',
      label_margin: 'Поля',
      opt_no_margin: 'Без полей',
      opt_small_margin: 'Малые (10мм)',
      opt_std_margin: 'Стандартные (20мм)',
      label_filename: 'Имя файла',
      label_output_filename: 'Имя выходного файла',
      label_output_format: 'Формат вывода',
      label_render_scale: 'Разрешение рендера',
      label_total_files: 'Всего файлов:',
      label_total_pages: 'Всего страниц:',
      label_file: 'Файл:',
      label_basename: 'Базовое имя',
      label_font_size: 'Размер шрифта',
      label_watermark_text: 'Текст водяного знака',
      label_ready_protect: 'Готово к защите',
      label_compress_result: 'Результат сжатия:',
      title_text_editor: 'Текст / Содержимое документа',
      desc_compress_pdf: 'Сжатие на основе очистки метаданных и оптимизации объектов.',
      desc_text_extract: 'Извлечение текста из цифровых PDF документов.',
      desc_lock_notice: 'Примечание: наносит полупрозрачный водяной знак на каждую страницу как защитный маркер.',
      hint_auto_download: 'Сжатые файлы будут скачиваться по очереди.',
      hint_single_download: 'Или нажмите кнопку скачивания на нужной карточке.',
      hint_split_download: 'Каждый диапазон скачается отдельным файлом PDF.',
      ph_text_editor: 'Введите или вставьте текст сюда для создания аккуратного PDF...',
      ctx_refresh: 'Обновить страницу',
      ctx_about: 'О лаборатории',
      ctx_donate: 'Поддержать проект',
      about_title: 'О лаборатории Seroja Labs',
      about_hero_h1: 'Konversian Stage создана командой',
      about_hero_sub: 'Современная студия файловых утилит, спроектированная для ежедневной продуктивной работы без малейшего риска для конфиденциальности данных.',
      pillar_privacy_title: '100% приватность на стороне клиента',
      pillar_privacy_desc: 'Ваши файлы никогда не отправляются на удаленные серверы. Все процессы сжатия и конвертации выполняются в памяти вашего браузера.',
      pillar_speed_title: 'Мгновенная работа без лимитов',
      pillar_speed_desc: 'На базе Canvas API, WebAssembly и PDF-Lib. Никаких очередей загрузки, водяных знаков и скрытых платежей.',
      pillar_community_title: 'Для сообщества и рабочих пространств',
      pillar_community_desc: 'Seroja Labs создает программные продукты для повышения эффективности команд и открытого IT-сообщества.',
      pillar_open_title: 'Прозрачность и независимость',
      pillar_open_desc: 'Без рекламных трекеров и шпионских скриптов. Развитие поддерживается исключительно добровольными донатами.',
      btn_support_us: 'Поддержать нас (Донат)',
      btn_explore_tools: 'Начать использование',
      donate_title: 'Поддержка проекта',
      donate_badge: 'Развитие и сообщество',
      donate_headline: 'Поддержите нас для дальнейшего развития! Мы гарантируем абсолютную приватность: файлы не сохраняются на серверах.',
      donate_sub: 'Каждый ваш взнос помогает нам создавать новые инструменты и сохранять сервис полностью бесплатным и доступным для всех.',
      tag_intl: 'Международный',
      paypal_desc: 'Безопасная оплата со всего мира через PayPal или банковские карты.',
      btn_open_paypal: 'Открыть PayPal',
      kofi_desc: 'Угостите чашкой кофе разработчиков Seroja Labs.',
      btn_open_kofi: 'Поддержать на Ko-fi',
      sociabuzz_desc: 'Удобный способ поддержки через электронные кошельки.',
      btn_open_sociabuzz: 'Донат через SociaBuzz',
      qris_desc: 'Быстрая оплата по национальному QR-коду.',
      label_qris_amount: 'Выберите сумму доната:',
      btn_copy_qris: 'Скопировать код QRIS',
      donate_thankyou_title: 'Большое спасибо за вашу поддержку!',
      donate_thankyou_desc: 'Ваша помощь вдохновляет команду Seroja Labs продолжать развивать бесплатные инструменты.',
      label_user_password: 'Пароль открытия файла (Обязательно)',
      label_confirm_password: 'Подтвердите пароль',
      label_owner_password: 'Пароль владельца/разрешений (Необязательно)',
      label_encryption_algo: 'Стандарт шифрования',
      btn_lock_pdf: 'Заблокировать и защитить PDF',
      settings_unlock: 'Снять защиту PDF',
      label_current_password: 'Текущий пароль документа',
      btn_unlock_pdf: 'Разблокировать документ',
      settings_stirling_o2p: 'Настройки Stirling-PDF',
      btn_convert_to_pdf: 'Конвертировать в PDF',
      settings_stirling_p2o: 'Формат целевого документа',
      label_target_office: 'Конвертировать в',
      btn_convert_to_office: 'Конвертировать в документ',
    },
    zh: {
      logo_sub: '全能文件转换工作室',
      privacy_badge: '100% 浏览器本地处理',
      hero_title_prefix: '全功能文件转换',
      hero_title_accent: '现代化工作室',
      hero_sub: '在下方选择您需要的工具类别。所有操作均在您的设备本地完成——无须上传服务器，无水印，无使用限制。',
      img_card_badge: '2 大类别 · 14 种工具',
      img_card_title: '图片转换工具',
      tools_word: 'Image Converter',
      img_card_overview: '在不损失明显画质的前提下大幅压缩照片体积，或在主流图片格式之间快速转换——完全利用浏览器本地 Canvas API 完成。',
      sec_img_compress: 'A. 图片压缩工具',
      sec_img_convert: 'B. 图片格式转换',
      chip_6_format: '6 种格式',
      img_card_cta: '浏览图片处理工具',
      pdf_card_badge: '4 大类别 · 20 种工具',
      pdf_card_title: 'PDF 转换工具',
      pdf_card_overview: '全方位掌控 PDF 文档——标准转换、合并、分割、压缩与安全保护。支持 DOCX、PPT 与 Excel 双向转换。',
      sec_pdf_standard: 'A. 标准 PDF 转换',
      sec_doc2pdf: 'B. 办公文档转 PDF',
      sec_pdf2doc: 'C. PDF 转办公文档',
      sec_security: 'D. 文档安全保护',
      chip_6_tools: '6 款工具',
      chip_4_tools: '4 款工具',
      chip_2_tools: '2 款工具',
      pdf_card_cta: '浏览 PDF 处理工具',
      footer_privacy: '严格保护隐私——您的文件绝不会离开本地设备。',
      footer_built_for: '专为工作空间、开发者社群与公众打造。',
      footer_donate: '赞助支持',
      esc_hint: '按 ESC 键返回主菜单',
      btn_home: '首页',
      btn_tools: '工具',
      badge_ready: '可用',
      badge_soon: '即将推出',
      cs_title: '即将推出',
      cs_desc: '该功能正在积极开发中，很快将在此平台上向所有用户开放。',
      cs_tag_server: '服务端安全处理',
      cs_tag_dev: '研发推进中',
      btn_back_home: '← 返回主菜单',
      dz_drag_drop_img: '拖放图片到此处',
      dz_hint_compress: '选择需要压缩的图片',
      dz_hint_convert: '选择需要转换的目标源图片',
      dz_hint_multi_img: '支持 PNG, JPG, JPEG, WEBP——可批量选择',
      dz_choose_pdf: '选择 PDF 文档',
      dz_hint_single_pdf: '选择一份 PDF 文件以提取所有页面',
      dz_choose_multi_pdf: '选择多份 PDF 文档',
      dz_hint_min_2: '至少需要 2 份文件进行合并',
      dz_split_title: '选择要拆分的 PDF',
      dz_split_hint: '选择文件后可自定义拆分页面范围',
      dz_compress_pdf_title: '选择要压缩的 PDF',
      dz_compress_pdf_hint: '选择需要缩减体积的 PDF 文件',
      dz_hint_extract_text: '将从所有页面中提取文字内容',
      dz_lock_title: '选择需要保护的 PDF',
      dz_lock_hint: '将为每页文档添加半透明防伪水印',
      btn_choose_device: '从本地设备选择文件',
      btn_choose_images: '选择图片文件',
      btn_choose_pdf: '选择 PDF 文档',
      btn_clear_all: '清空列表',
      btn_change_file: '更换文件',
      btn_copy: '复制',
      btn_download_zip: '打包下载全部 (.ZIP)',
      btn_create_pdf: '生成 PDF 文档',
      btn_merge_docs: '合并文档',
      btn_split_docs: '拆分 PDF 文档',
      btn_compress_pdf: '压缩 PDF 文档',
      btn_compress_all: '压缩全部图片',
      btn_convert_all: '转换全部格式',
      btn_create_text_pdf: '从文本制作 PDF',
      btn_extract_text: '提取 PDF 文字内容',
      btn_download_txt: '下载 .txt 文件',
      btn_add_watermark: '添加安全水印',
      btn_add_range: '+ 添加页面范围',
      settings_compression: '图片压缩参数',
      settings_convert_format: '格式转换选项',
      settings_doc: '页面版式设置',
      settings_format_res: '导出格式与清晰度',
      settings_merge_info: '文档合并概览',
      settings_split: '页面拆分规则',
      settings_compress_pdf: 'PDF 压缩设置',
      settings_pdf_format: '导出 PDF 格式',
      settings_text_extract: '文字提取选项',
      settings_protection: '文档保护选项',
      label_compress_queue: '压缩队列',
      label_convert_queue: '转换队列',
      label_img_list: '图片清单',
      label_page_preview: '页面实时预览',
      label_doc_order: '文档合并顺序',
      label_split_ranges: '拆分页面区间',
      label_extracted_text: '已提取的文字',
      label_output_quality: '压缩画质',
      quality_small: '最小体积',
      quality_balanced: '均衡推荐',
      quality_high: '高画质',
      label_max_width: '最大宽度限制 (px)',
      opt_keep_original: '保持原图尺寸',
      label_detected_src: '检测到的源格式',
      label_convert_to: '转换为目标格式',
      label_jpg_quality: 'JPG 画质系数',
      label_page_size: '纸张大小',
      opt_fit_image: '紧贴图片原始比例',
      label_orientation: '页面方向',
      opt_auto: '自动识别',
      opt_portrait: '纵向（竖版）',
      opt_landscape: '横向（横版）',
      label_margin: '页边距',
      opt_no_margin: '无边距（铺满）',
      opt_small_margin: '较窄 (10mm)',
      opt_std_margin: '标准 (20mm)',
      label_filename: '文件名称',
      label_output_filename: '导出文件名',
      label_output_format: '图片格式',
      label_render_scale: '渲染解析度',
      label_total_files: '文件总计：',
      label_total_pages: '总页数：',
      label_file: '文件：',
      label_basename: '文件前缀名',
      label_font_size: '字体大小',
      label_watermark_text: '水印内容',
      label_ready_protect: '已就绪',
      label_compress_result: '压缩成果：',
      title_text_editor: '文本 / 稿件内容',
      desc_compress_pdf: '基于对象流清理与冗余元数据优化进行无损瘦身。',
      desc_text_extract: '快速提取数字 PDF 中的文字段落。',
      desc_lock_notice: '提示：将在每一页居中添加半透明防盗水印作为视觉安全标识。',
      hint_auto_download: '压缩后的文件将逐一下载到您的设备。',
      hint_single_download: '也可单独点击各卡片上的下载按钮保存单页。',
      hint_split_download: '每个选定区间都将导出为一份独立的 PDF。',
      ph_text_editor: '在此输入或粘贴文本内容，即可一键生成规整的 PDF 电子书...',
      ctx_refresh: '刷新页面',
      ctx_about: '关于',
      ctx_donate: '赞助支持我们',
      about_title: '关于 Seroja Labs',
      about_hero_h1: 'Konversian Stage 由团队打造',
      about_hero_sub: '专为提升日常数字办公效率打造的现代工具集，坚守绝对隐私原则，服务全球开发者与工作空间。',
      pillar_privacy_title: '100% 浏览器本地隐私安全',
      pillar_privacy_desc: '文件全程留在您的设备上，绝不上载到任何云服务器。转换、压缩与合并全在本地内存运算。',
      pillar_speed_title: '极速无限制运行',
      pillar_speed_desc: '由 Canvas API、WebAssembly 及 PDF-Lib 引擎驱动。没有上传排队，绝不嵌入水印，没有每日使用配额。',
      pillar_community_title: '为工作空间与社群共建',
      pillar_community_desc: 'Seroja Labs 致力于开发轻量、高效、无广告骚扰的高品质生产力基础设施。',
      pillar_open_title: '独立、透明且开放',
      pillar_open_desc: '无任何用户追踪与商业监控。项目的长期发展由全球社群自发捐赠提供支持。',
      btn_support_us: '支持我们（赞助）',
      btn_explore_tools: '立即开始使用',
      donate_title: '赞助支持',
      donate_badge: '社区共建与前沿研发',
      donate_headline: '感谢支持我们持续迭代进化！我们庄严承诺坚守您的隐私底线，文件绝不在服务器储存。',
      donate_sub: '您的每一份支持都将直接用于平台新功能研发与基础设施维护，确保工具对全人类永久完全免费开放。',
      tag_intl: '全球通用',
      paypal_desc: '支持通过 PayPal 账户、Visa、Mastercard 信用卡安全付款。',
      btn_open_paypal: '前往 PayPal 赞助',
      kofi_desc: '请 Seroja Labs 研发团队喝一杯咖啡，支持开源持续演进。',
      btn_open_kofi: '在 Ko-fi 上赞助',
      sociabuzz_desc: '便捷支持东南亚本地主流数字钱包快速赞助。',
      btn_open_sociabuzz: '通过 SociaBuzz 赞助',
      qris_desc: '支持通过银行 App 或电子钱包扫描统一二维码快速支付。',
      label_qris_amount: '选择赞助数额：',
      btn_copy_qris: '复制 QRIS 赞助代码',
      donate_thankyou_title: '衷心感谢您的慷慨支持！',
      donate_thankyou_desc: '您的认可与帮助是 Seroja Labs 团队不断追求卓越、保持工具永久免费的最大原动力。',
      label_user_password: '文件开启密码（必填）',
      label_confirm_password: '确认密码',
      label_owner_password: '所有者/权限密码（选填）',
      label_encryption_algo: '加密标准',
      btn_lock_pdf: '加密并锁定 PDF',
      settings_unlock: '解除 PDF 保护',
      label_current_password: '当前文档密码',
      btn_unlock_pdf: '解锁文档',
      settings_stirling_o2p: 'Stirling-PDF 配置',
      btn_convert_to_pdf: '转换为 PDF',
      settings_stirling_p2o: '目标文档格式',
      label_target_office: '转换为',
      btn_convert_to_office: '转换为文档',
    }
  };

  // ===========================================================================
  // 2. TOOLS DATA REGISTRY
  // ===========================================================================
  const TOOLS_DATA = {
    image: {
      labelKey: 'img_card_title',
      heroDescKey: 'img_card_overview',
      heroColor: 'emerald',
      sections: [
        {
          id: 'sec-img-compress', labelKey: 'sec_img_compress',
          tools: [
            { id:'compress-jpg',  label:'Compress JPG',  status:'ready', panel:'panelImgCompress', accept:'image/jpeg,image/jpg', ext:'jpg'  },
            { id:'compress-jpeg', label:'Compress JPEG', status:'ready', panel:'panelImgCompress', accept:'image/jpeg',           ext:'jpeg' },
            { id:'compress-png',  label:'Compress PNG',  status:'ready', panel:'panelImgCompress', accept:'image/png',            ext:'png'  },
            { id:'compress-webp', label:'Compress WEBP', status:'ready', panel:'panelImgCompress', accept:'image/webp',           ext:'webp' },
            { id:'compress-heic', label:'Compress HEIC', status:'soon', panel:'panelImgCompress', accept:'.heic,.heif,image/heic,image/heif', ext:'heic' },
            { id:'compress-bmp',  label:'Compress BMP',  status:'ready', panel:'panelImgCompress', accept:'image/bmp',            ext:'bmp'  },
          ]
        },
        {
          id: 'sec-img-convert', labelKey: 'sec_img_convert',
          tools: [
            { id:'convert-jpg',  label:'JPG → PNG/WEBP/BMP', status:'ready', panel:'panelImgConvert', srcFmt:'jpg',  srcMime:'image/jpeg', targets:['png','webp','bmp'] },
            { id:'convert-jpeg', label:'JPEG → PNG/WEBP/BMP',status:'ready', panel:'panelImgConvert', srcFmt:'jpeg', srcMime:'image/jpeg', targets:['png','webp','bmp'] },
            { id:'convert-png',  label:'PNG → JPG/WEBP/BMP', status:'ready', panel:'panelImgConvert', srcFmt:'png',  srcMime:'image/png',  targets:['jpg','webp','bmp'] },
            { id:'convert-heic', label:'HEIC → JPG/PNG/WEBP', status:'soon', panel:'panelImgConvert', srcFmt:'heic', srcMime:'.heic,.heif,image/heic,image/heif', targets:['jpg','png','webp'] },
            { id:'convert-webp', label:'WEBP → JPG/PNG',     status:'ready', panel:'panelImgConvert', srcFmt:'webp', srcMime:'image/webp', targets:['jpg','png'] },
            { id:'convert-bmp',  label:'BMP → PNG/JPG',      status:'ready', panel:'panelImgConvert', srcFmt:'bmp',  srcMime:'image/bmp',  targets:['png','jpg'] },
          ]
        },
      ]
    },
    pdf: {
      labelKey: 'pdf_card_title',
      heroDescKey: 'pdf_card_overview',
      heroColor: 'sky',
      sections: [
        {
          id: 'sec-pdf-standard', labelKey: 'sec_pdf_standard',
          tools: [
            { id:'img2pdf',      label:'Image to PDF',     status:'ready', panel:'panelImg2Pdf'   },
            { id:'pdf2img',      label:'PDF to Image',     status:'ready', panel:'panelPdf2Img'   },
            { id:'mergepdf',     label:'Merge PDF',        status:'ready', panel:'panelMergePdf'  },
            { id:'merge-pdf-img',label:'Merge PDF & Image',status:'soon',  panel:'panelComingSoon'},
            { id:'splitpdf',     label:'Split PDF',        status:'ready', panel:'panelSplitPdf'  },
            { id:'compresspdf',  label:'Compress PDF',     status:'ready', panel:'panelCompressPdf'},
          ]
        },
        {
          id: 'sec-doc2pdf', labelKey: 'sec_doc2pdf',
          tools: [
            { id:'docx2pdf',  label:'DOCX to PDF',  status:'soon', panel:'panelStirlingOffice2Pdf', accept:'.docx,.doc', ext:'docx' },
            { id:'ppt2pdf',   label:'PPT to PDF',   status:'soon', panel:'panelStirlingOffice2Pdf', accept:'.pptx,.ppt', ext:'pptx' },
            { id:'excel2pdf', label:'Excel to PDF', status:'soon', panel:'panelStirlingOffice2Pdf', accept:'.xlsx,.xls', ext:'xlsx' },
            { id:'text2pdf',  label:'Text to PDF',  status:'ready', panel:'panelText2Pdf'  },
          ]
        },
        {
          id: 'sec-pdf2doc', labelKey: 'sec_pdf2doc',
          tools: [
            { id:'pdf2docx',  label:'PDF to DOCX',  status:'soon', panel:'panelStirlingPdf2Office', targetFormat:'docx' },
            { id:'pdf2ppt',   label:'PDF to PPT',   status:'soon', panel:'panelStirlingPdf2Office', targetFormat:'pptx' },
            { id:'pdf2excel', label:'PDF to Excel', status:'soon', panel:'panelStirlingPdf2Office', targetFormat:'xlsx' },
            { id:'pdf2text',  label:'PDF to Text',  status:'ready', panel:'panelPdf2Text'  },
          ]
        },
        {
          id: 'sec-security', labelKey: 'sec_security',
          tools: [
            { id:'lockpdf',   label:'Lock PDF',   status:'ready', panel:'panelLockPdf'    },
            { id:'unlockpdf', label:'Unlock PDF', status:'soon', panel:'panelUnlockPdf'  },
          ]
        },
      ]
    }
  };

  const TOOL_ICONS = {
    'compress-jpg':  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m21 15-5-5-4 4-3-3-5 5"/></svg>`,
    'compress-jpeg': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m21 15-5-5-4 4-3-3-5 5"/></svg>`,
    'compress-png':  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m21 15-5-5-4 4-3-3-5 5"/></svg>`,
    'compress-webp': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m21 15-5-5-4 4-3-3-5 5"/></svg>`,
    'compress-heic': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m21 15-5-5-4 4-3-3-5 5"/></svg>`,
    'compress-bmp':  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m21 15-5-5-4 4-3-3-5 5"/></svg>`,
    'convert-jpg':   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
    'convert-jpeg':  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
    'convert-png':   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
    'convert-heic':  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
    'convert-webp':  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
    'convert-bmp':   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
    'img2pdf':       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>`,
    'pdf2img':       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>`,
    'mergepdf':      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M9 13h6"/><path d="M9 17h3"/></svg>`,
    'merge-pdf-img': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="6" cy="18" r="3"/><path d="M6 15V6a2 2 0 0 1 2-2h12"/><path d="M18 21V12a2 2 0 0 0-2-2H6"/></svg>`,
    'splitpdf':      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><line x1="9" y1="13" x2="15" y2="13"/></svg>`,
    'compresspdf':   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m21 15-5-5-4 4-3-3-5 5"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/></svg>`,
    'docx2pdf':      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M2 15h10"/><path d="m9 18 3-3-3-3"/></svg>`,
    'ppt2pdf':       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h20v14H2z"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>`,
    'excel2pdf':     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18M3 15h18M9 3v18"/></svg>`,
    'text2pdf':      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
    'pdf2docx':      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M2 15h10"/><path d="m5 12-3 3 3 3"/></svg>`,
    'pdf2ppt':       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h20v14H2z"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>`,
    'pdf2excel':     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18M3 15h18M9 3v18"/></svg>`,
    'pdf2text':      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
    'lockpdf':       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/><circle cx="12" cy="16" r="1" fill="currentColor"/></svg>`,
    'unlockpdf':     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>`,
  };

  const TOOL_ICON_COLORS = {
    'compress-jpg': 'bg-emerald-500/10 text-emerald-500', 'compress-jpeg': 'bg-emerald-500/10 text-emerald-500',
    'compress-png': 'bg-emerald-500/10 text-emerald-500', 'compress-webp': 'bg-emerald-500/10 text-emerald-500',
    'compress-heic':'bg-gray-500/10 text-gray-500',       'compress-bmp': 'bg-gray-500/10 text-gray-500',
    'convert-jpg':  'bg-violet-500/10 text-violet-500',   'convert-jpeg': 'bg-violet-500/10 text-violet-500',
    'convert-png':  'bg-violet-500/10 text-violet-500',   'convert-heic': 'bg-gray-500/10 text-gray-500',
    'convert-webp': 'bg-violet-500/10 text-violet-500',   'convert-bmp':  'bg-violet-500/10 text-violet-500',
    'img2pdf':      'bg-emerald-500/10 text-emerald-500', 'pdf2img':    'bg-sky-500/10 text-sky-500',
    'mergepdf':     'bg-amber-500/10 text-amber-500',     'merge-pdf-img':'bg-gray-500/10 text-gray-500',
    'splitpdf':     'bg-rose-500/10 text-rose-500',       'compresspdf':'bg-orange-500/10 text-orange-500',
    'docx2pdf':     'bg-gray-500/10 text-gray-500',       'ppt2pdf':    'bg-gray-500/10 text-gray-500',
    'excel2pdf':    'bg-gray-500/10 text-gray-500',       'text2pdf':   'bg-teal-500/10 text-teal-500',
    'pdf2docx':     'bg-gray-500/10 text-gray-500',       'pdf2ppt':    'bg-gray-500/10 text-gray-500',
    'pdf2excel':    'bg-gray-500/10 text-gray-500',       'pdf2text':   'bg-indigo-500/10 text-indigo-500',
    'lockpdf':      'bg-yellow-500/10 text-yellow-500',   'unlockpdf':  'bg-gray-500/10 text-gray-500',
  };

  const TOOL_MAP = {};
  Object.values(TOOLS_DATA).forEach(cat => {
    cat.sections.forEach(sec => {
      sec.tools.forEach(t => { TOOL_MAP[t.id] = t; });
    });
  });

  // ===========================================================================
  // 3. DOM ELEMENTS
  // ===========================================================================
  const htmlRoot       = document.documentElement;
  const cursorLight    = document.getElementById('cursorLight');
  const escHintBadge   = document.getElementById('escHintBadge');
  const toastContainer = document.getElementById('toastContainer');
  const bubbleContainer= document.getElementById('bubbleContainer');
  const customContextMenu = document.getElementById('customContextMenu');

  // Views
  const homeView       = document.getElementById('homeView');
  const categoryView   = document.getElementById('categoryView');
  const workspaceView  = document.getElementById('workspaceView');
  const aboutView      = document.getElementById('aboutView');
  const donateView     = document.getElementById('donateView');

  // Navigation Buttons
  const catCards       = document.querySelectorAll('.category-card');
  const catBackBtn     = document.getElementById('catBackBtn');
  const catBreadcrumb  = document.getElementById('catBreadcrumbLabel');
  const catHeroTitle   = document.getElementById('catHeroTitle');
  const catHeroDesc    = document.getElementById('catHeroDesc');
  const catHeroIcon    = document.getElementById('catHeroIcon');
  const catBody        = document.getElementById('categoryBody');

  const wsBackBtn      = document.getElementById('wsBackBtn');
  const wsBackLabel    = document.getElementById('wsBackLabel');
  const wsCatLabel     = document.getElementById('wsCatLabel');
  const wsToolLabel    = document.getElementById('wsToolLabel');
  const wsStatusBadge  = document.getElementById('wsStatusBadge');

  const aboutBackBtn   = document.getElementById('aboutBackBtn');
  const donateBackBtn  = document.getElementById('donateBackBtn');
  const footerAboutLink= document.getElementById('footerAboutLink');
  const footerDonateLink= document.getElementById('footerDonateLink');

  // Context Menu Buttons
  const ctxRefresh     = document.getElementById('ctxRefresh');
  const ctxAbout       = document.getElementById('ctxAbout');
  const ctxDonate      = document.getElementById('ctxDonate');

  // Language Dropdown
  const langToggleBtn  = document.getElementById('langToggleBtn');
  const langMenu       = document.getElementById('langMenu');
  const currentLangLabel = document.getElementById('currentLangLabel');
  const langOptions    = document.querySelectorAll('.lang-option');

  // Theme Buttons
  const themeBtns = [
    document.getElementById('themeToggleBtn'),
    document.getElementById('themeToggleBtn2'),
    document.getElementById('themeToggleBtn3'),
    document.getElementById('themeToggleBtn4'),
    document.getElementById('themeToggleBtn5'),
  ].filter(Boolean);

  let currentCategory = 'image';
  let currentToolId   = null;
  let currentLang     = localStorage.getItem('ks-lang') || 'id';

  // ===========================================================================
  // 4. LANGUAGE SYSTEM (i18n)
  // ===========================================================================
  function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) lang = 'id';
    currentLang = lang;
    localStorage.setItem('ks-lang', lang);

    htmlRoot.setAttribute('lang', lang);
    htmlRoot.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // Update Language Dropdown
    currentLangLabel.textContent = lang.toUpperCase();
    langOptions.forEach(opt => {
      opt.classList.toggle('active', opt.dataset.lang === lang);
    });

    // Translate all [data-i18n]
    const dict = TRANSLATIONS[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) el.textContent = dict[key];
    });

    // Translate placeholders [data-i18n-ph]
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (dict[key]) el.setAttribute('placeholder', dict[key]);
    });

    // If category view is open, re-render tools to update labels
    if (!categoryView.classList.contains('hidden')) {
      openCategory(currentCategory);
    }
  }

  // Language Menu Toggle
  langToggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langMenu.classList.toggle('hidden');
  });

  langOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      setLanguage(opt.dataset.lang);
      langMenu.classList.add('hidden');
    });
  });

  document.addEventListener('click', (e) => {
    if (!langToggleBtn.contains(e.target) && !langMenu.contains(e.target)) {
      langMenu.classList.add('hidden');
    }
  });

  // ===========================================================================
  // 5. CUSTOM RIGHT-CLICK CONTEXT MENU & BUBBLE LIGHT EFFECT
  // ===========================================================================
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();

    // Trigger Expanding Bubble Light Animation at cursor
    createBubbleBurst(e.clientX, e.clientY);

    // Show and position custom context menu
    customContextMenu.classList.remove('hidden');

    const menuW = 210;
    const menuH = 150;
    let posX = e.clientX;
    let posY = e.clientY;

    if (posX + menuW > window.innerWidth) posX = window.innerWidth - menuW - 12;
    if (posY + menuH > window.innerHeight) posY = window.innerHeight - menuH - 12;

    customContextMenu.style.left = posX + 'px';
    customContextMenu.style.top = posY + 'px';
  });

  function createBubbleBurst(x, y) {
    const burst = document.createElement('div');
    burst.className = 'bubble-burst';
    burst.style.left = x + 'px';
    burst.style.top = y + 'px';

    const ring = document.createElement('div');
    ring.className = 'bubble-ring';
    ring.style.left = x + 'px';
    ring.style.top = y + 'px';

    bubbleContainer.appendChild(burst);
    bubbleContainer.appendChild(ring);

    setTimeout(() => {
      burst.remove();
      ring.remove();
    }, 700);
  }

  function hideContextMenu() {
    customContextMenu.classList.add('hidden');
  }

  document.addEventListener('click', hideContextMenu);
  document.addEventListener('scroll', hideContextMenu);
  window.addEventListener('resize', hideContextMenu);

  // Context Menu Actions
  ctxRefresh.addEventListener('click', () => {
    hideContextMenu();
    window.location.reload();
  });

  ctxAbout.addEventListener('click', () => {
    hideContextMenu();
    openAboutView();
  });

  ctxDonate.addEventListener('click', () => {
    hideContextMenu();
    openDonateView();
  });

  // ===========================================================================
  // 6. CURSOR BACKLIGHT (HOME SCREEN)
  // ===========================================================================
  document.addEventListener('mousemove', (e) => {
    if (!homeView.classList.contains('hidden')) {
      cursorLight.style.left = e.clientX + 'px';
      cursorLight.style.top  = e.clientY + 'px';
      cursorLight.style.opacity = '1';
    } else {
      cursorLight.style.opacity = '0';
    }
  });

  // ===========================================================================
  // 7. THEME SYSTEM (LIGHT / DARK)
  // ===========================================================================
  const themeLabels = document.querySelectorAll('.theme-label');

  function setTheme(theme) {
    if (theme === 'light') {
      htmlRoot.classList.remove('dark'); htmlRoot.classList.add('light');
      themeLabels.forEach(l => l.textContent = 'Light');
    } else {
      htmlRoot.classList.remove('light'); htmlRoot.classList.add('dark');
      themeLabels.forEach(l => l.textContent = 'Dark');
    }
    localStorage.setItem('ks-theme', theme);
  }

  function toggleTheme() {
    setTheme(htmlRoot.classList.contains('dark') ? 'light' : 'dark');
  }

  themeBtns.forEach(btn => btn.addEventListener('click', toggleTheme));
  const savedTheme = localStorage.getItem('ks-theme');
  setTheme(savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));

  // ===========================================================================
  // 8. NAVIGATION ARCHITECTURE (HOME, CATEGORY, WORKSPACE, ABOUT, DONATE)
  // ===========================================================================
  function showOnly(view) {
    [homeView, categoryView, workspaceView, aboutView, donateView].forEach(v => v.classList.add('hidden'));
    if (view) view.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  window.goHome = () => {
    showOnly(homeView);
    escHintBadge.classList.add('hidden');
  };

  function openAboutView() {
    showOnly(aboutView);
    aboutView.removeAttribute('aria-hidden');
    escHintBadge.classList.remove('hidden');
  }

  function openDonateView() {
    showOnly(donateView);
    donateView.removeAttribute('aria-hidden');
    escHintBadge.classList.remove('hidden');
  }
  window.openDonateView = openDonateView;

  function openCategory(catId) {
    currentCategory = catId;
    const cat = TOOLS_DATA[catId];
    const dict = TRANSLATIONS[currentLang];

    catHeroTitle.textContent = dict[cat.labelKey] || cat.labelKey;
    catBreadcrumb.textContent = dict[cat.labelKey] || cat.labelKey;
    catHeroDesc.textContent = dict[cat.heroDescKey] || cat.heroDescKey;

    const isImage = catId === 'image';
    catHeroIcon.className = `cat-hero-icon ${isImage ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' : 'bg-sky-500/10 text-sky-500 border border-sky-500/20'}`;
    catHeroIcon.innerHTML = isImage
      ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>`
      : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M9 13h6M9 17h3"/></svg>`;

    catBody.innerHTML = '';
    cat.sections.forEach(sec => {
      const secEl = document.createElement('div');
      secEl.className = 'tool-section';
      const secLabel = dict[sec.labelKey] || sec.labelKey;
      secEl.innerHTML = `
        <div class="tool-section-header">
          <span class="tool-section-label">${secLabel}</span>
          <span class="tool-section-count">${sec.tools.length}</span>
        </div>
        <div class="tool-grid" id="${sec.id}-grid"></div>
      `;
      catBody.appendChild(secEl);

      const grid = document.getElementById(`${sec.id}-grid`);
      sec.tools.forEach(tool => {
        const card = document.createElement('button');
        card.type = 'button';
        card.className = `tool-item-card ${tool.status}`;
        card.title = tool.label;
        if (tool.status === 'soon') card.disabled = true;

        const iconHtml = TOOL_ICONS[tool.id] || '';
        const colorClass = TOOL_ICON_COLORS[tool.id] || 'bg-gray-500/10 text-gray-400';
        const badgeText = tool.status === 'ready' ? dict.badge_ready : dict.badge_soon;

        card.innerHTML = `
          <div class="tool-item-icon ${colorClass}">
            ${iconHtml}
          </div>
          <div class="tool-item-name">${tool.label}</div>
          <span class="tool-item-badge ${tool.status === 'ready' ? 'badge-ready' : 'badge-soon'}">
            ${badgeText}
          </span>
        `;
        if (tool.status === 'ready') {
          card.addEventListener('click', () => openTool(tool.id));
        }
        grid.appendChild(card);
      });
    });

    showOnly(categoryView);
    categoryView.removeAttribute('aria-hidden');
    escHintBadge.classList.remove('hidden');
  }

  function openTool(toolId) {
    currentToolId = toolId;
    const tool = TOOL_MAP[toolId];
    if (!tool) return;

    const dict = TRANSLATIONS[currentLang];
    const catKey = Object.keys(TOOLS_DATA).find(k =>
      TOOLS_DATA[k].sections.some(s => s.tools.some(t => t.id === toolId))
    );
    const catLabel = dict[TOOLS_DATA[catKey]?.labelKey] || '';
    wsCatLabel.textContent = catLabel;
    wsToolLabel.textContent = tool.label;
    wsBackLabel.textContent = catLabel.replace(' Tools', '');

    if (tool.status === 'ready') {
      wsStatusBadge.textContent = dict.badge_ready;
      wsStatusBadge.className = 'ws-status-badge ws-badge-ready';
    } else {
      wsStatusBadge.textContent = dict.badge_soon;
      wsStatusBadge.className = 'ws-status-badge ws-badge-soon';
    }

    document.querySelectorAll('.tool-panel').forEach(p => p.classList.add('hidden'));
    const panel = document.getElementById(tool.panel);
    if (panel) panel.classList.remove('hidden');

    configureTool(toolId, tool);

    showOnly(workspaceView);
    workspaceView.removeAttribute('aria-hidden');
    escHintBadge.classList.remove('hidden');
  }

  function configureTool(toolId, tool) {
    if (tool.panel === 'panelComingSoon') return;

    if (tool.panel === 'panelImgCompress') {
      const fmt = tool.ext.toUpperCase();
      document.getElementById('icDropzoneHint').textContent = `${TRANSLATIONS[currentLang].dz_hint_compress} (${fmt})`;
      document.getElementById('icFileInput').accept = tool.accept;
      icFiles = [];
      renderIcGrid();
    }

    if (tool.panel === 'panelImgConvert') {
      document.getElementById('icvDropzoneHint').textContent =
        `${TRANSLATIONS[currentLang].dz_hint_convert} (${tool.srcFmt.toUpperCase()})`;
      document.getElementById('icvSourceFormat').textContent = tool.srcFmt.toUpperCase();
      document.getElementById('icvFileInput').accept = tool.srcMime;

      const select = document.getElementById('icvTargetFormat');
      select.innerHTML = '';
      (tool.targets || []).forEach(t => {
        const o = document.createElement('option');
        o.value = t;
        o.textContent = t.toUpperCase();
        select.appendChild(o);
      });
      updateIcvQualityVisibility();
      icvFiles = [];
      renderIcvGrid();
    }

    if (tool.panel === 'panelStirlingOffice2Pdf') {
      const ext = (tool.ext || 'docx').toUpperCase();
      document.getElementById('so2pDropzoneHint').textContent =
        `Pilih berkas ${ext} untuk dikonversi menjadi PDF via Stirling-PDF`;
      document.getElementById('so2pFileInput').accept = tool.accept || '.docx,.doc,.pptx,.ppt,.xlsx,.xls';
      so2pFileData = null;
      document.getElementById('so2pDropzone').classList.remove('hidden');
      document.getElementById('so2pInfoBar').classList.add('hidden');
      document.getElementById('so2pConvertBtn').disabled = true;
      const storedUrl = localStorage.getItem('ks-stirling-url');
      if (storedUrl) {
        document.getElementById('stirlingServerUrl').value = storedUrl;
        document.getElementById('stirlingServerDisplay').textContent = storedUrl;
      }
      pingStirling();
    }

    if (tool.panel === 'panelStirlingPdf2Office') {
      const fmt = tool.targetFormat || 'docx';
      document.getElementById('sp2oDropzoneHint').textContent =
        `Pilih dokumen PDF yang ingin diubah ke ${fmt.toUpperCase()} yang dapat diedit`;
      document.getElementById('sp2oTargetFormat').value = fmt;
      document.getElementById('sp2oExtDisplay').textContent = '.' + fmt;
      sp2oFileData = null;
      document.getElementById('sp2oDropzone').classList.remove('hidden');
      document.getElementById('sp2oInfoBar').classList.add('hidden');
      document.getElementById('sp2oConvertBtn').disabled = true;
      const storedUrl = localStorage.getItem('ks-stirling-url');
      if (storedUrl) document.getElementById('sp2oServerUrl').value = storedUrl;
    }

    if (tool.panel === 'panelLockPdf') {
      lpPdfData = null;
      document.getElementById('lpDropzone').classList.remove('hidden');
      document.getElementById('lpInfoBar').classList.add('hidden');
      document.getElementById('lpLockBtn').disabled = true;
      document.getElementById('lpUserPassword').value = '';
      document.getElementById('lpConfirmPassword').value = '';
      document.getElementById('lpOwnerPassword').value = '';
    }

    if (tool.panel === 'panelUnlockPdf') {
      ulpPdfData = null;
      document.getElementById('ulpDropzone').classList.remove('hidden');
      document.getElementById('ulpInfoBar').classList.add('hidden');
      document.getElementById('ulpUnlockBtn').disabled = true;
      document.getElementById('ulpPassword').value = '';
    }
  }

  // Navigation Event Listeners
  catCards.forEach(card => card.addEventListener('click', () => openCategory(card.dataset.category)));
  catBackBtn.addEventListener('click', goHome);
  wsBackBtn.addEventListener('click', () => openCategory(currentCategory));
  aboutBackBtn.addEventListener('click', goHome);
  donateBackBtn.addEventListener('click', goHome);

  if (footerAboutLink) footerAboutLink.addEventListener('click', openAboutView);
  if (footerDonateLink) footerDonateLink.addEventListener('click', (e) => {
    e.preventDefault();
    openDonateView();
  });

  // ESC Key Navigation
  window.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    hideContextMenu();
    if (!workspaceView.classList.contains('hidden')) {
      openCategory(currentCategory);
    } else if (!categoryView.classList.contains('hidden') || !aboutView.classList.contains('hidden') || !donateView.classList.contains('hidden')) {
      goHome();
    }
  });

  // ===========================================================================
  // 9. QRIS & DONATION INTERACTION HELPERS
  // ===========================================================================
  const qrisAmountBtns = document.querySelectorAll('.qris-amount-btn');
  const qrisNominalDisplay = document.getElementById('qrisNominalDisplay');

  qrisAmountBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      qrisAmountBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const val = parseInt(btn.dataset.amount, 10);
      qrisNominalDisplay.textContent = 'Rp ' + val.toLocaleString('id-ID');
      showToast(`Nominal QRIS dipilih: Rp ${val.toLocaleString('id-ID')}`, 'info');
    });
  });

  window.copyToClipboard = (text, successMsg) => {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMsg || 'Disalin ke clipboard!', 'success');
    }).catch(() => {
      showToast('Gagal menyalin otomatis.', 'error');
    });
  };

  // Toast Notifications
  function showToast(msg, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    const icons = {
      success: `<svg style="width:16px;height:16px;color:#10B981;flex-shrink:0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`,
      error:   `<svg style="width:16px;height:16px;color:#EF4444;flex-shrink:0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
      info:    `<svg style="width:16px;height:16px;color:#0EA5E9;flex-shrink:0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
    };
    toast.innerHTML = `${icons[type] || icons.info}<span>${msg}</span>`;
    toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.style.transition = 'opacity .3s, transform .3s';
      toast.style.opacity = '0'; toast.style.transform = 'translateY(8px)';
      setTimeout(() => toast.remove(), 300);
    }, 3800);
  }

  function formatBytes(bytes) {
    if (!bytes) return '0 B';
    const k = 1024, s = ['B','KB','MB','GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / k ** i).toFixed(1)) + ' ' + s[i];
  }

  function fileToDataUrl(file) {
    return new Promise((res, rej) => {
      const r = new FileReader();
      r.onload = () => res(r.result);
      r.onerror = rej;
      r.readAsDataURL(file);
    });
  }

  function downloadDataUrl(dataUrl, filename) {
    const a = document.createElement('a');
    a.href = dataUrl; a.download = filename;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  }

  function downloadBytes(bytes, filename, mime = 'application/pdf') {
    const blob = new Blob([bytes], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = filename;
    document.body.appendChild(a); a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function setupDropzone(dropEl, inputEl, callback) {
    if (!dropEl || !inputEl) return;
    dropEl.addEventListener('click', () => inputEl.click());
    inputEl.addEventListener('change', (e) => {
      if (e.target.files?.length) { callback(e.target.files); inputEl.value = ''; }
    });
    ['dragenter','dragover'].forEach(ev => {
      dropEl.addEventListener(ev, e => { e.preventDefault(); dropEl.classList.add('drag-active'); });
    });
    ['dragleave','drop'].forEach(ev => {
      dropEl.addEventListener(ev, e => { e.preventDefault(); dropEl.classList.remove('drag-active'); });
    });
    dropEl.addEventListener('drop', e => {
      if (e.dataTransfer?.files?.length) callback(e.dataTransfer.files);
    });
  }

  // ===========================================================================
  // 10. TOOL 1: IMAGE COMPRESS
  // ===========================================================================
  let icFiles = [];
  const icDropzone   = document.getElementById('icDropzone');
  const icFileInput  = document.getElementById('icFileInput');
  const icGrid       = document.getElementById('icGrid');
  const icListHeader = document.getElementById('icListHeader');
  const icCountBadge = document.getElementById('icCountBadge');
  const icClearBtn   = document.getElementById('icClearBtn');
  const icCompressBtn= document.getElementById('icCompressBtn');
  const icSpinner    = document.getElementById('icSpinner');
  const icBtnText    = document.getElementById('icBtnText');
  const icQuality    = document.getElementById('icQuality');
  const icQualityVal = document.getElementById('icQualityVal');

  setupDropzone(icDropzone, icFileInput, files => {
    Array.from(files).forEach(f => {
      const isImg = f.type.startsWith('image/') || /\.(heic|heif|bmp|jpg|jpeg|png|webp)$/i.test(f.name);
      if (isImg) icFiles.push(f);
    });
    renderIcGrid();
    showToast(`${files.length} gambar ditambahkan.`, 'success');
  });

  icQuality.addEventListener('input', () => { icQualityVal.textContent = icQuality.value + '%'; });
  icClearBtn.addEventListener('click', () => { icFiles = []; renderIcGrid(); });

  function renderIcGrid() {
    icGrid.innerHTML = '';
    const total = icFiles.length;
    icListHeader.classList.toggle('hidden', total === 0);
    icCompressBtn.disabled = total === 0;
    icCountBadge.textContent = `${total} File`;
    icFiles.forEach((file, i) => {
      const url = URL.createObjectURL(file);
      const card = document.createElement('div');
      card.className = 'thumb-card animate-in';
      card.innerHTML = `
        <div class="thumb-img-wrapper"><img src="${url}" alt="${file.name}" loading="lazy"></div>
        <div class="thumb-meta">${file.name}</div>
        <div style="font-size:10px;color:var(--text-muted);margin-top:2px;font-family:monospace">${formatBytes(file.size)}</div>
        <div style="display:flex;justify-content:flex-end;margin-top:4px;">
          <button type="button" class="icon-action-btn danger" title="Hapus">
            <svg style="width:12px;height:12px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
          </button>
        </div>
      `;
      card.querySelector('button').addEventListener('click', () => {
        URL.revokeObjectURL(url);
        icFiles.splice(i, 1);
        renderIcGrid();
      });
      icGrid.appendChild(card);
    });
  }

  icCompressBtn.addEventListener('click', async () => {
    if (!icFiles.length) return;
    icCompressBtn.disabled = true;
    icSpinner.classList.remove('hidden');
    icBtnText.textContent = 'Mengkompres...';
    const quality = parseInt(icQuality.value) / 100;
    const maxW = parseInt(document.getElementById('icMaxWidth').value) || 0;

    for (const file of icFiles) {
      try {
        const decoded = await decodeHeicIfNeeded(file);
        const dataUrl = await compressImageCanvas(decoded, quality, maxW);
        const ext = decoded.type.includes('png') ? 'png' : (decoded.type.includes('webp') ? 'webp' : 'jpg');
        const name = file.name.replace(/\.[^.]+$/, '') + `-kompres.${ext}`;
        downloadDataUrl(dataUrl, name);
        await new Promise(r => setTimeout(r, 120));
      } catch (e) {
        showToast(`Gagal kompres ${file.name}: ${e.message}`, 'error');
      }
    }

    icCompressBtn.disabled = false;
    icSpinner.classList.add('hidden');
    icBtnText.textContent = TRANSLATIONS[currentLang].btn_compress_all;
    showToast('Semua gambar selesai dikompres!', 'success');
  });

  // Decode HEIC to JPEG blob via heic2any (catdad-experiments/heic-convert browser port)
  async function decodeHeicIfNeeded(file) {
    const isHeic = /\.(heic|heif)$/i.test(file.name) || ['image/heic','image/heif'].includes(file.type);
    if (!isHeic) return file;
    if (!window.heic2any) throw new Error('Library heic2any tidak tersedia. Pastikan koneksi internet aktif.');
    showToast('Mendekode HEIC… mohon tunggu sebentar.', 'info');
    const rawBlob = await window.heic2any({ blob: file, toType: 'image/jpeg', quality: 0.95 });
    const outBlob = Array.isArray(rawBlob) ? rawBlob[0] : rawBlob;
    return new File([outBlob], file.name.replace(/\.(heic|heif)$/i, '.jpg'), { type: 'image/jpeg' });
  }

  function compressImageCanvas(file, quality, maxWidth = 0) {
    return new Promise((res, rej) => {
      const url = URL.createObjectURL(file);
      const img = new Image();
      img.onload = () => {
        let w = img.naturalWidth, h = img.naturalHeight;
        if (maxWidth > 0 && w > maxWidth) { h = Math.round(h * maxWidth / w); w = maxWidth; }
        const canvas = document.createElement('canvas');
        canvas.width = w; canvas.height = h;
        const ctx = canvas.getContext('2d');
        if (!file.type.includes('png') && !file.type.includes('webp')) {
          ctx.fillStyle = '#FFFFFF'; ctx.fillRect(0, 0, w, h);
        }
        ctx.drawImage(img, 0, 0, w, h);
        URL.revokeObjectURL(url);
        const mime = file.type.includes('png') ? 'image/png' : (file.type.includes('webp') ? 'image/webp' : 'image/jpeg');
        res(canvas.toDataURL(mime, quality));
      };
      img.onerror = rej;
      img.src = url;
    });
  }

  // ===========================================================================
  // 11. TOOL 2: IMAGE CONVERT
  // ===========================================================================
  let icvFiles = [];
  const icvDropzone    = document.getElementById('icvDropzone');
  const icvFileInput   = document.getElementById('icvFileInput');
  const icvGrid        = document.getElementById('icvGrid');
  const icvListHeader  = document.getElementById('icvListHeader');
  const icvCountBadge  = document.getElementById('icvCountBadge');
  const icvClearBtn    = document.getElementById('icvClearBtn');
  const icvConvertBtn  = document.getElementById('icvConvertBtn');
  const icvSpinner     = document.getElementById('icvSpinner');
  const icvBtnText     = document.getElementById('icvBtnText');
  const icvTargetFormat= document.getElementById('icvTargetFormat');
  const icvQuality     = document.getElementById('icvQuality');
  const icvQualityVal  = document.getElementById('icvQualityVal');
  const icvQualityRow  = document.getElementById('icvQualityRow');

  setupDropzone(icvDropzone, icvFileInput, files => {
    Array.from(files).forEach(f => {
      const isImg = f.type.startsWith('image/') || /\.(heic|heif|bmp|jpg|jpeg|png|webp)$/i.test(f.name);
      if (isImg) icvFiles.push(f);
    });
    renderIcvGrid();
    showToast(`${files.length} gambar ditambahkan.`, 'success');
  });

  icvTargetFormat.addEventListener('change', updateIcvQualityVisibility);
  icvQuality.addEventListener('input', () => { icvQualityVal.textContent = icvQuality.value + '%'; });
  icvClearBtn.addEventListener('click', () => { icvFiles = []; renderIcvGrid(); });

  function updateIcvQualityVisibility() {
    const v = icvTargetFormat.value;
    icvQualityRow.classList.toggle('hidden', !['jpg','jpeg'].includes(v));
  }

  function renderIcvGrid() {
    icvGrid.innerHTML = '';
    const total = icvFiles.length;
    icvListHeader.classList.toggle('hidden', total === 0);
    icvConvertBtn.disabled = total === 0;
    icvCountBadge.textContent = `${total} File`;
    icvFiles.forEach((file, i) => {
      const url = URL.createObjectURL(file);
      const card = document.createElement('div');
      card.className = 'thumb-card animate-in';
      card.innerHTML = `
        <div class="thumb-img-wrapper"><img src="${url}" alt="${file.name}" loading="lazy"></div>
        <div class="thumb-meta">${file.name}</div>
        <div style="font-size:10px;color:var(--text-muted);margin-top:2px;font-family:monospace">${formatBytes(file.size)}</div>
        <div style="display:flex;justify-content:flex-end;margin-top:4px;">
          <button type="button" class="icon-action-btn danger" title="Hapus">
            <svg style="width:12px;height:12px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
          </button>
        </div>
      `;
      card.querySelector('button').addEventListener('click', () => {
        URL.revokeObjectURL(url);
        icvFiles.splice(i, 1);
        renderIcvGrid();
      });
      icvGrid.appendChild(card);
    });
  }

  icvConvertBtn.addEventListener('click', async () => {
    if (!icvFiles.length) return;
    icvConvertBtn.disabled = true;
    icvSpinner.classList.remove('hidden');
    icvBtnText.textContent = 'Mengkonversi...';

    const targetFmt = icvTargetFormat.value;
    const mimeMap = { jpg:'image/jpeg', jpeg:'image/jpeg', png:'image/png', webp:'image/webp', bmp:'image/bmp' };
    const targetMime = mimeMap[targetFmt] || 'image/png';
    const quality = parseInt(icvQuality.value) / 100;

    for (const file of icvFiles) {
      try {
        const dataUrl = await convertImageCanvas(file, targetMime, quality);
        const name = file.name.replace(/\.[^.]+$/, '') + `.${targetFmt}`;
        downloadDataUrl(dataUrl, name);
        await new Promise(r => setTimeout(r, 120));
      } catch (e) {
        showToast(`Gagal konversi ${file.name}`, 'error');
      }
    }

    icvConvertBtn.disabled = false;
    icvSpinner.classList.add('hidden');
    icvBtnText.textContent = TRANSLATIONS[currentLang].btn_convert_all;
    showToast('Konversi selesai!', 'success');
  });

  function convertImageCanvas(file, targetMime, quality = 0.92) {
    return new Promise((res, rej) => {
      const url = URL.createObjectURL(file);
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth; canvas.height = img.naturalHeight;
        const ctx = canvas.getContext('2d');
        if (['image/jpeg','image/bmp'].includes(targetMime)) {
          ctx.fillStyle = '#FFFFFF'; ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
        ctx.drawImage(img, 0, 0);
        URL.revokeObjectURL(url);
        res(canvas.toDataURL(targetMime, quality));
      };
      img.onerror = rej;
      img.src = url;
    });
  }

  // ===========================================================================
  // 12. TOOL 3: IMAGE TO PDF
  // ===========================================================================
  let imageFiles = [];
  const imgDropzone     = document.getElementById('imgDropzone');
  const imgFileInput    = document.getElementById('imgFileInput');
  const imgGrid         = document.getElementById('imgGrid');
  const imgListHeader   = document.getElementById('imgListHeader');
  const imgCountBadge   = document.getElementById('imgCountBadge');
  const clearAllImagesBtn= document.getElementById('clearAllImagesBtn');
  const convertImg2PdfBtn= document.getElementById('convertImg2PdfBtn');
  const convertImg2PdfSpinner= document.getElementById('convertImg2PdfSpinner');
  const convertImg2PdfText= document.getElementById('convertImg2PdfText');

  setupDropzone(imgDropzone, imgFileInput, files => {
    Array.from(files).filter(f => f.type.startsWith('image/')).forEach(f => {
      const url = URL.createObjectURL(f);
      const img = new Image();
      img.onload = () => {
        imageFiles.push({ file: f, url, w: img.naturalWidth, h: img.naturalHeight });
        renderImgGrid();
      };
      img.src = url;
    });
  });

  clearAllImagesBtn.addEventListener('click', () => {
    imageFiles.forEach(i => URL.revokeObjectURL(i.url));
    imageFiles = []; renderImgGrid();
  });

  function renderImgGrid() {
    imgGrid.innerHTML = '';
    imgListHeader.classList.toggle('hidden', !imageFiles.length);
    convertImg2PdfBtn.disabled = !imageFiles.length;
    imgCountBadge.textContent = `${imageFiles.length} File`;
    imageFiles.forEach((item, idx) => {
      const card = document.createElement('div');
      card.className = 'thumb-card animate-in';
      card.innerHTML = `
        <div class="thumb-img-wrapper"><img src="${item.url}" loading="lazy"></div>
        <div class="thumb-meta">${idx + 1}. ${item.file.name}</div>
        <div style="display:flex;gap:4px;margin-top:4px;">
          <button type="button" class="icon-action-btn ml-btn" title="Kiri" ${idx===0?'disabled style="opacity:.3"':''}>
            <svg style="width:12px;height:12px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <button type="button" class="icon-action-btn mr-btn" title="Kanan" ${idx===imageFiles.length-1?'disabled style="opacity:.3"':''}>
            <svg style="width:12px;height:12px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
          </button>
          <button type="button" class="icon-action-btn danger del-btn" title="Hapus" style="margin-left:auto">
            <svg style="width:12px;height:12px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/></svg>
          </button>
        </div>
      `;
      if (idx > 0) card.querySelector('.ml-btn').addEventListener('click', () => { [imageFiles[idx-1],imageFiles[idx]] = [imageFiles[idx],imageFiles[idx-1]]; renderImgGrid(); });
      if (idx < imageFiles.length-1) card.querySelector('.mr-btn').addEventListener('click', () => { [imageFiles[idx+1],imageFiles[idx]] = [imageFiles[idx],imageFiles[idx+1]]; renderImgGrid(); });
      card.querySelector('.del-btn').addEventListener('click', () => { URL.revokeObjectURL(item.url); imageFiles.splice(idx,1); renderImgGrid(); });
      imgGrid.appendChild(card);
    });
  }

  convertImg2PdfBtn.addEventListener('click', async () => {
    if (!imageFiles.length || !window.jspdf) return;
    convertImg2PdfBtn.disabled = true;
    convertImg2PdfSpinner.classList.remove('hidden');
    convertImg2PdfText.textContent = 'Membuat PDF...';
    try {
      const { jsPDF } = window.jspdf;
      const pageSz = document.getElementById('imgPageSize').value;
      const orient = document.getElementById('imgOrientation').value;
      const margin = parseInt(document.getElementById('imgMargin').value)||0;
      let doc = null;
      for (let i = 0; i < imageFiles.length; i++) {
        const item = imageFiles[i];
        const isLand = item.w > item.h;
        const o = orient === 'auto' ? (isLand ? 'l' : 'p') : orient;
        const fmt = pageSz === 'fit' ? [item.w * 0.2646, item.h * 0.2646] : pageSz;
        const finalO = pageSz === 'fit' ? (item.w >= item.h ? 'l' : 'p') : o;
        if (i === 0) doc = new jsPDF({ orientation: finalO, unit: 'mm', format: fmt });
        else doc.addPage(fmt, finalO);
        const pw = doc.internal.pageSize.getWidth(), ph = doc.internal.pageSize.getHeight();
        const aw = pw - margin*2, ah = ph - margin*2;
        const ratio = item.w / item.h;
        let fw, fh;
        if (ratio > aw/ah) { fw = aw; fh = aw/ratio; } else { fh = ah; fw = ah*ratio; }
        const px = margin + (aw-fw)/2, py = margin + (ah-fh)/2;
        const imgData = await fileToDataUrl(item.file);
        doc.addImage(imgData, item.file.type.includes('png')?'PNG':'JPEG', px, py, fw, fh, '', 'FAST');
      }
      const outName = (document.getElementById('imgOutputName').value.trim() || 'dokumen') + '.pdf';
      doc.save(outName);
      showToast(`PDF "${outName}" berhasil dibuat!`, 'success');
    } catch(e) { showToast('Gagal membuat PDF: ' + e.message, 'error'); }
    convertImg2PdfBtn.disabled = false;
    convertImg2PdfSpinner.classList.add('hidden');
    convertImg2PdfText.textContent = TRANSLATIONS[currentLang].btn_create_pdf;
  });

  // ===========================================================================
  // 13. TOOL 4: PDF TO IMAGE
  // ===========================================================================
  let currentPdfDoc = null, currentPdfFile = null, renderedPages = [];
  const pdfDropzone  = document.getElementById('pdfDropzone');
  const pdfFileInput = document.getElementById('pdfFileInput');
  const pdfInfoBar   = document.getElementById('pdfInfoBar');
  const pdfChangeFileBtn = document.getElementById('pdfChangeFileBtn');
  const pdfPagesHeader= document.getElementById('pdfPagesHeader');
  const pdfPageRenderingState = document.getElementById('pdfPageRenderingState');
  const pdfPagesGrid = document.getElementById('pdfPagesGrid');
  const downloadAllImagesBtn = document.getElementById('downloadAllImagesBtn');
  const downloadZipSpinner   = document.getElementById('downloadZipSpinner');
  const downloadZipText      = document.getElementById('downloadZipText');

  setupDropzone(pdfDropzone, pdfFileInput, async files => {
    const f = Array.from(files).find(x => x.type==='application/pdf'||x.name.endsWith('.pdf'));
    if (!f) { showToast('Pilih file PDF.', 'error'); return; }
    currentPdfFile = f;
    document.getElementById('pdfLoadedName').textContent = f.name;
    document.getElementById('pdfLoadedMeta').textContent = 'Memuat...';
    pdfInfoBar.classList.remove('hidden');
    pdfDropzone.classList.add('hidden');
    pdfPagesHeader.classList.remove('hidden');
    pdfPagesGrid.innerHTML = ''; downloadAllImagesBtn.disabled = true;
    try {
      const buf = await f.arrayBuffer();
      currentPdfDoc = await window.pdfjsLib.getDocument({ data: buf }).promise;
      document.getElementById('pdfLoadedMeta').textContent = `${currentPdfDoc.numPages} Halaman · ${formatBytes(f.size)}`;
      await renderPdfPages(currentPdfDoc);
    } catch(e) { showToast('Gagal baca PDF: ' + e.message, 'error'); pdfDropzone.classList.remove('hidden'); pdfInfoBar.classList.add('hidden'); }
  });

  pdfChangeFileBtn.addEventListener('click', () => { pdfFileInput.click(); });
  document.getElementById('pdfImgFormat').addEventListener('change', () => { if(currentPdfDoc) renderPdfPages(currentPdfDoc); });
  document.getElementById('pdfImgScale').addEventListener('change', () => { if(currentPdfDoc) renderPdfPages(currentPdfDoc); });

  async function renderPdfPages(pdfDoc) {
    renderedPages = []; pdfPagesGrid.innerHTML = '';
    const total = pdfDoc.numPages;
    const scale = parseFloat(document.getElementById('pdfImgScale').value) || 2;
    const fmt = document.getElementById('pdfImgFormat').value;
    pdfPageRenderingState.textContent = `0/${total} halaman...`;
    for (let p = 1; p <= total; p++) {
      const page = await pdfDoc.getPage(p);
      const vp = page.getViewport({ scale });
      const canvas = document.createElement('canvas');
      canvas.width = vp.width; canvas.height = vp.height;
      await page.render({ canvasContext: canvas.getContext('2d'), viewport: vp }).promise;
      const dataUrl = canvas.toDataURL(fmt, 0.92);
      const ext = fmt.includes('jpeg') ? 'jpg' : 'png';
      renderedPages.push({ pageNum: p, dataUrl, ext, w: vp.width, h: vp.height });

      const card = document.createElement('div');
      card.className = 'thumb-card animate-in';
      card.innerHTML = `
        <div class="thumb-img-wrapper"><img src="${dataUrl}" loading="lazy"></div>
        <div class="thumb-meta" style="font-weight:700">Halaman ${p}</div>
        <button type="button" class="btn-primary text-xs py-1 px-2 flex items-center justify-center gap-1 mt-2" style="font-size:11px">
          <svg style="width:11px;height:11px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Unduh
        </button>
      `;
      const baseName = currentPdfFile.name.replace(/\.pdf$/i,'');
      card.querySelector('button').addEventListener('click', () => {
        downloadDataUrl(dataUrl, `${baseName}-hal-${p}.${ext}`);
        showToast(`Halaman ${p} diunduh.`, 'success');
      });
      pdfPagesGrid.appendChild(card);
      pdfPageRenderingState.textContent = `${p}/${total} halaman...`;
    }
    pdfPageRenderingState.textContent = `Selesai (${total} halaman)`;
    downloadAllImagesBtn.disabled = false;
    showToast(`${total} halaman berhasil diekstrak!`, 'success');
  }

  downloadAllImagesBtn.addEventListener('click', async () => {
    if (!renderedPages.length || !window.JSZip) return;
    downloadAllImagesBtn.disabled = true;
    downloadZipSpinner.classList.remove('hidden');
    downloadZipText.textContent = 'Membuat ZIP...';
    const zip = new window.JSZip();
    const base = currentPdfFile.name.replace(/\.pdf$/i,'');
    renderedPages.forEach(p => zip.file(`${base}-hal-${p.pageNum}.${p.ext}`, p.dataUrl.split(',')[1], { base64:true }));
    const blob = await zip.generateAsync({ type:'blob' });
    downloadBytes(await blob.arrayBuffer(), `${base}-semua-gambar.zip`, 'application/zip');
    downloadAllImagesBtn.disabled = false;
    downloadZipSpinner.classList.add('hidden');
    downloadZipText.textContent = TRANSLATIONS[currentLang].btn_download_zip;
    showToast('Arsip ZIP berhasil diunduh!', 'success');
  });

  // ===========================================================================
  // 14. TOOL 5: MERGE PDF
  // ===========================================================================
  let mergeFiles = [];
  setupDropzone(document.getElementById('mergeDropzone'), document.getElementById('mergeFileInput'), async files => {
    for (const f of Array.from(files).filter(x => x.type==='application/pdf'||x.name.endsWith('.pdf'))) {
      try {
        const buf = await f.arrayBuffer();
        const doc = await window.PDFLib.PDFDocument.load(buf);
        mergeFiles.push({ file:f, arrayBuffer:buf, name:f.name, size:f.size, pageCount:doc.getPageCount() });
      } catch(e) { showToast(`Gagal baca ${f.name}`, 'error'); }
    }
    renderMergeList(); showToast(`${files.length} file ditambahkan.`, 'success');
  });

  document.getElementById('clearAllMergeBtn').addEventListener('click', () => { mergeFiles = []; renderMergeList(); });

  function renderMergeList() {
    const list = document.getElementById('mergeList');
    const header = document.getElementById('mergeListHeader');
    list.innerHTML = '';
    header.classList.toggle('hidden', !mergeFiles.length);
    document.getElementById('mergeCountBadge').textContent = `${mergeFiles.length} File`;
    document.getElementById('mergeTotalFiles').textContent = `${mergeFiles.length}`;
    document.getElementById('mergeTotalPages').textContent = `${mergeFiles.reduce((s,f)=>s+f.pageCount,0)}`;
    document.getElementById('executeMergeBtn').disabled = mergeFiles.length < 2;
    mergeFiles.forEach((item, idx) => {
      const row = document.createElement('div');
      row.className = 'merge-row-item animate-in';
      row.innerHTML = `
        <div style="display:flex;align-items:center;gap:12px;min-width:0">
          <span style="width:28px;height:28px;border-radius:8px;background:rgba(245,158,11,0.1);color:#F59E0B;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:12px;flex-shrink:0;font-family:monospace">${idx+1}</span>
          <div style="min-width:0">
            <div style="font-size:13px;font-weight:700;color:var(--text-main);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${item.name}</div>
            <div style="font-size:11px;color:var(--text-muted);font-family:monospace">${item.pageCount} hal · ${formatBytes(item.size)}</div>
          </div>
        </div>
        <div style="display:flex;gap:4px;flex-shrink:0">
          <button class="icon-action-btn up-btn" title="Naik" ${idx===0?'disabled style="opacity:.3"':''}>
            <svg style="width:12px;height:12px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m18 15-6-6-6 6"/></svg>
          </button>
          <button class="icon-action-btn dn-btn" title="Turun" ${idx===mergeFiles.length-1?'disabled style="opacity:.3"':''}>
            <svg style="width:12px;height:12px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
          </button>
          <button class="icon-action-btn danger del-btn" title="Hapus">
            <svg style="width:12px;height:12px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/></svg>
          </button>
        </div>
      `;
      if (idx > 0) row.querySelector('.up-btn').addEventListener('click', () => { [mergeFiles[idx-1],mergeFiles[idx]]=[mergeFiles[idx],mergeFiles[idx-1]]; renderMergeList(); });
      if (idx < mergeFiles.length-1) row.querySelector('.dn-btn').addEventListener('click', () => { [mergeFiles[idx+1],mergeFiles[idx]]=[mergeFiles[idx],mergeFiles[idx+1]]; renderMergeList(); });
      row.querySelector('.del-btn').addEventListener('click', () => { mergeFiles.splice(idx,1); renderMergeList(); });
      list.appendChild(row);
    });
  }

  document.getElementById('executeMergeBtn').addEventListener('click', async () => {
    if (mergeFiles.length < 2 || !window.PDFLib) return;
    const btn = document.getElementById('executeMergeBtn');
    const sp  = document.getElementById('executeMergeSpinner');
    const txt = document.getElementById('executeMergeText');
    btn.disabled = true; sp.classList.remove('hidden'); txt.textContent = 'Menggabungkan...';
    try {
      const merged = await window.PDFLib.PDFDocument.create();
      for (const item of mergeFiles) {
        const src = await window.PDFLib.PDFDocument.load(item.arrayBuffer);
        const pages = await merged.copyPages(src, src.getPageIndices());
        pages.forEach(p => merged.addPage(p));
      }
      const bytes = await merged.save();
      const out = (document.getElementById('mergeOutputName').value.trim() || 'gabungan') + '.pdf';
      downloadBytes(bytes, out);
      showToast(`"${out}" berhasil digabungkan!`, 'success');
    } catch(e) { showToast('Gagal merge: ' + e.message, 'error'); }
    btn.disabled = false; sp.classList.add('hidden'); txt.textContent = TRANSLATIONS[currentLang].btn_merge_docs;
  });

  // ===========================================================================
  // 15. TOOL 6: SPLIT PDF
  // ===========================================================================
  let splitPdfData = null;
  let splitTotalPages = 0;
  let splitRanges = [{ from: 1, to: 1 }];

  setupDropzone(document.getElementById('splitDropzone'), document.getElementById('splitFileInput'), async files => {
    const f = Array.from(files).find(x => x.type==='application/pdf'||x.name.endsWith('.pdf'));
    if (!f) return;
    try {
      const buf = await f.arrayBuffer();
      const doc = await window.PDFLib.PDFDocument.load(buf);
      splitPdfData = { file:f, arrayBuffer:buf, pageCount:doc.getPageCount() };
      splitTotalPages = doc.getPageCount();
      document.getElementById('splitPdfName').textContent = f.name;
      document.getElementById('splitPdfMeta').textContent = `${splitTotalPages} Halaman · ${formatBytes(f.size)}`;
      document.getElementById('splitInfoBar').classList.remove('hidden');
      document.getElementById('splitDropzone').classList.add('hidden');
      document.getElementById('splitRangesContainer').classList.remove('hidden');
      document.getElementById('splitSumFile').textContent = f.name;
      document.getElementById('splitSumTotal').textContent = splitTotalPages + ' halaman';
      splitRanges = [{ from: 1, to: Math.min(splitTotalPages, 1) }];
      renderSplitRanges();
    } catch(e) { showToast('Gagal baca PDF: ' + e.message, 'error'); }
  });

  document.getElementById('splitChangeBtn').addEventListener('click', () => { document.getElementById('splitFileInput').click(); });
  document.getElementById('addRangeBtn').addEventListener('click', () => {
    splitRanges.push({ from: 1, to: splitTotalPages });
    renderSplitRanges();
  });

  function renderSplitRanges() {
    const list = document.getElementById('splitRangesList');
    list.innerHTML = '';
    document.getElementById('executeSplitBtn').disabled = !splitPdfData;
    splitRanges.forEach((range, idx) => {
      const row = document.createElement('div');
      row.className = 'split-range-row';
      row.innerHTML = `
        <span style="font-size:11px;font-weight:700;color:var(--text-muted);font-family:monospace;min-width:16px">#${idx+1}</span>
        <label>Dari Hal.</label>
        <input type="number" min="1" max="${splitTotalPages}" value="${range.from}" class="from-input">
        <label>Sampai</label>
        <input type="number" min="1" max="${splitTotalPages}" value="${range.to}" class="to-input">
        <button class="icon-action-btn danger del-range" title="Hapus rentang" style="margin-left:auto">
          <svg style="width:12px;height:12px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      `;
      row.querySelector('.from-input').addEventListener('change', e => { splitRanges[idx].from = parseInt(e.target.value)||1; });
      row.querySelector('.to-input').addEventListener('change', e => { splitRanges[idx].to = parseInt(e.target.value)||1; });
      row.querySelector('.del-range').addEventListener('click', () => { splitRanges.splice(idx,1); renderSplitRanges(); });
      list.appendChild(row);
    });
  }

  document.getElementById('executeSplitBtn').addEventListener('click', async () => {
    if (!splitPdfData || !window.PDFLib) return;
    const btn = document.getElementById('executeSplitBtn');
    const sp  = document.getElementById('splitSpinner');
    const txt = document.getElementById('splitBtnText');
    btn.disabled = true; sp.classList.remove('hidden'); txt.textContent = 'Memecah...';
    try {
      const srcDoc = await window.PDFLib.PDFDocument.load(splitPdfData.arrayBuffer);
      const base = document.getElementById('splitBaseName').value.trim() || 'bagian';
      for (let i = 0; i < splitRanges.length; i++) {
        const r = splitRanges[i];
        const from = Math.max(1, r.from) - 1;
        const to   = Math.min(splitTotalPages, r.to);
        const indices = Array.from({ length: to - from }, (_, k) => from + k);
        const newDoc = await window.PDFLib.PDFDocument.create();
        const pages = await newDoc.copyPages(srcDoc, indices);
        pages.forEach(p => newDoc.addPage(p));
        const bytes = await newDoc.save();
        downloadBytes(bytes, `${base}-${i+1}.pdf`);
        await new Promise(r => setTimeout(r, 100));
      }
      showToast(`${splitRanges.length} bagian berhasil diunduh!`, 'success');
    } catch(e) { showToast('Gagal split: ' + e.message, 'error'); }
    btn.disabled = false; sp.classList.add('hidden'); txt.textContent = TRANSLATIONS[currentLang].btn_split_docs;
  });

  // ===========================================================================
  // 16. TOOL 7: COMPRESS PDF
  // ===========================================================================
  let cpPdfData = null;
  setupDropzone(document.getElementById('cpDropzone'), document.getElementById('cpFileInput'), async files => {
    const f = Array.from(files).find(x => x.type==='application/pdf'||x.name.endsWith('.pdf'));
    if (!f) return;
    try {
      const buf = await f.arrayBuffer();
      cpPdfData = { file:f, arrayBuffer:buf };
      document.getElementById('cpPdfName').textContent = f.name;
      document.getElementById('cpPdfMeta').textContent = formatBytes(f.size);
      document.getElementById('cpInfoBar').classList.remove('hidden');
      document.getElementById('cpDropzone').classList.add('hidden');
      document.getElementById('cpCompressBtn').disabled = false;
      document.getElementById('cpResultBlock').classList.add('hidden');
    } catch(e) { showToast('Gagal: ' + e.message, 'error'); }
  });

  document.getElementById('cpCompressBtn').addEventListener('click', async () => {
    if (!cpPdfData || !window.PDFLib) return;
    const btn = document.getElementById('cpCompressBtn');
    const sp  = document.getElementById('cpSpinner');
    const txt = document.getElementById('cpBtnText');
    btn.disabled = true; sp.classList.remove('hidden'); txt.textContent = 'Mengkompres...';
    try {
      const doc = await window.PDFLib.PDFDocument.load(cpPdfData.arrayBuffer);
      const bytes = await doc.save({ useObjectStreams: true, addDefaultPage: false });
      const origSize = cpPdfData.arrayBuffer.byteLength;
      const newSize  = bytes.byteLength;
      const saved    = ((origSize - newSize) / origSize * 100).toFixed(1);
      const out = (document.getElementById('cpOutputName').value.trim() || 'terkompres') + '.pdf';
      downloadBytes(bytes, out);
      document.getElementById('cpResultText').textContent =
        `Asli: ${formatBytes(origSize)} → Setelah: ${formatBytes(newSize)} (Hemat ${saved}%)`;
      document.getElementById('cpResultBlock').classList.remove('hidden');
      showToast('PDF berhasil dikompres!', 'success');
    } catch(e) { showToast('Gagal: ' + e.message, 'error'); }
    btn.disabled = false; sp.classList.add('hidden'); txt.textContent = TRANSLATIONS[currentLang].btn_compress_pdf;
  });

  // ===========================================================================
  // 17. TOOL 8: TEXT TO PDF
  // ===========================================================================
  document.getElementById('t2pConvertBtn').addEventListener('click', () => {
    if (!window.jspdf) { showToast('Pustaka belum dimuat.', 'error'); return; }
    const text = document.getElementById('t2pTextArea').value.trim();
    if (!text) { showToast('Teks kosong, harap isi terlebih dahulu.', 'error'); return; }
    const btn = document.getElementById('t2pConvertBtn');
    const sp  = document.getElementById('t2pSpinner');
    const txt = document.getElementById('t2pBtnText');
    btn.disabled = true; sp.classList.remove('hidden'); txt.textContent = 'Membuat PDF...';
    try {
      const { jsPDF } = window.jspdf;
      const fontSize = parseInt(document.getElementById('t2pFontSize').value) || 12;
      const pgSize   = document.getElementById('t2pPageSize').value;
      const doc = new jsPDF({ orientation:'p', unit:'mm', format: pgSize });
      const margin = 20, lineHeight = fontSize * 0.5;
      const pageW = doc.internal.pageSize.getWidth();
      const pageH = doc.internal.pageSize.getHeight();
      const maxW  = pageW - margin * 2;
      doc.setFontSize(fontSize);
      let y = margin;
      const lines = doc.splitTextToSize(text, maxW);
      lines.forEach(line => {
        if (y + lineHeight > pageH - margin) { doc.addPage(); y = margin; }
        doc.text(line, margin, y);
        y += lineHeight + 1;
      });
      const out = (document.getElementById('t2pOutputName').value.trim() || 'teks') + '.pdf';
      doc.save(out);
      showToast(`"${out}" berhasil dibuat!`, 'success');
    } catch(e) { showToast('Gagal: ' + e.message, 'error'); }
    btn.disabled = false; sp.classList.add('hidden'); txt.textContent = TRANSLATIONS[currentLang].btn_create_text_pdf;
  });

  // ===========================================================================
  // 18. TOOL 9: PDF TO TEXT
  // ===========================================================================
  let p2tCurrentFile = null;
  setupDropzone(document.getElementById('p2tDropzone'), document.getElementById('p2tFileInput'), async files => {
    const f = Array.from(files).find(x => x.type==='application/pdf'||x.name.endsWith('.pdf'));
    if (!f) return;
    p2tCurrentFile = f;
    const infoBox = document.getElementById('p2tInfoBox');
    infoBox.classList.remove('hidden');
    document.getElementById('p2tFileName').textContent = f.name;
    document.getElementById('p2tPageCount').textContent = 'Memuat...';
    document.getElementById('p2tExtractBtn').disabled = false;
    try {
      const buf = await f.arrayBuffer();
      const doc = await window.pdfjsLib.getDocument({ data: buf }).promise;
      document.getElementById('p2tPageCount').textContent = doc.numPages + ' halaman';
    } catch(e) { document.getElementById('p2tPageCount').textContent = 'Error'; }
  });

  document.getElementById('p2tExtractBtn').addEventListener('click', async () => {
    if (!p2tCurrentFile || !window.pdfjsLib) return;
    const btn = document.getElementById('p2tExtractBtn');
    const sp  = document.getElementById('p2tSpinner');
    const txt = document.getElementById('p2tBtnText');
    btn.disabled = true; sp.classList.remove('hidden'); txt.textContent = 'Mengekstrak...';
    try {
      const buf = await p2tCurrentFile.arrayBuffer();
      const doc = await window.pdfjsLib.getDocument({ data: buf }).promise;
      let fullText = '';
      for (let p = 1; p <= doc.numPages; p++) {
        const page = await doc.getPage(p);
        const content = await page.getTextContent();
        const pageText = content.items.map(i => i.str).join(' ');
        fullText += `--- Halaman ${p} ---\n${pageText}\n\n`;
      }
      document.getElementById('p2tOutput').value = fullText;
      document.getElementById('p2tResultBlock').classList.remove('hidden');
      showToast('Teks berhasil diekstrak!', 'success');
    } catch(e) { showToast('Gagal ekstrak: ' + e.message, 'error'); }
    btn.disabled = false; sp.classList.add('hidden'); txt.textContent = TRANSLATIONS[currentLang].btn_extract_text;
  });

  document.getElementById('p2tCopyBtn').addEventListener('click', () => {
    const t = document.getElementById('p2tOutput').value;
    navigator.clipboard.writeText(t).then(() => showToast('Teks disalin ke clipboard.', 'success'));
  });

  document.getElementById('p2tDownloadBtn').addEventListener('click', () => {
    const t = document.getElementById('p2tOutput').value;
    if (!t) return;
    const blob = new Blob([t], { type:'text/plain;charset=utf-8' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href = url; a.download = (p2tCurrentFile?.name.replace(/\.pdf$/i,'') || 'teks') + '.txt';
    a.click(); URL.revokeObjectURL(url);
    showToast('File .txt berhasil diunduh!', 'success');
  });

  // ===========================================================================
  // 19. TOOL 10: LOCK PDF (WATERMARK)
  // ===========================================================================
  let lpPdfData = null;
  setupDropzone(document.getElementById('lpDropzone'), document.getElementById('lpFileInput'), async files => {
    const f = Array.from(files).find(x => x.type==='application/pdf'||x.name.endsWith('.pdf'));
    if (!f) return;
    try {
      const buf = await f.arrayBuffer();
      lpPdfData = { file:f, arrayBuffer:buf };
      document.getElementById('lpPdfName').textContent = f.name;
      document.getElementById('lpPdfMeta').textContent = `${formatBytes(f.size)} · Siap diproteksi`;
      document.getElementById('lpInfoBar').classList.remove('hidden');
      document.getElementById('lpDropzone').classList.add('hidden');
      document.getElementById('lpLockBtn').disabled = false;
    } catch(e) { showToast('Gagal baca PDF: ' + e.message, 'error'); }
  });

  document.getElementById('lpLockBtn').addEventListener('click', async () => {
    if (!lpPdfData || !window.PDFLib) return;
    const btn = document.getElementById('lpLockBtn');
    const sp  = document.getElementById('lpSpinner');
    const txt = document.getElementById('lpBtnText');
    btn.disabled = true; sp.classList.remove('hidden'); txt.textContent = 'Menambahkan Watermark...';
    try {
      const { PDFDocument, rgb, degrees, StandardFonts } = window.PDFLib;
      const doc = await PDFDocument.load(lpPdfData.arrayBuffer);
      const font = await doc.embedFont(StandardFonts.HelveticaBold);
      const wmText = document.getElementById('lpWatermarkText').value.trim() || 'CONFIDENTIAL';
      const pages = doc.getPages();
      for (const page of pages) {
        const { width, height } = page.getSize();
        page.drawText(wmText, {
          x: width / 2 - (wmText.length * 14),
          y: height / 2,
          size: 48,
          font,
          color: rgb(0.85, 0.1, 0.1),
          opacity: 0.18,
          rotate: degrees(45),
        });
      }
      const bytes = await doc.save();
      const out = (document.getElementById('lpOutputName').value.trim() || 'terproteksi') + '.pdf';
      downloadBytes(bytes, out);
      showToast(`PDF dengan watermark "${wmText}" berhasil dibuat!`, 'success');
    } catch(e) { showToast('Gagal: ' + e.message, 'error'); }
    btn.disabled = false; sp.classList.add('hidden'); txt.textContent = TRANSLATIONS[currentLang].btn_add_watermark;
  });

  // Initialize selected language on load
  setLanguage(currentLang);

}); // end DOMContentLoaded
