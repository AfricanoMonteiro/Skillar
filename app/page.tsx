"use client"

import { useState, useEffect, useMemo } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  Rocket,
  Code,
  Users,
  Trophy,
  Star,
  Zap,
  Play,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Crown,
  BookOpen,
  MessageCircle,
  Target,
  Flame,
  Github,
  Linkedin,
  Twitter,
  ChevronRight,
  Globe,
  Shield,
  Heart,
  TrendingUp,
  Award,
  Brain,
  Coffee,
  Lightbulb,
  Monitor,
  Smartphone,
  Database,
  Cloud,
  Lock,
  Headphones,
  Clock,
  Infinity,
  BarChart3
} from "lucide-react"

export default function LandingPage() {
  // Estados para animações e contadores
  const [stats, setStats] = useState({
    students: 0,
    courses: 0,
    instructors: 0,
    companies: 0
  })
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isClient, setIsClient] = useState(false)

  // Hook para garantir que só renderize no cliente
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Animação de contadores na página inicial
  useEffect(() => {
    const targetStats = {
      students: 25000,
      courses: 150,
      instructors: 45,
      companies: 300
    }

    const duration = 2000 // 2 segundos
    const steps = 60 // 60 steps para animação suave
    const stepDuration = duration / steps

    let currentStep = 0
    const interval = setInterval(() => {
      if (currentStep <= steps) {
        const progress = currentStep / steps
        setStats({
          students: Math.floor(targetStats.students * progress),
          courses: Math.floor(targetStats.courses * progress),
          instructors: Math.floor(targetStats.instructors * progress),
          companies: Math.floor(targetStats.companies * progress)
        })
        currentStep++
      } else {
        clearInterval(interval)
      }
    }, stepDuration)

    return () => clearInterval(interval)
  }, [])

  // Rotação automática de depoimentos
  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(testimonialInterval)
  }, [])

  // Dados das tecnologias
  const technologies = [
    { name: "React", icon: "⚛️", color: "from-blue-500 to-cyan-500" },
    { name: "Node.js", icon: "🟢", color: "from-green-500 to-emerald-500" },
    { name: "Python", icon: "🐍", color: "from-yellow-500 to-orange-500" },
    { name: "JavaScript", icon: "⚡", color: "from-yellow-400 to-orange-400" },
    { name: "TypeScript", icon: "📘", color: "from-blue-600 to-indigo-600" },
    { name: "AWS", icon: "☁️", color: "from-orange-500 to-red-500" },
    { name: "Docker", icon: "🐳", color: "from-blue-500 to-blue-600" },
    { name: "MongoDB", icon: "🍃", color: "from-green-600 to-green-700" }
  ]

  // Dados dos cursos populares
  const popularCourses = [
    {
      title: "Full Stack JavaScript",
      description: "Domine React, Node.js e bancos de dados",
      students: "5.8k",
      rating: 4.9,
      price: "R$ 299",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop",
      badge: "Mais Popular",
      duration: "40h"
    },
    {
      title: "Python para Data Science",
      description: "Análise de dados com Pandas e Matplotlib",
      students: "3.2k",
      rating: 4.8,
      price: "R$ 249",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      badge: "Novo",
      duration: "35h"
    },
    {
      title: "DevOps e Cloud AWS",
      description: "Deploy e infraestrutura na nuvem",
      students: "2.1k",
      rating: 4.7,
      price: "R$ 349",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=250&fit=crop",
      badge: "Premium",
      duration: "50h"
    }
  ]

  // Dados dos depoimentos
  const testimonials = [
    {
      name: "Ana Carolina Silva",
      role: "Desenvolvedora Full Stack",
      company: "Tech Solutions",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1c8?w=80&h=80&fit=crop&crop=face",
      quote: "A LearnHub transformou minha carreira! Em 6 meses consegui transição para tech e hoje trabalho em uma startup incrível.",
      rating: 5
    },
    {
      name: "Marcus Oliveira",
      role: "Data Scientist",
      company: "Data Corp",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      quote: "Os cursos são super práticos e atualizados. Aprendi Python do zero e hoje trabalho com Machine Learning.",
      rating: 5
    },
    {
      name: "Carla Mendes",
      role: "DevOps Engineer",
      company: "Cloud First",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      quote: "Suporte incrível da comunidade e mentores. Consegui certificações AWS em tempo recorde!",
      rating: 5
    }
  ]

  // Dados das funcionalidades
  const features = [
    {
      icon: BookOpen,
      title: "Cursos Práticos",
      description: "Aprenda construindo projetos reais do mercado",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Comunidade Ativa",
      description: "Conecte-se com outros desenvolvedores e mentores",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: Trophy,
      title: "Certificados",
      description: "Certificações reconhecidas pelas principais empresas",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Headphones,
      title: "Suporte 24/7",
      description: "Tire dúvidas a qualquer hora com nossa equipe",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Monitor,
      title: "Projeto Portfólio",
      description: "Construa um portfólio impressionante",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Infinity,
      title: "Acesso Vitalício",
      description: "Acesso ilimitado a todo conteúdo para sempre",
      color: "from-indigo-500 to-purple-500"
    }
  ]

  // Partículas com posições fixas para evitar erro de hidratação
  const particles = useMemo(() => {
    const positions = [
      { top: 10, left: 20, delay: 0.5, duration: 3.2 },
      { top: 30, left: 80, delay: 1.2, duration: 2.8 },
      { top: 60, left: 10, delay: 2.1, duration: 3.6 },
      { top: 20, left: 90, delay: 0.8, duration: 2.4 },
      { top: 80, left: 40, delay: 1.8, duration: 3.4 },
      { top: 40, left: 70, delay: 0.3, duration: 2.9 },
      { top: 90, left: 20, delay: 2.5, duration: 3.3 },
      { top: 70, left: 95, delay: 1.5, duration: 2.7 },
      { top: 5, left: 60, delay: 0.9, duration: 3.7 },
      { top: 95, left: 75, delay: 2.2, duration: 2.5 },
      { top: 35, left: 35, delay: 1.7, duration: 3.8 },
      { top: 75, left: 5, delay: 0.6, duration: 2.3 },
      { top: 55, left: 100, delay: 2.8, duration: 3.9 },
      { top: 15, left: 35, delay: 1.1, duration: 2.2 },
      { top: 85, left: 65, delay: 1.9, duration: 4.0 },
      { top: 45, left: 0, delay: 0.4, duration: 2.6 },
      { top: 65, left: 85, delay: 2.6, duration: 3.1 },
      { top: 0, left: 55, delay: 1.3, duration: 2.8 },
      { top: 100, left: 30, delay: 2.3, duration: 3.5 },
      { top: 25, left: 65, delay: 0.7, duration: 2.9 }
    ]
    return positions
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 border-b border-border/50 glassmorphism backdrop-blur-xl">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-primary via-secondary to-accent rounded-xl shadow-lg flex items-center justify-center animate-gradient-xy">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">LearnHub</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#courses" className="text-muted-foreground hover:text-foreground transition-colors">
              Cursos
            </Link>
            <Link href="#community" className="text-muted-foreground hover:text-foreground transition-colors">
              Comunidade
            </Link>
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              Sobre
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contato
            </Link>
          </div>

          <div className="flex items-center space-x-3">
            <Link href="/login">
              <Button variant="ghost" className="text-foreground hover:text-primary">
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button className="btn-primary">
                Começar Agora
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Effects */}
        {isClient && (
          <div className="absolute inset-0 opacity-30">
            {particles.map((particle, i) => (
              <div
                key={i}
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
        )}

        <div className="container relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border-primary/30 animate-pulse">
              <Sparkles className="h-4 w-4 mr-2" />
              Plataforma #1 em Educação Tech
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Transforme sua
              <span className="gradient-text block">Carreira em Tech</span>
              em meses, não anos! 🚀
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Aprenda programação, data science e DevOps com projetos reais, 
              mentores especializados e uma comunidade apaixonada por tecnologia.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link href="/register">
                <Button size="lg" className="btn-primary text-lg px-8 py-4 h-auto">
                  <Rocket className="h-5 w-5 mr-2" />
                  Começar Jornada Grátis
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-4 h-auto bg-secondary/50 border-border hover:bg-secondary/70 backdrop-blur-sm"
              >
                <Play className="h-5 w-5 mr-2" />
                Ver Demo (2 min)
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <Avatar key={i} className="h-8 w-8 border-2 border-background">
                      <AvatarImage src={`https://images.unsplash.com/photo-${1494790108755 + i}?w=32&h=32&fit=crop&crop=face`} />
                      <AvatarFallback>U{i}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <span>+25k estudantes ativos</span>
              </div>
              
              <div className="flex items-center space-x-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span>4.9/5 (2.3k avaliações)</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Trophy className="h-4 w-4 text-yellow-500" />
                <span>97% taxa de emprego</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card className="modern-card text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold gradient-text mb-2">
                  {stats.students.toLocaleString()}+
                </div>
                <div className="text-sm text-muted-foreground">Estudantes</div>
              </CardContent>
            </Card>
            
            <Card className="modern-card text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold gradient-text mb-2">
                  {stats.courses}+
                </div>
                <div className="text-sm text-muted-foreground">Cursos</div>
              </CardContent>
            </Card>
            
            <Card className="modern-card text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold gradient-text mb-2">
                  {stats.instructors}+
                </div>
                <div className="text-sm text-muted-foreground">Instrutores</div>
              </CardContent>
            </Card>
            
            <Card className="modern-card text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold gradient-text mb-2">
                  {stats.companies}+
                </div>
                <div className="text-sm text-muted-foreground">Empresas</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tecnologias que você vai <span className="gradient-text">dominar</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stack moderno usado pelas principais empresas do mercado
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <Card key={tech.name} className="modern-card text-center hover:scale-105 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{tech.icon}</div>
                  <h3 className="font-semibold text-lg gradient-text">{tech.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por que escolher a <span className="gradient-text">LearnHub?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Uma experiência de aprendizado completa pensada para sua evolução profissional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="modern-card group hover:scale-105 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 gradient-text">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section id="courses" className="py-20 bg-gradient-to-r from-secondary/5 to-accent/5">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Cursos mais <span className="gradient-text">populares</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Escolhidos por milhares de estudantes que já transformaram suas carreiras
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularCourses.map((course, index) => (
              <Card key={course.title} className="modern-card overflow-hidden group hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className={`absolute top-4 left-4 ${
                    course.badge === 'Mais Popular' ? 'bg-gradient-to-r from-red-500 to-pink-500' :
                    course.badge === 'Novo' ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                    'bg-gradient-to-r from-purple-500 to-violet-500'
                  } text-white`}>
                    {course.badge}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{course.rating}</span>
                      <span className="text-sm text-muted-foreground">({course.students})</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 gradient-text">{course.title}</h3>
                  <p className="text-muted-foreground mb-4">{course.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold gradient-text">{course.price}</div>
                    <Button className="btn-primary">
                      Matricular-se
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/courses">
              <Button size="lg" variant="outline" className="bg-secondary/50 border-border hover:bg-secondary/70 backdrop-blur-sm">
                Ver Todos os Cursos
                <ChevronRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O que dizem nossos <span className="gradient-text">estudantes</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Histórias reais de pessoas que mudaram de vida com a LearnHub
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="modern-card p-8 md:p-12">
              <CardContent className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                
                <div className="flex items-center justify-center space-x-4">
                  <Avatar className="h-16 w-16 avatar-ring">
                    <AvatarImage src={testimonials[currentTestimonial].avatar} alt={testimonials[currentTestimonial].name} />
                    <AvatarFallback>{testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <div className="font-semibold text-lg gradient-text">{testimonials[currentTestimonial].name}</div>
                    <div className="text-muted-foreground">{testimonials[currentTestimonial].role}</div>
                    <div className="text-sm text-primary">{testimonials[currentTestimonial].company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial 
                      ? 'bg-gradient-to-r from-primary to-secondary' 
                      : 'bg-muted hover:bg-muted-foreground'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Pronto para <span className="gradient-text">decolar</span> sua carreira?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Junte-se a milhares de desenvolvedores que já transformaram suas vidas. 
              Comece hoje mesmo, grátis!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Link href="/register">
                <Button size="lg" className="btn-primary text-lg px-10 py-4 h-auto animate-pulse-glow">
                  <Crown className="h-5 w-5 mr-2" />
                  Começar Gratuitamente
                  <Sparkles className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Sem cartão de crédito</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Acesso imediato</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Cancele quando quiser</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 backdrop-blur-sm border border-primary/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold gradient-text mb-2">7 dias</div>
                  <div className="text-sm text-muted-foreground">Garantia de reembolso</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Suporte técnico</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text mb-2">∞</div>
                  <div className="text-sm text-muted-foreground">Acesso vitalício</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-border/50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-primary via-secondary to-accent rounded-xl shadow-lg flex items-center justify-center animate-gradient-xy">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold gradient-text">LearnHub</span>
              </Link>
              <p className="text-muted-foreground">
                A plataforma que transforma iniciantes em profissionais de tecnologia preparados para o mercado.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="hover:text-primary">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="hover:text-primary">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="hover:text-primary">
                  <Twitter className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 gradient-text">Cursos</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition-colors">Full Stack</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Data Science</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">DevOps</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Mobile</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 gradient-text">Empresa</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition-colors">Sobre nós</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Carreiras</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Imprensa</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 gradient-text">Suporte</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition-colors">Central de Ajuda</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Comunidade</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Contato</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Status</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © 2024 LearnHub. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-foreground transition-colors">Privacidade</Link>
              <Link href="#" className="hover:text-foreground transition-colors">Termos</Link>
              <Link href="#" className="hover:text-foreground transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
