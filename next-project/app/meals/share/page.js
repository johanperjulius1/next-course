import React from 'react'
import Header from '@/components/header'
import Link from 'next/link'

export default function ShareMealPage() {
  return (
    <main>
      <h1>Share meal</h1>
      <Header />
      <Link href="/">Go to home page</Link>
    </main>
  )
}
