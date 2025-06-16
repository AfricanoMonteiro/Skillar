"use client"

import { useState, useEffect, useMemo } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Rocket,
  Zap,
  Crown,
  Star,
  Sparkles,
  TrendingUp,
  Shield,
  Globe,
  Code,
  Smartphone,
  Cloud,
  Database,
  Palette,
  Brain,
  Target,
  Users,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Play,
  Download,
  Share2,
  Heart,
  Bookmark,
  Filter,
  Search,
  Calendar,
  Clock,
  Award,
  Briefcase,
  Building2,
  Layers,
  Settings,
  BarChart3,
  PieChart,
  Activity,
  Cpu,
  Monitor,
  Tablet,
  Headphones,
  Camera,
  Mic,
  Video,
  Image,
  FileText,
  Lock,
  Unlock,
  Eye,
  EyeOff,
  ThumbsUp,
  MessageCircle,
  Send,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  Plus,
  Minus,
  X,
  Check,
  AlertCircle,
  Info,
  Lightbulb,
  Flame,
  Gem,
  Diamond,
  Hexagon,
  Triangle,
  Square,
  Circle
} from "lucide-react"

export default function Sales() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedPricing, setSelectedPricing] = useState("monthly")
  const [searchTerm, setSearchTerm] = useState("")
  const [isClient, setIsClient] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Partículas animadas para o fundo
  const particles = useMemo(() => {
    const positions = []
    for (let i = 0; i < 50; i++) {
      positions.push({
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 2 + Math.random() * 4,
        size: 1 + Math.random() * 3
      })
    }
    return positions
  }, [])

  // Categorias de produtos/serviços
  const categories = [
    { id: "all", name: "Todos", icon: Layers, color: "from-purple-500 to-pink-500" },
    { id: "saas", name: "SaaS", icon: Cloud, color: "from-blue-500 to-cyan-500" },
    { id: "mobile", name: "Mobile", icon: Smartphone, color: "from-green-500 to-emerald-500" },
    { id: "web", name: "Web", icon: Globe, color: "from-orange-500 to-red-500" },
    { id: "ai", name: "IA & ML", icon: Brain, color: "from-violet-500 to-purple-500" },
    { id: "design", name: "Design", icon: Palette, color: "from-pink-500 to-rose-500" },
    { id: "consulting", name: "Consultoria", icon: Users, color: "from-indigo-500 to-blue-500" }
  ]

  // Produtos e serviços
  const products = [
    {
      id: 1,
      name: "LearnHub Pro",
      category: "saas",
      type: "SaaS Platform",
      description: "Plataforma completa de aprendizado online com IA integrada, analytics avançados e gamificação.",
      features: ["IA Personalizada", "Analytics Avançados", "Gamificação", "API Completa", "White Label"],
      price: { monthly: 299, yearly: 2990, lifetime: 9990 },
      rating: 4.9,
      reviews: 1247,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
      badge: "Mais Popular",
      badgeColor: "from-green-500 to-emerald-500",
      icon: Rocket,
      color: "from-blue-500 to-cyan-500",
      tags: ["Educação", "IA", "Analytics"],
      demo: true,
      trial: 14
    },
    {
      id: 2,
      name: "CodeCraft Studio",
      category: "web",
      type: "Development Suite",
      description: "Suite completa para desenvolvimento web com templates premium, componentes reutilizáveis e deploy automático.",
      features: ["Templates Premium", "Componentes React", "Deploy Automático", "CDN Global", "Suporte 24/7"],
      price: { monthly: 199, yearly: 1990, lifetime: 5990 },
      rating: 4.8,
      reviews: 892,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      badge: "Novo",
      badgeColor: "from-purple-500 to-violet-500",
      icon: Code,
      color: "from-orange-500 to-red-500",
      tags: ["Desenvolvimento", "React", "Templates"],
      demo: true,
      trial: 7
    },
    {
      id: 3,
      name: "MobileFirst Framework",
      category: "mobile",
      type: "Mobile Development",
      description: "Framework revolucionário para desenvolvimento mobile cross-platform com performance nativa.",
      features: ["Cross-Platform", "Performance Nativa", "Hot Reload", "Push Notifications", "Offline Support"],
      price: { monthly: 149, yearly: 1490, lifetime: 4490 },
      rating: 4.7,
      reviews: 634,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      badge: "Trending",
      badgeColor: "from-orange-500 to-red-500",
      icon: Smartphone,
      color: "from-green-500 to-emerald-500",
      tags: ["Mobile", "Cross-Platform", "React Native"],
      demo: true,
      trial: 10
    },
    {
      id: 4,
      name: "AI Analytics Pro",
      category: "ai",
      type: "AI & Machine Learning",
      description: "Plataforma de analytics com IA que transforma dados em insights acionáveis automaticamente.",
      features: ["IA Preditiva", "AutoML", "Dashboards Inteligentes", "API REST", "Integração Fácil"],
      price: { monthly: 399, yearly: 3990, lifetime: 11990 },
      rating: 4.9,
      reviews: 456,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      badge: "Premium",
      badgeColor: "from-yellow-500 to-orange-500",
      icon: Brain,
      color: "from-violet-500 to-purple-500",
      tags: ["IA", "Analytics", "Machine Learning"],
      demo: true,
      trial: 21
    },
    {
      id: 5,
      name: "DesignSystem Elite",
      category: "design",
      type: "Design System",
      description: "Sistema de design completo com componentes premium, tokens de design e ferramentas de prototipagem.",
      features: ["Componentes Premium", "Design Tokens", "Prototipagem", "Figma Plugin", "Documentação"],
      price: { monthly: 99, yearly: 990, lifetime: 2990 },
      rating: 4.8,
      reviews: 1123,
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop",
      badge: "Criativo",
      badgeColor: "from-pink-500 to-rose-500",
      icon: Palette,
      color: "from-pink-500 to-rose-500",
      tags: ["Design", "UI/UX", "Figma"],
      demo: true,
      trial: 7
    },
    {
      id: 6,
      name: "CloudScale Infrastructure",
      category: "saas",
      type: "Cloud Infrastructure",
      description: "Infraestrutura cloud escalável com auto-scaling, monitoramento avançado e segurança enterprise.",
      features: ["Auto-Scaling", "Monitoramento 24/7", "Segurança Enterprise", "CDN Global", "Backup Automático"],
      price: { monthly: 499, yearly: 4990, lifetime: 14990 },
      rating: 4.9,
      reviews: 789,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
      badge: "Enterprise",
      badgeColor: "from-blue-500 to-indigo-500",
      icon: Cloud,
      color: "from-blue-500 to-cyan-500",
      tags: ["Cloud", "Infrastructure", "Enterprise"],
      demo: false,
      trial: 30
    },
    {
      id: 7,
      name: "Growth Consulting",
      category: "consulting",
      type: "Business Consulting",
      description: "Consultoria especializada em crescimento de startups e transformação digital de empresas.",
      features: ["Estratégia de Crescimento", "Transformação Digital", "Mentoria Executiva", "Análise de Mercado", "Roadmap Técnico"],
      price: { monthly: 2999, yearly: 29990, lifetime: 89990 },
      rating: 5.0,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      badge: "Exclusivo",
      badgeColor: "from-gold-500 to-yellow-500",
      icon: Users,
      color: "from-indigo-500 to-blue-500",
      tags: ["Consultoria", "Estratégia", "Crescimento"],
      demo: false,
      trial: 0
    },
    {
      id: 8,
      name: "SecureVault Pro",
      category: "saas",
      type: "Security Platform",
      description: "Plataforma de segurança avançada com criptografia end-to-end, auditoria completa e compliance.",
      features: ["Criptografia E2E", "Auditoria Completa", "Compliance LGPD", "2FA Avançado", "Backup Seguro"],
      price: { monthly: 199, yearly: 1990, lifetime: 5990 },
      rating: 4.8,
      reviews: 567,
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop",
      badge: "Seguro",
      badgeColor: "from-green-500 to-teal-500",
      icon: Shield,
      color: "from-green-500 to-emerald-500",
      tags: ["Segurança", "Compliance", "Criptografia"],
      demo: true,
      trial: 14
    }
  ]

  // Filtrar produtos
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  // Função para formatar preço
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0
    }).format(price)
  }

  // Função para obter cor do badge
  const getBadgeGradient = (color: string) => {
    return `bg-gradient-to-r ${color}`
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background com gradiente animado */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      </div>
      
      {/* Partículas animadas */}
      <div className="fixed inset-0 z-0">
        {isClient && particles.map((particle, index) => (
          <div
            key={index}
            className="absolute rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 animate-pulse"
            style={{
              top: `${particle.top}%`,
              left: `${particle.left}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          />
        ))}
      </div>
      
      {/* Conteúdo principal */}
      <div className="relative z-10">
        <Navigation />

        <div className="container py-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full px-6 py-3 mb-6">
              <Rocket className="h-5 w-5 text-primary" />
              <span className="text-primary font-semibold">Soluções Inovadoras</span>
              <Sparkles className="h-5 w-5 text-secondary" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Projetos &
              <span className="gradient-text block">Serviços SaaS</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              Descubra soluções tecnológicas revolucionárias que transformarão seu negócio. 
              Desde plataformas SaaS até consultoria especializada, temos tudo que você precisa para crescer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="btn-primary text-lg px-8 py-4">
                <Play className="h-5 w-5 mr-2" />
                Explorar Soluções
              </Button>
              <Button size="lg" variant="outline" className="btn-secondary text-lg px-8 py-4">
                <Calendar className="h-5 w-5 mr-2" />
                Agendar Demo
              </Button>
            </div>
          </div>

          {/* Filtros e Busca */}
          <div className="mb-12">
            <Card className="modern-card">
              <CardContent className="p-6">
                {/* Busca */}
                <div className="mb-6">
                  <div className="relative max-w-md mx-auto">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      placeholder="Buscar produtos e serviços..."
                      className="pl-12 pr-4 h-12 text-lg bg-secondary/50 border-border/50"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                {/* Categorias */}
                <div className="flex flex-wrap gap-3 justify-center mb-6">
                  {categories.map((category) => {
                    const Icon = category.icon
                    return (
                      <Button
                        key={category.id}
                        variant={selectedCategory === category.id ? "default" : "outline"}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`flex items-center space-x-2 ${
                          selectedCategory === category.id 
                            ? `bg-gradient-to-r ${category.color} text-white border-0` 
                            : "hover:bg-secondary/50"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        <span>{category.name}</span>
                      </Button>
                    )
                  })}
                </div>

                {/* Preços */}
                <div className="flex justify-center">
                  <div className="bg-secondary/50 rounded-lg p-1 flex">
                    <Button
                      variant={selectedPricing === "monthly" ? "default" : "ghost"}
                      onClick={() => setSelectedPricing("monthly")}
                      className="rounded-md"
                    >
                      Mensal
                    </Button>
                    <Button
                      variant={selectedPricing === "yearly" ? "default" : "ghost"}
                      onClick={() => setSelectedPricing("yearly")}
                      className="rounded-md"
                    >
                      Anual
                      <Badge className="ml-2 bg-green-500 text-white">-50%</Badge>
                    </Button>
                    <Button
                      variant={selectedPricing === "lifetime" ? "default" : "ghost"}
                      onClick={() => setSelectedPricing("lifetime")}
                      className="rounded-md"
                    >
                      Vitalício
                      <Badge className="ml-2 bg-purple-500 text-white">-70%</Badge>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Grid de Produtos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => {
              const Icon = product.icon
              const isHovered = hoveredCard === product.id
              
              return (
                <Card 
                  key={product.id} 
                  className="modern-card group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden"
                  onMouseEnter={() => setHoveredCard(product.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="relative">
                    {/* Imagem do produto */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMzc0MTUxIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOUM5Qzk3IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiPkltYWdlbSBuw6NvIGVuY29udHJhZGE8L3RleHQ+Cjwvc3ZnPgo=';
                        }}
                      />
                      
                      {/* Overlay com gradiente */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Badge */}
                      <div className="absolute top-4 left-4">
                        <Badge className={`${getBadgeGradient(product.badgeColor)} text-white border-0 font-semibold`}>
                          {product.badge}
                        </Badge>
                      </div>
                      
                      {/* Ícone do produto */}
                      <div className="absolute top-4 right-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${product.color} flex items-center justify-center shadow-lg`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      
                      {/* Rating */}
                      <div className="absolute bottom-4 left-4 flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-white font-semibold text-sm">{product.rating}</span>
                        <span className="text-white/70 text-sm">({product.reviews})</span>
                      </div>
                    </div>

                    {/* Conteúdo do card */}
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary" className="text-xs">
                            {product.type}
                          </Badge>
                          {product.trial > 0 && (
                            <Badge className="bg-blue-100 text-blue-800 border-blue-200 text-xs">
                              {product.trial} dias grátis
                            </Badge>
                          )}
                        </div>
                        
                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                        
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {product.description}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {product.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Principais recursos:</h4>
                        <ul className="space-y-1">
                          {product.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="flex items-center text-xs text-muted-foreground">
                              <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Preço */}
                      <div className="mb-6">
                        <div className="flex items-baseline space-x-2">
                          <span className="text-3xl font-bold gradient-text">
                            {formatPrice(product.price[selectedPricing as keyof typeof product.price])}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {selectedPricing === "monthly" ? "/mês" : 
                             selectedPricing === "yearly" ? "/ano" : "pagamento único"}
                          </span>
                        </div>
                        
                        {selectedPricing === "yearly" && (
                          <div className="text-xs text-green-600 font-medium">
                            Economize {formatPrice(product.price.monthly * 12 - product.price.yearly)} por ano
                          </div>
                        )}
                      </div>

                      {/* Botões de ação */}
                      <div className="space-y-3">
                        <Button className="w-full btn-primary">
                          <Rocket className="h-4 w-4 mr-2" />
                          Começar Agora
                        </Button>
                        
                        <div className="flex space-x-2">
                          {product.demo && (
                            <Button variant="outline" size="sm" className="flex-1">
                              <Play className="h-3 w-3 mr-1" />
                              Demo
                            </Button>
                          )}
                          <Button variant="outline" size="sm" className="flex-1">
                            <Info className="h-3 w-3 mr-1" />
                            Detalhes
                          </Button>
                          <Button variant="outline" size="sm" className="w-10 h-8 p-0">
                            <Heart className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <Card className="modern-card bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="p-12">
                <div className="max-w-3xl mx-auto">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                      <Zap className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Não encontrou o que procura?
                  </h2>
                  
                  <p className="text-xl text-muted-foreground mb-8">
                    Nossa equipe pode desenvolver uma solução personalizada para suas necessidades específicas.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="btn-primary text-lg px-8 py-4">
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Falar com Especialista
                    </Button>
                    <Button size="lg" variant="outline" className="btn-secondary text-lg px-8 py-4">
                      <Mail className="h-5 w-5 mr-2" />
                      Solicitar Orçamento
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 