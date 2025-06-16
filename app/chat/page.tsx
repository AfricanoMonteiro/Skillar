"use client"

import { useState, useRef, useEffect, useMemo } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent } from "@/components/ui/card"
import {
  Send,
  Search,
  Plus,
  MoreVertical,
  Phone,
  Video,
  Info,
  Smile,
  Paperclip,
  Mic,
  Users,
  Hash,
  Crown,
  Sparkles,
  Zap,
  Star,
  Heart,
  Flame,
  Code,
  MessageCircle,
  Clock,
  Menu,
  ArrowLeft,
  ThumbsUp,
  Image,
  File,
  Check,
  CheckCheck,
  Archive,
  Pin,
  Reply,
  Forward,
  Copy,
  Trash2,
  AlertCircle,
  Bell,
  Settings,
  X,
  Dot
} from "lucide-react"

// Interface para definir tipos de dados
interface ChatUser {
  id: string
  name: string
  type: "direct" | "group"
  avatar: string
  lastMessage: string
  time: string
  unread: number
  online: boolean
  members?: number
  category?: string
  role?: string
  level?: string
}

interface ChatMessage {
  id: number
  sender: string
  avatar: string
  message: string
  time: string
  isOwn: boolean
  reactions: string[]
  type: "text" | "code" | "image" | "file"
  status?: "sent" | "delivered" | "read"
  replyTo?: number
}

interface Notification {
  id: string
  userId: string
  fromUser: string
  fromUserId: string
  avatar: string
  type: string
  action: string
  title: string
  message: string
  chatId?: string
  messageId?: string
  timestamp: Date
  time: string
  read: boolean
  priority: string
}

interface Suggestion {
  id: string
  name: string
  avatar: string
  mutualFriends: number
  role: string
}

