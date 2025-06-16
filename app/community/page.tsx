"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Navigation } from "@/components/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Heart,
  MessageCircle,
  Share2,
  Search,
  Plus,
  Users,
  TrendingUp,
  Award,
  MapPin,
  Calendar,
  Bookmark,
  MoreHorizontal,
  Camera,
  Zap,
  Star,
  Code,
  Palette,
  Database,
  Smartphone,
  Crown,
  Sparkles,
  Trophy,
  Flame,
  Rocket
} from "lucide-react"

export default function Community() {
  const [activeTab, setActiveTab] = useState("discover")

  // Top Photographers/Developers data
  const topDevelopers = [
    {
      id: 1,
      name: "Diana Glow",
      location: "New York, USA",
      followers: 17000,
      following: 387,
      projects: 156,
      specialty: "Frontend",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1c8?w=150&h=150&fit=crop&crop=face",
      coverImage: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=200&fit=crop",
      isVerified: true,
      skills: ["React", "TypeScript", "Next.js"],
      portfolioImages: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=200&h=200&fit=crop"
      ],
      level: "Expert",
      streak: 45
    },
    {
      id: 2,
      name: "Michael Stone",
      location: "London, UK",
      followers: 12500,
      following: 298,
      projects: 89,
      specialty: "Backend",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      coverImage: "https://images.unsplash.com/photo-1544077960-604201fe74bc?w=400&h=200&fit=crop",
      isVerified: true,
      skills: ["Node.js", "Python", "Docker"],
      portfolioImages: [
        "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1544077960-604201fe74bc?w=200&h=200&fit=crop"
      ],
      level: "Expert",
      streak: 32
    },
    {
      id: 3,
      name: "Sophie Chen",
      location: "Tokyo, Japan",
      followers: 8900,
      following: 445,
      projects: 234,
      specialty: "Design",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      coverImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=200&fit=crop",
      isVerified: false,
      skills: ["Figma", "UI/UX", "Branding"],
      portfolioImages: [
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1558655146-364adaf607de?w=200&h=200&fit=crop"
      ],
      level: "Pro",
      streak: 28
    },
    {
      id: 4,
      name: "Carlos Rivera",
      location: "São Paulo, Brazil",
      followers: 15200,
      following: 367,
      projects: 178,
      specialty: "Mobile",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      coverImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=200&fit=crop",
      isVerified: true,
      skills: ["Flutter", "React Native", "Swift"],
      portfolioImages: [
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=200&h=200&fit=crop"
      ],
      level: "Expert",
      streak: 67
    }
  ]

  // Stories data
  const stories = [
    {
      id: 1,
      name: "Você",
      avatar: "/placeholder-user.jpg",
      isOwn: true
    },
    {
      id: 2,
      name: "Ana Costa",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1c8?w=60&h=60&fit=crop&crop=face",
      hasStory: true,
      isLive: true
    },
    {
      id: 3,
      name: "Pedro Lima",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
      hasStory: true,
      isLive: false
    },
    {
      id: 4,
      name: "Maria Santos",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
      hasStory: true,
      isLive: false
    },
    {
      id: 5,
      name: "João Silva",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
      hasStory: true,
      isLive: false
    }
  ]

  // Feed posts
  const feedPosts = [
    {
      id: 1,
      author: {
        name: "Diana Glow",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1c8?w=40&h=40&fit=crop&crop=face",
        role: "Frontend Developer",
        verified: true,
        level: "Expert"
      },
      content: "Acabei de lançar meu novo projeto pessoal! 🚀 Uma aplicação de gerenciamento de tarefas construída com Next.js 14 e TypeScript. O design ficou incrível!",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      type: "project",
      likes: 156,
      comments: 23,
      shares: 8,
      timestamp: "2h atrás",
      tags: ["Next.js", "TypeScript", "UI/UX"],
      trending: true
    },
    {
      id: 2,
      author: {
        name: "Michael Stone",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
        role: "Backend Developer",
        verified: true,
        level: "Expert"
      },
      content: "Dica rápida para quem está começando com Node.js: sempre validem os dados de entrada! Segurança nunca é demais 🔒",
      type: "tip",
      likes: 89,
      comments: 15,
      shares: 12,
      timestamp: "4h atrás",
      tags: ["Node.js", "Security", "Backend"],
      trending: false
    },
    {
      id: 3,
      author: {
        name: "Sophie Chen",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
        role: "UI/UX Designer",
        verified: false,
        level: "Pro"
      },
      content: "Processo de design do meu último projeto de e-commerce. Focamos muito na experiência do usuário e nos microinterações ✨",
      images: [
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=250&h=200&fit=crop",
        "https://images.unsplash.com/photo-1558655146-364adaf607de?w=250&h=200&fit=crop"
      ],
      type: "design",
      likes: 234,
      comments: 45,
      shares: 18,
      timestamp: "1 dia atrás",
      tags: ["Design", "UX", "E-commerce"],
      trending: true
    }
  ]

  const getSpecialtyIcon = (specialty: string) => {
    switch (specialty) {
      case "Frontend":
        return Code
      case "Backend":
        return Database
      case "Design":
        return Palette
      case "Mobile":
        return Smartphone
      default:
        return Code
    }
  }

  const getLevelBadge = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-gradient-to-r from-purple-500 to-violet-500"
      case "Pro":
        return "bg-gradient-to-r from-blue-500 to-cyan-500"
      default:
        return "bg-gradient-to-r from-green-500 to-emerald-500"
    }
  }

  const DeveloperCard = ({ developer }: { developer: any }) => {
    const SpecialtyIcon = getSpecialtyIcon(developer.specialty)
    const levelBadgeClass = getLevelBadge(developer.level)
    
    return (
      <Card className="community-card overflow-hidden group animate-fade-in glow-on-hover">
        <div className="relative">
          <img
            src={developer.coverImage}
            alt={`${developer.name} cover`}
            className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-3 right-3 flex space-x-2">
            <Badge className={`${levelBadgeClass} text-white animate-pulse`}>
              <Crown className="h-3 w-3 mr-1" />
              {developer.level}
            </Badge>
            {developer.isVerified && (
              <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                <Star className="h-3 w-3 mr-1" />
                Verificado
              </Badge>
            )}
          </div>
          <div className="absolute top-3 left-3">
            <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
              <Flame className="h-3 w-3 mr-1" />
              {developer.streak} dias
            </Badge>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <Button size="sm" variant="secondary" className="h-8 w-8 p-0 rounded-full bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity ml-auto">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <CardContent className="p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="relative">
              <Avatar className="h-16 w-16 avatar-ring">
                <AvatarImage src={developer.avatar} alt={developer.name} />
                <AvatarFallback>{developer.name[0]}</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                <SpecialtyIcon className="h-3 w-3 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg gradient-text">{developer.name}</h3>
              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                <MapPin className="h-3 w-3" />
                <span>{developer.location}</span>
              </div>
              <div className="text-sm font-medium text-primary">{developer.specialty} Developer</div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6 text-center">
            <div className="p-3 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg">
              <div className="text-xl font-bold gradient-text">{(developer.followers / 1000).toFixed(1)}K</div>
              <div className="text-xs text-muted-foreground">Seguidores</div>
            </div>
            <div className="p-3 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg">
              <div className="text-xl font-bold gradient-text">{developer.following}</div>
              <div className="text-xs text-muted-foreground">Seguindo</div>
            </div>
            <div className="p-3 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-lg">
              <div className="text-xl font-bold gradient-text">{developer.projects}</div>
              <div className="text-xs text-muted-foreground">Projetos</div>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="text-sm font-medium mb-3 flex items-center">
              <Sparkles className="h-4 w-4 mr-2 text-primary" />
              Portfolio em Destaque
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {developer.portfolioImages.slice(0, 4).map((image: string, index: number) => (
                <div key={index} className="aspect-square rounded-lg overflow-hidden spotlight">
                  <img
                    src={image}
                    alt={`Portfolio ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {developer.skills.map((skill: string) => (
              <Badge key={skill} variant="secondary" className="text-xs bg-primary/10 text-primary">
                {skill}
              </Badge>
            ))}
          </div>

          <Button className="w-full btn-primary animate-pulse-glow">
            <Plus className="h-4 w-4 mr-2" />
            Conectar
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-6 items-start justify-between mb-8">
          <div>
            <h1 className="text-5xl font-bold gradient-text neon-text mb-2">Comunidade</h1>
            <p className="text-muted-foreground text-lg">Conecte-se com desenvolvedores incríveis ao redor do mundo 🌍</p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Buscar pessoas..." className="pl-10 w-64 bg-secondary/50" />
            </div>
            <Button className="btn-primary animate-bounce-glow">
              <Camera className="h-4 w-4 mr-2" />
              Compartilhar
            </Button>
          </div>
        </div>

        {/* Stories */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Sparkles className="h-5 w-5 mr-2 text-primary" />
            Stories da Comunidade
          </h2>
          <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
            {stories.map((story) => (
              <div key={story.id} className="flex flex-col items-center space-y-2 min-w-0">
                <div className={`relative ${story.isOwn ? '' : story.isLive ? 'animate-pulse' : ''}`}>
                  <div className={`${story.isOwn ? '' : 'p-0.5 bg-gradient-to-r from-primary to-gradient-accent rounded-full'} ${story.isLive ? 'animate-pulse' : ''}`}>
                    <Avatar className={`${story.isOwn ? 'h-16 w-16' : 'h-14 w-14'} ${story.isOwn ? 'border-2 border-dashed border-muted-foreground' : 'bg-background'}`}>
                      <AvatarImage src={story.avatar} />
                      <AvatarFallback>{story.name[0]}</AvatarFallback>
                    </Avatar>
                  </div>
                  {story.isOwn && (
                    <div className="absolute bottom-0 right-0 h-5 w-5 rounded-full bg-primary flex items-center justify-center">
                      <Plus className="h-3 w-3 text-white" />
                    </div>
                  )}
                  {story.isLive && (
                    <div className="absolute -top-1 -right-1 h-6 w-6 rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center animate-pulse">
                      <Rocket className="h-3 w-3 text-white" />
                    </div>
                  )}
                </div>
                <span className="text-xs text-center max-w-16 truncate font-medium">
                  {story.isLive ? "AO VIVO" : story.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Top Developers */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold gradient-text flex items-center">
                <Trophy className="h-6 w-6 mr-2 text-yellow-500" />
                Desenvolvedores em Destaque
              </h2>
              <Button variant="ghost" className="text-primary hover:text-primary/80">
                Ver todos
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {topDevelopers.map((developer) => (
                <DeveloperCard key={developer.id} developer={developer} />
              ))}
            </div>

            {/* Feed */}
            <div>
              <h2 className="text-2xl font-bold mb-6 gradient-text flex items-center">
                <Flame className="h-6 w-6 mr-2 text-orange-500" />
                Feed da Comunidade
              </h2>
              <div className="space-y-6">
                {feedPosts.map((post) => (
                  <Card key={post.id} className="community-card animate-fade-in">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Avatar className="h-12 w-12 avatar-ring">
                            <AvatarImage src={post.author.avatar} />
                            <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center space-x-2">
                              <h3 className="font-semibold">{post.author.name}</h3>
                              {post.author.verified && (
                                <Star className="h-4 w-4 text-primary fill-current" />
                              )}
                              <Badge className={`text-xs ${getLevelBadge(post.author.level)} text-white`}>
                                {post.author.level}
                              </Badge>
                              {post.trending && (
                                <Badge className="text-xs bg-gradient-to-r from-orange-500 to-red-500 text-white animate-pulse">
                                  <Flame className="h-3 w-3 mr-1" />
                                  Trending
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">{post.author.role} • {post.timestamp}</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="leading-relaxed">{post.content}</p>

                      {post.image && (
                        <div className="rounded-lg overflow-hidden spotlight">
                          <img src={post.image} alt="Post image" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
                        </div>
                      )}

                      {post.images && (
                        <div className="grid grid-cols-2 gap-2">
                          {post.images.map((image: string, index: number) => (
                            <div key={index} className="rounded-lg overflow-hidden spotlight">
                              <img src={image} alt={`Post image ${index + 1}`} className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300" />
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag: string) => (
                          <Badge key={tag} variant="secondary" className="text-xs bg-primary/10 text-primary">
                            #{tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center space-x-6">
                          <Button variant="ghost" size="sm" className="flex items-center space-x-2 hover:text-red-500 transition-colors">
                            <Heart className="h-4 w-4" />
                            <span className="font-medium">{post.likes}</span>
                          </Button>
                          <Button variant="ghost" size="sm" className="flex items-center space-x-2 hover:text-blue-500 transition-colors">
                            <MessageCircle className="h-4 w-4" />
                            <span className="font-medium">{post.comments}</span>
                          </Button>
                          <Button variant="ghost" size="sm" className="flex items-center space-x-2 hover:text-green-500 transition-colors">
                            <Share2 className="h-4 w-4" />
                            <span className="font-medium">{post.shares}</span>
                          </Button>
                        </div>
                        <Button variant="ghost" size="sm" className="hover:text-yellow-500 transition-colors">
                          <Bookmark className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Stats */}
            <Card className="modern-card glow-on-hover">
              <CardHeader>
                <h3 className="font-semibold gradient-text flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Estatísticas da Comunidade
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-blue-500" />
                    <span className="text-sm font-medium">Membros Ativos</span>
                  </div>
                  <span className="font-bold text-lg gradient-text">24,567</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Rocket className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium">Projetos Este Mês</span>
                  </div>
                  <span className="font-bold text-lg gradient-text">1,234</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Award className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm font-medium">Conquistas</span>
                  </div>
                  <span className="font-bold text-lg gradient-text">5,678</span>
                </div>
              </CardContent>
            </Card>

            {/* Trending Topics */}
            <Card className="modern-card glow-on-hover">
              <CardHeader>
                <h3 className="font-semibold gradient-text flex items-center">
                  <Flame className="h-5 w-5 mr-2 text-orange-500" />
                  Trending Topics
                </h3>
              </CardHeader>
              <CardContent className="space-y-3">
                {["Next.js 14", "TypeScript", "React Hooks", "Tailwind CSS", "Node.js"].map((topic, index) => {
                  const topicCounts = [89, 76, 65, 58, 52]
                  return (
                    <div key={topic} className="flex items-center justify-between p-2 hover:bg-muted/30 rounded-lg transition-colors cursor-pointer">
                      <div className="flex items-center space-x-2">
                        <div className="text-sm font-medium">#{topic}</div>
                        {index < 2 && (
                          <Badge className="text-xs bg-gradient-to-r from-orange-500 to-red-500 text-white animate-pulse">
                            HOT
                          </Badge>
                        )}
                      </div>
                      <Badge variant="secondary" className="text-xs bg-primary/10 text-primary">
                        {topicCounts[index]}k
                      </Badge>
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="modern-card glow-on-hover">
              <CardHeader>
                <h3 className="font-semibold gradient-text flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-primary" />
                  Ações Rápidas
                </h3>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full btn-primary">
                  <Plus className="h-4 w-4 mr-2" />
                  Criar Post
                </Button>
                <Button variant="outline" className="w-full btn-secondary">
                  <Calendar className="h-4 w-4 mr-2" />
                  Agendar Live
                </Button>
                <Button variant="outline" className="w-full btn-secondary">
                  <Rocket className="h-4 w-4 mr-2" />
                  Compartilhar Projeto
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
