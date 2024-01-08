// Colocando os icones com Lucide
import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2 } from "lucide-react";
import Image from "next/image";
import { Sidebar } from "./Components/Sidebar";
import { Footer } from "./Components/Footer";

export default function Home() {
    return (  
      // oculpar a altura toda da tela
        <div className="h-screen flex flex-col"> 
          <div className="flex flex-1">
            <Sidebar/>
            
              <main className="flex-1 p-6">
                <div className="flex items-center gap-3">
                  <button className="rounded-full bg-black/40 p-1">
                  <ChevronLeft/>
                  </button>
                  <button className="rounded-full bg-black/40 p-1">
                  <ChevronRight/>
                  </button>
                </div>
                <h1 className="font-semibold text-3x1 mt-10"> Bom dia </h1>

                <div className=" grid grid-cols-3 gap-4">
                <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
                  <Image src="/download.jpg" width={104} height={104} alt="Capa da Banda System of A Down"/> 
                  <strong>Lonely Day</strong>
                  <button className= "w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                  <Play fill='bg-black'/>
                  </button>  
                  </a>
                <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors ">  
                  <Image src="/download.jpg" width={104} height={104} alt="Capa da Banda System of A Down"/>
                  <strong>Chop Suey!</strong>
                  <button className= "w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                  <Play fill='bg-black'/>
                  </button> 
                  </a>
                <a  href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
                  <Image src="/download.jpg" width={104} height={104} alt="Capa da Banda System of A Down"/> 
                  <strong>Toxicity</strong> 
                  <button className= "w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                  <Play fill='bg-black'/>
                  </button> 
                  </a>
                <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
                  <Image src="/download.jpg" width={104} height={104} alt="Capa da Banda System of A Down"/> 
                  <strong>Aerials</strong> 
                  <button className= "w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                  <Play fill='bg-black'/>
                  </button> 
                  </a>
                <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
                 <Image src="/download.jpg" width={104} height={104} alt="Capa da Banda System of A Down"/>
                 <strong>B.Y.O.B </strong>
                 <button className= "w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                  <Play fill='bg-black'/>
                  </button>  
                  </a>
                <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
                 <Image src="/download.jpg" width={104} height={104} alt="Capa da Banda System of A Down"/> 
                 <strong>Hypnotize</strong> 
                 <button className= "w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                  <Play fill='bg-black'/>
                  </button> 
                  </a>
                </div>
                <h2 className="font-semibold text-3x1 mt-10"> Feito para Luiz Fernando </h2>
                <div className="grid grid-cols-8 gap-4 mt-4">
                  <a href="" className=" bg-white/5 p-3 rounded-md flex flex-col hover:bg-white/10">
                    <Image src="/download.jpg" className="w-full" width={120} height={120} alt="Capa da Banda System of A Down" />
                    <strong className="font-semibold">Daily Mix 1</strong>
                    <span className="text-sm text-zinc-400" >Wallows, COIN, girl in red and more</span>
                  </a>
                  <a href="#" className=" bg-white/5 p-3 rounded-md flex flex-col hover:bg-white/10">
                    <Image src="/download.jpg" className="w-full" width={120} height={120} alt="Capa da Banda System of A Down" />
                    <strong className="font-semibold">Daily Mix 2</strong>
                    <span className="text-sm text-zinc-400" >Wallows, COIN, girl in red and more</span>
                  </a>
                  <a href="#" className=" bg-white/5 p-3 rounded-md flex flex-col hover:bg-white/10">
                    <Image src="/download.jpg" className="w-full" width={120} height={120} alt="Capa da Banda System of A Down" />
                    <strong className="font-semibold">Daily Mix 3</strong>
                    <span className="text-sm text-zinc-400" >Wallows, COIN, girl in red and more</span>
                  </a>
                  <a href="#" className=" bg-white/5 p-3 rounded-md flex flex-col hover:bg-white/10">
                    <Image src="/download.jpg" className="w-full" width={120} height={120} alt="Capa da Banda System of A Down" />
                    <strong className="font-semibold">Daily Mix 4</strong>
                    <span className="text-sm text-zinc-400" >Wallows, COIN, girl in red and more</span>
                  </a>
                  <a href="#" className=" bg-white/5 p-3 rounded-md flex flex-col hover:bg-white/10">
                    <Image src="/download.jpg" className="w-full" width={120} height={120} alt="Capa da Banda System of A Down" />
                    <strong className="font-semibold">Daily Mix 5</strong>
                    <span className="text-sm text-zinc-400" >Wallows, COIN, girl in red and more</span>
                  </a>
                </div>
              </main>
          </div>
          <Footer/>
        </div>
      
    )
  }
