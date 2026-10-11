# Polo d'Infanzia Paritario "Madre Teresa di Calcutta"
## San Pietro in Vincoli (Ravenna)

Sito istituzionale moderno del Polo d'Infanzia Parrocchiale Paritario "Madre Teresa di Calcutta".

**Live sul web:** https://graziano-code.github.io/madreteresaspiv/

---

## Stack Tecnico

- **HTML5** semantico — zero framework, zero build step
- **CSS3** con Custom Properties (design system completo)
- **Vanilla JavaScript** minimo — solo menu hamburger
- **Web Components** nativi per Header, Sidebar, Footer riutilizzabili
- **Font self-hosted** — Titillium Web WOFF2 (zero Google Fonts)
- **Form contatti** via [Formspree](https://formspree.io) (GDPR compliant)
- **GitHub Pages** — hosting gratuito con HTTPS automatico

---

## Struttura del Sito

```
/                      → Home (news e avvisi)
/infanzia/             → La Scuola dell'Infanzia (3-6 anni)
/nido/                 → L'Asilo Nido (9-36 mesi)
/cucina/               → La Cucina Interna
/galleria/             → Galleria Fotografica
/iscrizioni/           → Come Iscriversi
/contatti/             → Contatti e Form
/info-genitori/        → Info per i Genitori
/contributi/           → Contributi Ricevuti (Legge 124/2017)
/modulistica/          → Modulistica Genitori (download)
/news/                 → News ed Eventi
/privacy/              → Privacy Policy (GDPR)
/404.html              → Pagina errore
```

---

## Come Aggiornare il Sito

Il flusso è semplicissimo — nessun build, nessun npm:

1. Modifica il file HTML della pagina che vuoi aggiornare
2. Salva il file
3. Esegui:
   ```bash
   git add .
   git commit -m "Descrizione modifica"
   git push
   ```
4. Il sito è aggiornato su GitHub Pages in circa 30 secondi ✅

---

## Configurazione Form Contatti (Formspree)

Il form nella pagina `/contatti/` usa Formspree. Per attivarlo:

1. Crea un account gratuito su [formspree.io](https://formspree.io)
2. Crea un nuovo form e copia l'ID (es. `xrgjabc123`)
3. Apri il file `contatti/index.html`
4. Cerca la riga: `action="https://formspree.io/f/{FORMSPREE_ID}"`
5. Sostituisci `{FORMSPREE_ID}` con il tuo ID reale
6. Salva e fai `git push`

---

## Attivazione GitHub Pages

Se non già attivato:
1. Vai su **github.com/Graziano-code/madreteresaspiv**
2. Clicca **Settings** → **Pages**
3. Sotto *Branch* seleziona **main** → **Save**
4. Attendi 1-2 minuti → sito live!

---

## Contatti del Polo d'Infanzia

- **Indirizzo:** Via Gambellara, 7 — 48125 San Pietro in Vincoli (RA)
- **Tel:** 0544 551265
- **Email:** matparrspv@gmail.com
