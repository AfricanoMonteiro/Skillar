"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Navigation } from "@/components/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Clock, Calendar, Video, MessageCircle, Users, Award, Search, TrendingUp } from "lucide-react"

export default function Mentorship() {
  const [activeTab, setActiveTab] = useState("find-mentors")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedExpertise, setSelectedExpertise] = useState("all")

  const mentors = [
    {
      id: "1",
      name: "Ana Costa",
      avatar: "/placeholder.svg?height=60&width=60",
      title: "Senior Frontend Developer",
      company: "Google",
      expertise: ["React", "TypeScript", "Performance"],
      rating: 4.9,
      reviews: 127,
      sessions: 340,
      price: 150,
      languages: ["Português", "Inglês"],
      availability: "Disponível hoje",
      bio: "10+ anos de experiência em desenvolvimento frontend. Especialista em React e performance web.",
      achievements: ["Google Developer Expert", "React Contributor"],
    },
    {
      id: "2",
      name: "Carlos Silva",
      avatar: "/placeholder.svg?height=60&width=60",
      title: "Lead UX Designer",
      company: "Spotify",
      expertise: ["UX Design", "Design Systems", "User Research"],
      rating: 4.8,
      reviews: 89,
      sessions: 210,
      price: 120,
      languages: ["Português", "Inglês", "Espanhol"],
      availability: "Disponível amanhã",
      bio: "Designer com foco em produtos digitais e experiência do usuário. Criador de design systems escaláveis.",
      achievements: ["Design Award Winner", "UX Mentor of the Year"],
    },
    {
      id: "3",
      name: "Maria Santos",
      avatar: "/placeholder.svg?height=60&width=60",
      title: "Data Science Manager",
      company: "Netflix",
      expertise: ["Python", "Machine Learning", "Data Analysis"],
      rating: 4.9,
      reviews: 156,
      sessions: 280,
      price: 180,
      languages: ["Português", "Inglês"],
      availability: "Disponível esta semana",
      bio: "Especialista em ciência de dados com foco em machine learning e análise preditiva.",
      achievements: ["Kaggle Grandmaster", "AI Research Published"],
    },
    {
      id: "4",
      name: "Pedro Lima",
      avatar: "/placeholder.svg?height=60&width=60",
      title: "DevOps Engineer",
      company: "AWS",
      expertise: ["AWS", "Docker", "Kubernetes"],
      rating: 4.7,
      reviews: 94,
      sessions: 180,
      price: 140,
      languages: ["Português", "Inglês"],
      availability: "Disponível próxima semana",
      bio: "Engenheiro DevOps com experiência em cloud computing e automação de infraestrutura.",
      achievements: ["AWS Certified Solutions Architect", "DevOps Expert"],
    },
  ]

  const myMentorships = [
    {
      id: "1",
      mentor: {
        name: "Ana Costa",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      topic: "React Performance Optimization",
      nextSession: "Hoje, 15:00",
      status: "active",
      progress: 75,
      totalSessions: 8,
      completedSessions: 6,
    },
    {
      id: "2",
      mentor: {
        name: "Carlos Silva",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      topic: "Design System Implementation",
      nextSession: "Sexta, 14:00",
      status: "active",
      progress: 45,
      totalSessions: 6,
      completedSessions: 3,
    },
  ]

  const mentorshipRequests = [
    {
      id: "1",
      mentee: {
        name: "Julia Rodrigues",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      topic: "Career Transition to Tech",
      message: "Olá! Gostaria de orientação sobre como fazer a transição de carreira para tecnologia...",
      status: "pending",
      createdAt: "2h atrás",
    },
    {
      id: "2",
      mentee: {
        name: "Roberto Alves",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      topic: "Frontend Development",
      message: "Preciso de ajuda para melhorar minhas habilidades em React e JavaScript...",
      status: "pending",
      createdAt: "5h atrás",
    },
  ]

  const upcomingSessions = [
    {
      id: "1",
      title: "React Performance Review",
      mentor: "Ana Costa",
      time: "Hoje, 15:00 - 16:00",
      type: "1-on-1",
      link: "https://meet.google.com/abc-def-ghi",
    },
    {
      id: "2",
      title: "Design System Workshop",
      mentor: "Carlos Silva",
      time: "Sexta, 14:00 - 15:30",
      type: "Group Session",
      participants: 5,
    },
  ]

  const filteredMentors = mentors.filter((mentor) => {
    const matchesSearch =
      mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.expertise.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesExpertise =
      selectedExpertise === "all" ||
      mentor.expertise.some((skill) => skill.toLowerCase().includes(selectedExpertise.toLowerCase()))

    return matchesSearch && matchesExpertise
  })

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Mentoria</h1>
          <p className="text-muted-foreground">Conecte-se com especialistas e acelere seu crescimento profissional</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Mentores Ativos</p>
                  <p className="text-2xl font-bold">150+</p>
                </div>
                <Users className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Sessões Realizadas</p>
                  <p className="text-2xl font-bold">2,340</p>
                </div>
                <Video className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avaliação Média</p>
                  <p className="text-2xl font-bold">4.8</p>
                </div>
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Taxa de Sucesso</p>
                  <p className="text-2xl font-bold">94%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="find-mentors">Encontrar Mentores</TabsTrigger>
            <TabsTrigger value="my-mentorships">Minhas Mentorias</TabsTrigger>
            <TabsTrigger value="requests">Solicitações</TabsTrigger>
            <TabsTrigger value="sessions">Sessões</TabsTrigger>
          </TabsList>

          {/* Find Mentors Tab */}
          <TabsContent value="find-mentors" className="mt-6">
            {/* Filters */}
            <Card className="mb-6">
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input
                        placeholder="Buscar mentores por nome, empresa ou habilidade..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <Select value={selectedExpertise} onValueChange={setSelectedExpertise}>
                    <SelectTrigger className="w-full md:w-48">
                      <SelectValue placeholder="Área de Expertise" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas as Áreas</SelectItem>
                      <SelectItem value="react">React</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="python">Python</SelectItem>
                      <SelectItem value="devops">DevOps</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Mentors Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMentors.map((mentor) => (
                <Card key={mentor.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={mentor.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{mentor.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{mentor.name}</h3>
                        <p className="text-sm text-muted-foreground">{mentor.title}</p>
                        <p className="text-sm font-medium">{mentor.company}</p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="font-medium">{mentor.rating}</span>
                        <span className="text-sm text-muted-foreground ml-1">({mentor.reviews})</span>
                      </div>
                      <div className="text-sm text-muted-foreground">{mentor.sessions} sessões</div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {mentor.expertise.slice(0, 3).map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{mentor.bio}</p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm">
                        <span className="font-semibold">R$ {mentor.price}</span>
                        <span className="text-muted-foreground">/hora</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {mentor.availability}
                      </Badge>
                    </div>

                    <div className="flex space-x-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="flex-1">Ver Perfil</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[600px]">
                          <DialogHeader>
                            <DialogTitle>Perfil do Mentor</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                              <Avatar className="h-20 w-20">
                                <AvatarImage src={mentor.avatar || "/placeholder.svg"} />
                                <AvatarFallback>{mentor.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <h3 className="text-xl font-semibold">{mentor.name}</h3>
                                <p className="text-muted-foreground">
                                  {mentor.title} at {mentor.company}
                                </p>
                                <div className="flex items-center mt-2">
                                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                                  <span>
                                    {mentor.rating} ({mentor.reviews} avaliações)
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">Sobre</h4>
                              <p className="text-sm text-muted-foreground">{mentor.bio}</p>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">Especialidades</h4>
                              <div className="flex flex-wrap gap-2">
                                {mentor.expertise.map((skill) => (
                                  <Badge key={skill} variant="secondary">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">Conquistas</h4>
                              <div className="space-y-2">
                                {mentor.achievements.map((achievement) => (
                                  <div key={achievement} className="flex items-center">
                                    <Award className="h-4 w-4 mr-2 text-yellow-600" />
                                    <span className="text-sm">{achievement}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="flex space-x-2">
                              <Button className="flex-1">Agendar Sessão</Button>
                              <Button variant="outline">Enviar Mensagem</Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      <Button variant="outline" size="icon">
                        <MessageCircle className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* My Mentorships Tab */}
          <TabsContent value="my-mentorships" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {myMentorships.map((mentorship) => (
                <Card key={mentorship.id}>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={mentorship.mentor.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{mentorship.mentor.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{mentorship.topic}</h3>
                        <p className="text-sm text-muted-foreground">com {mentorship.mentor.name}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Progresso</span>
                          <span>
                            {mentorship.completedSessions}/{mentorship.totalSessions} sessões
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: `${mentorship.progress}%` }} />
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">Próxima sessão</p>
                          <p className="text-sm text-muted-foreground">{mentorship.nextSession}</p>
                        </div>
                        <Button size="sm">
                          <Video className="h-4 w-4 mr-2" />
                          Entrar
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Requests Tab */}
          <TabsContent value="requests" className="mt-6">
            <div className="space-y-4">
              {mentorshipRequests.map((request) => (
                <Card key={request.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={request.mentee.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{request.mentee.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold">{request.topic}</h3>
                          <span className="text-sm text-muted-foreground">{request.createdAt}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">de {request.mentee.name}</p>
                        <p className="text-sm mb-4">{request.message}</p>
                        <div className="flex space-x-2">
                          <Button size="sm">Aceitar</Button>
                          <Button size="sm" variant="outline">
                            Recusar
                          </Button>
                          <Button size="sm" variant="ghost">
                            Responder
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Sessions Tab */}
          <TabsContent value="sessions" className="mt-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Próximas Sessões</h3>
              {upcomingSessions.map((session) => (
                <Card key={session.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold">{session.title}</h4>
                        <p className="text-sm text-muted-foreground">com {session.mentor}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <div className="flex items-center text-sm">
                            <Clock className="h-4 w-4 mr-1" />
                            {session.time}
                          </div>
                          <Badge variant="outline">{session.type}</Badge>
                          {session.participants && (
                            <span className="text-sm text-muted-foreground">{session.participants} participantes</span>
                          )}
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm">
                          <Video className="h-4 w-4 mr-2" />
                          Entrar na Sessão
                        </Button>
                        <Button size="sm" variant="outline">
                          <Calendar className="h-4 w-4 mr-2" />
                          Reagendar
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
