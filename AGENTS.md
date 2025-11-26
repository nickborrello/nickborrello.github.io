# AGENTS.md

## Build/Lint/Test Commands
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- No lint or test scripts configured. Use `npm run build` to check for TypeScript errors.

## Code Style Guidelines
- **Language**: TypeScript React with Tailwind CSS
- **Imports**: Group React imports first, then third-party, then local. Use named imports.
- **Formatting**: 4-space indentation, single quotes for strings, semicolons required.
- **Naming**: PascalCase for components/files/types, camelCase for variables/functions.
- **Types**: Use interfaces for props, explicit types for complex data.
- **Error Handling**: Minimal; rely on TypeScript for type safety.
- **Styling**: Tailwind utility classes in className, avoid inline styles.
- **Components**: Functional with hooks, export default.
- **File Structure**: Components in /components, data in root files.

No Cursor or Copilot rules found.