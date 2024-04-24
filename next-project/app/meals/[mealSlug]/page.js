import React from 'react'
import Header from '@/components/header'
import Link from 'next/link'

export default function mealSlug() {
  return (
    <main>
      <Header />
      <h1>Welcome to mealSlug</h1>
      <Link href="/">Go to home page</Link>
    </main>
  )
}
