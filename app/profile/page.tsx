"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Navigation } from "@/components/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MapPin,
  Calendar,
  LinkIcon,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  Edit,
  Award,
  BookOpen,
  Users,
  MessageCircle,
  Star,
  Target,
  TrendingUp,
  Clock,
  Code,
  Briefcase,
} from "lucide-react"

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")

  const userProfile = {
    name: "João Silva",
    title: "Full Stack Developer",
    company: "TechCorp",
    location: "São Paulo, SP",
    joinedDate: "Janeiro 2023",
    avatar: "/placeholder.svg?height=120&width=120",
    coverImage: "/placeholder.svg?height=200&width=800",
    bio: "Desenvolvedor apaixonado por tecnologia com 5+ anos de experiência em React, Node.js e Python. Sempre em busca de novos desafios e oportunidades de aprendizado.",
    email: "joao.silva@email.com",
    phone: "+55 11 99999-9999",
    website: "https://joaosilva.dev",
    social: {
      github: "joaosilva",
      linkedin: "joao-silva-dev",
      twitter: "joaosilvadev",
    },
    stats: {
      points: 1250,
      coursesCompleted: 12,
      connections: 89,
      forumPosts: 24,
      projectsCompleted: 8,
      mentoringSessions: 15,
    },
    skills: [
      { name: "React", level: 90, category: "Frontend" },
      { name: "Node.js", level: 85, category: "Backend" },
      { name: "TypeScript", level: 80, category: "Language" },
      { name: "Python", level: 75, category: "Language" },
      { name: "PostgreSQL", level: 70, category: "Database" },
      { name: "Docker", level: 65, category: "DevOps" },
      { name: "AWS", level: 60, category: "Cloud" },
      { name: "GraphQL", level: 55, category: "API" },
    ],
    objectives: [
      "Tornar-se especialista em arquitetura de microsserviços",
      "Contribuir para projetos open source",
      "Obter certificação AWS Solutions Architect",
      "Liderar uma equipe de desenvolvimento",
    ],
    badges: [
      {
        id: "1",
        name: "Early Adopter",
        description: "Um dos primeiros usuários da plataforma",
        icon: "🚀",
        rarity: "rare",
      },
      {
        id: "2",
        name: "Mentor Ativo",
        description: "Realizou mais de 10 sessões de mentoria",
        icon: "🎓",
        rarity: "epic",
      },
      {
        id: "3",
        name: "Colaborador",
        description: "Participou de 5+ projetos colaborativos",
        icon: "🤝",
        rarity: "common",
      },
      { id: "4", name: "Expert React", description: "Domínio avançado em React", icon: "⚛️", rarity: "legendary" },
    ],
  }

  const recentActivity = [
    {
      type: "course",
      title: "Completou o curso 'Advanced React Patterns'",
      date: "2 dias atrás",
      icon: BookOpen,
    },
    {
      type: "forum",
      title: "Respondeu no tópico 'Melhores práticas TypeScript'",
      date: "3 dias atrás",
      icon: MessageCircle,
    },
    {
      type: "project",
      title: "Iniciou colaboração no projeto 'E-commerce Sustentável'",
      date: "1 semana atrás",
      icon: Code,
    },
    {
      type: "mentorship",
      title: "Sessão de mentoria com Ana Costa",
      date: "1 semana atrás",
      icon: Users,
    },
  ]

  const completedCourses = [
    {
      title: "React Avançado com TypeScript",
      instructor: "Ana Costa",
      completedAt: "15 Jan 2024",
      rating: 5,
      certificate: true,
    },
    {
      title: "Node.js e Express Fundamentals",
      instructor: "Pedro Lima",
      completedAt: "10 Jan 2024",
      rating: 4,
      certificate: true,
    },
    {
      title: "Design System Completo",
      instructor: "Carlos Silva",
      completedAt: "5 Jan 2024",
      rating: 5,
      certificate: true,
    },
  ]

  const projects = [
    {
      title: "E-commerce de Produtos Sustentáveis",
      role: "Frontend Developer",
      status: "Em andamento",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      team: 4,
    },
    {
      title: "Dashboard de Analytics",
      role: "Full Stack Developer",
      status: "Concluído",
      technologies: ["Next.js", "PostgreSQL", "Chart.js"],
      team: 3,
    },
  ]

  const getBadgeRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common":
        return "bg-gray-100 text-gray-800 border-gray-300"
      case "rare":
        return "bg-blue-100 text-blue-800 border-blue-300"
      case "epic":
        return "bg-purple-100 text-purple-800 border-purple-300"
      case "legendary":
        return "bg-yellow-100 text-yellow-800 border-yellow-300"
      default:
        return "bg-gray-100 text-gray-800 border-gray-300"
    }
  }

  const getSkillColor = (level: number) => {
    if (level >= 80) return "bg-green-500"
    if (level >= 60) return "bg-yellow-500"
    return "bg-red-500"
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Cover Image */}
        <div className="relative mb-8">
          <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg overflow-hidden">
            <img
              src={userProfile.coverImage || "/placeholder.svg"}
              alt="Cover"
              className="w-full h-full object-cover opacity-50"
            />
          </div>

          {/* Profile Header */}
          <div className="absolute -bottom-16 left-8 flex items-end space-x-6">
            <Avatar className="h-32 w-32 border-4 border-background">
              <AvatarImage src={userProfile.avatar || "/placeholder.svg"} />
              <AvatarFallback className="text-2xl">{userProfile.name.charAt(0)}</AvatarFallback>
            </Avatar>

            <div className="pb-4">
              <h1 className="text-3xl font-bold text-white mb-1">{userProfile.name}</h1>
              <p className="text-xl text-white/90 mb-2">{userProfile.title}</p>
              <div className="flex items-center space-x-4 text-white/80">
                <div className="flex items-center">
                  <Briefcase className="h-4 w-4 mr-1" />
                  {userProfile.company}
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {userProfile.location}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  Membro desde {userProfile.joinedDate}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-4 right-4">
            <Button variant="secondary" onClick={() => setIsEditing(!isEditing)} className="flex items-center">
              <Edit className="h-4 w-4 mr-2" />
              {isEditing ? "Salvar" : "Editar Perfil"}
            </Button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Estatísticas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">{userProfile.stats.points}</p>
                    <p className="text-xs text-muted-foreground">Pontos</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-600">{userProfile.stats.coursesCompleted}</p>
                    <p className="text-xs text-muted-foreground">Cursos</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-600">{userProfile.stats.connections}</p>
                    <p className="text-xs text-muted-foreground">Conexões</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-purple-600">{userProfile.stats.projectsCompleted}</p>
                    <p className="text-xs text-muted-foreground">Projetos</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Contato</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{userProfile.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{userProfile.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <LinkIcon className="h-4 w-4 text-muted-foreground" />
                  <a href={userProfile.website} className="text-sm text-primary hover:underline">
                    {userProfile.website}
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card>
              <CardHeader>
                <CardTitle>Redes Sociais</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Github className="h-4 w-4" />
                  <a href={`https://github.com/${userProfile.social.github}`} className="text-sm hover:underline">
                    @{userProfile.social.github}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="h-4 w-4" />
                  <a
                    href={`https://linkedin.com/in/${userProfile.social.linkedin}`}
                    className="text-sm hover:underline"
                  >
                    @{userProfile.social.linkedin}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Twitter className="h-4 w-4" />
                  <a href={`https://twitter.com/${userProfile.social.twitter}`} className="text-sm hover:underline">
                    @{userProfile.social.twitter}
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Badges */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="h-5 w-5 mr-2" />
                  Conquistas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {userProfile.badges.map((badge) => (
                    <div
                      key={badge.id}
                      className={`p-3 rounded-lg border text-center ${getBadgeRarityColor(badge.rarity)}`}
                    >
                      <div className="text-2xl mb-1">{badge.icon}</div>
                      <p className="text-xs font-medium">{badge.name}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="overview">Visão Geral</TabsTrigger>
                <TabsTrigger value="skills">Habilidades</TabsTrigger>
                <TabsTrigger value="courses">Cursos</TabsTrigger>
                <TabsTrigger value="projects">Projetos</TabsTrigger>
                <TabsTrigger value="activity">Atividade</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="mt-6">
                <div className="space-y-6">
                  {/* Bio */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Sobre</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {isEditing ? (
                        <Textarea defaultValue={userProfile.bio} rows={4} className="w-full" />
                      ) : (
                        <p className="text-muted-foreground">{userProfile.bio}</p>
                      )}
                    </CardContent>
                  </Card>

                  {/* Objectives */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Target className="h-5 w-5 mr-2" />
                        Objetivos de Carreira
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {userProfile.objectives.map((objective, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                            <span className="text-sm">{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Skills Tab */}
              <TabsContent value="skills" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Habilidades Técnicas</CardTitle>
                    <CardDescription>Nível de proficiência em diferentes tecnologias</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {userProfile.skills.map((skill, index) => (
                        <div key={index}>
                          <div className="flex justify-between items-center mb-2">
                            <div className="flex items-center space-x-2">
                              <span className="font-medium">{skill.name}</span>
                              <Badge variant="outline" className="text-xs">
                                {skill.category}
                              </Badge>
                            </div>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full ${getSkillColor(skill.level)}`}
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Courses Tab */}
              <TabsContent value="courses" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BookOpen className="h-5 w-5 mr-2" />
                      Cursos Concluídos
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {completedCourses.map((course, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h4 className="font-semibold">{course.title}</h4>
                              <p className="text-sm text-muted-foreground">por {course.instructor}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                              {course.certificate && <Badge variant="secondary">Certificado</Badge>}
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${i < course.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">Concluído em {course.completedAt}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Projects Tab */}
              <TabsContent value="projects" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Code className="h-5 w-5 mr-2" />
                      Projetos
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {projects.map((project, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h4 className="font-semibold">{project.title}</h4>
                              <p className="text-sm text-muted-foreground">{project.role}</p>
                            </div>
                            <Badge variant={project.status === "Concluído" ? "default" : "secondary"}>
                              {project.status}
                            </Badge>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {project.technologies.map((tech) => (
                              <Badge key={tech} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Users className="h-4 w-4 mr-1" />
                            {project.team} membros na equipe
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Activity Tab */}
              <TabsContent value="activity" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="h-5 w-5 mr-2" />
                      Atividade Recente
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivity.map((activity, index) => {
                        const Icon = activity.icon
                        return (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="p-2 bg-muted rounded-full">
                              <Icon className="h-4 w-4" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm">{activity.title}</p>
                              <p className="text-xs text-muted-foreground">{activity.date}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}
