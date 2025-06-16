"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import {
  Plus,
  Rocket,
  Star,
  GitBranch,
  Users,
  Calendar,
  ExternalLink,
  Github,
  Globe,
  Search,
  Filter,
  TrendingUp,
  Award,
  Zap,
  Crown,
  Sparkles,
  Trophy,
  Flame,
  Heart,
  Eye,
  Code,
  Palette,
  Database,
  Smartphone,
  MonitorPlay,
  Layers,
  MoreHorizontal
} from "lucide-react"

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const stats = [
    { label: "Projetos Ativos", value: "15", icon: Rocket, gradient: "from-blue-500 to-cyan-500", change: "+3 este mês" },
    { label: "Colaboradores", value: "47", icon: Users, gradient: "from-green-500 to-emerald-500", change: "+12 esta semana" },
    { label: "Commits", value: "342", icon: GitBranch, gradient: "from-purple-500 to-violet-500", change: "+28 hoje" },
    { label: "Estrelas", value: "128", icon: Star, gradient: "from-yellow-500 to-orange-500", change: "+15 esta semana" }
  ]

  const featuredProjects = [
    {
      id: 1,
      title: "EcoTracker App",
      description: "Aplicativo mobile para rastreamento de pegada de carbono com gamificação e social features.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      category: "Mobile",
      technologies: ["React Native", "TypeScript", "Firebase", "Node.js"],
      status: "In Progress",
      progress: 75,
      team: [
        { name: "Ana Costa", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1c8?w=40&h=40&fit=crop&crop=face" },
        { name: "Carlos Silva", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" },
        { name: "Maria Santos", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face" }
      ],
      stats: { stars: 45, forks: 12, views: 1247, likes: 89 },
      demoUrl: "#",
      githubUrl: "#",
      featured: true,
      trending: true,
      createdAt: "2024-01-15"
    },
    {
      id: 2,
      title: "AI Design Assistant",
      description: "Ferramenta de design powered by AI que ajuda designers a criar layouts responsivos automaticamente.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
      category: "Design",
      technologies: ["Next.js", "OpenAI", "Tailwind", "Framer Motion"],
      status: "Live",
      progress: 100,
      team: [
        { name: "Sophie Chen", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face" },
        { name: "Pedro Lima", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" }
      ],
      stats: { stars: 127, forks: 34, views: 3891, likes: 234 },
      demoUrl: "#",
      githubUrl: "#",
      featured: true,
      trending: false,
      createdAt: "2024-02-01"
    },
    {
      id: 3,
      title: "DevOps Dashboard",
      description: "Dashboard completo para monitoramento de infraestrutura cloud com alertas em tempo real.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
      category: "DevOps",
      technologies: ["React", "Python", "Docker", "Kubernetes", "AWS"],
      status: "In Progress",
      progress: 60,
      team: [
        { name: "Michael Stone", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" },
        { name: "Diana Glow", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1c8?w=40&h=40&fit=crop&crop=face" }
      ],
      stats: { stars: 73, forks: 18, views: 2156, likes: 156 },
      demoUrl: "#",
      githubUrl: "#",
      featured: true,
      trending: true,
      createdAt: "2024-01-28"
    }
  ]

  const allProjects = [
    {
      id: 4,
      title: "E-learning Platform",
      description: "Plataforma de cursos online com sistema de gamificação",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop",
      category: "Web",
      technologies: ["Vue.js", "Laravel", "MySQL"],
      status: "Planning",
      progress: 15,
      stats: { stars: 23, forks: 5, views: 567, likes: 34 },
      trending: false
    },
    {
      id: 5,
      title: "Crypto Tracker",
      description: "App para tracking de criptomoedas com alertas",
      image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=300&h=200&fit=crop",
      category: "Finance",
      technologies: ["Flutter", "Dart", "API"],
      status: "Live",
      progress: 100,
      stats: { stars: 91, forks: 27, views: 1834, likes: 187 },
      trending: true
    },
    {
      id: 6,
      title: "Social Media Manager",
      description: "Ferramenta para gerenciar múltiplas redes sociais",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop",
      category: "Marketing",
      technologies: ["Angular", "Node.js", "MongoDB"],
      status: "In Progress",
      progress: 40,
      stats: { stars: 56, forks: 14, views: 1092, likes: 78 },
      trending: false
    }
  ]

  const categories = [
    { id: "all", name: "Todos", icon: Layers },
    { id: "web", name: "Web", icon: Globe },
    { id: "mobile", name: "Mobile", icon: Smartphone },
    { id: "design", name: "Design", icon: Palette },
    { id: "devops", name: "DevOps", icon: Database },
    { id: "ai", name: "AI/ML", icon: Zap }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-gradient-to-r from-green-500 to-emerald-500"
      case "In Progress":
        return "bg-gradient-to-r from-blue-500 to-cyan-500"
      case "Planning":
        return "bg-gradient-to-r from-yellow-500 to-orange-500"
      default:
        return "bg-gradient-to-r from-gray-500 to-gray-600"
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Web":
        return Globe
      case "Mobile":
        return Smartphone
      case "Design":
        return Palette
      case "DevOps":
        return Database
      case "Finance":
        return TrendingUp
      case "Marketing":
        return MonitorPlay
      default:
        return Code
    }
  }

  const FeaturedProjectCard = ({ project }: { project: any }) => {
    const CategoryIcon = getCategoryIcon(project.category)
    const statusColor = getStatusColor(project.status)
    
    return (
      <Card className="project-card group overflow-hidden glow-on-hover animate-fade-in">
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          <div className="absolute top-4 left-4 flex items-center space-x-2">
            <Badge className={`${statusColor} text-white animate-pulse`}>
              {project.status}
            </Badge>
            {project.featured && (
              <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                <Crown className="h-3 w-3 mr-1" />
                Featured
              </Badge>
            )}
            {project.trending && (
              <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white animate-pulse">
                <Flame className="h-3 w-3 mr-1" />
                Trending
              </Badge>
            )}
          </div>

          <div className="absolute top-4 right-4 flex space-x-2">
            <Button size="sm" variant="secondary" className="h-8 w-8 p-0 bg-black/20 backdrop-blur-sm border-white/20 hover:bg-black/40">
              <Heart className="h-4 w-4 text-white" />
            </Button>
            <Button size="sm" variant="secondary" className="h-8 w-8 p-0 bg-black/20 backdrop-blur-sm border-white/20 hover:bg-black/40">
              <MoreHorizontal className="h-4 w-4 text-white" />
            </Button>
          </div>

          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center space-x-3 mb-3">
              <CategoryIcon className="h-6 w-6 text-white" />
              <div>
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-xs">
                  {project.category}
                </Badge>
              </div>
            </div>
          </div>
        </div>

        <CardContent className="p-6">
          <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Progresso</span>
              <span className="text-sm text-primary font-bold">{project.progress}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-300"
                style={{ width: `${project.progress}%` }}
              />
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-4 text-center">
            <div className="p-2 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg">
              <div className="flex items-center justify-center mb-1">
                <Star className="h-4 w-4 text-yellow-500" />
              </div>
              <div className="text-sm font-bold gradient-text">{project.stats.stars}</div>
              <div className="text-xs text-muted-foreground">Stars</div>
            </div>
            <div className="p-2 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-lg">
              <div className="flex items-center justify-center mb-1">
                <GitBranch className="h-4 w-4 text-green-500" />
              </div>
              <div className="text-sm font-bold gradient-text">{project.stats.forks}</div>
              <div className="text-xs text-muted-foreground">Forks</div>
            </div>
            <div className="p-2 bg-gradient-to-br from-purple-500/10 to-violet-500/10 rounded-lg">
              <div className="flex items-center justify-center mb-1">
                <Eye className="h-4 w-4 text-purple-500" />
              </div>
              <div className="text-sm font-bold gradient-text">{project.stats.views}</div>
              <div className="text-xs text-muted-foreground">Views</div>
            </div>
            <div className="p-2 bg-gradient-to-br from-pink-500/10 to-red-500/10 rounded-lg">
              <div className="flex items-center justify-center mb-1">
                <Heart className="h-4 w-4 text-pink-500" />
              </div>
              <div className="text-sm font-bold gradient-text">{project.stats.likes}</div>
              <div className="text-xs text-muted-foreground">Likes</div>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="text-sm font-medium mb-2 flex items-center">
              <Code className="h-4 w-4 mr-2 text-primary" />
              Tecnologias
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech: string) => (
                <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h4 className="text-sm font-medium mb-2 flex items-center">
              <Users className="h-4 w-4 mr-2 text-primary" />
              Equipe
            </h4>
            <div className="flex -space-x-2">
              {project.team.map((member: any, index: number) => (
                <Avatar key={index} className="h-8 w-8 border-2 border-background avatar-ring">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback className="text-xs">{member.name[0]}</AvatarFallback>
                </Avatar>
              ))}
              <div className="h-8 w-8 rounded-full border-2 border-background bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                <Plus className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>

          <div className="flex space-x-2">
            <Button className="btn-primary flex-1">
              <Eye className="h-4 w-4 mr-2" />
              Ver Projeto
            </Button>
            <Button variant="outline" className="btn-secondary">
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="btn-secondary">
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  const ProjectCard = ({ project }: { project: any }) => {
    const CategoryIcon = getCategoryIcon(project.category)
    const statusColor = getStatusColor(project.status)
    
    return (
      <Card className="project-card group overflow-hidden glow-on-hover">
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          <div className="absolute top-3 left-3">
            <Badge className={`${statusColor} text-white text-xs`}>
              {project.status}
            </Badge>
          </div>

          {project.trending && (
            <div className="absolute top-3 right-3">
              <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs animate-pulse">
                <Flame className="h-3 w-3 mr-1" />
                Hot
              </Badge>
            </div>
          )}

          <div className="absolute bottom-3 left-3 right-3">
            <h3 className="text-white font-semibold mb-1">{project.title}</h3>
            <div className="flex items-center space-x-2">
              <CategoryIcon className="h-4 w-4 text-white" />
              <span className="text-white/80 text-sm">{project.category}</span>
            </div>
          </div>
        </div>

        <CardContent className="p-4">
          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{project.description}</p>

          <div className="mb-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-medium">Progresso</span>
              <span className="text-xs text-primary font-bold">{project.progress}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-1.5">
              <div 
                className="bg-gradient-to-r from-primary to-secondary h-1.5 rounded-full"
                style={{ width: `${project.progress}%` }}
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-1 mb-3">
            {project.technologies.slice(0, 3).map((tech: string) => (
              <Badge key={tech} variant="secondary" className="text-xs bg-primary/10 text-primary">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{project.technologies.length - 3}
              </Badge>
            )}
          </div>

          <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <Star className="h-3 w-3 text-yellow-500" />
                <span>{project.stats.stars}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Heart className="h-3 w-3 text-pink-500" />
                <span>{project.stats.likes}</span>
              </div>
            </div>
          </div>

          <Button size="sm" className="w-full btn-primary">
            <Eye className="h-3 w-3 mr-2" />
            Ver Detalhes
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-6 items-start justify-between mb-8">
          <div>
            <h1 className="text-5xl font-bold gradient-text neon-text mb-2">Projetos</h1>
            <p className="text-muted-foreground text-lg">Explore projetos incríveis da comunidade e compartilhe os seus 🚀</p>
          </div>
          
          <div className="flex items-center gap-3">
            <Button className="btn-primary animate-pulse-glow">
              <Plus className="h-4 w-4 mr-2" />
              Novo Projeto
            </Button>
            <Button variant="outline" className="btn-secondary">
              <Github className="h-4 w-4 mr-2" />
              Conectar GitHub
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="modern-card group glow-on-hover animate-fade-in">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-muted-foreground mb-1">{stat.label}</p>
                      <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                      <div className="flex items-center space-x-1 mt-2">
                        <div className="text-xs text-green-500 font-medium">
                          {stat.change}
                        </div>
                        <TrendingUp className="h-3 w-3 text-green-500" />
                      </div>
                    </div>
                    <div className={`bg-gradient-to-r ${stat.gradient} p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar projetos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-secondary/50 border-border"
              />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <Button
                  key={category.id}
                  variant={activeTab === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveTab(category.id)}
                  className={activeTab === category.id ? "btn-primary" : "btn-secondary"}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {category.name}
                </Button>
              )
            })}
          </div>
        </div>

        {/* Featured Projects */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold gradient-text flex items-center">
              <Trophy className="h-8 w-8 mr-3 text-yellow-500" />
              Projetos em Destaque
            </h2>
            <Button variant="ghost" className="text-primary hover:text-primary/80">
              Ver todos
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <FeaturedProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* All Projects */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold gradient-text flex items-center">
              <Rocket className="h-8 w-8 mr-3 text-blue-500" />
              Todos os Projetos
            </h2>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                <Filter className="h-4 w-4 mr-2" />
                Filtros
              </Button>
            </div>
          </div>

          <div className="projects-grid">
            {allProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
