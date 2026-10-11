/**
 * WEB COMPONENTS
 * Componenti riutilizzabili per Header, Sidebar e Footer.
 * Vengono renderizzati lato client per evitare duplicazione di codice HTML.
 */

// Calcola il percorso base relativo partendo da dove si trova il file JS
const scriptTag = document.querySelector('script[src$="components.js"]');
const basePath = scriptTag ? scriptTag.getAttribute('src').replace('js/components.js', '') : '';

// Helper per ottenere path corretti ovunque ci troviamo
const getPath = (path) => {
  if (path.startsWith('/')) {
    path = path.substring(1); // Rimuovi slash iniziale
  }
  return basePath + path;
};

// ==========================================================================
// 1. HEADER COMPONENT
// ==========================================================================
class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <a href="#main-content" class="skip-link">Vai al contenuto principale</a>
      
      <div class="site-banner">
        <a href="${getPath('/')}">
          <img src="${getPath('/images/cropped-scuola-materna-parrocchiale.png')}" alt="Polo d'Infanzia Paritario Madre Teresa di Calcutta - San Pietro in Vincoli" width="1200" height="200" fetchpriority="high">
        </a>
      </div>

      <header class="site-header">
        <div class="nav-wrapper">
          <!-- Desktop Nav -->
          <nav class="main-nav" aria-label="Menu Principale">
            <ul>
              <li><a href="${getPath('/')}">Home</a></li>
              <li class="nav-item-dropdown">
                <a href="#" aria-haspopup="true" aria-expanded="false" onclick="event.preventDefault();">Gli Spazi</a>
                <div class="nav-dropdown" aria-label="Sottomenu Gli Spazi">
                  <a href="${getPath('/infanzia/')}">La Scuola dell'Infanzia</a>
                  <a href="${getPath('/nido/')}">Il Nido</a>
                  <a href="${getPath('/cucina/')}">La Cucina</a>
                  <a href="${getPath('/galleria/')}">Galleria</a>
                </div>
              </li>
              <li class="nav-item-dropdown">
                <a href="#" aria-haspopup="true" aria-expanded="false" onclick="event.preventDefault();">Informazioni</a>
                <div class="nav-dropdown" aria-label="Sottomenu Informazioni">
                  <a href="${getPath('/iscrizioni/')}">Come Iscriversi?</a>
                  <a href="${getPath('/contatti/')}">Contatti</a>
                  <a href="${getPath('/info-genitori/')}">Info per i Genitori</a>
                  <a href="${getPath('/contributi/')}">Contributi Ricevuti</a>
                </div>
              </li>
              <li><a href="${getPath('/modulistica/')}">Modulistica</a></li>
              <li><a href="${getPath('/news/')}">News / Eventi</a></li>
            </ul>
          </nav>

          <!-- Mobile Toggle -->
          <button class="nav-toggle" aria-expanded="false" aria-controls="mobile-nav" aria-label="Apri menu">
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
          </button>
        </div>

        <!-- Mobile Nav -->
        <nav id="mobile-nav" class="mobile-nav" aria-label="Menu Mobile">
          <ul>
            <li><a href="${getPath('/')}">Home</a></li>
            <li><strong style="display:block; padding:0.7rem 1.25rem; background:var(--c-primary-light); color:var(--c-primary-dark); font-size:0.85rem; text-transform:uppercase;">Gli Spazi</strong></li>
            <li class="mobile-dropdown"><a href="${getPath('/infanzia/')}">La Scuola dell'Infanzia</a></li>
            <li class="mobile-dropdown"><a href="${getPath('/nido/')}">Il Nido</a></li>
            <li class="mobile-dropdown"><a href="${getPath('/cucina/')}">La Cucina</a></li>
            <li class="mobile-dropdown"><a href="${getPath('/galleria/')}">Galleria</a></li>
            <li><strong style="display:block; padding:0.7rem 1.25rem; background:var(--c-primary-light); color:var(--c-primary-dark); font-size:0.85rem; text-transform:uppercase;">Informazioni</strong></li>
            <li class="mobile-dropdown"><a href="${getPath('/iscrizioni/')}">Come Iscriversi?</a></li>
            <li class="mobile-dropdown"><a href="${getPath('/contatti/')}">Contatti</a></li>
            <li class="mobile-dropdown"><a href="${getPath('/info-genitori/')}">Info per i Genitori</a></li>
            <li class="mobile-dropdown"><a href="${getPath('/contributi/')}">Contributi Ricevuti</a></li>
            <li><a href="${getPath('/modulistica/')}">Modulistica</a></li>
            <li><a href="${getPath('/news/')}">News / Eventi</a></li>
          </ul>
        </nav>
      </header>
    `;

    // Evidenzia link attivo
    const currentPath = window.location.pathname;
    this.querySelectorAll('a').forEach(link => {
      const linkPath = new URL(link.href).pathname;
      if (linkPath === currentPath && currentPath !== '/' || (currentPath === '/' && linkPath === '/')) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }
    });
  }
}
customElements.define('site-header', SiteHeader);

// ==========================================================================
// 2. SIDEBAR COMPONENT
// ==========================================================================
class SiteSidebar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <aside class="sidebar" aria-label="Barra laterale">
        
        <!-- Widget Contatti (Blu) -->
        <div class="widget widget-contacts">
          <div class="widget-title">Contatti & Orari</div>
          <div class="widget-body">
            <ul class="contacts-list">
              <li>
                <strong>Polo d'Infanzia Paritario<br>"Madre Teresa di Calcutta"</strong><br>
                Nido e Scuola dell'Infanzia
              </li>
              <li>
                <a href="https://maps.google.com/?q=Via+Gambellara+7+San+Pietro+in+Vincoli+Ravenna" target="_blank" rel="noopener">
                  Via Gambellara, 7<br>48125 San Pietro in Vincoli (RA)
                </a>
              </li>
              <li>
                Tel. <a href="tel:+390544551265">0544 551265</a><br>
                Fax 0544 1690211<br>
                Email <a href="mailto:matparrspv@gmail.com">matparrspv@gmail.com</a>
              </li>
            </ul>

            <div style="margin-top: 1rem; padding-top: 0.5rem; border-top: 1px solid rgba(255,255,255,0.2);">
              <strong>Orari Segreteria:</strong>
              <ul class="orari-list">
                <li><span>Lunedì</span> <span>08:30 – 11:30</span></li>
                <li><span>Martedì</span> <span>13:30 – 17:00</span></li>
                <li><span>Mercoledì</span> <span>08:30 – 11:30</span></li>
                <li><span>Giovedì</span> <span>08:30 – 11:30</span></li>
                <li><span>Venerdì</span> <span>08:30 – 11:30</span></li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Widget Articoli -->
        <div class="widget widget-articles">
          <div class="widget-title">Ultimi Articoli</div>
          <div class="widget-body">
            <ul>
              <li><a href="${getPath('/news/#open-day')}">OPEN DAY A.S. 2026/2027</a></li>
              <li><a href="${getPath('/news/#centro-estivo')}">Iscrizioni CENTRO ESTIVO 2026</a></li>
              <li><a href="${getPath('/news/#bonus-nido')}">Bonus Nido d'infanzia 2026/2027</a></li>
            </ul>
          </div>
        </div>

      </aside>
    `;
  }
}
customElements.define('site-sidebar', SiteSidebar);

