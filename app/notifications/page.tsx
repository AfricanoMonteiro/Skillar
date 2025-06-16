"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Bell,
  Check,
  MessageCircle,
  BookOpen,
  Users,
  Award,
  Settings,
  Trash2,
  BookMarkedIcon as MarkAsUnread,
} from "lucide-react"

export default function Notifications() {
  const [activeTab, setActiveTab] = useState("all")
  const [notifications, setNotifications] = useState([
    {
      id: "1",
      type: "message",
      title: "Nova mensagem de Ana Costa",
      content: "Oi João! Vi que você está trabalhando no projeto de e-commerce...",
      avatar: "/placeholder.svg?height=40&width=40",
      timestamp: "5 min atrás",
      read: false,
      actionUrl: "/chat",
    },
    {
      id: "2",
      type: "course",
      title: "Novo módulo disponível",
      content: "O módulo 'React Hooks Avançados' foi adicionado ao curso React Avançado",
      avatar: "/placeholder.svg?height=40&width=40",
      timestamp: "1 hora atrás",
      read: false,
      actionUrl: "/courses/react-avancado",
    },
    {
      id: "3",
      type: "forum",
      title: "Resposta no fórum",
      content: "Carlos Silva respondeu seu post sobre 'Melhores práticas TypeScript'",
      avatar: "/placeholder.svg?height=40&width=40",
      timestamp: "2 horas atrás",
      read: true,
      actionUrl: "/forum/post/123",
    },
    {
      id: "4",
      type: "mentorship",
      title: "Sessão de mentoria agendada",
      content: "Sua sessão com Maria Santos está marcada para amanhã às 15:00",
      avatar: "/placeholder.svg?height=40&width=40",
      timestamp: "3 horas atrás",
      read: false,
      actionUrl: "/mentorship",
    },
    {
      id: "5",
      type: "badge",
      title: "Nova conquista desbloqueada!",
      content: "Você ganhou o badge 'Colaborador Ativo' por participar de 5 projetos",
      avatar: "/placeholder.svg?height=40&width=40",
      timestamp: "1 dia atrás",
      read: true,
      actionUrl: "/profile",
    },
    {
      id: "6",
      type: "project",
      title: "Convite para projeto",
      content: "Pedro Lima te convidou para participar do projeto 'Dashboard Analytics'",
      avatar: "/placeholder.svg?height=40&width=40",
      timestamp: "1 dia atrás",
      read: false,
      actionUrl: "/projects/dashboard-analytics",
    },
    {
      id: "7",
      type: "course",
      title: "Curso concluído",
      content: "Parabéns! Você concluiu o curso 'Design System Completo'",
      avatar: "/placeholder.svg?height=40&width=40",
      timestamp: "2 dias atrás",
      read: true,
      actionUrl: "/courses/design-system",
    },
    {
      id: "8",
      type: "system",
      title: "Atualização da plataforma",
      content: "Nova versão disponível com melhorias de performance e novos recursos",
      avatar: "/placeholder.svg?height=40&width=40",
      timestamp: "3 dias atrás",
      read: true,
      actionUrl: "/changelog",
    },
  ])

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "message":
        return <MessageCircle className="h-5 w-5 text-blue-600" />
      case "course":
        return <BookOpen className="h-5 w-5 text-green-600" />
      case "forum":
        return <MessageCircle className="h-5 w-5 text-purple-600" />
      case "mentorship":
        return <Users className="h-5 w-5 text-orange-600" />
      case "badge":
        return <Award className="h-5 w-5 text-yellow-600" />
      case "project":
        return <Users className="h-5 w-5 text-indigo-600" />
      case "system":
        return <Settings className="h-5 w-5 text-gray-600" />
      default:
        return <Bell className="h-5 w-5 text-gray-600" />
    }
  }

  const getNotificationTypeLabel = (type: string) => {
    switch (type) {
      case "message":
        return "Mensagem"
      case "course":
        return "Curso"
      case "forum":
        return "Fórum"
      case "mentorship":
        return "Mentoria"
      case "badge":
        return "Conquista"
      case "project":
        return "Projeto"
      case "system":
        return "Sistema"
      default:
        return "Notificação"
    }
  }

  const filteredNotifications = notifications.filter((notification) => {
    if (activeTab === "all") return true
    if (activeTab === "unread") return !notification.read
    return notification.type === activeTab
  })

  const unreadCount = notifications.filter((n) => !n.read).length

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    )
  }

  const markAsUnread = (id: string) => {
    setNotifications((prev) =>
      prev.map((notification) => (notification.id === id ? { ...notification, read: false } : notification)),
    )
  }

  const deleteNotification = (id: string) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id))
  }

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((notification) => ({ ...notification, read: true })))
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Notificações</h1>
            <p className="text-muted-foreground">Acompanhe suas atividades e atualizações importantes</p>
          </div>

          <div className="flex items-center space-x-2">
            {unreadCount > 0 && (
              <Button variant="outline" onClick={markAllAsRead}>
                <Check className="h-4 w-4 mr-2" />
                Marcar todas como lidas
              </Button>
            )}
            <Button variant="outline">
              <Settings className="h-4 w-4 mr-2" />
              Configurar
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total</p>
                  <p className="text-2xl font-bold">{notifications.length}</p>
                </div>
                <Bell className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Não Lidas</p>
                  <p className="text-2xl font-bold">{unreadCount}</p>
                </div>
                <MarkAsUnread className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Mensagens</p>
                  <p className="text-2xl font-bold">{notifications.filter((n) => n.type === "message").length}</p>
                </div>
                <MessageCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Conquistas</p>
                  <p className="text-2xl font-bold">{notifications.filter((n) => n.type === "badge").length}</p>
                </div>
                <Award className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="all">Todas ({notifications.length})</TabsTrigger>
            <TabsTrigger value="unread">Não Lidas ({unreadCount})</TabsTrigger>
            <TabsTrigger value="message">Mensagens</TabsTrigger>
            <TabsTrigger value="course">Cursos</TabsTrigger>
            <TabsTrigger value="mentorship">Mentoria</TabsTrigger>
            <TabsTrigger value="project">Projetos</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-6">
            <div className="space-y-4">
              {filteredNotifications.length === 0 ? (
                <Card>
                  <CardContent className="p-8 text-center">
                    <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Nenhuma notificação</h3>
                    <p className="text-muted-foreground">
                      {activeTab === "unread"
                        ? "Todas as notificações foram lidas!"
                        : "Você não tem notificações nesta categoria."}
                    </p>
                  </CardContent>
                </Card>
              ) : (
                filteredNotifications.map((notification) => (
                  <Card
                    key={notification.id}
                    className={`transition-all hover:shadow-md ${
                      !notification.read ? "border-l-4 border-l-primary bg-primary/5" : ""
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">{getNotificationIcon(notification.type)}</div>

                        <Avatar className="h-10 w-10">
                          <AvatarImage src={notification.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{notification.title.charAt(0)}</AvatarFallback>
                        </Avatar>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-1">
                                <h4 className="font-semibold text-sm">{notification.title}</h4>
                                <Badge variant="outline" className="text-xs">
                                  {getNotificationTypeLabel(notification.type)}
                                </Badge>
                                {!notification.read && <div className="w-2 h-2 bg-primary rounded-full" />}
                              </div>
                              <p className="text-sm text-muted-foreground mb-2">{notification.content}</p>
                              <p className="text-xs text-muted-foreground">{notification.timestamp}</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          {!notification.read ? (
                            <Button size="sm" variant="outline" onClick={() => markAsRead(notification.id)}>
                              <Check className="h-4 w-4" />
                            </Button>
                          ) : (
                            <Button size="sm" variant="outline" onClick={() => markAsUnread(notification.id)}>
                              <MarkAsUnread className="h-4 w-4" />
                            </Button>
                          )}

                          <Button size="sm" variant="outline" onClick={() => deleteNotification(notification.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
