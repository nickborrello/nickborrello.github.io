'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface BookContextType {
  isBookOpen: boolean;
  bookContent: ReactNode;
  openBook: (content: ReactNode) => void;
  closeBook: () => void;
}

const BookContext = createContext<BookContextType | undefined>(undefined);

export const useBook = () => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error('useBook must be used within a BookProvider');
  }
  return context;
};

export const BookProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [bookContent, setBookContent] = useState<ReactNode>(null);

  const openBook = (content: ReactNode) => {
    setBookContent(content);
    setIsBookOpen(true);
  };

  const closeBook = () => {
    setIsBookOpen(false);
    setBookContent(null);
  };

  return (
    <BookContext.Provider value={{ isBookOpen, bookContent, openBook, closeBook }}>
      {children}
    </BookContext.Provider>
  );
};