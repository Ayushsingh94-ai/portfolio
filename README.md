# Ayush Singh — Portfolio

A static personal portfolio for Ayush Singh, a B.Tech Computer Science and Engineering student specializing in Artificial Intelligence at Technocrats Institute of Technology, Bhopal (RGPV), expected to graduate in 2027. The site uses plain HTML, CSS, and vanilla JavaScript; it has no build step or backend.

## Features

- Responsive portfolio sections for introduction, education, skills, projects, certifications, and contact.
- Dark and light themes, with the selected theme saved in browser storage when available.
- Mobile navigation, skip link, visible keyboard focus, and reduced-motion support.
- Portrait and favicon. Resume: coming soon.

## Folder structure

```text
.
├── assets/
│   ├── favicon.svg
│   └── profile.jpg
├── resume/
│   └── .gitkeep
├── index.html
├── script.js
├── style.css
└── README.md
```

## Run locally

Open `index.html` in a browser. No package installation or build command is required. Keep `assets/` and `resume/` beside `index.html` so their files remain available to the page.

## Update content

- Edit page text, section content, and links in `index.html`.
- Edit visual styles and responsive breakpoints in `style.css`.
- Edit menu, theme, and scroll behavior in `script.js`.
- Replace the portrait or favicon in `assets/`, keeping the referenced filenames or updating their paths in `index.html`.
- Resume: coming soon.

## Deployment

This is a static site. For Vercel, import the GitHub repository in the Vercel dashboard and use the **Other** framework preset, with no build command and the project root as the output directory. Once connected, pushes to the configured production branch can trigger deployments. This repository also contains a GitHub Pages workflow under `.github/workflows/pages.yml`.

There is no `package.json`, framework, backend, or build step.
