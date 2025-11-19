import React from 'react';
import { useBook } from '../../context/BookContext';
import styles from './BookOverlay.module.css';

const BookOverlay: React.FC = () => {
  const { isBookOpen, bookContent, closeBook } = useBook();

  if (!isBookOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.book}>
        <button className={styles.closeButton} onClick={closeBook}>
          Close
        </button>
        {bookContent}
      </div>
    </div>
  );
};

export default BookOverlay;