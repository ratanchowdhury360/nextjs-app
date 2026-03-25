

// export async function GET() {
//   const data = {
//     massage : "Hello from API route",
//     hello : "This is a sample API route in Next.js 16"
//   }

import dbConnect from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";


//   return Response.json({ data })
// }
export async function GET() {
  const data = await dbConnect("items").find({}).toArray();

  return Response.json({ data })
}


// export async function POST(req) {
//   const postedData = await req.json(); // Assuming the request body is JSON and contains the data you want to process
//   console.log("Received POST data:", postedData);

//   return Response.json({ postedData })
// }

export async function POST(req) {
  const postedData = await req.json();
  console.log(postedData);

  const result = await dbConnect("items").insertOne(postedData);
 revalidatePath("/products"); // Revalidate the /products page to reflect the new data
  console.log(result);

  return Response.json({ result });
}



