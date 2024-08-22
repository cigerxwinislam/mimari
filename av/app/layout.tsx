// Bismillahirahmanirahim



import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BasicExample from "./components/nav";
import 'bootstrap/dist/css/bootstrap.css'
import Footer from "./components/footer";



import { Alert } from "react-bootstrap";
import { Tegihistin } from "./components/tegihistin";
const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Avukat Burak Coşkun",
  description: "Hukuk Danışmanlığı",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{background:"green",color:"white"}} className={inter.className}>
        
        <BasicExample/>
        {children}
    
<Tegihistin />

        <Footer/>
        </body>
    </html>
  );
}
