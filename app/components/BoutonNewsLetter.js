'use client'
import React from 'react'



import { useRouter } from 'next/navigation'

export default function BoutonNewsLetter() {
  const router = useRouter()

  return (
    <button
      onClick={() => router.push('/abonnement')}
      className="px-4 py-2 mt-2 rounded transition text-white bg-yellow-400 hover:bg-yellow-500 font-menu"
    >
      S'abonner à la newsletter
    </button>
  )
}
