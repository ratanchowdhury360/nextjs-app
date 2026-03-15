import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navber";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: {
    default : "Learning Next JS",
    template : "%s | Next JS Learning"

  },
  description: "Trying to learn next js with a simple project",
   keywords: ['Next.js', 'React', 'JavaScript', 'Web Development', 'Frontend', 'SEO', 'Performance'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`${poppins.className}  antialiased`}
      >
        <Navbar></Navbar>
        <main className="">{children}</main>
        
      </body>
    </html>
  );
}
