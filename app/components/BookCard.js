'use client'
import Link from 'next/link'
import React from 'react'

export default function BookCard({ book }) {
  return (
    <Link href={`/catalogue/${book.id}`} className="block">
      <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center hover:shadow-lg transition">
        <img src={book.image} alt={book.titre} className="h-48 w-full object-cover rounded mb-4" />
        <h3 className="font-bold text-lg text-primaire font-titre mb-1">{book.titre}</h3>
        <p className="text-sm text-gray-600 font-menu">{book.auteur}</p>
        <p className="text-sm text-secondaire font-menu italic">{book.genre}</p>
        <p className="mt-2 text-primaire font-bold">{book.prix} TND</p>
      </div>
    </Link>
  )
}