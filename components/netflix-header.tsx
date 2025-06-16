'use client'

import { Button } from "@/components/ui/button"
import { Search, Bell, User } from "lucide-react"

export function NetflixHeader() {
  return (
    <div className="fixed top-0 left-0 right-0 h-16 bg-[#141414] z-40">
      <div className="container mx-auto px-4 flex items-center h-full">
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-white hover:bg-gray-800">
            <span className="text-xl">🏠</span>
          </Button>
          <div className="flex items-center gap-2">
            <span className="text-white text-sm">Cursos</span>
            <span className="text-gray-400 text-sm">•</span>
            <span className="text-white text-sm">Iniciante</span>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar cursos..."
              className="w-64 h-8 pl-10 pr-4 bg-gray-800 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-white hover:bg-gray-800">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" className="text-white hover:bg-gray-800">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
