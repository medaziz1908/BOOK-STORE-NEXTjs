import React from 'react'

import { books } from '@/data/books' 

export default function BookDetails({ params }) {
  const bookId = parseInt(params.id)
  const book = books.find((b) => b.id === bookId)

  if (!book) return <div className="text-center py-10 text-red-600 font-bold">Livre introuvable</div>

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img src={book.image} alt={book.titre} className="w-full h-96 object-cover rounded" />
        <div className="space-y-4 font-menu">
          <h1 className="text-3xl font-titre font-bold text-primaire">{book.titre}</h1>
          <p className="text-gray-600">Auteur : <span className="font-semibold">{book.auteur}</span></p>
          <p className="text-gray-600">Genre : <span className="italic text-secondaire">{book.genre}</span></p>
          <p className="text-gray-800">{book.résumé}</p>
          <p className="text-xl font-bold text-primaire">{book.prix} TND</p>
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return books.map((book) => ({ id: book.id.toString() }))
}