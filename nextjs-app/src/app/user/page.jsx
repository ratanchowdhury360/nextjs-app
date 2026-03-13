

import Link from 'next/link';
import React from 'react'


export const getUserData = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return data;
}

export default async function page() {
    const users = await getUserData();
  return (
    <div className='m-4 p-4 border rounded-lg shadow-md grid grid-cols-3 gap-4 '>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <div key={user.id} className='m-4 p-4 border rounded-lg shadow-md '>
            <h1>
                name : {user.name} <br />
                email : {user.email} <br />
                phone : {user.phone} <br />
                website : {user.website} <br />
                <button className="btn btn-primary" ><Link href={`/user/${user.id}`}>Read more</Link></button>
            </h1>

          </div>

        ))}
      </ul>
    </div>
  )
}
