import MainMenu from './MainMenu';
import BookOverlay from '../ui/BookOverlay';

export default function MainLayout() {
  return (
    <div>
      <aside>
        <MainMenu />
      </aside>
      <main>
        {/* Primary content area */}
      </main>
      <BookOverlay />
    </div>
  );
}