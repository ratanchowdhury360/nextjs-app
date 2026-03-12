import React from 'react'

export default function SlugsPages({ params }) {
  const slugs = params.slugs;

  console.log(slugs); // ['slug1', 'slug2', ...]

  return (
    <div>SlugsPages</div>
  )
}