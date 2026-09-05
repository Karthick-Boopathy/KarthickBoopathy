# Karthick Boopathy — Portfolio & Engineering Dossier

A personal portfolio and engineering dossier for **Karthick Boopathy**, designed with an engineering-grade aesthetic that merges mechanical/automotive engineering precision with modern software craftsmanship.

---

## Quick Start (Local Development)

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Deploying to GitHub Pages (`KarthickBoopathy.git`)

This repository is already configured with an automated GitHub Actions deployment workflow (`.github/workflows/deploy.yml`) and relative asset paths (`base: './'`).

### 1. Initialize Git & Push to your Repository

In this directory, run:

```bash
git init
git add .
git commit -m "feat: complete engineering portfolio for Karthick Boopathy"
git branch -M main
git remote add origin https://github.com/Karthick-Boopathy/KarthickBoopathy.git
git push -u origin main
```

*(If your remote already has an existing commit or branch, you can use `git pull --rebase origin main` or force push if replacing an initial blank commit: `git push -u origin main --force`)*

### 2. Enable GitHub Pages in your Repository Settings

1. Go to your repository on GitHub: **https://github.com/Karthick-Boopathy/KarthickBoopathy**
2. Click on **Settings** &rarr; **Pages** (in the left sidebar).
3. Under **Build and deployment** &rarr; **Source**, select **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will automatically build and publish your site to:
   **`https://karthick-boopathy.github.io/KarthickBoopathy/`**

---

## Updating Placeholders (`// TODO(karthick)`)

All placeholders are centralized in [`src/data/portfolioData.ts`](./src/data/portfolioData.ts) for one-line updates:

| Placeholder | Description | How to update |
| :--- | :--- | :--- |
| **`PHOTO_PATH`** | Headshot portrait | Drop your image into `public/images/profile.jpg` (or update the path in `src/data/portfolioData.ts`) |
| **`RESUME_PDF_URL`** | Resume download link | Drop your PDF into `public/resume.pdf` or set an external URL in `src/data/portfolioData.ts` |
| **`GITHUB_URL`** | GitHub Profile URL | Pre-configured to `https://github.com/Karthick-Boopathy` |
| **`LINKEDIN_URL`** | LinkedIn Profile URL | Update in `src/data/portfolioData.ts` |
| **`KANNAN_FARMS_INSTAGRAM_URL`** | Kannan Farms Instagram | Update in `src/data/portfolioData.ts` |

---

## Architecture & Design System

- **Palette**: Slate Drafting Canvas (`#F8FAFC`), Pure White (`#FFFFFF`), Blueprint Cobalt (`#0052CC`), Hairlines (`#E2E8F0`), Slate Ink (`#0F172A`), Status Amber (`#D97706`).
- **Typography**: Space Grotesk (Headings), Plus Jakarta Sans (Body), JetBrains Mono (Specs, badges, coordinates).
- **Aesthetic**: CAD corner crosshairs (`+`), precision dimensional callouts, high-contrast light corporate identity.
- **Accessibility & Performance**: Full keyboard focus visibility, zero unnecessary runtime dependencies, fluid animations with `prefers-reduced-motion` compliance.
