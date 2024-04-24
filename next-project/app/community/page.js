import React from 'react'
import Link from 'next/link'
import Header from '@/components/header'

export default function CommunityPage() {
  return (
    <main>
      <Header />
      <h1>Welcome to the Community page</h1>
      <p>Join our community!</p>
       <Link href="/">Go to home page</Link>
    </main>
  )
}
