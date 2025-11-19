# Portfolio Website - Implementation Plan

**Memory Strategy:** Dynamic-MD (directory structure with Markdown logs)
**Last Modification:** Initial plan creation by Setup Agent.
**Project Overview:** This project is to build a portfolio website from scratch with the theme of a dark fantasy video game menu. Key features include a dynamic animated background, a "book" overlay for content, and integration with the GitHub API to display user activity. The technology stack is Next.js with TypeScript.

---
## Phase 1: Project Scaffolding & Initial Setup

### Task 1.1 – Initialize Next.js Project │ Agent_Backend
- **Objective:** To create a new, functional Next.js application using the standard toolchain, which will serve as the foundation for the entire project.
- **Output:** A directory containing a default Next.js project, verified to be running correctly on a local development server.
- **Guidance:** Use the `create-next-app` command. The project should be initialized with TypeScript to ensure type safety from the start.

- Use the `create-next-app` command to initialize a new Next.js project in the current working directory. Ensure the TypeScript and Tailwind CSS options are selected.
- Start the local development server and confirm that the default Next.js welcome page is accessible in a web browser.

### Task 1.2 – Structure Project Directories and Files │ Agent_Backend
- **Objective:** To establish a clean, scalable, and logical directory structure for organizing all future code and assets. This preemptively organizes the workspace for different types of files like components, styles, services, and assets.
- **Output:** A set of new, empty directories within the project's `src` folder (or root, if `src` doesn't exist) that conform to common Next.js best practices.
- **Guidance:** Depends on: Task 1.1 Output. The structure should separate concerns clearly to make the codebase easy to navigate and maintain as it grows.

1. **Create Component Directories:** In the `app` or `src` directory, create a `components` directory. Inside `components`, create three subdirectories: `ui` (for small, reusable elements like buttons or styled panels), `layout` (for major page structure components like the main menu and page layouts), and `sections` (for large, specific content areas like 'Character' and 'Projects').
2. **Create Styling Directories:** Create a `styles` directory. Inside, create a `globals.css` file for all site-wide base styles and a `theme.css` file intended for CSS variables that will define the dark fantasy color palette and fonts.
3. **Create Service Directory:** Create a `services` directory. This will house all external API interaction logic, starting with the GitHub API client.
4. **Create Asset Directory:** Create an `assets` directory. This will be used to store static assets like placeholder images, custom fonts, and animation resources.

### Task 1.3 – Implement Basic Theming and Global Styles │ Agent_Frontend_UI
- **Objective:** To implement the foundational visual theme of the application by defining and applying a basic dark fantasy color palette and typography.
- **Output:** The application's global CSS files (`globals.css`, `theme.css`) will be populated, and the live application will display a dark background and correctly styled base font.
- **Guidance:** Depends on: Task 1.2 Output by Agent_Backend. The theme should be defined using CSS variables for easy maintenance and consistency.

1. **Define Theme Variables:** In `styles/theme.css`, create a `:root` block and define CSS variables for the core dark fantasy color palette (e.g., `--background-dark: #1a1a1a;`, `--text-primary: #f0e7d8;`, `--accent-color: #d4af37;`) and the primary font family for the site.
2. **Apply Global Styles:** In `styles/globals.css`, import `theme.css` at the top. Write styles for the `html` and `body` tags to apply the theme's background color, default text color, and font family.
3. **Import Global Styles:** Ensure the `styles/globals.css` file is correctly imported into the root layout file (e.g., `app/layout.tsx`) so that these base styles are applied across the entire application.

---
## Phase 2: Core Visual & Interactive Elements

### Task 2.1 – Create Landing Page and Main Layout Components │ Agent_Frontend_UI
- **Objective:** To build the fundamental React components that control the main application layout and the initial user entry experience.
- **Output:** Two functional components, `LandingPage` and `MainLayout`, and state logic in the main page file to conditionally render them.
- **Guidance:** Depends on: Task 1.2 Output by Agent_Backend. This sets up the main view transition from the initial landing screen to the interactive menu screen.

1. **Create LandingPage Component:** In `components/layout`, create `LandingPage.tsx`. This component should render a `<h1>` for the website title and a `<button>` with the text "Continue".
2. **Create MainLayout Component:** In `components/layout`, create `MainLayout.tsx`. This component's structure should include a `<aside>` element for the future main menu and a `<main>` element to act as the content area.
3. **Implement Conditional Rendering:** In the root `app/page.tsx`, use a React state variable (e.g., `const [isGameStarted, setGameStarted] = useState(false);`). Render `<LandingPage />` if `false` and `<MainLayout />` if `true`. The "Continue" button's `onClick` handler should set this state to `true`.

