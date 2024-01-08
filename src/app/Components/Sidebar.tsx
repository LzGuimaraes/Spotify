import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2 } from "lucide-react";

export function Sidebar() {
    return(
        <aside className="w-72 bg-zinc-950 p-6">

            <nav className="space-y-5 mt-10">
            {/*espaçamento entre os intens */}
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
            <HomeIcon/>
            Inicio</a>
            <a href=""className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
            <Search/>Buscar
            </a>
            <a href=""className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
            <Library/>
            Sua Biblioteca
            </a>
            </nav>
            <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Rock</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Funk</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Sertanejo</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Treino</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Programação</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Podcast</a>
            </nav>
            </aside>
    )
}