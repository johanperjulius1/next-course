import React from 'react'
import Link from 'next/link'
import Header from '@/components/header'

const AboutPage = () => {
  return (
    <main>
      <Header />
      <h1>About us</h1>
       <Link href="/">Go to home page</Link>
    </main>
  )
}

export default AboutPage