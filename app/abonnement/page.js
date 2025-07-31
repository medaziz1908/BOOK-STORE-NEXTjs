
'use client'
import React from 'react'


import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

const schema = Yup.object().shape({
  nom: Yup.string()
    .matches(/^[A-Za-zÀ-ÿ\s]+$/, 'Seules les lettres sont autorisées')
    .min(5, 'Min 5 caractères')
    .required('Nom requis'),
  email: Yup.string().email('Email invalide').required('Email requis'),
  confirmation: Yup.string()
    .oneOf([Yup.ref('email')], 'Les emails ne correspondent pas')
    .required('Confirmation requise'),
  telephone: Yup.string()
    .matches(/^[0-9]+$/, 'Seuls les chiffres sont autorisés')
    .min(8, 'Doit contenir 8 chiffres')
    .max(8, 'Doit contenir 8 chiffres')
    .required('Téléphone requis'),
  photo: Yup.mixed()
    .test('fileType', 'Format invalide (jpg/jpeg)', (value) => {
      return value && value[0] && ['image/jpeg', 'image/jpg'].includes(value[0].type)
    })
    .required('Photo requise'),
  conditions: Yup.bool().oneOf([true], 'Vous devez accepter les conditions')
})

export default function Abonnement() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = (data) => {
    alert('Formulaire soumis avec succès !')
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10 font-menu">
      <h2 className="text-2xl font-bold text-primaire mb-6 text-center font-titre">Formulaire d’abonnement</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label>Nom :</label>
          <input type="text" {...register('nom')} className="w-full border rounded p-2" />
          {errors.nom && <p className="text-red-600 text-sm">{errors.nom.message}</p>}
        </div>
        <div>
          <label>Email :</label>
          <input type="email" {...register('email')} className="w-full border rounded p-2" />
          {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
        </div>
        <div>
          <label>Confirmation de l’email :</label>
          <input type="email" {...register('confirmation')} className="w-full border rounded p-2" />
          {errors.confirmation && <p className="text-red-600 text-sm">{errors.confirmation.message}</p>}
        </div>
        <div>
          <label>Téléphone :</label>
          <input type="text" {...register('telephone')} className="w-full border rounded p-2" />
          {errors.telephone && <p className="text-red-600 text-sm">{errors.telephone.message}</p>}
        </div>
        <div>
          <label>Photo (jpg/jpeg) :</label>
          <input type="file" {...register('photo')} className="w-full" />
          {errors.photo && <p className="text-red-600 text-sm">{errors.photo.message}</p>}
        </div>
        <div className="flex items-center">
          <input type="checkbox" {...register('conditions')} className="mr-2" />
          <label>J’accepte les conditions générales</label>
        </div>
        {errors.conditions && <p className="text-red-600 text-sm">{errors.conditions.message}</p>}

        <button type="submit" className="bg-secondaire text-white px-4 py-2 rounded hover:bg-purple-700">
          S’abonner
        </button>
      </form>
    </div>
  )
}