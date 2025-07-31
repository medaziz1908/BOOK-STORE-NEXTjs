'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import BookCarousel from './components/BookCarousel'

export default function Home() {
  const router = useRouter()

  return (
    <section className="text-center space-y-8 py-16 font-texte bg-white bg-opacity-70 rounded-xl shadow-md mx-auto max-w-5xl">
      <h2 className="text-4xl font-bold text-primaire font-titre">
        Bienvenue sur <span className="text-secondaire">AZIZ-BOOKSTORE</span>
      </h2>
      <p className="max-w-xl mx-auto text-gray-700">Découvrez, commandez et explorez des milliers de livres dans tous les genres littéraires.</p>

      <BookCarousel />

      <div className="flex justify-center gap-6">
        <button
          onClick={() => router.push('/catalogue')}
          className="px-6 py-2 rounded text-white transition bg-primaire hover:bg-red-700 font-menu"
        >
          Voir le catalogue
        </button>

        <button
          onClick={() => router.push('/abonnement')}
          className="px-6 py-2 rounded text-white transition bg-secondaire hover:bg-purple-700 font-menu"
        >
          S’abonner
        </button>
      </div>
    </section>
  )
}