export default function Chat() {
  // Estados para controle da interface
  const [selectedChat, setSelectedChat] = useState("1")
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [chats, setChats] = useState<ChatUser[]>([])
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [suggestions, setSuggestions] = useState<Suggestion[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [showNotifications, setShowNotifications] = useState(false)
  const [activeTab, setActiveTab] = useState("chats") // chats, notifications, suggestions
  const [isClient, setIsClient] = useState(false)
  const [loading, setLoading] = useState(false)
  
  // Referências para elementos DOM
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const messageInputRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    setIsClient(true)
    loadChats()
    loadNotifications()
    loadSuggestions()
  }, [])

  // Carregar chats do usuário
  const loadChats = async () => {
    try {
      const response = await fetch('/api/chat/chats?userId=current_user')
      const data = await response.json()
      
      if (data.success) {
        setChats(data.data)
      }
    } catch (error) {
      console.error('Erro ao carregar chats:', error)
    }
  }

  // Carregar mensagens do chat selecionado
  const loadMessages = async (chatId: string) => {
    try {
      setLoading(true)
      const response = await fetch(`/api/chat/messages?chatId=${chatId}`)
      const data = await response.json()
      
      if (data.success) {
        setMessages(data.data.messages)
      }
    } catch (error) {
      console.error('Erro ao carregar mensagens:', error)
    } finally {
      setLoading(false)
    }
  }

  // Carregar notificações
  const loadNotifications = async () => {
    try {
      const response = await fetch('/api/chat/notifications?userId=current_user&limit=10')
      const data = await response.json()
      
      if (data.success) {
        setNotifications(data.data.notifications)
      }
    } catch (error) {
      console.error('Erro ao carregar notificações:', error)
    }
  }

  // Carregar sugestões (dados estáticos por enquanto)
  const loadSuggestions = () => {
    const suggestionData: Suggestion[] = [
      {
        id: "1",
        name: "Adrienne Singh",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1c8?w=40&h=40&fit=crop&crop=face",
        mutualFriends: 12,
        role: "UX Designer"
      },
      {
        id: "2",
        name: "Yash Prakash",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
        mutualFriends: 8,
        role: "Frontend Dev"
      },
      {
        id: "3",
        name: "Ankit Verma",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
        mutualFriends: 15,
        role: "Full Stack"
      },
      {
        id: "4",
        name: "Vikash Raj",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
        mutualFriends: 6,
        role: "DevOps"
      }
    ]
    setSuggestions(suggestionData)
  }

  // Função para enviar mensagem
  const sendMessage = async () => {
    if (!message.trim() || !selectedChat) return

    try {
      setLoading(true)
      
      const response = await fetch('/api/chat/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chatId: selectedChat,
          message: message.trim(),
          senderId: 'current_user',
          sender: 'Você',
          type: 'text'
        })
      })

      const data = await response.json()
      
      if (data.success) {
        setMessages(prev => [...prev, data.data])
        setMessage("")
        
        // Atualizar último mensagem no chat
        setChats(prev => prev.map(chat => 
          chat.id === selectedChat 
            ? { ...chat, lastMessage: message.trim(), time: 'agora' }
            : chat
        ))

        // Simular resposta automática após 2 segundos
        setTimeout(async () => {
          try {
            const autoReplyResponse = await fetch('/api/chat/messages', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                chatId: selectedChat,
                message: "Que legal! Me conta mais sobre essas ideias 😊",
                senderId: 'user_ana',
                sender: 'Ana Matos',
                type: 'text'
              })
            })

            const autoReplyData = await autoReplyResponse.json()
            if (autoReplyData.success) {
              setMessages(prev => [...prev, autoReplyData.data])
            }
          } catch (error) {
            console.error('Erro na resposta automática:', error)
          }
        }, 2000)
      }
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error)
    } finally {
      setLoading(false)
    }
  }

  // Marcar notificação como lida
  const markNotificationAsRead = async (notificationId: string) => {
    try {
      await fetch('/api/chat/notifications', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          notificationId,
          read: true
        })
      })

      setNotifications(prev => prev.map(notification => 
        notification.id === notificationId 
          ? { ...notification, read: true }
          : notification
      ))
    } catch (error) {
      console.error('Erro ao marcar notificação como lida:', error)
    }
  }

  // Marcar todas as notificações como lidas
  const markAllNotificationsAsRead = async () => {
    try {
      await fetch('/api/chat/notifications', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          markAllAsRead: true,
          userId: 'current_user'
        })
      })

      setNotifications(prev => prev.map(notification => ({ ...notification, read: true })))
    } catch (error) {
      console.error('Erro ao marcar todas as notificações como lidas:', error)
    }
  }

  // Função para lidar com teclas pressionadas
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  // Scroll automático para a última mensagem
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Carregar mensagens quando o chat selecionado mudar
  useEffect(() => {
    if (selectedChat) {
      loadMessages(selectedChat)
    }
  }, [selectedChat])

  // Filtrar chats baseado na busca
  const filteredChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    chat.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const selectedChatData = chats.find(chat => chat.id === selectedChat)

  // Partículas para o fundo
  const particles = useMemo(() => {
    const positions = [
      { top: 15, left: 25, delay: 0.5, duration: 3.2 },
      { top: 35, left: 75, delay: 1.2, duration: 2.8 },
      { top: 55, left: 15, delay: 2.1, duration: 3.6 },
      { top: 25, left: 85, delay: 0.8, duration: 2.4 },
      { top: 75, left: 45, delay: 1.8, duration: 3.4 },
      { top: 45, left: 65, delay: 0.3, duration: 2.9 },
      { top: 85, left: 25, delay: 2.5, duration: 3.3 },
      { top: 65, left: 90, delay: 1.1, duration: 2.7 },
      { top: 10, left: 55, delay: 0.7, duration: 3.7 },
      { top: 90, left: 70, delay: 2.2, duration: 2.5 }
    ]
    return positions
  }, [])

  return (
    <div className="min-h-screen bg-background relative">
      {/* Background com partículas */}
      <div className="fixed inset-0 z-0 opacity-30">
        {isClient && particles.map((particle, index) => (
          <div
            key={index}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-pulse"
            style={{
              top: `${particle.top}%`,
              left: `${particle.left}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          />
        ))}
      </div>

      {/* Overlay para melhor legibilidade */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
      
      <div className="relative z-10">
        <Navigation />
        
        <div className="flex h-[calc(100vh-64px)]">
          {/* Sidebar */}
          <div className="w-80 bg-background/80 backdrop-blur-xl border-r border-border/50 flex flex-col modern-card">
            {/* Header */}
            <div className="p-4 border-b border-border/50">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-xl font-bold gradient-text flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Chat ONN
                </h1>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-primary/10">
                    <Phone className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-primary/10">
                    <Video className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-primary/10">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar conversas ou pessoas"
                  className="pl-10 bg-secondary/50 border-border/50 focus:border-primary/50"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Tabs */}
              <div className="flex mt-4 bg-secondary/30 rounded-lg p-1">
                <button
                  onClick={() => setActiveTab("chats")}
                  className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all ${
                    activeTab === "chats" 
                      ? "bg-gradient-to-r from-primary to-secondary text-white shadow-sm" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Chats
                </button>
                <button
                  onClick={() => setActiveTab("notifications")}
                  className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all relative ${
                    activeTab === "notifications" 
                      ? "bg-gradient-to-r from-primary to-secondary text-white shadow-sm" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Notificações
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs p-0 flex items-center justify-center animate-pulse">
                    2
                  </Badge>
                </button>
              </div>
            </div>

            {/* Content */}
            <ScrollArea className="flex-1">
              {activeTab === "chats" && (
                <div className="p-2">
                  {filteredChats.map((chat) => (
                    <div
                      key={chat.id}
                      onClick={() => setSelectedChat(chat.id)}
                      className={`flex items-center p-3 rounded-lg cursor-pointer transition-all mb-1 ${
                        selectedChat === chat.id 
                          ? "bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30" 
                          : "hover:bg-secondary/30"
                      }`}
                    >
                      <div className="relative">
                        <Avatar className="h-12 w-12 avatar-ring">
                          <AvatarImage src={chat.avatar} alt={chat.name} />
                          <AvatarFallback>{chat.name[0]}</AvatarFallback>
                        </Avatar>
                        {chat.online && (
                          <div className="absolute -bottom-0.5 -right-0.5 h-4 w-4 bg-gradient-to-r from-green-400 to-emerald-500 border-2 border-background rounded-full animate-pulse" />
                        )}
                      </div>
                      
                      <div className="ml-3 flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-semibold text-foreground truncate">
                            {chat.name}
                          </h3>
                          <span className="text-xs text-muted-foreground">{chat.time}</span>
                        </div>
                        <p className="text-sm text-muted-foreground truncate mt-0.5">
                          {chat.lastMessage}
                        </p>
                        {chat.role && (
                          <Badge variant="outline" className="text-xs mt-1">
                            {chat.role}
                          </Badge>
                        )}
                      </div>

                      {chat.unread > 0 && (
                        <Badge className="ml-2 bg-gradient-to-r from-primary to-secondary text-white h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs animate-pulse">
                          {chat.unread}
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "notifications" && (
                <div className="p-2">
                  <div className="flex items-center justify-between mb-3 px-2">
                    <h3 className="text-sm font-semibold text-foreground">Notificações</h3>
                    {notifications.some(n => !n.read) && (
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={markAllNotificationsAsRead}
                        className="text-xs text-primary hover:text-primary/80"
                      >
                        Marcar todas como lidas
                      </Button>
                    )}
                  </div>
                  {notifications.length === 0 ? (
                    <div className="text-center py-8">
                      <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-2 opacity-50" />
                      <p className="text-sm text-muted-foreground">Nenhuma notificação</p>
                    </div>
                  ) : (
                    notifications.map((notification) => (
                      <div
                        key={notification.id}
                        onClick={() => !notification.read && markNotificationAsRead(notification.id)}
                        className={`flex items-start p-3 rounded-lg mb-1 transition-all cursor-pointer ${
                          !notification.read ? "bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/15 hover:to-secondary/15" : "hover:bg-secondary/30"
                        }`}
                      >
                        <Avatar className="h-10 w-10 avatar-ring">
                          <AvatarImage src={notification.avatar} alt={notification.fromUser} />
                          <AvatarFallback>{notification.fromUser[0]}</AvatarFallback>
                        </Avatar>
                        
                        <div className="ml-3 flex-1">
                          <p className="text-sm text-foreground">
                            <span className="font-semibold gradient-text">{notification.fromUser}</span>{" "}
                            {notification.action}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                          {notification.priority === 'high' && (
                            <Badge className="mt-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs">
                              Alta prioridade
                            </Badge>
                          )}
                        </div>

                        <div className="flex items-center space-x-2">
                          {!notification.read && (
                            <div className="h-2 w-2 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse" />
                          )}
                          {notification.type === 'mention' && (
                            <Badge className="bg-blue-100 text-blue-800 border-blue-200 text-xs">
                              Menção
                            </Badge>
                          )}
                          {notification.type === 'message_reaction' && (
                            <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200 text-xs">
                              Reação
                            </Badge>
                          )}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}
            </ScrollArea>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col bg-background/50 backdrop-blur-xl">
            {selectedChatData ? (
              <>
                {/* Chat Header */}
                <div className="bg-background/80 backdrop-blur-xl border-b border-border/50 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10 avatar-ring">
                        <AvatarImage src={selectedChatData.avatar} alt={selectedChatData.name} />
                        <AvatarFallback>{selectedChatData.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="ml-3">
                        <h2 className="text-lg font-semibold gradient-text">{selectedChatData.name}</h2>
                        <p className="text-sm text-muted-foreground flex items-center">
                          {selectedChatData.online ? (
                            <>
                              <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mr-2 animate-pulse" />
                              Online agora
                            </>
                          ) : (
                            "Visto por último há 2h"
                          )}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" className="hover:bg-primary/10">
                        <Phone className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="hover:bg-primary/10">
                        <Video className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="hover:bg-primary/10">
                        <Info className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <ScrollArea className="flex-1 p-4">
                  <div className="space-y-4">
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${msg.isOwn ? "justify-end" : "justify-start"}`}
                      >
                        <div className={`flex max-w-xs lg:max-w-md ${msg.isOwn ? "flex-row-reverse" : "flex-row"}`}>
                          {!msg.isOwn && (
                            <Avatar className="h-8 w-8 mt-1 avatar-ring">
                              <AvatarImage src={msg.avatar} alt={msg.sender} />
                              <AvatarFallback>{msg.sender[0]}</AvatarFallback>
                            </Avatar>
                          )}
                          
                          <div className={`mx-2 ${msg.isOwn ? "text-right" : "text-left"}`}>
                            <div
                              className={`inline-block p-3 rounded-2xl ${
                                msg.isOwn
                                  ? "bg-gradient-to-r from-primary to-secondary text-white"
                                  : "bg-secondary/50 text-foreground border border-border/50"
                              }`}
                            >
                              <p className="text-sm">{msg.message}</p>
                            </div>
                            <div className="flex items-center mt-1 space-x-1">
                              <span className="text-xs text-muted-foreground">{msg.time}</span>
                              {msg.isOwn && (
                                <div className="text-muted-foreground">
                                  {msg.status === "sent" && <Check className="h-3 w-3" />}
                                  {msg.status === "delivered" && <CheckCheck className="h-3 w-3" />}
                                  {msg.status === "read" && <CheckCheck className="h-3 w-3 text-primary" />}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div ref={messagesEndRef} />
                  </div>
                </ScrollArea>

                {/* Message Input */}
                <div className="bg-background/80 backdrop-blur-xl border-t border-border/50 p-4">
                  <div className="flex items-end space-x-2">
                    <Button variant="ghost" size="sm" className="mb-2 hover:bg-primary/10">
                      <Paperclip className="h-4 w-4" />
                    </Button>
                    
                    <div className="flex-1 relative">
                      <Input
                        placeholder="Digite uma mensagem..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="pr-20 py-3 rounded-full border-border/50 bg-secondary/30 focus:border-primary/50"
                      />
                      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
                        <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-primary/10">
                          <Smile className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-primary/10">
                          <Mic className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <Button 
                      onClick={sendMessage}
                      disabled={!message.trim()}
                      className="rounded-full w-10 h-10 p-0 bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center bg-background/30">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold gradient-text mb-2">Selecione uma conversa</h3>
                  <p className="text-muted-foreground">Escolha uma conversa para começar a conversar</p>
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar - Suggestions */}
          <div className="w-80 bg-background/80 backdrop-blur-xl border-l border-border/50 p-4 modern-card">
            <div className="mb-6">
              <h3 className="text-lg font-semibold gradient-text mb-4 flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Sugestões
              </h3>
              <div className="space-y-3">
                {suggestions.map((suggestion) => (
                  <div key={suggestion.id} className="flex items-center justify-between p-3 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-all">
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10 avatar-ring">
                        <AvatarImage src={suggestion.avatar} alt={suggestion.name} />
                        <AvatarFallback>{suggestion.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="ml-3">
                        <h4 className="text-sm font-semibold text-foreground">{suggestion.name}</h4>
                        <p className="text-xs text-muted-foreground">{suggestion.role}</p>
                        <p className="text-xs text-primary">{suggestion.mutualFriends} amigos em comum</p>
                      </div>
                    </div>
                    <Button size="sm" className="bg-gradient-to-r from-primary to-secondary text-white text-xs hover:from-primary/80 hover:to-secondary/80">
                      Seguir
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
