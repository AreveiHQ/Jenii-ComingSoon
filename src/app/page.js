import Image from "next/image";
import Header from "./components/Header";
import Info from "./components/Info";
import { Inter } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
   <>

    <div className={` ${inter.className} bg-cover bg-center bg-no-repeat`} style={{ backgroundImage: "url('/bg.png')" }}>
      <Header/>
      <div className="mt-4">
      <Info/>
      </div>
      </div>
   </>
  );
}

