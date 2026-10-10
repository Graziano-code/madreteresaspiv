class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = \`
        <div style="max-width: 1000px; margin: 0 auto; background: white; box-shadow: 0 0 15px rgba(0,0,0,0.1);">
            <!-- Top Banner Img -->
            <div style="text-align: center; border-bottom: 1px solid var(--c-border);">
                <a href="index.html"><img src="images/cropped-scuola-materna-parrocchiale.png" alt="Banner Madre Teresa di Calcutta" style="width: 100%; display: block;"></a>
            </div>
            
            <header class="site-header">
                <div class="header-container" style="padding: 0;">
                    <button class="nav-toggle" aria-label="Apri menu" aria-expanded="false" aria-controls="main-nav" style="margin: 1rem;">
                        <span class="hamburger-bar"></span>
                        <span class="hamburger-bar"></span>
                        <span class="hamburger-bar"></span>
                    </button>

                    <nav id="main-nav" class="main-nav" aria-label="Navigazione Principale" style="display: block; width: 100%; border-bottom: 2px solid var(--c-border-subtle);">
                        <ul style="display: flex; flex-wrap: wrap; list-style: none; padding: 0; margin: 0; align-items: center; justify-content: flex-start; gap: 0;">
                            <li><a href="index.html" style="padding: 1rem 1.5rem; font-weight: bold; color: var(--c-text); display: block;">Home</a></li>
                            <li class="has-dropdown" style="position: relative;">
                                <a href="#" style="padding: 1rem 1.5rem; font-weight: bold; color: var(--c-text); display: block;">GLI SPAZI ▾</a>
                                <ul class="dropdown">
                                    <li><a href="infanzia.html">LA SCUOLA DELL'INFANZIA</a></li>
                                    <li><a href="nido.html" style="color: var(--c-blue);">IL NIDO</a></li>
                                    <li><a href="cucina.html">LA CUCINA</a></li>
                                    <li><a href="galleria.html">Galleria</a></li>
                                </ul>
                            </li>
                            <li class="has-dropdown" style="position: relative;">
                                <a href="#" style="padding: 1rem 1.5rem; font-weight: bold; color: var(--c-text); display: block;">INFORMAZIONI ▾</a>
                                <ul class="dropdown">
                                    <li><a href="iscrizioni.html">COME ISCRIVERSI?</a></li>
                                    <li><a href="contatti.html">CONTATTI</a></li>
                                    <li><a href="info-genitori.html">Info per i genitori</a></li>
                                    <li><a href="contributi.html">CONTRIBUTI RICEVUTI</a></li>
                                </ul>
                            </li>
                            <li><a href="modulistica.html" style="padding: 1rem 1.5rem; font-weight: bold; color: var(--c-text); display: block;">MODULISTICA</a></li>
                            <li><a href="news.html" style="padding: 1rem 1.5rem; font-weight: bold; color: var(--c-text); display: block;">NEWS / EVENTI</a></li>
                        </ul>
                    </nav>
                </div>
                <style>
                    .has-dropdown { position: relative; }
                    .dropdown { display: none; position: absolute; top: 100%; left: 0; background: white; box-shadow: 0 4px 10px rgba(0,0,0,0.15); min-width: 250px; z-index: 1000; flex-direction: column; gap: 0; padding: 0.5rem 0; border: 1px solid var(--c-border); }
                    .has-dropdown:hover .dropdown { display: flex; }
                    .dropdown a { padding: 0.8rem 1.5rem; font-weight: bold; color: var(--c-text); border-bottom: 1px solid #f0f0f0; text-transform: uppercase; font-size: 0.9rem; }
                    .dropdown a:hover { background: #f9f9f9; color: var(--c-blue); }
                    .nav-toggle { display: none; }
                    @media (max-width: 768px) {
                        .nav-toggle { display: flex; }
                        .main-nav { display: none !important; }
                        .main-nav.is-open { display: block !important; }
                        .main-nav ul { flex-direction: column; align-items: stretch !important; }
                        .has-dropdown:hover .dropdown { display: none; }
                        .has-dropdown.active .dropdown { display: flex; position: static; box-shadow: none; padding-left: 1rem; border: none; border-left: 3px solid var(--c-blue); }
                    }
                </style>
            </header>
        \`;

        const toggle = this.querySelector('.nav-toggle');
        const nav = this.querySelector('#main-nav');
        if(toggle && nav) {
            toggle.addEventListener('click', () => {
                const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
                toggle.setAttribute('aria-expanded', !isExpanded);
                toggle.classList.toggle('is-active');
                nav.classList.toggle('is-open');
            });
        }
        const dropdowns = this.querySelectorAll('.has-dropdown > a');
        dropdowns.forEach(drop => {
            drop.addEventListener('click', (e) => {
                if(window.innerWidth <= 768) {
                    e.preventDefault();
                    drop.parentElement.classList.toggle('active');
                }
            });
        });
    }
}
customElements.define('site-header', SiteHeader);

class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = \`
            <footer class="site-footer" style="margin-top: 3rem; text-align: center; border-top: 1px solid var(--c-border); padding: 1rem;">
                <div style="font-size: 0.85rem; color: var(--c-blue);">
                    <a href="#" style="color: var(--c-text); border: 1px solid #ddd; padding: 0.3rem 0.6rem; border-radius: 4px; display: inline-flex; align-items: center; gap: 0.5rem;"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/></svg> Stampa</a>
                    <a href="#" style="color: var(--c-text); border: 1px solid #ddd; padding: 0.3rem 0.6rem; border-radius: 4px; display: inline-flex; align-items: center; gap: 0.5rem;"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg> E-mail</a>
                    <a href="#" style="color: var(--c-text); border: 1px solid #ddd; padding: 0.3rem 0.6rem; border-radius: 4px; display: inline-flex; align-items: center; gap: 0.5rem;"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/></svg> Facebook</a>
                </div>
                <div style="margin-top: 1rem; color: var(--c-blue); font-size: 0.9rem;">
                    <p>Sito web creato con Polo d'Infanzia Paritario Madre Teresa.</p>
                </div>
            </footer>
        </div>
        \`;
    }
}
customElements.define('site-footer', SiteFooter);
