'use client'
import React from 'react'
import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 font-menu bg-gradient-to-r from-primaire to-secondaire shadow-md text-white">
      <div className="flex items-center space-x-3">
       
        <span className="w-8 h-8 flex items-center justify-center bg-yellow-300 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-primaire"
            fill="none"
            viewBox="0 0 24 24 "
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4a2 2 0 00-2-2H6a2 2 0 00-2 2v16a2 2 0 002 2h4a2 2 0 002-2v-2m0-12h6a2 2 0 012 2v16a2 2 0 01-2 2h-6" />
          </svg>
        </span>
        <h1 className="text-2xl font-bold font-titre">
          AZIZ-BOOKSTORE
        </h1>
      </div>
      <div className="space-x-4">
        <Link href="/" className="hover:underline hover:text-yellow-300">Accueil</Link>
        <Link href="/catalogue" className="hover:underline hover:text-yellow-300">Catalogue</Link>
        <Link href="/abonnement" className="hover:underline hover:text-yellow-300">Abonnement</Link>
      </div>
    </nav>
  )
}