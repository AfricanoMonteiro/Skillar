'use client'

import { Button } from "@/components/ui/button"
import { Bell, MessageSquare, User, Search, Plus, Star, Trash2 } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

const chatContacts = [
  {
    id: 1,
    name: "Ana Silva",
    avatar: "/images/contacts/ana.jpg",
    lastMessage: "Olá! Como está o projeto?",
    time: "10:30",
    unread: 2,
    isOnline: true
  },
  {
    id: 2,
    name: "Carlos Santos",
    avatar: "/images/contacts/carlos.jpg",
    lastMessage: "Pronto para a reunião?",
    time: "09:45",
    unread: 0,
    isOnline: false
  },
  {
    id: 3,
    name: "Pedro Oliveira",
    avatar: "/images/contacts/pedro.jpg",
    lastMessage: "Revisão do código concluída",
    time: "Ontem",
    unread: 1,
    isOnline: true
  },
  {
    id: 4,
    name: "Maria Souza",
    avatar: "/images/contacts/maria.jpg",
    lastMessage: "Documentação atualizada",
    time: "Ontem",
    unread: 0,
    isOnline: false
  }
]

export function ChatSidebar() {
  return (
    <div className="w-80 border-r border-gray-200 bg-white">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-gray-400" />
            <span className="text-lg font-semibold">Mensagens</span>
          </div>
          <Button variant="outline" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Nova conversa
          </Button>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <Input
            placeholder="Buscar conversas..."
            className="w-full"
          />
          <Button variant="ghost" size="sm">
            <Search className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-2">
          <Button variant="ghost" className="w-full justify-start text-left">
            <Bell className="h-4 w-4 mr-2" />
            Notificações
          </Button>
          <Button variant="ghost" className="w-full justify-start text-left">
            <Star className="h-4 w-4 mr-2" />
            Favoritos
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="space-y-2 px-4">
          {chatContacts.map((contact) => (
            <div
              key={contact.id}
              className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
            >
              <div className="relative">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={contact.avatar} alt={contact.name} />
                  <AvatarFallback>{contact.name[0]}</AvatarFallback>
                </Avatar>
                {contact.isOnline && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-sm truncate">{contact.name}</h3>
                    <p className="text-sm text-gray-500 truncate">{contact.lastMessage}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400">{contact.time}</span>
                    {contact.unread > 0 && (
                      <Badge variant="secondary" size="sm">
                        {contact.unread}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 border-t border-gray-200">
        <Button variant="ghost" className="w-full justify-start text-left">
          <Trash2 className="h-4 w-4 mr-2" />
          Lixeira
        </Button>
      </div>
    </div>
  )
}
