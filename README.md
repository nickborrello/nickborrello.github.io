# Nick Borrello - Portfolio

A single-page RPG-themed portfolio application with persistent background video.

## Features

- **Single Page Application**: No routing, state-based navigation
- **Persistent Background Video**: Full-screen video that plays continuously
- **RPG Theme**: Fantasy-themed UI with character stats and project showcases
- **Responsive Design**: Works on desktop and mobile devices

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. **Add Background Video** (Optional):
   - Place your background video file at `/public/background-video.mp4`
   - Recommended format: MP4, H.264 codec
   - Video will loop automatically and be muted
   - If no video is provided, a gradient background will be used as fallback

3. Start development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Navigation

- **Initial Load**: Navigation buttons appear in bottom-left with opacity
- **Click Navigation**: Opens selected section in full window with back button at bottom
- **Back Button**: Returns to initial navigation screen

## Project Structure

- `src/App.tsx` - Main application with state management
- `src/components/` - React components for different sections
- `public/` - Static assets (add background-video.mp4 here)

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Vite
