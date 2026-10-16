import ProfileCard from '../components/ProfileCard';
import { BookmarkProvider } from '../contexts/BookmarkProfile';
function Home() {
  return (
    <BookmarkProvider>
      <main className="flex flex-row items-center justify-center gap-8">
        <ProfileCard />
      </main>
    </BookmarkProvider>
  );
}

export default Home;