### Task 2.2 – Implement Initial Campfire Scene │ Agent_Animation
- **Objective:** To source and implement placeholder background images that establish the "character by a campfire" scene.
- **Output:** Two CSS classes applying the distant and close-up background images, with the distant view applied to the application by default.
- **Guidance:** Depends on: Task 1.2 Output by Agent_Backend. The images should be royalty-free or generated. They serve as placeholders for the animation in the next task.

1. **Ad-Hoc Delegation – Research Scene:** Research royalty-free images or generative art prompts that depict a "dark fantasy character by a campfire" scene. Find or create two versions: one from a distance, and one that looks like a closer view.
2. **Place Assets:** Save the two chosen images (e.g., `campfire-distant.jpg`, `campfire-close.jpg`) into the `/assets` directory.
3. **Create CSS Classes:** In `styles/globals.css`, define two utility classes. `.bg-distant-campfire` should set `background-image: url('../assets/campfire-distant.jpg');` and `.bg-zoomed-campfire` should set the close-up version. Configure properties like `background-size`, `background-position`, and `background-repeat`. Apply the `.bg-distant-campfire` class to the main container in `app/layout.tsx`.

### Task 2.3 – Develop Zoom-in Animation Logic │ Agent_Animation
- **Objective:** To create a modular, functional placeholder animation that visually transitions the user from the landing screen to the main menu by "zooming in" on the campfire scene.
- **Output:** A working animation triggered on the "Continue" button click, which smoothly transitions the background from the distant to the close-up view.
- **Guidance:** Depends on: Task 2.1 Output by Agent_Frontend_UI, Task 2.2 Output. The implementation should be modular to make it easy for the user to replace later.

1. **Install Animation Library:** Add `framer-motion` to the project dependencies by running `npm install framer-motion`.
2. **Create Animation Component:** Create a modular and reusable Animation component or hook. The primary goal is a functional placeholder that is easy to replace. The animation must smoothly transition between the two background states defined by the CSS classes from Task 2.2 (e.g., by animating the `background-position` and `background-size` properties, or by cross-fading the two background images).
3. **Trigger Animation:** In `app/page.tsx`, use the animation component/hook to trigger the zoom-in effect when the `isGameStarted` state changes from `false` to `true`.

### Task 2.4 – Build Main Menu Component │ Agent_Frontend_UI
- **Objective:** To create the left-aligned main navigation menu that serves as the primary way for users to explore the portfolio sections.
- **Output:** A styled `MainMenu` component integrated into the `MainLayout`, displaying the main navigation options.
- **Guidance:** Depends on: Task 2.1 Output. The styling should be consistent with the dark fantasy theme established in Phase 1.

1. **Create Component Structure:** In `components/layout`, create `MainMenu.tsx`. It should render a `<nav>` element containing a list of buttons: "Character", "Projects", and "Contact".
2. **Apply Thematic Styling:** Style the component using CSS modules or global classes. The menu should be fixed to the left side of the viewport, with a transparent or dark background. Use the theme's primary font and accent colors for text and hover effects.
3. **Integrate into Layout:** Import and render the `MainMenu` component within the `<aside>` element of the `MainLayout.tsx` component.

### Task 2.5 – Create "Book" Overlay Component │ Agent_Frontend_UI
- **Objective:** To build a reusable overlay system, styled as an open book, that will be used to display all content sections.
- **Output:** A functional `BookOverlay` component and a global state management system to control its visibility and content.
- **Guidance:** Depends on: Task 2.1 Output, Task 2.4 Output. This component is crucial for the site's UX, centralizing how content is presented.

1. **Create Component Structure:** In `components/ui`, create `BookOverlay.tsx`. The component should have a main container for the overlay, a "close" button, and an empty area to render child content.
2. **Apply "Book" Styling:** Style the component to resemble an open book. Create distinct 'cover' and 'page' areas, using CSS to create a layered or 3D-like effect. Position it in the center of the screen with a backdrop.
3. **Implement Global State:** Implement a global state management solution (e.g., React Context or Zustand). The solution must be able to hold and render any given React component as the book's content and be easily accessible from other components like `MainMenu`. It should manage the `isOpen` state and the `content` to be displayed.
4. **Integrate into Layout:** Import and render the `BookOverlay` component inside `MainLayout.tsx`. It should be conditionally rendered based on the `isOpen` property from the global state.

