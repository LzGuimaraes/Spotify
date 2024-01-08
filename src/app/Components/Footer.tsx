import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2 } from "lucide-react";
import Image from "next/image";

export function Footer() {
    return(
        <footer className="bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image src="/download.jpg" width={80} height={80} alt="Capa da Banda System of A Down"/>
              <div className="flex flex-col">
              <strong className="font-normal"> B.Y.O.B. </strong>
              <span className="text-xs text-zinc-400"> System Of a Down </span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-6">
                <Shuffle size={20} className="text-zinc-200"/>
                <SkipBack size={20} className="text-zinc-200"/>

                <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
                  <Play/>
                </button>

                <SkipForward size={20} className="text-zinc-200"/>
                <Repeat size={20} className="text-zinc-200"/>
              </div>
            <div className="flex items-center gap-2">
                  <span className="text-xs text-zinc-400">0:31</span>
                  <div className="h-1 rounded-full w-96 bg-zinc-600 " >
                  <div className="bg-zinc-200 w-40 h-1 rounded"> </div>  
                  </div>
                  <span className="text-xs text-zinc-400">2:14</span>
            </div> 
            </div>
            <div className="flex items-center gap-4">
            <Mic2 size={20}/>
            <LayoutList size={20}/>
            <Laptop2 size={20}/>
            <div className="flex items-center gap-2">
            <Volume size={20}/>
            </div>
            <Maximize2 size={20}/>
            </div>
            </footer>
    )
}