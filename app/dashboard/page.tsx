"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Navigation } from "@/components/navigation"
import { 
  BookOpen, 
  Users, 
  MessageCircle, 
  TrendingUp, 
  Clock, 
  Award, 
  Target, 
  Calendar,
  Zap,
  Star,
  Play,
  BarChart3,
  Brain,
  Trophy,
  ArrowRight,
  Plus,
  Flame,
  Crown,
  Sparkles,
  Rocket,
  Heart,
  Code,
  Palette
} from "lucide-react"

export default function Dashboard() {
  const stats = [
    { 
      label: "Cursos Concluídos", 
      value: "12", 
      icon: BookOpen, 
      color: "text-blue-500", 
      gradient: "from-blue-500 to-cyan-500",
      change: "+2 este mês",
      isPositive: true
    },
    { 
      label: "Conexões", 
      value: "89", 
      icon: Users, 
      color: "text-green-500", 
      gradient: "from-green-500 to-emerald-500",
      change: "+15 esta semana",
      isPositive: true
    },
    { 
      label: "Posts no Fórum", 
      value: "24", 
      icon: MessageCircle, 
      color: "text-purple-500", 
      gradient: "from-purple-500 to-violet-500",
      change: "+5 hoje",
      isPositive: true
    },
    { 
      label: "Pontos XP", 
      value: "1,250", 
      icon: Award, 
      color: "text-yellow-500", 
      gradient: "from-yellow-500 to-orange-500",
      change: "+250 esta semana",
      isPositive: true
    },
  ]

  const currentCourses = [
    {
      id: "1",
      title: "React Avançado com TypeScript",
      progress: 75,
      instructor: "Ana Costa",
      instructorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1c8?w=40&h=40&fit=crop&crop=face",
      nextLesson: "Hooks Customizados",
      timeLeft: "2h 30min",
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop",
      category: "Frontend",
      level: "Avançado",
      isNew: false
    },
    {
      id: "2",
      title: "Design System Completo",
      progress: 45,
      instructor: "Carlos Silva",
      instructorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      nextLesson: "Tokens de Design",
      timeLeft: "1h 15min",
      thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=200&fit=crop",
      category: "Design",
      level: "Intermediário",
      isNew: true
    },
  ]

  const recentActivity = [
    {
      type: "course",
      message: 'Você completou a lição "State Management" em React Avançado',
      time: "2 horas atrás",
      icon: BookOpen,
      color: "text-blue-500",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      type: "forum",
      message: 'Nova resposta no seu post sobre "Melhores práticas em TypeScript"',
      time: "4 horas atrás",
      icon: MessageCircle,
      color: "text-purple-500",
      gradient: "from-purple-500/20 to-violet-500/20"
    },
    {
      type: "badge",
      message: 'Você ganhou o badge "Colaborador Ativo"!',
      time: "1 dia atrás",
      icon: Trophy,
      color: "text-yellow-500",
      gradient: "from-yellow-500/20 to-orange-500/20"
    },
    {
      type: "achievement",
      message: 'Parabéns! Você alcançou 1000 pontos XP',
      time: "2 dias atrás",
      icon: Zap,
      color: "text-green-500",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
  ]

  const upcomingEvents = [
    {
      title: "Mentoria: Carreira em Frontend",
      time: "Hoje, 15:00",
      mentor: "Maria Santos",
      mentorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      type: "mentorship",
      isLive: true
    },
    {
      title: "Workshop: Git Avançado",
      time: "Amanhã, 19:00",
      mentor: "Pedro Lima",
      mentorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      type: "workshop",
      isLive: false
    },
    {
      title: "Live: Tendências React 2024",
      time: "Sexta, 20:00",
      mentor: "Diego Fernandes",
      mentorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      type: "live",
      isLive: false
    },
  ]

  const achievements = [
    { title: "Primeiro Curso", icon: "🎓", unlocked: true, level: "Bronze" },
    { title: "Colaborador Ativo", icon: "💬", unlocked: true, level: "Silver" },
    { title: "Mentor Iniciante", icon: "🌟", unlocked: true, level: "Gold" },
    { title: "Especialista React", icon: "⚛️", unlocked: false, level: "Platinum" },
  ]

  const weeklyGoals = [
    { label: "Horas de Estudo", current: 8, target: 12, icon: Clock },
    { label: "Lições Concluídas", current: 15, target: 20, icon: BookOpen },
    { label: "Projetos", current: 2, target: 3, icon: Code },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container py-8">
        {/* Header com boas-vindas */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold gradient-text neon-text mb-2">
                Olá, João! 👋
              </h1>
              <p className="text-muted-foreground text-lg">
                Continue sua jornada de aprendizado. Você está indo muito bem! 
                <span className="ml-2">🚀</span>
              </p>
            </div>
            <div className="flex space-x-3">
              <Button className="btn-primary animate-pulse-glow">
                <Plus className="h-4 w-4 mr-2" />
                Novo Projeto
              </Button>
              <Button variant="outline" className="btn-secondary">
                <Rocket className="h-4 w-4 mr-2" />
                Explorar
              </Button>
            </div>
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Coluna Principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Cursos em Andamento */}
            <Card className="modern-card glow-on-hover">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center text-xl gradient-text">
                      <BookOpen className="mr-3 h-6 w-6 text-primary" />
                      Cursos em Andamento
                    </CardTitle>
                    <CardDescription>Continue de onde parou</CardDescription>
                  </div>
                  <Button variant="ghost" className="text-primary hover:text-primary/80">
                    Ver todos
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {currentCourses.map((course) => (
                  <div key={course.id} className="group spotlight">
                    <div className="flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 hover:from-primary/10 hover:via-secondary/10 hover:to-accent/10 transition-all duration-300 border border-primary/20">
                      <div className="relative">
                        <img
                          src={course.thumbnail}
                          alt={course.title}
                          className="w-28 h-20 object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Play className="h-8 w-8 text-white" />
                        </div>
                        {course.isNew && (
                          <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs animate-pulse">
                            <Sparkles className="h-3 w-3 mr-1" />
                            Novo
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-semibold text-lg line-clamp-1 gradient-text">{course.title}</h3>
                            <div className="flex items-center space-x-3 mt-1">
                              <Avatar className="h-6 w-6">
                                <AvatarImage src={course.instructorAvatar} />
                                <AvatarFallback className="text-xs">{course.instructor[0]}</AvatarFallback>
                              </Avatar>
                              <span className="text-sm text-muted-foreground">{course.instructor}</span>
                              <Badge variant="secondary" className="bg-primary/10 text-primary text-xs">
                                {course.level}
                              </Badge>
                            </div>
                          </div>
                          <Badge variant="secondary" className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-primary border-primary/30">
                            {course.progress}%
                          </Badge>
                        </div>
                        
                        <div className="mb-4">
                          <Progress value={course.progress} className="h-3 mb-2" />
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Progresso</span>
                            <span>{course.progress}% completo</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="mr-2 h-4 w-4" />
                            {course.timeLeft} restantes
                          </div>
                          <Button size="sm" className="btn-primary">
                            <Play className="h-4 w-4 mr-2" />
                            Continuar: {course.nextLesson}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Atividade Recente */}
            <Card className="modern-card glow-on-hover">
              <CardHeader>
                <CardTitle className="flex items-center text-xl gradient-text">
                  <Flame className="mr-3 h-6 w-6 text-orange-500" />
                  Atividade Recente
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => {
                    const Icon = activity.icon
                    return (
                      <div key={index} className={`flex items-start space-x-4 p-4 rounded-lg bg-gradient-to-r ${activity.gradient} hover:scale-[1.02] transition-transform spotlight`}>
                        <div className={`p-3 rounded-full bg-gradient-to-r ${activity.color} bg-opacity-20`}>
                          <Icon className={`h-5 w-5 ${activity.color}`} />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm leading-relaxed font-medium">{activity.message}</p>
                          <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Metas Semanais */}
            <Card className="modern-card glow-on-hover">
              <CardHeader>
                <CardTitle className="flex items-center text-lg gradient-text">
                  <Target className="mr-2 h-5 w-5 text-primary" />
                  Metas da Semana
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {weeklyGoals.map((goal, index) => {
                  const Icon = goal.icon
                  const percentage = (goal.current / goal.target) * 100
                  return (
                    <div key={index} className="p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/20">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <Icon className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium">{goal.label}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{goal.current}/{goal.target}</span>
                      </div>
                      <Progress value={percentage} className="h-2" />
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            {/* Próximos Eventos */}
            <Card className="modern-card glow-on-hover">
              <CardHeader>
                <CardTitle className="flex items-center text-lg gradient-text">
                  <Calendar className="mr-2 h-5 w-5 text-primary" />
                  Próximos Eventos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className={`flex items-center space-x-3 p-4 rounded-lg border-l-4 ${event.isLive ? 'border-red-500 bg-gradient-to-r from-red-500/10 to-pink-500/10 animate-pulse' : 'border-primary/50 bg-gradient-to-r from-primary/5 to-secondary/5'}`}>
                    <Avatar className="h-12 w-12 avatar-ring">
                      <AvatarImage src={event.mentorAvatar} />
                      <AvatarFallback>{event.mentor[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-medium text-sm line-clamp-2">{event.title}</h4>
                        {event.isLive && (
                          <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs animate-pulse">
                            <Rocket className="h-3 w-3 mr-1" />
                            AO VIVO
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">{event.time}</p>
                      <p className="text-xs text-primary font-medium">com {event.mentor}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Conquistas */}
            <Card className="modern-card glow-on-hover">
              <CardHeader>
                <CardTitle className="flex items-center text-lg gradient-text">
                  <Trophy className="mr-2 h-5 w-5 text-yellow-500" />
                  Conquistas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className={`
                        flex flex-col items-center p-4 rounded-lg border text-center transition-all cursor-pointer spotlight
                        ${achievement.unlocked 
                          ? achievement.level === 'Gold' 
                            ? 'bg-gradient-to-b from-yellow-500/20 to-orange-500/10 border-yellow-500/30 animate-pulse-glow' 
                            : achievement.level === 'Silver'
                            ? 'bg-gradient-to-b from-gray-400/20 to-gray-500/10 border-gray-400/30'
                            : 'bg-gradient-to-b from-amber-600/20 to-amber-700/10 border-amber-600/30'
                          : 'bg-muted/30 border-muted'
                        }
                      `}
                    >
                      <div className={`text-2xl mb-2 ${!achievement.unlocked && 'grayscale opacity-50'}`}>
                        {achievement.icon}
                      </div>
                      <span className={`text-xs font-medium ${achievement.unlocked ? 'text-foreground' : 'text-muted-foreground'}`}>
                        {achievement.title}
                      </span>
                      {achievement.unlocked && (
                        <Badge className={`text-xs mt-1 ${
                          achievement.level === 'Gold' ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                          achievement.level === 'Silver' ? 'bg-gradient-to-r from-gray-400 to-gray-500' :
                          'bg-gradient-to-r from-amber-600 to-amber-700'
                        } text-white`}>
                          {achievement.level}
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="modern-card glow-on-hover">
              <CardHeader>
                <CardTitle className="flex items-center text-lg gradient-text">
                  <BarChart3 className="mr-2 h-5 w-5 text-primary" />
                  Estatísticas Rápidas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg">
                  <span className="text-sm font-medium">Streak de Estudos</span>
                  <Badge variant="secondary" className="bg-gradient-to-r from-orange-500 to-red-500 text-white animate-pulse">
                    🔥 7 dias
                  </Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg">
                  <span className="text-sm font-medium">Ranking Global</span>
                  <Badge variant="secondary" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                    #2,847
                  </Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg">
                  <span className="text-sm font-medium">Certificados</span>
                  <Badge variant="secondary" className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                    <Crown className="h-3 w-3 mr-1" />
                    5 earned
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
