import React from 'react'

export const getposts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return data;
};

export default async function Posts() {
  const posts = await getposts();

  return (
    <div className='space-y-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-4 p-4'>
      {
        posts.map(post => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))
      }
    </div>
  )
}