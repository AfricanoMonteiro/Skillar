'use client'

import { Button } from "@/components/ui/button"
import { MessageSquare, Send, Paperclip, Smile, Camera } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const messages = [
  {
    id: 1,
    sender: "Ana Silva",
    avatar: "/images/contacts/ana.jpg",
    content: "Olá! Como está o projeto?",
    time: "10:30",
    isUser: false
  },
  {
    id: 2,
    sender: "Você",
    content: "Tudo bem! Estou trabalhando na feature de chat agora.",
    time: "10:31",
    isUser: true
  },
  {
    id: 3,
    sender: "Ana Silva",
    content: "Legal! Preciso de ajuda com o design.",
    time: "10:32",
    isUser: false
  }
]

export function ChatMain() {
  return (
    <div className="flex-1 flex flex-col">
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/images/contacts/ana.jpg" alt="Ana Silva" />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="font-semibold">Ana Silva</h2>
            <p className="text-sm text-gray-500">Online</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            <MessageSquare className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Smile className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Paperclip className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Camera className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
          >
            <div className={`max-w-[80%] rounded-lg p-3 ${
              message.isUser ? "bg-primary text-primary-foreground" : "bg-gray-100"
            }`}>
              <p className="text-sm">{message.content}</p>
              <p className="text-xs text-gray-500 mt-1">{message.time}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 p-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Smile className="h-4 w-4" />
          </Button>
          <div className="flex-1">
            <Input
              placeholder="Digite sua mensagem..."
              className="w-full"
            />
          </div>
          <Button variant="default">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
