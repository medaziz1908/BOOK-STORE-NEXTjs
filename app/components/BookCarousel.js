
'use client'


import React, { useState, useEffect } from 'react';

import { books } from '@/data/books'

export default function BookCarousel() {
  const itemsToShow = 4; 
  const [startIndex, setStartIndex] = useState(0);

  const totalBooks = books.length;

  
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex(prevIndex => (prevIndex + itemsToShow) % totalBooks);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalBooks]);

  const goToPrev = () => {
    setStartIndex(prevIndex => {
      
      const newIndex = prevIndex - itemsToShow;
      return newIndex < 0 ? totalBooks - itemsToShow : newIndex;
    });
  };

  const goToNext = () => {
    setStartIndex(prevIndex => (prevIndex + itemsToShow) % totalBooks);
  };

  
  const visibleBooks = [];
  for (let i = 0; i < itemsToShow; i++) {
    visibleBooks.push(books[(startIndex + i) % totalBooks]);
  }

  return (
    <div style={{ position: 'relative', width: '90%', maxWidth: '900px', margin: 'auto' }}>
      <div style={{ display: 'flex', gap: '10px', overflow: 'hidden' }}>
        {visibleBooks.map(book => (
          <div
            key={book.id}
            style={{
              flex: '1 0 0',
              textAlign: 'center',
              borderRadius: '8px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
              padding: '5px',
              backgroundColor: '#fff',
            }}
          >
            <img
              src={book.image}
              alt={book.title}
              style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
            />
            <p>{book.title}</p>
          </div>
        ))}
      </div>

   
      <button
        onClick={goToPrev}
        style={{
          position: 'absolute',
          top: '50%',
          left: '5px',
          transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,0.4)',
          border: 'none',
          borderRadius: '50%',
          color: 'white',
          width: '30px',
          height: '30px',
          cursor: 'pointer',
          fontSize: '20px',
          lineHeight: '30px',
          textAlign: 'center',
          userSelect: 'none',
        }}
        aria-label="Précédent"
      >
        ‹
      </button>

      <button
        onClick={goToNext}
        style={{
          position: 'absolute',
          top: '50%',
          right: '5px',
          transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,0.4)',
          border: 'none',
          borderRadius: '50%',
          color: 'white',
          width: '30px',
          height: '30px',
          cursor: 'pointer',
          fontSize: '20px',
          lineHeight: '30px',
          textAlign: 'center',
          userSelect: 'none',
        }}
        aria-label="Suivant"
      >
        ›
      </button>
    </div>
  );
}
