"use client"

import { useState, useEffect, useMemo } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import {
  Building2,
  Users,
  TrendingUp,
  Award,
  Handshake,
  FileText,
  Calendar,
  DollarSign,
  CheckCircle,
  Clock,
  AlertTriangle,
  Search,
  Filter,
  Download,
  Eye,
  Edit,
  MoreVertical,
  MapPin,
  Phone,
  Mail,
  Globe,
  Star,
  Target,
  BarChart3,
  PieChart,
  Activity,
  Briefcase,
  Shield,
  Zap,
  Plus
} from "lucide-react"

export default function Partners() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

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

  // Estatísticas gerais
  const stats = [
    { label: "Parceiros Ativos", value: "127", icon: Building2, change: "+12%", color: "from-blue-500 to-cyan-500" },
    { label: "Contratos Vigentes", value: "89", icon: FileText, change: "+8%", color: "from-green-500 to-emerald-500" },
    { label: "Receita Mensal", value: "R$ 2.4M", icon: DollarSign, change: "+15%", color: "from-purple-500 to-violet-500" },
    { label: "Taxa de Renovação", value: "94%", icon: TrendingUp, change: "+3%", color: "from-orange-500 to-red-500" }
  ]

  // Contratos de parceria
  const contracts = [
    {
      id: 1,
      partner: "TechCorp Solutions",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=60&h=60&fit=crop",
      type: "Tecnologia",
      status: "active",
      value: "R$ 450.000",
      startDate: "2024-01-15",
      endDate: "2024-12-15",
      progress: 75,
      contact: "Maria Silva",
      email: "maria@techcorp.com",
      phone: "+55 11 99999-9999",
      description: "Desenvolvimento de soluções em IA e Machine Learning"
    },
    {
      id: 2,
      partner: "Design Studio Pro",
      logo: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=60&h=60&fit=crop",
      type: "Design",
      status: "pending",
      value: "R$ 280.000",
      startDate: "2024-02-01",
      endDate: "2025-01-31",
      progress: 45,
      contact: "João Santos",
      email: "joao@designstudio.com",
      phone: "+55 21 88888-8888",
      description: "Criação de identidade visual e UX/UI design"
    },
    {
      id: 3,
      partner: "CloudTech Infrastructure",
      logo: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=60&h=60&fit=crop",
      type: "Cloud",
      status: "active",
      value: "R$ 680.000",
      startDate: "2023-11-01",
      endDate: "2024-10-31",
      progress: 90,
      contact: "Ana Costa",
      email: "ana@cloudtech.com",
      phone: "+55 31 77777-7777",
      description: "Infraestrutura cloud e serviços de DevOps"
    },
    {
      id: 4,
      partner: "SecureNet Systems",
      logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=60&h=60&fit=crop",
      type: "Segurança",
      status: "expired",
      value: "R$ 320.000",
      startDate: "2023-06-01",
      endDate: "2024-05-31",
      progress: 100,
      contact: "Pedro Lima",
      email: "pedro@securenet.com",
      phone: "+55 85 66666-6666",
      description: "Soluções de segurança cibernética e compliance"
    },
    {
      id: 5,
      partner: "DataFlow Analytics",
      logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=60&h=60&fit=crop",
      type: "Data Science",
      status: "active",
      value: "R$ 520.000",
      startDate: "2024-03-01",
      endDate: "2025-02-28",
      progress: 30,
      contact: "Carla Mendes",
      email: "carla@dataflow.com",
      phone: "+55 51 55555-5555",
      description: "Análise de dados e business intelligence"
    }
  ]

  // Filtrar contratos
  const filteredContracts = contracts.filter(contract => {
    const matchesSearch = contract.partner.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contract.type.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = selectedFilter === "all" || contract.status === selectedFilter
    return matchesSearch && matchesFilter
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800 border-green-200">Ativo</Badge>
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Pendente</Badge>
      case "expired":
        return <Badge className="bg-red-100 text-red-800 border-red-200">Expirado</Badge>
      default:
        return <Badge variant="secondary">Desconhecido</Badge>
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-500" />
      case "expired":
        return <AlertTriangle className="h-4 w-4 text-red-500" />
      default:
        return <Clock className="h-4 w-4 text-gray-500" />
    }
  }

  return (
    <div className="min-h-screen bg-background relative">
      {/* Imagem de fundo da família */}
      <div 
        className="fixed inset-0 z-0 opacity-20"
        style={{
          backgroundImage: "url('/img/familha.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed"
        }}
      />
      
      {/* Overlay para melhor legibilidade */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
      
      {/* Partículas animadas */}
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
      
      {/* Conteúdo da página */}
      <div className="relative z-10">
        <Navigation />

        <div className="container py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border-primary/30">
              <Handshake className="h-4 w-4 mr-2" />
              Gestão de Parcerias Corporativas
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Portal de
              <span className="gradient-text block">Parcerias Estratégicas</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Gerencie contratos, monitore performance e fortaleça relacionamentos com nossos parceiros de negócio.
            </p>
          </div>

          {/* Estatísticas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card key={index} className="modern-card">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <Badge className="bg-green-100 text-green-800 border-green-200">
                        {stat.change}
                      </Badge>
                    </div>
                    <div className="text-3xl font-bold gradient-text mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Filtros e Busca */}
          <Card className="modern-card mb-8">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex-1 max-w-md">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      placeholder="Buscar parceiros ou contratos..."
                      className="pl-12 pr-4 h-12 text-lg bg-secondary/50 border-border/50"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant={selectedFilter === "all" ? "default" : "outline"}
                    onClick={() => setSelectedFilter("all")}
                    className="flex items-center space-x-2"
                  >
                    <Filter className="h-4 w-4" />
                    <span>Todos</span>
                  </Button>
                  <Button
                    variant={selectedFilter === "active" ? "default" : "outline"}
                    onClick={() => setSelectedFilter("active")}
                    className="flex items-center space-x-2"
                  >
                    <CheckCircle className="h-4 w-4" />
                    <span>Ativos</span>
                  </Button>
                  <Button
                    variant={selectedFilter === "pending" ? "default" : "outline"}
                    onClick={() => setSelectedFilter("pending")}
                    className="flex items-center space-x-2"
                  >
                    <Clock className="h-4 w-4" />
                    <span>Pendentes</span>
                  </Button>
                  <Button
                    variant={selectedFilter === "expired" ? "default" : "outline"}
                    onClick={() => setSelectedFilter("expired")}
                    className="flex items-center space-x-2"
                  >
                    <AlertTriangle className="h-4 w-4" />
                    <span>Expirados</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Lista de Contratos */}
          <div className="space-y-6">
            {filteredContracts.map((contract) => (
              <Card key={contract.id} className="modern-card overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row">
                    {/* Informações principais */}
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <Avatar className="h-16 w-16 avatar-ring">
                            <AvatarImage src={contract.logo} alt={contract.partner} />
                            <AvatarFallback>{contract.partner[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="text-xl font-bold text-foreground mb-1">{contract.partner}</h3>
                            <div className="flex items-center space-x-2 mb-2">
                              {getStatusIcon(contract.status)}
                              {getStatusBadge(contract.status)}
                              <Badge variant="secondary">{contract.type}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{contract.description}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Detalhes do contrato */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <DollarSign className="h-4 w-4 text-primary" />
                            <span className="text-sm font-medium">Valor do Contrato</span>
                          </div>
                          <div className="text-2xl font-bold gradient-text">{contract.value}</div>
                        </div>
                        
                        <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg p-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <Calendar className="h-4 w-4 text-blue-500" />
                            <span className="text-sm font-medium">Período</span>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {new Date(contract.startDate).toLocaleDateString('pt-BR')} - {new Date(contract.endDate).toLocaleDateString('pt-BR')}
                          </div>
                        </div>
                        
                        <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg p-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <Activity className="h-4 w-4 text-green-500" />
                            <span className="text-sm font-medium">Progresso</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Progress value={contract.progress} className="flex-1" />
                            <span className="text-sm font-bold">{contract.progress}%</span>
                          </div>
                        </div>
                      </div>

                      {/* Informações de contato */}
                      <div className="border-t border-border/50 pt-4">
                        <h4 className="font-semibold mb-2 flex items-center">
                          <Users className="h-4 w-4 mr-2 text-primary" />
                          Contato Principal
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div className="flex items-center space-x-2">
                            <Users className="h-3 w-3 text-muted-foreground" />
                            <span>{contract.contact}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Mail className="h-3 w-3 text-muted-foreground" />
                            <span>{contract.email}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="h-3 w-3 text-muted-foreground" />
                            <span>{contract.phone}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Ações rápidas */}
          <div className="mt-12 text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary">
                <Plus className="h-4 w-4 mr-2" />
                Novo Contrato
              </Button>
              <Button variant="outline" className="btn-secondary">
                <Download className="h-4 w-4 mr-2" />
                Relatório Geral
              </Button>
              <Button variant="outline" className="btn-secondary">
                <BarChart3 className="h-4 w-4 mr-2" />
                Analytics
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 