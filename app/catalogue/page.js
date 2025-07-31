'use client'
import React from 'react'


import { books } from '@/data/books' 




import { useState } from 'react'
import BookList from '../components/BookList'



const getGenres = (books) => [...new Set(books.map(book => book.genre))]
const getAuteurs = (books) => [...new Set(books.map(book => book.auteur))]

export default function Catalogue() {
  const [genre, setGenre] = useState('')
  const [auteur, setAuteur] = useState('')
  const [search, setSearch] = useState('')

  const filteredBooks = books.filter(book => {
    return (
      (genre === '' || book.genre === genre) &&
      (auteur === '' || book.auteur === auteur) &&
      (search === '' || book.titre.toLowerCase().includes(search.toLowerCase()))
    )
  })

  return (
    <div className="py-10 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-secondaire font-titre">Filtrer les livres</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <select
          className="p-2 border rounded"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="">Tous les genres</option>
          {getGenres(books).map((g) => (
            <option key={g} value={g}>{g}</option>
          ))}
        </select>

        <select
          className="p-2 border rounded"
          value={auteur}
          onChange={(e) => setAuteur(e.target.value)}
        >
          <option value="">Tous les auteurs</option>
          {getAuteurs(books).map((a) => (
            <option key={a} value={a}>{a}</option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Rechercher par titre..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded"
        />
      </div>

      <BookList books={filteredBooks} />
    </div>
  )
}