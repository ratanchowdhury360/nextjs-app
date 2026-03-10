import Link from 'next/link'
import React from 'react'

export default function AboutPage() {
  return (
    <div>
      <p className='text-bold text-2xl'>AboutPage</p>
      <Link href="/about/address" className='text-blue-500 underline'>Go to Address Page</Link>
    </div>
  )
}
