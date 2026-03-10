import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main page of the Next.js application.</p>
      <div className="bg-gray-800">
        <button className="btn btn-neutral">Neutral</button>
        <button className="btn btn-primary">Primary</button>
      </div>
    </div>
  );
}
