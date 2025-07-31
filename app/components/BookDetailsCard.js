import React from 'react'

export default function BookDetailsCard({ book }) {
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
