/**
 * COMPONENTS — Web Components Nativi
 * Header, Sidebar, Footer, Floating Action Bar
 */

'use strict';

// Calcola il basePath relativo (funziona in locale e su GitHub Pages)
const _scriptTag = document.querySelector('script[src$="components.js"]');
const _basePath = _scriptTag ? _scriptTag.getAttribute('src').replace('js/components.js', '') : '';
const p = (path) => _basePath + (path.startsWith('/') ? path.slice(1) : path);

// ==========================================================================
// 1. HEADER
// ==========================================================================
class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <a href="#main-content" class="skip-link">Vai al contenuto principale</a>

      <div class="site-topbar">
        <span>📞 <a href="tel:+390544551265">0544 551265</a> &nbsp;|&nbsp; <a href="mailto:matparrspv@gmail.com">matparrspv@gmail.com</a></span>
        <span class="topbar-badge">✨ Iscrizioni Aperte A.S. 2026/2027</span>
      </div>

      <header class="site-header">
        <div class="header-inner">

          <a href="${p('/')}" class="site-logo" aria-label="Polo d'Infanzia Madre Teresa di Calcutta — Torna alla homepage">
            <span class="site-logo-name">Madre Teresa di Calcutta</span>
            <span class="site-logo-sub">Nido &amp; Scuola dell'Infanzia · San Pietro in Vincoli (RA)</span>
          </a>

          <nav class="main-nav" aria-label="Menu Principale">
            <ul>
              <li><a href="${p('/')}">Home</a></li>
              <li><a href="${p('/nido/')}">Il Nido</a></li>
              <li class="nav-dropdown-item">
                <a href="${p('/infanzia/')}" aria-haspopup="true">La Scuola</a>
                <div class="nav-dropdown-menu">
                  <a href="${p('/infanzia/')}">Scuola dell'Infanzia (3-6 anni)</a>
                  <a href="${p('/galleria/')}">Galleria Fotografica</a>
                </div>
              </li>
              <li><a href="${p('/cucina/')}">La Cucina</a></li>
              <li><a href="${p('/news/')}">News</a></li>
              <li><a href="${p('/contatti/')}">Contatti</a></li>
              <li><a href="${p('/associazione/')}">Associazione dei Genitori</a></li>
              <li><a href="${p('/iscrizioni/')}" class="nav-cta-iscrizioni">Iscriviti</a></li>
            </ul>
          </nav>

          <button class="nav-toggle" aria-expanded="false" aria-controls="mobile-nav" aria-label="Apri menu di navigazione">
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
          </button>
        </div>

        <nav id="mobile-nav" class="mobile-nav" aria-label="Menu Mobile">
          <ul>
            <li><a href="${p('/')}">🏠 Home</a></li>
            <li><span class="mobile-group-label">Il Polo d'Infanzia</span></li>
            <li class="mobile-sub"><a href="${p('/nido/')}">🍼 L'Asilo Nido (9-36 mesi)</a></li>
            <li class="mobile-sub"><a href="${p('/infanzia/')}">🌱 La Scuola dell'Infanzia (3-6 anni)</a></li>
            <li class="mobile-sub"><a href="${p('/galleria/')}">📷 Galleria Fotografica</a></li>
            <li><a href="${p('/cucina/')}">🍳 La Cucina Interna</a></li>
            <li><span class="mobile-group-label">Informazioni</span></li>
            <li class="mobile-sub"><a href="${p('/news/')}">📰 News ed Eventi</a></li>
            <li class="mobile-sub"><a href="${p('/modulistica/')}">📋 Modulistica Genitori</a></li>
            <li class="mobile-sub"><a href="${p('/info-genitori/')}">👨‍👩‍👧 Info per i Genitori</a></li>
            <li class="mobile-sub"><a href="${p('/contributi/')}">📊 Contributi Ricevuti</a></li>
            <li class="mobile-sub"><a href="${p('/contatti/')}">📞 Contatti e Orari</a></li>
            <li class="mobile-sub"><a href="${p('/associazione/')}">🤝 Associazione Genitori</a></li>
            <li class="mobile-cta"><a href="${p('/iscrizioni/')}">✨ Iscrizioni A.S. 2026/2027</a></li>
          </ul>
        </nav>
      </header>
    `;

    const cur = window.location.pathname;
    this.querySelectorAll('a[href]').forEach(a => {
      try {
        const lp = new URL(a.href).pathname;
        if ((cur === '/' && lp === '/') || (cur !== '/' && cur.startsWith(lp) && lp !== '/')) {
          a.classList.add('active');
          a.setAttribute('aria-current', 'page');
        }
      } catch(e) {}
    });
  }
}
customElements.define('site-header', SiteHeader);

// ==========================================================================
// 2. SIDEBAR
// ==========================================================================
class SiteSidebar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <aside class="sidebar" aria-label="Informazioni di contatto e ultime notizie">

        <div class="widget widget-contacts">
          <div class="widget-title">📞 Contatti &amp; Orari</div>
          <div class="widget-body">
            <ul class="contacts-list">
              <li>
                <strong>Polo d'Infanzia Paritario<br>"Madre Teresa di Calcutta"</strong><br>
                <span style="font-size:0.82rem; opacity:.85;">Nido e Scuola dell'Infanzia</span>
              </li>
              <li>
                <a href="https://maps.app.goo.gl/h6rEVsPEEbpA155p6" target="_blank" rel="noopener">
                  Via Gambellara, 7<br>48125 San Pietro in Vincoli (RA)
                </a>
              </li>
              <li>
                Tel. <a href="tel:+390544551265"><strong>0544 551265</strong></a><br>
                Cellulare Nido: <a href="tel:+393458820468">345 8820468</a><br>
                Email: <a href="mailto:matparrspv@gmail.com">matparrspv@gmail.com</a>
              </li>
            </ul>
            <div style="margin-top:.9rem; padding-top:.75rem; border-top:1px solid rgba(255,255,255,.18);">
              <strong style="font-size:.82rem; display:block; margin-bottom:.4rem;">Orari Segreteria:</strong>
              <ul class="orari-list">
                <li><span>Lunedì</span><span>08:30–11:30</span></li>
                <li><span>Martedì</span><span>13:30–17:00</span></li>
                <li><span>Mercoledì</span><span>08:30–11:30</span></li>
                <li><span>Giovedì</span><span>08:30–11:30</span></li>
                <li><span>Venerdì</span><span>08:30–11:30</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="widget widget-articles">
          <div class="widget-title">Ultime Notizie</div>
          <div class="widget-body">
            <ul>
              <li><a href="${p('/news/#open-day')}">OPEN DAY A.S. 2026/2027</a></li>
              <li><a href="${p('/news/#centro-estivo')}">Centro Estivo 2026 "Esplori...amo la natura!!!"</a></li>
              <li><a href="${p('/news/#bonus-nido')}">Bonus Nido d'infanzia 2026/2027</a></li>
            </ul>
          </div>
        </div>

        <div class="widget" style="border-left:4px solid var(--c-accent); padding:1rem 1.25rem; background:var(--c-accent-light);">
          <p style="font-weight:700; color:var(--c-accent-dark); margin-bottom:.5rem; font-size:.9rem;">✨ Iscrizioni Aperte</p>
          <p style="font-size:.82rem; color:var(--c-text-muted); margin-bottom:.75rem;">Posti disponibili per il Nido e la Scuola dell'Infanzia — A.S. 2026/2027</p>
          <a href="${p('/iscrizioni/')}" class="btn btn-primary btn-sm btn-block" style="justify-content:center;">Scopri come iscriversi</a>
        </div>

      </aside>
    `;
  }
}
customElements.define('site-sidebar', SiteSidebar);

