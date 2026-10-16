import { createContext, useState, useEffect, useContext } from 'react';

const BookmarkContext = createContext();

// goes into profile card
const useBookmarkState = () => useContext(BookmarkContext);

// goes into the Home.jsx
const BookmarkProvider = ({ children }) => {
  const [bookmark, setBookmark] = useState(() => {
    const stored = localStorage.getItem('bookmark');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    console.log('bookmark changed:', bookmark);
    localStorage.setItem('bookmark', JSON.stringify(bookmark));
  }, [bookmark]);
  // useEffect always runs automatically after the first render has finished rendering

  // add if not already there, remove if it is
  const toggleBookmark = (profile) => {
    setBookmark((prev) =>
      prev.some((p) => p.id === profile.id)
        ? prev.filter((p) => p.id !== profile.id)
        : [...prev, profile],
    );
  };

  const isBookmarked = (id) => bookmark.some((p) => p.id === id); //returns true or false

  const value = { bookmark, toggleBookmark, isBookmarked };

  return (
    <BookmarkContext.Provider value={value}>
      {children}
    </BookmarkContext.Provider>
  );
};

export { useBookmarkState, BookmarkProvider };
