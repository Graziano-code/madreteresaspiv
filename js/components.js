class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = \`
        <header class="site-header">
            <div class="header-container">
                <a href="index.html" class="brand-link" aria-label="Home Polo d'Infanzia">
                    <div class="brand-text">
                        <span class="brand-title"><span class="brand-accent">M</span>adre Teresa</span>
                        <span class="brand-subtitle">Polo d'Infanzia Paritario</span>
                    </div>
                </a>
                
                <button class="nav-toggle" aria-label="Apri menu" aria-expanded="false" aria-controls="main-nav">
                    <span class="hamburger-bar"></span>
                    <span class="hamburger-bar"></span>
                    <span class="hamburger-bar"></span>
                </button>

                <nav id="main-nav" class="main-nav" aria-label="Navigazione Principale">
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li class="has-dropdown">
                            <a href="#">Gli Spazi ▾</a>
                            <ul class="dropdown">
                                <li><a href="infanzia.html">La Scuola dell'Infanzia</a></li>
                                <li><a href="nido.html">Il Nido</a></li>
                                <li><a href="cucina.html">La Cucina</a></li>
                                <li><a href="galleria.html">Galleria</a></li>
                            </ul>
                        </li>
                        <li class="has-dropdown">
                            <a href="#">Informazioni ▾</a>
                            <ul class="dropdown">
                                <li><a href="iscrizioni.html">Come Iscriversi?</a></li>
                                <li><a href="contatti.html">Contatti</a></li>
                                <li><a href="info-genitori.html">Info per i genitori</a></li>
                                <li><a href="contributi.html">Contributi Ricevuti</a></li>
                            </ul>
                        </li>
                        <li><a href="modulistica.html">Modulistica</a></li>
                        <li><a href="news.html">News / Eventi</a></li>
                    </ul>
                </nav>
            </div>
            <style>
                .main-nav ul { list-style: none; padding: 0; margin: 0; display: flex; gap: 1rem; align-items: center; }
                .main-nav a { text-decoration: none; color: var(--c-forest); font-weight: 600; padding: 0.5rem; display: block; }
                .has-dropdown { position: relative; }
                .dropdown { display: none; position: absolute; top: 100%; left: 0; background: white; box-shadow: var(--shadow-md); border-radius: var(--radius-sm); min-width: 200px; z-index: 1000; flex-direction: column; gap: 0; padding: 0.5rem 0; }
                .has-dropdown:hover .dropdown { display: flex; }
                .dropdown a { padding: 0.5rem 1rem; font-weight: normal; border-bottom: 1px solid var(--c-border-subtle); }
                .dropdown a:hover { background: var(--c-surface-soft); color: var(--c-primary); }
                @media (max-width: 768px) {
                    .main-nav ul { flex-direction: column; align-items: flex-start; }
                    .has-dropdown:hover .dropdown { display: none; }
                    .has-dropdown.active .dropdown { display: flex; position: static; box-shadow: none; padding-left: 1rem; border-left: 2px solid var(--c-primary); }
                }
            </style>
        </header>
        \`;

        // Toggle logic for mobile menu
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

        // Toggle logic for dropdowns on mobile
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
        <footer class="site-footer" style="background: var(--c-forest); color: white; padding: 2rem 1rem; margin-top: 3rem; text-align: center;">
            <div style="max-width: 900px; margin: 0 auto;">
                <h3 style="color: var(--c-yellow); margin-bottom: 1rem; font-family: var(--font-script); font-size: 2rem;">Polo d'Infanzia Paritario "Madre Teresa di Calcutta"</h3>
                <p>Via Cella, 513 - 48125 San Pietro in Vincoli (RA)</p>
                <p>Nido: 345 8820468 | Materna: 345 5957864 | Ufficio: 0544 551065</p>
                <p>Email: <a href="mailto:infanziasanpietro@libero.it" style="color:white; text-decoration:underline;">infanziasanpietro@libero.it</a> | <a href="mailto:matparrspv@gmail.com" style="color:white; text-decoration:underline;">matparrspv@gmail.com</a></p>
                <div style="margin-top: 2rem; padding-top: 1rem; border-top: 1px solid rgba(255,255,255,0.2); font-size: 0.9rem;">
                    <a href="privacy.html" style="color: var(--c-yellow); text-decoration: underline;">Privacy Policy</a> | 
                    &copy; \${new Date().getFullYear()} Parrocchia di San Pietro in Vincoli
                </div>
            </div>
        </footer>
        \`;
    }
}
customElements.define('site-footer', SiteFooter);
