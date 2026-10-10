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
                        <li><a href="nido.html">Nido d'Infanzia</a></li>
                        <li><a href="infanzia.html">Scuola dell'Infanzia</a></li>
                        <li><a href="iscrizioni.html">Iscrizioni & Rette</a></li>
                        <li><a href="contatti.html">Contatti</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        \`;

        // Toggle logic
        const toggle = this.querySelector('.nav-toggle');
        const nav = this.querySelector('#main-nav');
        toggle.addEventListener('click', () => {
            const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
            toggle.setAttribute('aria-expanded', !isExpanded);
            toggle.classList.toggle('is-active');
            nav.classList.toggle('is-open');
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
                <p>Email: infanziasanpietro@libero.it</p>
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