---
## Phase 3: Content & API Integration

### Task 3.1 – Develop GitHub API Service │ Agent_Backend
- **Objective:** To create a robust client for interacting with the public GitHub API, enabling the application to fetch dynamic data for the portfolio.
- **Output:** A `github.ts` file in the `services` directory containing two exported async functions: `getUserProfile` and `getLatestActivity`, complete with error handling.
- **Guidance:** Depends on: Task 1.2 Output. This service will be the single source for all GitHub-related data, making the code easier to maintain. Use the Next.js built-in `fetch` API.

1. **Create User Profile Function:** In `services/github.ts`, define and export an async function `getUserProfile(username: string)`. This function will fetch data from the `https://api.github.com/users/{username}` endpoint.
2. **Create User Activity Function:** In the same file, define and export an async function `getLatestActivity(username: string)`. This function will fetch data from the `https://api.github.com/users/{username}/events/public` endpoint and should be configured to fetch only the most recent event.
3. **Implement Error Handling:** Wrap the `fetch` calls in `try...catch` blocks to gracefully handle network errors or cases where the GitHub API is unavailable. If an error occurs, the function should return `null` or an empty array to prevent the application from crashing.

### Task 3.2 – Implement "Message of the Day" Component │ Agent_Frontend_Content
- **Objective:** To create a dynamic UI component that displays the user's latest GitHub activity, adding a live, interactive element to the portfolio.
- **Output:** A styled `MessageOfTheDay` component that fetches and displays the latest GitHub event, including loading and error states.
- **Guidance:** Depends on: Task 3.1 Output by Agent_Backend, Task 2.1 Output by Agent_Frontend_UI. The component should be self-contained and manage its own data fetching lifecycle.

1. **Create Component Structure:** In `components/ui`, create a new component `MessageOfTheDay.tsx`.
2. **Fetch Data:** Use the `useEffect` hook to call the `getLatestActivity` function from the GitHub service on component mount. Manage the component's state with `useState` for `loading`, `error`, and `activity` data.
3. **Implement Conditional Rendering:** The component should render a loading indicator while fetching, an error message if the fetch fails, and the formatted activity data upon success. For example, display "Pushed to repository..." or "Created a new branch...".
4. **Style and Position:** Style the component with a thematic border or background and position it in a corner (e.g., top-right) of the `MainLayout`.

### Task 3.3 – Create and Populate "Character" Section Component │ Agent_Frontend_Content
- **Objective:** To build the "About Me" section of the portfolio, which will introduce the user with a bio, skills list, and their GitHub profile picture.
- **Output:** A `CharacterSection` component that displays the user's avatar, a placeholder bio, and a list of skills.
- **Guidance:** Depends on: Task 3.1 Output by Agent_Backend, Task 1.2 Output by Agent_Backend. This component will be displayed inside the `BookOverlay`.

1. **Create Component Structure:** In `components/sections`, create `CharacterSection.tsx`.
2. **Fetch Profile Picture:** Use `useEffect` to call the `getUserProfile` service to fetch the user's `avatar_url`.
3. **Add Placeholder Content:** Within the component, add a short paragraph of placeholder text for the bio (e.g., "Lorem ipsum dolor sit amet...") and an unordered list of placeholder skills (e.g., "React", "TypeScript", "Node.js").
4. **Style Layout:** Arrange the content in a clean, two-column layout within the "book" page, with the avatar on one side and the text on the other.

### Task 3.4 – Create and Populate "Projects as Quests" Section Component │ Agent_Frontend_Content
- **Objective:** To build the "Projects" section of the portfolio with the unique "quest log" layout.
- **Output:** A `ProjectsSection` component that dynamically renders a list of projects from a mock data file, styled to look like a list of quests.
- **Guidance:** Depends on: Task 1.2 Output by Agent_Backend. This is a key thematic component. The styling should evoke the feeling of a journal or quest log from a fantasy RPG.

