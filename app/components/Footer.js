
import React from 'react'


import Link from 'next/link'
import BoutonNewsLetter from './BoutonNewsLetter'

export default function Footer() {
  return (
    <footer className="p-6 mt-8 text-center font-menu bg-gradient-to-t from-primaire to-secondaire text-white">
      <p className="text-sm mb-2">AZIZ-BOOKSTORE © 2025</p>
      <div className="space-x-3 text-sm">
        <Link href="/" className="hover:underline hover:text-yellow-300">Accueil</Link>
        <Link href="/catalogue" className="hover:underline hover:text-yellow-300">Catalogue</Link>
        <Link href="/ajouter" className="hover:underline hover:text-yellow-300">Ajouter</Link>
        <Link href="/abonnement" className="hover:underline hover:text-yellow-300">Abonnement</Link>
      </div>
      <div className="mt-4"><BoutonNewsLetter /></div>
    </footer>
  )
}
