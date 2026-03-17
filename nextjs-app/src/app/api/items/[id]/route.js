

import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";


// export async function GET(req, {params}) {
//  const p = await params;
//  console.log(p)
//   return Response.json({ params : p })
// }

export async function GET(req, {params}) {
  
 const p = await params;
 const singleData = await dbConnect("items").findOne({_id : new ObjectId(p.id)});
  return Response.json({ singleData })
}



export async function DELETE(req, {params}) {
  
 const p = await params;
 const deletedData = await dbConnect("items").deleteOne({_id : new ObjectId(p.id)});
  return Response.json({ deletedData })
}

export async function PATCH(req, {params}) {
  
 const p = await params;
 console.log(p);
 const postedData = await req.json();
 const filter = {_id : new ObjectId(p.id)};
 const updatedData = await dbConnect("items").updateOne(filter, { $set:{...postedData }}, {upsert : true});
 console.log(postedData);
  return Response.json({ updatedData })
}

// nextjsdb

// oLhbBw8v1psaV3vp

// nextjsTest
//items