// ==========================================================================
// 3. FLOATING ACTION BAR (mobile) — con WhatsApp
// ==========================================================================
class SiteFab extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="fab-bar" role="navigation" aria-label="Contatti rapidi">
        <a href="tel:+390544551265" class="fab-phone">
          <span class="fab-icon" aria-hidden="true">📞</span>
          <span>Chiama</span>
        </a>
        <a href="https://wa.me/393458820468?text=Buongiorno%2C%20vorrei%20informazioni%20sul%20Polo%20d%27Infanzia%20Madre%20Teresa%20di%20Calcutta"
           class="fab-contact" target="_blank" rel="noopener">
          <span class="fab-icon" aria-hidden="true">💬</span>
          <span>WhatsApp</span>
        </a>
      </div>
    `;
  }
}
customElements.define('site-fab', SiteFab);

// ==========================================================================
// 4. FOOTER
// ==========================================================================
class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div style="background:var(--c-surface); padding:0 var(--content-pad);">
        <div class="institutional-logos">
          <p>Siti di utilità istituzionale:</p>
          <div class="logos-grid">
            <a href="https://www.miur.gov.it/" target="_blank" rel="noopener"><img src="${p('/images/miur-1.png')}" alt="Logo MIUR" width="180" height="55" loading="lazy"></a>
            <a href="https://www.fism.bo.it/" target="_blank" rel="noopener"><img src="${p('/images/fism-emilia-romagna.jpg')}" alt="Logo FISM Emilia-Romagna" width="180" height="55" loading="lazy"></a>
            <a href="https://cercalatuascuola.istruzione.it/" target="_blank" rel="noopener"><img src="${p('/images/scuola-in-chiaro-1.png')}" alt="Logo Scuola in Chiaro" width="180" height="55" loading="lazy"></a>
          </div>
        </div>
      </div>

      <footer class="site-footer">
        <div class="footer-inner">

          <div>
            <span class="footer-brand-name">Madre Teresa di Calcutta</span>
            <div class="footer-address">
              Polo d'Infanzia Parrocchiale Paritario<br>
              Nido e Scuola dell'Infanzia<br>
              Via Gambellara, 7<br>48125 San Pietro in Vincoli (Ravenna)<br><br>
              Tel: <a href="tel:+390544551265">0544 551265</a> &nbsp;|&nbsp; Fax: 0544 1690211<br>
              <a href="mailto:matparrspv@gmail.com">matparrspv@gmail.com</a>
            </div>
          </div>

          <div>
            <div class="footer-heading">Navigazione</div>
            <ul class="footer-links">
              <li><a href="${p('/nido/')}">L'Asilo Nido</a></li>
              <li><a href="${p('/infanzia/')}">La Scuola dell'Infanzia</a></li>
              <li><a href="${p('/cucina/')}">La Cucina Interna</a></li>
              <li><a href="${p('/galleria/')}">Galleria Fotografica</a></li>
              <li><a href="${p('/iscrizioni/')}">Come Iscriversi</a></li>
              <li><a href="${p('/modulistica/')}">Modulistica Genitori</a></li>
              <li><a href="${p('/news/')}">News ed Eventi</a></li>
              <li><a href="${p('/contatti/')}">Contatti e Orari</a></li>
              <li><a href="${p('/associazione/')}">Associazione Genitori</a></li>
            </ul>
          </div>

          <div>
            <div class="footer-heading">Trasparenza &amp; Legale</div>
            <ul class="footer-links">
              <li><a href="${p('/contributi/')}">Contributi Ricevuti (L. 124/2017)</a></li>
              <li><a href="${p('/privacy/')}">Privacy Policy</a></li>
              <li><a href="${p('/info-genitori/')}">Info per i Genitori</a></li>
            </ul>
          </div>

        </div>
        <div class="footer-bottom">
          <p>© ${new Date().getFullYear()} Parrocchia di San Pietro in Vincoli — Polo d'Infanzia Paritario "Madre Teresa di Calcutta". Tutti i diritti riservati.</p>
        </div>
      </footer>
    `;
  }
}
customElements.define('site-footer', SiteFooter);
