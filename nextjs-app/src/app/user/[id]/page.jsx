import { getSinglePost } from '@/app/posts/[id]/page';
import React from 'react'

export const getSingleUser = async (user_id) => {
    const res= await fetch(`https://jsonplaceholder.typicode.com/users/${user_id}`);
    const data = await res.json();
    return data;


}

export default async function UsersDetails({params}) {
    const userData= await params;
    const singleUser = await getSingleUser(userData.id);
  return (
    <div>UsersDetails Id: {singleUser.id}
    <h1>
                name : {singleUser.name} <br />
                email : {singleUser.email} <br />
                phone : {singleUser.phone} <br />
                website : {singleUser.website} <br />
            </h1>
    
    </div>


  )
}
