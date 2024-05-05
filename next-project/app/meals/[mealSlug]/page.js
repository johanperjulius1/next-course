import React from 'react'
import MainHeader from '@/components/MainHeader/main-header'
import Link from 'next/link'

export default function MealDetailsPage() {
  return (
    <main>
      <MainHeader />
      <h1>Welcome to mealSlug</h1>
      <Link href="/">Go to home page</Link>
    </main>
  )
}
