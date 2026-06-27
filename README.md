# VHUFULO CYBER-TECH

**Your Security, Our Priority**

Marketing website for Vhufulo Cyber-Tech, a cybersecurity solutions provider serving businesses across Africa in partnership with Sigurnet d.o.o.

## Project structure

```
index.html        Page markup
css/styles.css     Styles
js/script.js       Smooth-scroll navigation behaviour
assets/logo.png    Logo used in the nav and favicon
Logo/              Original logo artwork files
```

## Run it locally before going live

Always preview changes locally before pushing to `main` (the live branch), since pushes there reflect immediately if Pages is enabled on this repo.

1. From the project root, start a local server:
   ```
   python -m http.server 8000
   ```
2. Open `http://localhost:8000` in your browser and check:
   - The page loads with no errors in the browser console.
   - Logo, icons, and fonts render correctly.
   - Nav links (`Services`, `Partnership`, `Contact`) scroll to the right section.
   - The `Get Started` button scrolls to the contact section.
   - Layout looks right on both desktop and a mobile-width viewport.
3. Stop the server with `Ctrl+C` once you're happy with the result.

Only commit and push to `main` after this check passes.

## Deploying

This is a static site — no build step required. To publish via GitHub Pages: repo **Settings → Pages → Deploy from a branch → `main` / root**.
