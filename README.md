# WebMatrix Portfolio

This is a minimal static portfolio site. Files:

- `index.html` — main page
- `style.css` — styles
- `script.js` — client-side behavior (loads `projects.json`)
- `projects.json` — project data
- `images/` — project images (not included)

Important notes:

- The site uses `fetch('projects.json')` to load project data; this requires the site to be served over HTTP. Opening `index.html` directly via `file://` will usually cause `fetch` to fail due to browser restrictions.

Run a quick local server (PowerShell examples):

```powershell
# If you have Python 3 installed
python -m http.server 8000; Start-Process "http://localhost:8000"

# Or use Node's http-server via npx
npx http-server -p 8000
```

Contact form:

- The example form in `index.html` points to Formspree (`https://formspree.io/f/your-form-id`). Replace `your-form-id` with your own Formspree endpoint or a server endpoint that accepts form submissions.
- A JavaScript mailto fallback is included in `script.js`. If the `action` attribute is still the Formspree placeholder or empty, submitting the form will open the user's default mail client with the prefilled subject and body. This provides a quick fallback when you don't have a backend or Formspree connected.
- Note: mailto fallbacks rely on the user's device having a configured mail client and are less reliable on some mobile browsers.

Accessibility & performance tips:

- Provide descriptive `alt` text for images in the `images/` folder.
- Optimize images (compress and resize) and keep `loading="lazy"` where appropriate.
- For production, consider adding meta/social tags and improving semantic HTML as needed.

If you want, I can:

- Add a small GitHub Actions workflow to deploy to GitHub Pages.
- Add an alternate mailto fallback for the contact form.
- Optimize markup for better SEO and accessibility.
