import React from 'react'

export const getSinglePost = async (post_id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`);
    const data = await res.json();
    return data;
}

export default async function SinglePost( {params}) {
    const p = await params;
    const post = await getSinglePost(p.id);
  return (
    <div className='m-4 p-4 border rounded-lg shadow-md'>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}
