export const dynamic = 'force-static'
 
export async function GET() {
  const data = {
    massage : "Hello from API route",
    hello : "This is a sample API route in Next.js 16"
  }
 
  return Response.json({ data })
}


export async function POST(req) {
  const postedData = await req.json(); // Assuming the request body is JSON and contains the data you want to process
  console.log("Received POST data:", postedData);
 
  return Response.json({ postedData })
}


