/**
 * Konversian Stage — Mobile Shared System (mobile.js)
 * Locks mobile state, handles navigation, refresh, theme, and clipboard.
 */

(function() {
  'use strict';

  // 1. Mobile Environment Setup
  // If user requests "Desktop Site" in their phone browser, mobile layout stays intact.
  try {
    sessionStorage.removeItem('docshift_force_desktop');
  } catch(e) {}

  // 2. Initialize Theme
  const savedTheme = localStorage.getItem('theme') || 'dark';
  if (savedTheme === 'light') {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
  } else {
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
  }

  // 3. Document Ready Setup
  document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const themeBtn = document.getElementById('mobileThemeToggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        const isLight = document.documentElement.classList.contains('light');
        if (isLight) {
          document.documentElement.classList.remove('light');
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        } else {
          document.documentElement.classList.remove('dark');
          document.documentElement.classList.add('light');
          localStorage.setItem('theme', 'light');
        }
      });
    }

    // Refresh Button (Present on EVERY page!)
    const refreshBtns = document.querySelectorAll('.mobile-btn-refresh, [data-action="refresh"]');
    refreshBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.reload();
      });
    });

    // Hardware & UI Back Button
    const backBtns = document.querySelectorAll('.mobile-btn-back, [data-action="back"]');
    backBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const fallback = btn.getAttribute('data-fallback') || '../';
        if (window.history.length > 1) {
          window.history.back();
        } else {
          window.location.href = fallback;
        }
      });
    });

    // Highlight Active Bottom Nav
    const currentPath = window.location.pathname.replace(/\/$/, '');
    const navItems = document.querySelectorAll('.mobile-bottom-nav .nav-item');
    navItems.forEach(item => {
      const itemPath = (item.getAttribute('href') || '').replace(/\/$/, '');
      if (itemPath === currentPath || ((itemPath === '/m' || itemPath === './') && currentPath.endsWith('/m'))) {
        item.classList.add('active');
      }
    });
  });

  // Global Toast Notification
  window.showMobileToast = function(msg, type = 'info') {
    let container = document.getElementById('mobileToastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'mobileToastContainer';
      container.className = 'mobile-toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'mobile-toast';
    const color = type === 'success' ? '#10B981' : (type === 'error' ? '#EF4444' : '#0EA5E9');
    toast.innerHTML = `
      <svg style="width:18px;height:18px;color:${color};flex-shrink:0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        ${type === 'success' ? '<polyline points="20 6 9 17 4 12"/>' : '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>'}
      </svg>
      <span>${msg}</span>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      toast.style.transition = 'opacity 0.25s, transform 0.25s';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(-10px)';
      setTimeout(() => toast.remove(), 260);
    }, 2800);
  };

  // Global Clipboard Helper
  window.copyToClipboard = function(text, successMsg) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        window.showMobileToast(successMsg || 'Berhasil disalin!', 'success');
      }).catch(() => {
        fallbackCopy(text, successMsg);
      });
    } else {
      fallbackCopy(text, successMsg);
    }
  };

  function fallbackCopy(text, successMsg) {
    try {
      const el = document.createElement('textarea');
      el.value = text;
      el.style.position = 'fixed';
      el.style.opacity = '0';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      window.showMobileToast(successMsg || 'Berhasil disalin!', 'success');
    } catch(e) {
      window.showMobileToast('Gagal menyalin: ' + e.message, 'error');
    }
  }

})();
