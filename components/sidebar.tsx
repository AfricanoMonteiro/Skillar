'use client'

import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronLeft } from "lucide-react"
import { useState } from "react"

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="fixed left-0 top-0 h-screen bg-black/80 z-50">
      <div className="flex flex-col w-64 bg-[#141414] h-screen">
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <h1 className="text-xl font-bold text-white">LearningHub</h1>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-gray-300"
          >
            {isOpen ? <ChevronLeft className="h-6 w-6" /> : <ChevronRight className="h-6 w-6" />}
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto">
          <div className="p-4">
            <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-800">
              <span className="mr-2">🏠</span>
              Início
            </Button>
            <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-800">
              <span className="mr-2">📚</span>
              Meus Cursos
            </Button>
            <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-800">
              <span className="mr-2">⭐</span>
              Favoritos
            </Button>
            <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-800">
              <span className="mr-2">📊</span>
              Progresso
            </Button>
          </div>
        </nav>

        <div className="border-t border-gray-800 p-4">
          <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-800">
            <span className="mr-2">⚙️</span>
            Configurações
          </Button>
        </div>
      </div>
    </div>
  )
}
