"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Navigation } from "@/components/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageCircle, Heart, Eye, Plus, Search, TrendingUp, Clock, Users, Pin } from "lucide-react"

export default function Forum() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [newPostTitle, setNewPostTitle] = useState("")
  const [newPostContent, setNewPostContent] = useState("")
  const [newPostCategory, setNewPostCategory] = useState("")

  const categories = [
    { value: "all", label: "Todas as Categorias" },
    { value: "frontend", label: "Frontend" },
    { value: "backend", label: "Backend" },
    { value: "design", label: "Design" },
    { value: "career", label: "Carreira" },
    { value: "general", label: "Geral" },
  ]

  const forumPosts = [
    {
      id: "1",
      title: "Melhores práticas para otimização de performance em React",
      content: "Gostaria de discutir algumas técnicas avançadas para otimizar aplicações React...",
      author: {
        name: "Ana Costa",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "Instrutora",
      },
      category: "frontend",
      tags: ["react", "performance", "otimização"],
      replies: 23,
      likes: 45,
      views: 312,
      createdAt: "2024-01-15T10:30:00Z",
      isPinned: true,
      lastActivity: "2024-01-15T15:45:00Z",
    },
    {
      id: "2",
      title: "Como fazer a transição de carreira para tech?",
      content: "Estou pensando em migrar para a área de tecnologia e gostaria de algumas dicas...",
      author: {
        name: "Carlos Silva",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "Estudante",
      },
      category: "career",
      tags: ["carreira", "transição", "dicas"],
      replies: 18,
      likes: 32,
      views: 156,
      createdAt: "2024-01-14T14:20:00Z",
      isPinned: false,
      lastActivity: "2024-01-15T12:30:00Z",
    },
    {
      id: "3",
      title: "Dúvida sobre autenticação JWT em Node.js",
      content: "Estou implementando autenticação JWT e tenho algumas dúvidas sobre segurança...",
      author: {
        name: "Maria Santos",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "Estudante",
      },
      category: "backend",
      tags: ["nodejs", "jwt", "autenticação", "segurança"],
      replies: 12,
      likes: 28,
      views: 89,
      createdAt: "2024-01-14T09:15:00Z",
      isPinned: false,
      lastActivity: "2024-01-15T08:20:00Z",
    },
    {
      id: "4",
      title: "Ferramentas essenciais para Design System",
      content: "Quais ferramentas vocês recomendam para criar e manter um design system?",
      author: {
        name: "Pedro Lima",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "Designer",
      },
      category: "design",
      tags: ["design-system", "ferramentas", "figma"],
      replies: 15,
      likes: 38,
      views: 203,
      createdAt: "2024-01-13T16:45:00Z",
      isPinned: false,
      lastActivity: "2024-01-14T20:10:00Z",
    },
    {
      id: "5",
      title: "Projeto colaborativo: App de gestão de tarefas",
      content: "Estou procurando pessoas para colaborar em um projeto de app de produtividade...",
      author: {
        name: "Julia Rodrigues",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "Desenvolvedora",
      },
      category: "general",
      tags: ["projeto", "colaboração", "react-native"],
      replies: 8,
      likes: 22,
      views: 67,
      createdAt: "2024-01-13T11:30:00Z",
      isPinned: false,
      lastActivity: "2024-01-14T14:25:00Z",
    },
  ]

  const filteredPosts = forumPosts
    .filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      const matchesCategory = selectedCategory === "all" || post.category === selectedCategory

      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      // Pinned posts first, then by last activity
      if (a.isPinned && !b.isPinned) return -1
      if (!a.isPinned && b.isPinned) return 1
      return new Date(b.lastActivity).getTime() - new Date(a.lastActivity).getTime()
    })

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))

    if (diffInHours < 1) return "Agora mesmo"
    if (diffInHours < 24) return `${diffInHours}h atrás`
    const diffInDays = Math.floor(diffInHours / 24)
    return `${diffInDays}d atrás`
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "frontend":
        return "bg-blue-100 text-blue-800"
      case "backend":
        return "bg-green-100 text-green-800"
      case "design":
        return "bg-purple-100 text-purple-800"
      case "career":
        return "bg-orange-100 text-orange-800"
      case "general":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getCategoryLabel = (category: string) => {
    const cat = categories.find((c) => c.value === category)
    return cat ? cat.label : category
  }

  const handleCreatePost = () => {
    // Here you would typically send the data to your backend
    console.log("Creating post:", { newPostTitle, newPostContent, newPostCategory })
    // Reset form
    setNewPostTitle("")
    setNewPostContent("")
    setNewPostCategory("")
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Fórum da Comunidade</h1>
            <p className="text-muted-foreground">Conecte-se, aprenda e compartilhe conhecimento com a comunidade</p>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="flex items-center">
                <Plus className="h-4 w-4 mr-2" />
                Nova Discussão
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Criar Nova Discussão</DialogTitle>
                <DialogDescription>Compartilhe suas dúvidas, ideias ou conhecimento com a comunidade</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Título</label>
                  <Input
                    placeholder="Digite o título da sua discussão..."
                    value={newPostTitle}
                    onChange={(e) => setNewPostTitle(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Categoria</label>
                  <Select value={newPostCategory} onValueChange={setNewPostCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione uma categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories
                        .filter((cat) => cat.value !== "all")
                        .map((category) => (
                          <SelectItem key={category.value} value={category.value}>
                            {category.label}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium">Conteúdo</label>
                  <Textarea
                    placeholder="Descreva sua dúvida, ideia ou compartilhe seu conhecimento..."
                    rows={6}
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}
                  />
                </div>
                <div className="flex justify-end space-x-2">
                  <DialogTrigger asChild>
                    <Button variant="outline">Cancelar</Button>
                  </DialogTrigger>
                  <Button onClick={handleCreatePost}>Publicar</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total de Posts</p>
                  <p className="text-2xl font-bold">1,234</p>
                </div>
                <MessageCircle className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Membros Ativos</p>
                  <p className="text-2xl font-bold">567</p>
                </div>
                <Users className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Posts Hoje</p>
                  <p className="text-2xl font-bold">23</p>
                </div>
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Respostas</p>
                  <p className="text-2xl font-bold">89</p>
                </div>
                <MessageCircle className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Buscar discussões..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Categoria" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Forum Posts */}
        <div className="space-y-4">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={post.author.avatar || "/placeholder.svg"} />
                    <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      {post.isPinned && <Pin className="h-4 w-4 text-orange-500" />}
                      <h3 className="font-semibold text-lg hover:text-primary cursor-pointer">{post.title}</h3>
                    </div>

                    <p className="text-muted-foreground mb-3 line-clamp-2">{post.content}</p>

                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge className={getCategoryColor(post.category)}>{getCategoryLabel(post.category)}</Badge>
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>{post.author.name}</span>
                        <Badge variant="secondary" className="text-xs">
                          {post.author.role}
                        </Badge>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {formatTimeAgo(post.createdAt)}
                        </div>
                      </div>

                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Eye className="h-4 w-4 mr-1" />
                          {post.views}
                        </div>
                        <div className="flex items-center">
                          <Heart className="h-4 w-4 mr-1" />
                          {post.likes}
                        </div>
                        <div className="flex items-center">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          {post.replies}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <MessageCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Nenhuma discussão encontrada</h3>
            <p className="text-muted-foreground">
              Tente ajustar os filtros ou seja o primeiro a iniciar uma discussão!
            </p>
          </div>
        )}
      </main>
    </div>
  )
}
