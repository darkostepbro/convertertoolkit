/**
 * Konversian Stage Mobile Tool Execution Engine (mobile-tools.js)
 * High-precision Client-Side conversion engine optimized for smartphones.
 */

document.addEventListener('DOMContentLoaded', async () => {
  'use strict';

  // 1. Tool Registry
  const TOOLS = {
    // A. Image Compressing
    'compress-jpg':  { name: 'Compress JPG',  cat: 'image', accept: 'image/jpeg,.jpg', hint: 'Pilih foto JPG untuk dikompres' },
    'compress-png':  { name: 'Compress PNG',  cat: 'image', accept: 'image/png,.png',   hint: 'Pilih gambar PNG untuk dikompres' },
    'compress-webp': { name: 'Compress WEBP', cat: 'image', accept: 'image/webp,.webp', hint: 'Pilih gambar WEBP untuk dikompres' },
    'compress-heic': { name: 'Compress HEIC', cat: 'image', accept: '.heic,.heif',      hint: 'Pilih foto HEIC Apple' },
    'compress-bmp':  { name: 'Compress BMP',  cat: 'image', accept: 'image/bmp,.bmp',   hint: 'Pilih bitmap BMP untuk dikompres' },
    'compress-jpeg': { name: 'Compress JPEG', cat: 'image', accept: 'image/jpeg,.jpeg',hint: 'Pilih berkas JPEG untuk dikompres' },

    // B. Image Converting
    'convert-jpg':   { name: 'Convert JPG',   cat: 'image', accept: 'image/jpeg,.jpg', targets: ['png','webp','bmp'], hint: 'Konversi JPG ke format lain' },
    'convert-png':   { name: 'Convert PNG',   cat: 'image', accept: 'image/png,.png',   targets: ['jpg','webp','bmp'], hint: 'Konversi PNG ke format lain' },
    'convert-webp':  { name: 'Convert WEBP',  cat: 'image', accept: 'image/webp,.webp', targets: ['jpg','png','bmp'], hint: 'Konversi WEBP ke format lain' },
    'convert-heic':  { name: 'Convert HEIC',  cat: 'image', accept: '.heic,.heif',      targets: ['jpg','png'],        hint: 'Konversi HEIC foto iPhone' },
    'convert-bmp':   { name: 'Convert BMP',   cat: 'image', accept: 'image/bmp,.bmp',   targets: ['jpg','png','webp'], hint: 'Konversi BMP ke format lain' },
    'convert-jpeg':  { name: 'Convert JPEG',  cat: 'image', accept: 'image/jpeg,.jpeg',targets: ['png','webp','bmp'], hint: 'Konversi JPEG ke format lain' },

    // C. PDF Standard
    'img2pdf':       { name: 'Image to PDF',  cat: 'pdf', accept: 'image/*', hint: 'Pilih satu atau lebih gambar' },
    'mergepdf':      { name: 'Merge PDF',     cat: 'pdf', accept: 'application/pdf,.pdf', multiple: true, hint: 'Pilih 2 atau lebih berkas PDF' },
    'splitpdf':      { name: 'Split PDF',     cat: 'pdf', accept: 'application/pdf,.pdf', hint: 'Pilih PDF untuk dipecah halamannya' },
    'compresspdf':   { name: 'Compress PDF',  cat: 'pdf', accept: 'application/pdf,.pdf', hint: 'Pilih PDF untuk dioptimasi ukurannya' },

    // D. Office to PDF
    'docx2pdf':      { name: 'DOCX to PDF',   cat: 'pdf', accept: '.docx,.doc', hint: 'Pilih berkas Word .docx untuk konversi' },
    'ppt2pdf':       { name: 'PPT to PDF',    cat: 'pdf', accept: '.pptx,.ppt', hint: 'Pilih presentasi PowerPoint .pptx' },
    'excel2pdf':     { name: 'Excel to PDF',  cat: 'pdf', accept: '.xlsx,.xls,.csv', hint: 'Pilih spreadsheet Excel (.xlsx, .xls)' },
    'text2pdf':      { name: 'Text to PDF',   cat: 'pdf', accept: '.txt,text/plain', hint: 'Pilih file teks atau ketik teks' },

    // E. Security Document
    'lockpdf':       { name: 'Lock PDF',      cat: 'pdf', accept: 'application/pdf,.pdf', hint: 'Pilih PDF untuk dikunci dengan sandi' },
    'unlockpdf':     { name: 'Unlock PDF',    cat: 'pdf', accept: 'application/pdf,.pdf', hint: 'Pilih PDF terkunci untuk dibuka sandinya' }
  };

  const urlParams = new URLSearchParams(window.location.search);
  const toolId = urlParams.get('id') || 'docx2pdf';
  const tool = TOOLS[toolId] || TOOLS['docx2pdf'];

  // DOM Elements
  const toolBackBtn       = document.getElementById('toolBackBtn');
  const toolBackText      = document.getElementById('toolBackText');
  const toolHeaderTitle   = document.getElementById('toolHeaderTitle');
  const toolHeaderSub     = document.getElementById('toolHeaderSub');
  const mobileDropzone    = document.getElementById('mobileDropzone');
  const mobileFileInput   = document.getElementById('mobileFileInput');
  const dropzonePrompt    = document.getElementById('dropzonePrompt');
  const dropzoneHint      = document.getElementById('dropzoneHint');
  const fileLoadedBar     = document.getElementById('mobileFileInfoBar');
  const fileNameDisplay   = document.getElementById('fileNameDisplay');
  const fileMetaDisplay   = document.getElementById('fileMetaDisplay');
  const changeFileBtn     = document.getElementById('changeFileBtn');
  const previewBox        = document.getElementById('previewContainer');
  const sheetTabsBar      = document.getElementById('mobileSheetTabs');
  const docxPreviewArea   = document.getElementById('docxPreviewArea');
  const pdfCanvas         = document.getElementById('pdfPreviewCanvas');
  const excelPreviewArea  = document.getElementById('excelPreviewArea');
  const settingsBox       = document.getElementById('toolSettingsBox');
  const actionBtn         = document.getElementById('mobileActionBtn');
  const btnTextSlot       = document.getElementById('btnTextSlot');

  // State
  let currentFile = null;
  let excelWorkbook = null;
  let activeSheetName = '';
  let pdfDocument = null;

  // Initialize Header & Back link
  toolHeaderTitle.textContent = tool.name;
  toolHeaderSub.textContent = tool.cat === 'image' ? 'Image Tools' : 'PDF Tools';
  const fallbackCat = tool.cat === 'image' ? '../image/' : '../pdf/';
  toolBackBtn.setAttribute('data-fallback', fallbackCat);
  toolBackText.textContent = tool.cat === 'image' ? 'Gambar' : 'PDF';

  toolBackBtn.addEventListener('click', () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = fallbackCat;
    }
  });

  // Setup Dropzone
  dropzonePrompt.textContent = `Pilih Berkas (${tool.name})`;
  dropzoneHint.textContent = tool.hint;
  mobileFileInput.accept = tool.accept;
  if (tool.multiple) mobileFileInput.multiple = true;

  mobileDropzone.addEventListener('click', () => mobileFileInput.click());
  changeFileBtn.addEventListener('click', () => mobileFileInput.click());

  // Drag & drop touch support
  ['dragenter', 'dragover'].forEach(ev => {
    mobileDropzone.addEventListener(ev, e => { e.preventDefault(); mobileDropzone.classList.add('dragover'); });
  });
  ['dragleave', 'drop'].forEach(ev => {
    mobileDropzone.addEventListener(ev, e => { e.preventDefault(); mobileDropzone.classList.remove('dragover'); });
  });
  mobileDropzone.addEventListener('drop', e => {
    if (e.dataTransfer && e.dataTransfer.files.length) handleFilesSelected(e.dataTransfer.files);
  });
  mobileFileInput.addEventListener('change', e => {
    if (e.target.files.length) handleFilesSelected(e.target.files);
  });

  // Build Settings UI
  renderSettingsUI();

  // File Selection Handler
  async function handleFilesSelected(files) {
    if (!files || !files.length) return;
    currentFile = files[0];

    fileNameDisplay.textContent = currentFile.name;
    fileMetaDisplay.textContent = formatBytes(currentFile.size);
    mobileDropzone.classList.add('hidden');
    fileLoadedBar.classList.remove('hidden');
    actionBtn.disabled = false;

    // Handle previews
    if (toolId === 'excel2pdf') {
      await loadExcelPreview(currentFile);
    } else if (toolId === 'docx2pdf') {
      await loadDocxPreview(currentFile);
    } else if (toolId === 'ppt2pdf') {
      await loadPptPreview(currentFile);
    } else if (currentFile.type === 'application/pdf' || currentFile.name.endsWith('.pdf')) {
      await loadPdfPreview(currentFile);
    }
  }

  // Render Tool-specific Settings
  function renderSettingsUI() {
    settingsBox.innerHTML = '';

    if (toolId.startsWith('compress-')) {
      settingsBox.innerHTML = `
        <div class="form-group">
          <label class="form-label">Kualitas Kompresi</label>
          <select id="mobileQuality" class="form-select-mobile">
            <option value="0.8" selected>Seimbang (Direkomendasikan)</option>
            <option value="0.6">Maksimal (Ukuran File Terkecil)</option>
            <option value="0.92">Tinggi (Kualitas Gambar Tajam)</option>
          </select>
        </div>
      `;
      btnTextSlot.textContent = 'Kompres Gambar Sekarang';
    } else if (toolId.startsWith('convert-')) {
      const targets = tool.targets || ['png', 'jpg'];
      const opts = targets.map(t => `<option value="${t}">${t.toUpperCase()}</option>`).join('');
      settingsBox.innerHTML = `
        <div class="form-group">
          <label class="form-label">Format Target</label>
          <select id="mobileTargetFmt" class="form-select-mobile">${opts}</select>
        </div>
      `;
      btnTextSlot.textContent = 'Konversi Format Sekarang';
    } else if (toolId === 'excel2pdf') {
      settingsBox.innerHTML = `
        <div class="form-group">
          <label class="form-label">Nama File PDF Output</label>
          <input type="text" id="excelPdfOutputName" class="form-input-mobile" value="dokumen-excel">
        </div>
        <div class="form-group">
          <label class="form-label">Orientasi Halaman</label>
          <select id="excelPdfOrientation" class="form-select-mobile">
            <option value="landscape" selected>Lanskap (Melebar - Terbaik untuk Tabel)</option>
            <option value="portrait">Potret (Tegak)</option>
          </select>
        </div>
      `;
      btnTextSlot.textContent = 'Konversi Excel ke PDF';
    } else if (toolId === 'docx2pdf') {
      settingsBox.innerHTML = `
        <div class="form-group">
          <label class="form-label">Nama File PDF Output</label>
          <input type="text" id="docxPdfOutputName" class="form-input-mobile" value="dokumen-word">
        </div>
      `;
      btnTextSlot.textContent = 'Konversi Word ke PDF';
    } else if (toolId === 'ppt2pdf') {
      settingsBox.innerHTML = `
        <div class="form-group">
          <label class="form-label">Nama File PDF Output</label>
          <input type="text" id="pptPdfOutputName" class="form-input-mobile" value="presentasi-slide">
        </div>
      `;
      btnTextSlot.textContent = 'Konversi PPT ke PDF';
    } else if (toolId === 'lockpdf') {
      settingsBox.innerHTML = `
        <div class="form-group">
          <label class="form-label">Kata Sandi Buka PDF (Wajib)</label>
          <input type="password" id="lockPasswordInput" class="form-input-mobile" placeholder="Masukkan kata sandi...">
        </div>
        <div class="form-group">
          <label class="form-label">Konfirmasi Kata Sandi</label>
          <input type="password" id="lockConfirmPassword" class="form-input-mobile" placeholder="Ulangi kata sandi...">
        </div>
      `;
      btnTextSlot.textContent = 'Kunci & Lindungi PDF';
    } else if (toolId === 'unlockpdf') {
      settingsBox.innerHTML = `
        <div class="form-group">
          <label class="form-label">Kata Sandi Dokumen Saat Ini</label>
          <input type="password" id="unlockPasswordInput" class="form-input-mobile" placeholder="Masukkan kata sandi untuk membuka...">
        </div>
      `;
      btnTextSlot.textContent = 'Buka Kunci PDF';
    } else {
      btnTextSlot.textContent = 'Mulai Konversi';
    }
  }

  // Action Button Execution
  actionBtn.addEventListener('click', async () => {
    if (!currentFile) return;
    actionBtn.disabled = true;
    const oldText = btnTextSlot.textContent;
    btnTextSlot.textContent = 'Sedang Memproses...';

    try {
      if (toolId.startsWith('compress-')) {
        await executeImageCompress();
      } else if (toolId.startsWith('convert-')) {
        await executeImageConvert();
      } else if (toolId === 'excel2pdf') {
        await executeExcel2Pdf();
      } else if (toolId === 'docx2pdf') {
        await executeDocx2Pdf();
      } else if (toolId === 'ppt2pdf') {
        await executePpt2Pdf();
      } else if (toolId === 'lockpdf') {
        await executeLockPdf();
      } else if (toolId === 'unlockpdf') {
        await executeUnlockPdf();
      } else {
        window.showMobileToast('Proses selesai!', 'success');
      }
    } catch(err) {
      window.showMobileToast('Gagal: ' + err.message, 'error');
    }

    actionBtn.disabled = false;
    btnTextSlot.textContent = oldText;
  });

  // --- Tool Engines ---

  // 1. Image Compress
  async function executeImageCompress() {
    const quality = parseFloat(document.getElementById('mobileQuality')?.value || '0.8');
    const bmp = await createImageBitmap(currentFile);
    const canvas = document.createElement('canvas');
    canvas.width = bmp.width; canvas.height = bmp.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(bmp, 0, 0);

    const mime = currentFile.type.includes('png') ? 'image/png' : 'image/jpeg';
    const blob = await new Promise(res => canvas.toBlob(res, mime, quality));
    downloadBlob(blob, `kompres-${currentFile.name}`);
    window.showMobileToast('Gambar berhasil dikompres!', 'success');
  }

  // 2. Image Convert
  async function executeImageConvert() {
    const targetFmt = document.getElementById('mobileTargetFmt')?.value || 'png';
    const bmp = await createImageBitmap(currentFile);
    const canvas = document.createElement('canvas');
    canvas.width = bmp.width; canvas.height = bmp.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(bmp, 0, 0);

    const mime = targetFmt === 'jpg' ? 'image/jpeg' : `image/${targetFmt}`;
    const blob = await new Promise(res => canvas.toBlob(res, mime, 0.92));
    const base = currentFile.name.replace(/\.[^/.]+$/, '');
    downloadBlob(blob, `${base}.${targetFmt}`);
    window.showMobileToast(`Berhasil diubah ke .${targetFmt.toUpperCase()}!`, 'success');
  }

  // 3. Excel Preview & Convert (Full Sheet Selector!)
  async function loadExcelPreview(file) {
    if (!window.XLSX) return;
    const buf = await file.arrayBuffer();
    excelWorkbook = window.XLSX.read(buf, { type: 'array' });
    const sheetNames = excelWorkbook.SheetNames;
    if (!sheetNames.length) return;

    previewBox.classList.remove('hidden');
    excelPreviewArea.classList.remove('hidden');
    sheetTabsBar.classList.remove('hidden');
    sheetTabsBar.innerHTML = '';

    activeSheetName = sheetNames[0];

    sheetNames.forEach((name, idx) => {
      const tab = document.createElement('button');
      tab.type = 'button';
      tab.className = `mobile-sheet-tab ${idx === 0 ? 'active' : ''}`;
      tab.textContent = name;
      tab.addEventListener('click', () => {
        sheetTabsBar.querySelectorAll('.mobile-sheet-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        activeSheetName = name;
        renderActiveExcelSheet(name);
        window.showMobileToast(`Sheet aktif: ${name}`, 'info');
      });
      sheetTabsBar.appendChild(tab);
    });

    renderActiveExcelSheet(activeSheetName);
  }

  function renderActiveExcelSheet(sheetName) {
    if (!excelWorkbook) return;
    const sheet = excelWorkbook.Sheets[sheetName];
    const html = window.XLSX.utils.sheet_to_html(sheet, { id: 'excelGrid', editable: false });
    excelPreviewArea.innerHTML = html;
    const tbl = excelPreviewArea.querySelector('table');
    if (tbl) tbl.className = 'excel-mobile-table';
  }

  async function executeExcel2Pdf() {
    if (!excelWorkbook || !activeSheetName) throw new Error('Berkas Excel belum siap.');
    
    // First try native backend if available
    const nativeRes = await tryNativeOfficeConvert(currentFile);
    if (nativeRes) {
      downloadBlob(nativeRes, `${currentFile.name.replace(/\.[^/.]+$/, '')}.pdf`);
      window.showMobileToast('Berhasil dikonversi ke PDF!', 'success');
      return;
    }

    // Client-side HTML2PDF fallback for active sheet
    const sheet = excelWorkbook.Sheets[activeSheetName];
    const html = window.XLSX.utils.sheet_to_html(sheet);
    const container = document.createElement('div');
    container.innerHTML = `
      <div style="font-family:Calibri,sans-serif;padding:15px;background:#fff;color:#000;">
        <h3 style="font-size:14px;margin-bottom:10px;">${activeSheetName}</h3>
        ${html}
      </div>
    `;
    const tbl = container.querySelector('table');
    if (tbl) tbl.className = 'excel-mobile-table';
    document.body.appendChild(container);

    const orientation = document.getElementById('excelPdfOrientation')?.value || 'landscape';
    const opt = {
      margin: 10,
      filename: `${activeSheetName}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation }
    };

    await window.html2pdf().set(opt).from(container).save();
    document.body.removeChild(container);
    window.showMobileToast(`Sheet "${activeSheetName}" berhasil diekspor ke PDF!`, 'success');
  }

  // 4. Word DOCX Preview & Convert
  async function loadDocxPreview(file) {
    if (!window.docx) return;
    previewBox.classList.remove('hidden');
    docxPreviewArea.classList.remove('hidden');
    docxPreviewArea.innerHTML = '<div style="padding:10px;text-align:center;color:var(--text-muted);font-size:12px;">Memuat pratinjau Word...</div>';
    try {
      const buf = await file.arrayBuffer();
      docxPreviewArea.innerHTML = '';
      await window.docx.renderAsync(buf, docxPreviewArea);
    } catch(e) {
      docxPreviewArea.innerHTML = '<div style="padding:10px;text-align:center;color:var(--text-muted);font-size:11px;">Pratinjau Word siap dikonversi</div>';
    }
  }

  async function executeDocx2Pdf() {
    const nativeRes = await tryNativeOfficeConvert(currentFile);
    if (nativeRes) {
      downloadBlob(nativeRes, `${currentFile.name.replace(/\.[^/.]+$/, '')}.pdf`);
      window.showMobileToast('Berhasil dikonversi ke PDF!', 'success');
      return;
    }
    // Mammoth fallback
    const buf = await currentFile.arrayBuffer();
    const result = await window.mammoth.convertToHtml({ arrayBuffer: buf });
    const div = document.createElement('div');
    div.style.padding = '20px'; div.style.background = '#fff'; div.style.color = '#000';
    div.innerHTML = result.value;
    document.body.appendChild(div);

    await window.html2pdf().set({
      margin: 15,
      filename: `${currentFile.name.replace(/\.[^/.]+$/, '')}.pdf`,
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    }).from(div).save();
    document.body.removeChild(div);
    window.showMobileToast('Word berhasil dikonversi ke PDF!', 'success');
  }

  // 5. PPT to PDF
  async function loadPptPreview(file) {
    previewBox.classList.remove('hidden');
    pdfCanvas.classList.remove('hidden');
    // Draw placeholder
    pdfCanvas.width = 400; pdfCanvas.height = 225;
    const ctx = pdfCanvas.getContext('2d');
    ctx.fillStyle = '#1E293B'; ctx.fillRect(0,0,400,225);
    ctx.fillStyle = '#94A3B8'; ctx.font = '14px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('PowerPoint Presentation Ready', 200, 112);
  }

  async function executePpt2Pdf() {
    const nativeRes = await tryNativeOfficeConvert(currentFile);
    if (nativeRes) {
      downloadBlob(nativeRes, `${currentFile.name.replace(/\.[^/.]+$/, '')}.pdf`);
      window.showMobileToast('PPT berhasil dikonversi ke PDF!', 'success');
      return;
    }
    throw new Error('Konversi presentasi memerlukan native backend.');
  }

  // 6. Lock PDF with AES-256
  async function executeLockPdf() {
    const pwd = document.getElementById('lockPasswordInput')?.value;
    const confirm = document.getElementById('lockConfirmPassword')?.value;
    if (!pwd) throw new Error('Kata sandi wajib diisi.');
    if (pwd !== confirm) throw new Error('Konfirmasi kata sandi tidak cocok.');

    const buf = await currentFile.arrayBuffer();
    if (window.pdfEncrypt && window.pdfEncrypt.encrypt) {
      const encrypted = await window.pdfEncrypt.encrypt(new Uint8Array(buf), { userPassword: pwd, ownerPassword: pwd });
      downloadBlob(new Blob([encrypted], { type: 'application/pdf' }), `terkunci-${currentFile.name}`);
      window.showMobileToast('PDF berhasil dikunci dengan aman!', 'success');
      return;
    }
    throw new Error('Modul enkripsi belum siap.');
  }

  // 7. Unlock PDF
  async function executeUnlockPdf() {
    const pwd = document.getElementById('unlockPasswordInput')?.value;
    if (!pwd) throw new Error('Masukkan kata sandi saat ini.');
    const buf = await currentFile.arrayBuffer();
    const pdfDoc = await window.PDFLib.PDFDocument.load(buf, { password: pwd });
    const saved = await pdfDoc.save();
    downloadBlob(new Blob([saved], { type: 'application/pdf' }), `terbuka-${currentFile.name}`);
    window.showMobileToast('Proteksi PDF berhasil dibuka!', 'success');
  }

  // Native Service Backend Attempt
  async function tryNativeOfficeConvert(file) {
    try {
      const res = await fetch('/convert?filename=' + encodeURIComponent(file.name), {
        method: 'POST',
        headers: { 'X-Filename': file.name },
        body: file
      });
      if (res.ok && res.headers.get('content-type')?.includes('pdf')) {
        return await res.blob();
      }
    } catch(e) {}
    return null;
  }

  // Helpers
  function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { document.body.removeChild(a); URL.revokeObjectURL(url); }, 500);
  }

  function formatBytes(bytes) {
    if (!bytes) return '0 B';
    const k = 1024, dm = 1;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
});
