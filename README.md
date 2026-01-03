# WanderFruit Documentation Project

This repository hosts the comprehensive documentation for the WanderFruit brand launch, built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build).

## 📂 Project Structure

```text
.
├── public/                 # Static assets (favicons, etc.)
├── src/
│   ├── assets/             # Images and other assets used in content
│   ├── content/
│   │   └── docs/           # Documentation source files
│   │       ├── strategy/   # Strategy documents (Personas, Competitors)
│   │       ├── brand/      # Brand guidelines (Voice, Tone)
│   │       ├── marketing/  # Marketing materials (Copy, Email, Ads)
│   │       ├── assets/     # Asset summaries
│   │       ├── overview.md # Master Index / Overview
│   │       └── index.mdx   # Landing page
│   └── content.config.ts   # Content collections configuration
├── astro.config.mjs        # Astro and Starlight configuration
├── package.json            # Dependencies and scripts
└── tsconfig.json           # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd wanderfruit-docs
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:4321`.

## 🛠 Usage Guidelines

### Adding New Documentation

1. Create a new `.md` or `.mdx` file in the appropriate subdirectory under `src/content/docs/`.
2. Add the required frontmatter at the top of the file:
   ```yaml
   ---
   title: "Your Document Title"
   description: "Brief description of the document"
   ---
   ```
3. Write your content using standard Markdown. Starlight features (like tabs, asides) are available.

### Updating the Sidebar

The sidebar is configured in `astro.config.mjs`. It uses autogeneration for subdirectories. If you add a new top-level section, you may need to update the configuration file.

## 🤝 Contribution Instructions

1. Ensure you are working on the latest version of the repository.
2. Create a new branch for your changes: `git checkout -b feature/new-docs`.
3. Make your changes and commit them with clear messages.
4. Verify your changes locally using `npm run dev`.
5. Push your branch and open a Pull Request.

## 📦 Build & Deployment

To build the documentation for production:

```bash
npm run build
```

This will generate the static site in the `dist/` directory, ready to be deployed to any static hosting service (Netlify, Vercel, GitHub Pages, etc.).

## 📝 Version Control

This project uses Git for version control. Please ensure:
- `node_modules` and `dist` are ignored (handled by `.gitignore`).
- Commits are atomic and descriptive.
