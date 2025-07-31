
'use client'

import React from 'react'


import { useEffect, useState } from 'react'
import { books } from '@/data/books'

export default function BookCarousel() {
  const images = books.slice(4,8 ).map(book => book.image)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-xl shadow-lg">
      <img src={images[index]} alt={`Livre ${index + 1}`} className="w-full h-100 object-fill" />
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 px-2">
        <button onClick={() => setIndex((index - 1 + images.length) % images.length)} className="bg-white bg-opacity-70 hover:bg-opacity-90 px-3 py-1 rounded-full">◀</button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 px-2">
        <button onClick={() => setIndex((index + 1) % images.length)} className="bg-white bg-opacity-70 hover:bg-opacity-90 px-3 py-1 rounded-full">▶</button>
      </div>
    </div>
  )
}