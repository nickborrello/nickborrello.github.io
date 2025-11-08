# RPG Portfolio

An immersive, RPG-themed portfolio website designed to showcase projects and skills in a unique and engaging way. This application transforms a traditional portfolio into a character sheet interface, where skills are presented as inventory items and projects as completed quests.

## Features

*   **RPG-themed Interface**: A unique and engaging user experience inspired by classic role-playing games.
*   **Dynamic Content Updates**: Easily manage and update portfolio content via a `content.json` file and a Node.js script.
*   **Responsive Design**: Optimized for seamless viewing and interaction across various devices, from mobile phones to large desktop displays.
*   **High Performance**: Achieves 95+ Lighthouse scores across all categories (Performance, Accessibility, Best Practices, SEO) for a fast and smooth user experience.
*   **PWA-Enabled**: Progressive Web App capabilities allow for offline access and a native-app-like experience.
*   **Accessibility Features**: Includes `prefers-reduced-motion` support, appropriate ARIA attributes, and enhanced color contrast for a wider audience.
*   **Error Tracking**: Integrated with Sentry for robust error monitoring and reporting.
*   **Analytics**: Vercel Analytics integration for performance monitoring and insights.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have the following installed:

*   Node.js (LTS version recommended)
*   npm (comes with Node.js)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/nickborrello/nickborrello.github.io.git
    cd nickborrello.github.io
    ```
2.  Install NPM packages:
    ```bash
    npm install
    ```

### Environment Variables

Create a `.env` file in the project root with the following content:

```
VITE_SENTRY_DSN=YOUR_SENTRY_DSN_HERE
```

Replace `YOUR_SENTRY_DSN_HERE` with your actual Sentry DSN.

## Available Scripts

In the project directory, you can run:

*   `npm run dev`: Starts the development server.
*   `npm run build`: Builds the app for production to the `dist` folder.
*   `npm run preview`: Serves the production build locally for testing.
*   `npm run update-content`: Updates the portfolio projects from `content.json` into `public/data.json`.

## Content Management

The portfolio content is managed through the `content.json` file in the project root.

1.  **Edit `content.json`**: Use `content.example.json` as a guide to structure your project data.
2.  **Update Content**: After making changes to `content.json`, run the update script:
    ```bash
    npm run update-content
    ```
    This script processes `content.json` and generates `public/data.json`, which the application uses. **Do not edit `public/data.json` directly.**