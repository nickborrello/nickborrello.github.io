# Deployment Instructions

This document provides instructions for deploying the portfolio application to Vercel (recommended) and GitHub Pages.

## Vercel Deployment (Recommended)

Vercel is the recommended platform for deploying this application due to its seamless integration with modern frontend frameworks like Vite and its robust support for environment variables and analytics.

### Step-by-Step Guide

1.  **Push to GitHub**: Ensure your project is pushed to a GitHub repository.

2.  **Sign Up and Connect**:
    *   Create an account on [Vercel](https://vercel.com/).
    *   Connect your Vercel account to your GitHub account.

3.  **Import Project**:
    *   From your Vercel dashboard, click "New Project".
    *   Import the GitHub repository for this project.

4.  **Configure Project**:
    *   Vercel will automatically detect that this is a Vite project and configure the build settings. Verify that they are correct:
        *   **Build Command**: `npm run build` or `vite build`
        *   **Output Directory**: `dist`
        *   **Install Command**: `npm install`

5.  **Add Environment Variables**:
    *   Navigate to your project's **Settings > Environment Variables** in the Vercel dashboard.
    *   Add a new environment variable:
        *   **Key**: `VITE_SENTRY_DSN`
        *   **Value**: `YOUR_SENTRY_DSN_HERE` (replace with your actual Sentry DSN)

6.  **Deploy**:
    *   Click the "Deploy" button. Vercel will build and deploy your site. Future pushes to the main branch will automatically trigger new deployments.

## GitHub Pages Deployment

This method is an alternative but requires more configuration and has limitations regarding environment variables.

### Step-by-Step Guide

1.  **Update Vite Configuration**:
    *   In `vite.config.ts`, set the `base` property to the name of your repository. For example, if your repository is `https://github.com/user/my-portfolio`, the base should be `/my-portfolio/`.
    ```typescript
    // vite.config.ts
    export default defineConfig({
      base: '/your-repo-name/',
      // ... other settings
    });
    ```

2.  **Install `gh-pages`**:
    *   Install the `gh-pages` package as a development dependency:
    ```bash
    npm install gh-pages --save-dev
    ```

3.  **Add Deploy Scripts**:
    *   In your `package.json`, add `predeploy` and `deploy` scripts:
    ```json
    "scripts": {
      "dev": "vite",
      "build": "tsc && vite build",
      "preview": "vite preview",
      "predeploy": "npm run build",
      "deploy": "gh-pages -d dist"
    }
    ```

4.  **Deploy**:
    *   Run the deploy script:
    ```bash
    npm run deploy
    ```
    This command will build the application and push the contents of the `dist` directory to a new `gh-pages` branch in your repository.

5.  **Configure GitHub Pages**:
    *   In your GitHub repository settings, navigate to the "Pages" section.
    *   Set the source to the `gh-pages` branch.
    *   Your site will be available at `https://<your-username>.github.io/<your-repo-name>/`.

### Environment Variable Warning

For public repositories on GitHub, it is not secure to store sensitive information like a Sentry DSN directly in your code or configuration files. GitHub Pages does not have a built-in, secure way to handle environment variables for public sites in the same way Vercel does. For this reason, **Vercel is the recommended deployment platform for this project.**
