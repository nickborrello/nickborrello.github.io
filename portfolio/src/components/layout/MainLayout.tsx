import MainMenu from './MainMenu';
import BookOverlay from '../ui/BookOverlay';
import MessageOfTheDay from '../ui/MessageOfTheDay';

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
      <MessageOfTheDay />
    </div>
  );
}