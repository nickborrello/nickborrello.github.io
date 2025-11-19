# Deployment Guide (GitHub Pages)

This guide provides instructions for building and deploying the portfolio website to GitHub Pages.

## Prerequisites

- Node.js (v18 or later)
- npm

## Local Build

1. Navigate to the project directory:
   ```
   cd portfolio
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Create the static site build:
   ```
   npm run build
   ```
   The static site will be generated in the `portfolio/out` directory.

## Deployment to GitHub Pages

This project is configured to be deployed as a static site to GitHub Pages.

1. Push all your code to the GitHub repository (e.g., your-username/your-username.github.io).
2. In your repository's settings on GitHub, navigate to the "Pages" section.
3. Under "Build and deployment", set the Source to "Deploy from a branch".
4. Configure the branch and folder:
    - Branch: Select your main branch (e.g., main or master).
    - Folder: Select `/out`.
5. Save the changes. GitHub Actions will automatically deploy the contents of the `out` directory to your GitHub Pages site. It may take a few minutes for the site to become live.