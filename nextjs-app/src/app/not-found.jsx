import Link from 'next/link'
import React from 'react'

export default function NotFoundPage404() {
  return (
    <div>
        <h1>
            404 - Page Not Found
        </h1>
       <button className='btn btn-primary'> <Link href="/">
            Go back home
        </Link></button>
    </div>
  )
}
