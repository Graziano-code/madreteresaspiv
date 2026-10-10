import glob
import re

css_add = """
        .page-layout { display: flex; flex-wrap: wrap; gap: 2rem; padding: 2rem; }
        .main-content { flex: 1 1 65%; min-width: 300px; }
        .sidebar { flex: 1 1 30%; min-width: 250px; }
        .widget { background: white; border: 1px solid var(--c-border); padding: 1.5rem; margin-bottom: 2rem; border-radius: var(--radius-sm); }
        .widget-blue { background: #2a70b8; color: white; border: none; }
        .widget-blue a { color: white; text-decoration: underline; }
        .widget h3 { margin-bottom: 1rem; color: var(--c-forest); font-size: 1.2rem; border-bottom: 1px solid var(--c-border); padding-bottom: 0.5rem; }
        .widget-blue h3 { color: white; border-bottom-color: rgba(255,255,255,0.3); }
"""

sidebar_html = """
    </main>
    <aside class="sidebar">
        <div class="widget widget-blue">
            <p style="font-weight: bold; margin-bottom: 1rem;">Polo d'Infanzia Parrocchiale Paritario "Madre Teresa di Calcutta" - Nido e Scuola dell'Infanzia</p>
            <p style="margin-bottom: 0.5rem;"><a href="#">Via Gambellara, 7 - 48125 Ravenna (San Pietro in Vincoli)</a></p>
            <p style="margin-bottom: 0.5rem;">Tel. 0544 551265 / Fax 0544 1690211</p>
            <p style="margin-bottom: 1rem;"><a href="mailto:matparrspv@gmail.com">matparrspv@gmail.com</a></p>
            <p style="margin-bottom: 0.5rem;">La segreteria è aperta al pubblico nei seguenti orari:</p>
            <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.9rem; line-height: 1.6;">
                <li>lunedì 08:30-11:30</li>
                <li>martedì 13:30-17:00</li>
                <li>mercoledì 08:30-11:30</li>
                <li>giovedì 08:30-11:30</li>
                <li>venerdì 08:30-11:30</li>
            </ul>
        </div>
        <div class="widget">
            <h3>Ultimi Articoli</h3>
            <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.9rem;">
                <li style="margin-bottom: 0.5rem;"><a href="#" style="color: var(--c-blue);">OPEN DAY A.S. 2026/2027</a></li>
            </ul>
        </div>
        <div class="widget">
            <h3>Statistiche del sito</h3>
            <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.9rem;">
                <li>9.813 visite</li>
            </ul>
        </div>
    </aside>
</div>
"""

for file in glob.glob("*.html"):
    with open(file, 'r') as f:
        content = f.read()
    
    # Check if already has page-layout
    if 'class="page-layout"' in content:
        continue
        
    # Inject CSS
    content = content.replace("</style>", css_add + "</style>")
    
    # Wrap main and add sidebar
    # Find <main ...> and replace with <div class="page-layout"><main class="main-content">
    content = re.sub(r'<main[^>]*>', r'<div class="page-layout">\n<main class="main-content">', content)
    
    # Replace </main> with the sidebar and closing div
    content = content.replace("</main>", sidebar_html)
    
    # Also, remove text-align: center from news-card in index to make it look like a blog
    if file == 'index.html':
        content = content.replace("text-align: center;", "text-align: left;")
        content = content.replace("margin: 0 auto;", "margin: 0;")
        # Make images in index look like proper blog images
        content = content.replace("max-width: 500px;", "width: 100%; max-width: 100%;")
        content = content.replace("max-width: 600px;", "width: 100%; max-width: 100%;")
        content = content.replace("max-width: 400px;", "width: 100%; max-width: 100%;")

    with open(file, 'w') as f:
        f.write(content)