// ==========================================================================
// 3. FOOTER COMPONENT
// ==========================================================================
class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <!-- Loghi Istituzionali -->
      <div class="page-wrapper" style="padding-top: 0; padding-bottom: 0;">
        <div class="institutional-logos">
          <p>Siti di utilità istituzionale:</p>
          <div class="logos-grid">
            <a href="https://www.miur.gov.it/" target="_blank" rel="noopener"><img src="${getPath('/images/miur-1.png')}" alt="Logo MIUR" width="200" height="60" loading="lazy"></a>
            <a href="https://www.fism.bo.it/" target="_blank" rel="noopener"><img src="${getPath('/images/fism-emilia-romagna.jpg')}" alt="Logo FISM Emilia-Romagna" width="200" height="60" loading="lazy"></a>
            <a href="https://cercalatuascuola.istruzione.it/cercalatuascuola/" target="_blank" rel="noopener"><img src="${getPath('/images/scuola-in-chiaro-1.png')}" alt="Logo Scuola in Chiaro" width="200" height="60" loading="lazy"></a>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <footer class="site-footer">
        <div class="footer-inner">
          
          <div>
            <span class="footer-brand-name">Madre Teresa di Calcutta</span>
            <div class="footer-address">
              Polo d'Infanzia Parrocchiale Paritario<br>
              Nido e Scuola dell'Infanzia<br>
              Via Gambellara, 7<br>
              48125 Ravenna (San Pietro in Vincoli)<br><br>
              Tel: <a href="tel:+390544551265">0544 551265</a> | Fax: 0544 1690211<br>
              Email: <a href="mailto:matparrspv@gmail.com">matparrspv@gmail.com</a>
            </div>
          </div>

          <div>
            <div class="footer-heading">Navigazione</div>
            <ul class="footer-links">
              <li><a href="${getPath('/infanzia/')}">La Scuola dell'Infanzia</a></li>
              <li><a href="${getPath('/nido/')}">L'Asilo Nido</a></li>
              <li><a href="${getPath('/iscrizioni/')}">Come Iscriversi</a></li>
              <li><a href="${getPath('/modulistica/')}">Modulistica Genitori</a></li>
              <li><a href="${getPath('/contatti/')}">Contatti e Orari</a></li>
            </ul>
          </div>

          <div>
            <div class="footer-heading">Trasparenza & Privacy</div>
            <ul class="footer-links">
              <li><a href="${getPath('/contributi/')}">Contributi Ricevuti (L. 124/2017)</a></li>
              <li><a href="${getPath('/privacy/')}">Privacy Policy</a></li>
            </ul>
          </div>

        </div>

        <div class="footer-bottom">
          <p>© ${new Date().getFullYear()} Parrocchia di San Pietro in Vincoli. Sito web creato per il Polo d'Infanzia Paritario "Madre Teresa di Calcutta".</p>
        </div>
      </footer>
    `;
  }
}
customElements.define('site-footer', SiteFooter);