1. **Define Mock Data Structure:** Create a new file `lib/projects-data.ts`. In this file, define and export an array of project objects. Each object should have fields like `id`, `questTitle`, `description`, `status` (e.g., 'Completed'), `technologies` (an array of strings), and `links` (an array of objects with `name` and `url`).
2. **Build Component:** Create the `ProjectsSection.tsx` component in `components/sections`. Import the mock data and use `.map()` to render each project as an item in the quest log.
3. **Apply "Quest Log" Styling:** Style each item to look like a quest entry. Use thematic fonts, borders, and perhaps small icons to distinguish between different types of links (e.g., GitHub vs. live demo).

### Task 3.5 – Wire up Menu to Book Overlay │ Agent_Frontend_UI
- **Objective:** To make the main navigation menu fully interactive, connecting the menu buttons to the `BookOverlay` state management system.
- **Output:** A fully functional main menu where clicking "Character" or "Projects" opens the `BookOverlay` and displays the correct content section.
- **Guidance:** Depends on: Task 2.4 Output, Task 2.5 Output, Task 3.3 Output by Agent_Frontend_Content, Task 3.4 Output by Agent_Frontend_Content. This task connects the UI shell with the content components.

1. **Import State and Components:** In `components/layout/MainMenu.tsx`, import the state management hook/context from the `BookOverlay` system. Also, import the `CharacterSection` and `ProjectsSection` components.
2. **Update Click Handlers:** Modify the `onClick` handlers for the "Character" and "Projects" menu items.
3. **Set Overlay Content:** Each handler should call the global state function to open the book and pass the appropriate component to be rendered. For example: `openBook(<CharacterSection />)`.

---
## Phase 4: Finalization & Deployment Preparation

### Task 4.1 – Code Cleanup and Refinement │ Agent_Frontend_UI
- **Objective:** To perform a final quality assurance pass on the entire codebase to ensure it is clean, consistent, and free of obvious errors before deployment.
- **Output:** A polished and production-ready codebase with no linting errors or console warnings.
- **Guidance:** Depends on: Task 3.5 Output. This is a final housekeeping step to ensure high quality.

1. **Review Codebase:** Read through all created components, services, and styles to ensure consistent formatting, naming conventions, and code structure. Remove any temporary `console.log` statements or unused code.
2. **Check Styles:** Review all CSS for unused or redundant styles and ensure everything is consistent with the established theme.
3. **Lint and Test:** Run the project's linter (`npm run lint`) to catch any remaining issues. Perform a final interactive check of the application in the browser to ensure all functionality works as expected and there are no console errors.

### Task 4.2 – Add Final Thematic Touches │ Agent_Frontend_UI
- **Objective:** To add small, high-impact visual details that enhance the dark fantasy theme and make the user experience more immersive.
- **Output:** An application with a more polished and thematic feel, including a custom font and enhanced interactive elements.
- **Guidance:** Depends on: Task 4.1 Output. These small touches can significantly improve the overall aesthetic of the project.

1. **Implement Thematic Font:** Research on Google Fonts or a similar service for a free-to-use, thematic font that fits the "dark fantasy" style (e.g., a serif font with a slightly rustic feel). Import it in `styles/globals.css` and apply it as the primary font family in `theme.css`.
2. **Enhance Menu Hover Effects:** In the CSS for the `MainMenu` component, add a more distinct hover effect to the menu items, such as a subtle glow using `text-shadow` or `box-shadow`, or a color shift to the theme's accent color.
3. **Create Thematic Loading Indicator:** Create a simple, reusable `LoadingSpinner` component in `components/ui`. Instead of a typical spinner, style it as a pulsing rune, a fading thematic icon, or simply animated text like "Loading...". Use this component in any place that shows a loading state.

### Task 4.3 – Create Deployment Documentation │ Agent_Frontend_UI
- **Objective:** To provide clear and simple instructions for building the application for production and deploying it to a standard hosting provider.
- **Output:** A `DEPLOYMENT.md` file in the root of the project.
- **Guidance:** Depends on: Task 4.1 Output. The documentation should be aimed at someone with basic knowledge of web deployment.

- **Create File:** Create a new markdown file named `DEPLOYMENT.md` in the project root.
- **Add Build Instructions:** Document the command to create a production-ready build of the application: `npm run build`.
- **Add Deployment Guidance:** Provide a brief, high-level guide on how to deploy the application to Vercel (the recommended platform for Next.js) and Netlify. Mention the need to set up environment variables for any future API keys or secrets.