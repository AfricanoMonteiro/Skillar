"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Home,
  BookOpen,
  Users,
  MessageCircle,
  User,
  Settings,
  LogOut,
  Bell,
  Search,
  ChevronDown,
  Zap,
  Trophy,
  Crown,
  Sparkles,
  Rocket,
  Star,
  Flame,
  Code,
  Palette,
  Building2,
  Briefcase,
  FolderOpen,
  Menu,
  X,
  ShoppingCart
} from "lucide-react"

export function Navigation() {
  // Estados para controle da interface
  const pathname = usePathname()
  const router = useRouter()
  const [notifications] = useState(3)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [userLoggedIn, setUserLoggedIn] = useState(false)

  // Verificar se o usuário está logado (simulação)
  useEffect(() => {
    try {
      const user = localStorage.getItem("user")
      setUserLoggedIn(!!user)
    } catch (error) {
      console.error("Error accessing localStorage:", error)
      setUserLoggedIn(false)
    }
  }, [])

  // Itens de navegação principal
  const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: Home },
    { href: "/courses", label: "Cursos", icon: BookOpen },
    { href: "/community", label: "Comunidade", icon: Users },
    { href: "/chat", label: "Chat", icon: MessageCircle },
    { href: "/projects", label: "Projetos", icon: FolderOpen },
    { href: "/sales", label: "Vendas", icon: ShoppingCart },
    { href: "/partners", label: "Parceiros", icon: Building2 },
  ]

  // Dados estatísticos do usuário (substituir por dados reais da API)
  const userStats = {
    level: 42,
    xp: 12850,
    streak: 7,
    rank: "Expert",
    completedCourses: 12,
    certificates: 5
  }

  // Função para lidar com ações do menu do usuário
  const handleMenuClick = (action: string) => {
    switch (action) {
      case 'profile':
        router.push('/profile')
        break
      case 'achievements':
        router.push('/achievements')
        break
      case 'projects':
        router.push('/projects')
        break
      case 'portfolio':
        router.push('/portfolio')
        break
      case 'settings':
        router.push('/settings')
        break
      case 'logout':
        // Implementar logout real
        try {
          localStorage.removeItem("user")
          setUserLoggedIn(false)
          router.push("/")
        } catch (error) {
          console.error("Error during logout:", error)
          setUserLoggedIn(false)
          router.push("/")
        }
        break
      default:
        break
    }
  }

  // Função para fechar menu mobile ao navegar
  const handleMobileNavigation = (href: string) => {
    setIsMobileMenuOpen(false)
    router.push(href)
  }

  // Se o usuário não estiver logado, não mostrar a navegação completa
  if (!userLoggedIn && pathname !== "/" && !pathname.startsWith("/login") && !pathname.startsWith("/register")) {
    return (
      <header className="sticky top-0 z-50 border-b border-border/50 glassmorphism backdrop-blur-xl">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-primary via-secondary to-accent rounded-xl shadow-lg flex items-center justify-center animate-gradient-xy">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">LearnHub</span>
          </Link>

          {/* Botões de Login/Cadastro */}
          <div className="flex items-center space-x-3">
            <Link href="/login">
              <Button variant="ghost" className="text-foreground hover:text-primary">
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button className="btn-primary">
                Cadastrar
              </Button>
            </Link>
          </div>
        </nav>
      </header>
    )
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 glassmorphism backdrop-blur-xl">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/dashboard" className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-r from-primary via-secondary to-accent rounded-xl shadow-lg group-hover:shadow-primary/20 transition-all duration-300 flex items-center justify-center group-hover:scale-110 animate-gradient-xy">
              <Zap className="h-6 w-6 text-white animate-pulse" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce">
              <Sparkles className="h-2.5 w-2.5 text-white" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold gradient-text">LearnHub</span>
            <span className="text-xs text-muted-foreground -mt-1">Pro Platform</span>
          </div>
        </Link>

        {/* Navigation Items - Desktop */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={isActive ? "default" : "ghost"}
                  className={`
                    flex items-center space-x-2 px-4 py-2 h-10 font-medium transition-all duration-300
                    ${isActive 
                      ? "btn-primary shadow-lg shadow-primary/20 animate-pulse-glow" 
                      : "hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:scale-105 text-muted-foreground hover:text-foreground"
                    }
                  `}
                >
                  <Icon className={`h-5 w-5 ${isActive ? 'animate-bounce' : ''}`} />
                  <span className="hidden lg:inline">{item.label}</span>
                  {/* Badges de notificação */}
                  {item.label === "Cursos" && (
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs h-5 w-5 rounded-full p-0 flex items-center justify-center animate-pulse">
                      5
                    </Badge>
                  )}
                  {item.label === "Chat" && (
                    <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs h-5 w-5 rounded-full p-0 flex items-center justify-center animate-pulse">
                      2
                    </Badge>
                  )}
                </Button>
              </Link>
            )
          })}
        </div>

        {/* Side direito - Desktop e Mobile */}
        <div className="flex items-center space-x-2">
          {/* Botão de busca - Hidden em mobile */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="hidden sm:flex hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:scale-105 transition-all"
            onClick={() => {
              // Implementar busca global
              console.log('Busca global clicada')
            }}
          >
            <Search className="h-4 w-4" />
          </Button>

          {/* Notificações */}
          <div className="relative">
            <Button 
              variant="ghost" 
              size="sm" 
              className="hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:scale-105 transition-all"
              onClick={() => {
                // Implementar painel de notificações
                console.log('Notificações clicadas')
              }}
            >
              <Bell className="h-4 w-4" />
            </Button>
            {notifications > 0 && (
              <Badge className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs flex items-center justify-center animate-bounce">
                {notifications}
              </Badge>
            )}
          </div>

          {/* Menu Mobile - Sheet */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="sm" 
                className="md:hidden hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-0">
              <SheetHeader className="p-6 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-12 w-12 avatar-ring">
                    <AvatarImage src="/placeholder-user.jpg" alt="User" />
                    <AvatarFallback className="bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg">
                      JS
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <SheetTitle className="gradient-text">João Silva</SheetTitle>
                    <p className="text-sm text-muted-foreground">Desenvolvedor Full Stack</p>
                  </div>
                </div>
              </SheetHeader>

              {/* Menu de navegação mobile */}
              <div className="p-4 space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon
                  const isActive = pathname === item.href
                  return (
                    <Button
                      key={item.href}
                      variant={isActive ? "default" : "ghost"}
                      className={`
                        w-full justify-start space-x-3 h-12 transition-all duration-300
                        ${isActive 
                          ? "btn-primary" 
                          : "hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10"
                        }
                      `}
                      onClick={() => handleMobileNavigation(item.href)}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{item.label}</span>
                      {/* Badges para mobile */}
                      {item.label === "Cursos" && (
                        <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs ml-auto">
                          5
                        </Badge>
                      )}
                      {item.label === "Chat" && (
                        <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs ml-auto">
                          2
                        </Badge>
                      )}
                    </Button>
                  )
                })}
              </div>

              {/* Separador */}
              <div className="px-4">
                <div className="border-t border-border/50"></div>
              </div>

              {/* Estatísticas do usuário no mobile */}
              <div className="p-4 space-y-3">
                <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                  Suas Estatísticas
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/10 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold gradient-text">{userStats.level}</div>
                    <div className="text-xs text-muted-foreground">Nível</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/10 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold gradient-text">{userStats.completedCourses}</div>
                    <div className="text-xs text-muted-foreground">Cursos</div>
                  </div>
                </div>
                
                {/* Progresso XP */}
                <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">XP Progress</span>
                    <span className="text-sm font-bold gradient-text">{userStats.xp.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full" 
                      style={{ width: `${(userStats.xp / 15000) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Menu de ações do usuário no mobile */}
              <div className="p-4 space-y-2">
                <Button
                  variant="ghost"
                  className="w-full justify-start space-x-3 h-10"
                  onClick={() => {
                    handleMenuClick('profile')
                    setIsMobileMenuOpen(false)
                  }}
                >
                  <User className="h-4 w-4" />
                  <span>Perfil</span>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start space-x-3 h-10"
                  onClick={() => {
                    handleMenuClick('achievements')
                    setIsMobileMenuOpen(false)
                  }}
                >
                  <Trophy className="h-4 w-4" />
                  <span>Conquistas</span>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start space-x-3 h-10"
                  onClick={() => {
                    handleMenuClick('settings')
                    setIsMobileMenuOpen(false)
                  }}
                >
                  <Settings className="h-4 w-4" />
                  <span>Configurações</span>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start space-x-3 h-10 text-red-600 hover:text-red-700"
                  onClick={() => {
                    handleMenuClick('logout')
                    setIsMobileMenuOpen(false)
                  }}
                >
                  <LogOut className="h-4 w-4" />
                  <span>Sair</span>
                </Button>
              </div>
            </SheetContent>
          </Sheet>

          {/* Menu do usuário - Desktop */}
          <div className="hidden md:block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-3 px-3 py-2 h-12 hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 transition-all group">
                  <div className="relative">
                    <Avatar className="h-9 w-9 avatar-ring group-hover:scale-110 transition-transform">
                      <AvatarImage src="/placeholder-user.jpg" alt="User" />
                      <AvatarFallback className="bg-gradient-to-r from-primary to-secondary text-white font-bold">
                        JS
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -top-1 -right-1 h-4 w-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-white">{userStats.level}</span>
                    </div>
                  </div>
                  <div className="hidden lg:block text-left">
                    <div className="flex items-center space-x-2">
                      <p className="text-sm font-medium text-foreground">João Silva</p>
                      <Badge className="bg-gradient-to-r from-purple-500 to-violet-500 text-white text-xs px-2 py-0.5 animate-pulse">
                        <Crown className="h-3 w-3 mr-1" />
                        {userStats.rank}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-2 mt-0.5">
                      <div className="flex items-center space-x-1">
                        <Zap className="h-3 w-3 text-yellow-500" />
                        <span className="text-xs text-muted-foreground font-medium">{userStats.xp.toLocaleString()} XP</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Flame className="h-3 w-3 text-orange-500" />
                        <span className="text-xs text-muted-foreground font-medium">{userStats.streak} dias</span>
                      </div>
                    </div>
                  </div>
                  <ChevronDown className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </Button>
              </DropdownMenuTrigger>
              
              <DropdownMenuContent align="end" className="w-80 p-0 bg-background/95 backdrop-blur-xl border border-border/50">
                {/* Cabeçalho do perfil do usuário */}
                <div className="p-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
                  <div className="flex items-center space-x-3 mb-3">
                    <Avatar className="h-12 w-12 avatar-ring">
                      <AvatarImage src="/placeholder-user.jpg" alt="User" />
                      <AvatarFallback className="bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg">
                        JS
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold gradient-text">João Silva</h3>
                        <Badge className="bg-gradient-to-r from-purple-500 to-violet-500 text-white text-xs animate-pulse">
                          <Crown className="h-3 w-3 mr-1" />
                          {userStats.rank}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Desenvolvedor Full Stack</p>
                    </div>
                  </div>

                  {/* Grid de estatísticas */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center p-2 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 rounded-lg">
                      <div className="text-lg font-bold gradient-text">{userStats.level}</div>
                      <div className="text-xs text-muted-foreground">Nível</div>
                    </div>
                    <div className="text-center p-2 bg-gradient-to-br from-green-500/20 to-emerald-500/10 rounded-lg">
                      <div className="text-lg font-bold gradient-text">{userStats.completedCourses}</div>
                      <div className="text-xs text-muted-foreground">Cursos</div>
                    </div>
                    <div className="text-center p-2 bg-gradient-to-br from-yellow-500/20 to-orange-500/10 rounded-lg">
                      <div className="text-lg font-bold gradient-text">{userStats.certificates}</div>
                      <div className="text-xs text-muted-foreground">Certificados</div>
                    </div>
                  </div>

                  {/* Progresso XP */}
                  <div className="mt-3 p-3 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Zap className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm font-medium text-foreground">Progresso XP</span>
                      </div>
                      <span className="text-sm font-bold gradient-text">{userStats.xp.toLocaleString()} / 15,000</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full animate-pulse" style={{ width: `${(userStats.xp / 15000) * 100}%` }}></div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {15000 - userStats.xp} XP para o próximo nível
                    </div>
                  </div>
                </div>

                <DropdownMenuSeparator />

                {/* Itens do menu */}
                <div className="p-2">
                  <DropdownMenuItem 
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 transition-all cursor-pointer"
                    onClick={() => handleMenuClick('profile')}
                  >
                    <User className="h-5 w-5 text-primary" />
                    <span className="font-medium text-foreground">Perfil</span>
                  </DropdownMenuItem>
                  
                  <DropdownMenuItem 
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 transition-all cursor-pointer"
                    onClick={() => handleMenuClick('achievements')}
                  >
                    <Trophy className="h-5 w-5 text-yellow-500" />
                    <div className="flex-1">
                      <span className="font-medium text-foreground">Conquistas</span>
                      <div className="text-xs text-muted-foreground">Veja suas conquistas</div>
                    </div>
                    <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs">
                      {userStats.certificates}
                    </Badge>
                  </DropdownMenuItem>

                  <DropdownMenuItem 
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 transition-all cursor-pointer"
                    onClick={() => handleMenuClick('projects')}
                  >
                    <Rocket className="h-5 w-5 text-blue-500" />
                    <div className="flex-1">
                      <span className="font-medium text-foreground">Meus Projetos</span>
                      <div className="text-xs text-muted-foreground">Gerencie seus projetos</div>
                    </div>
                  </DropdownMenuItem>

                  <DropdownMenuItem 
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 transition-all cursor-pointer"
                    onClick={() => handleMenuClick('portfolio')}
                  >
                    <Code className="h-5 w-5 text-green-500" />
                    <div className="flex-1">
                      <span className="font-medium text-foreground">Portfólio</span>
                      <div className="text-xs text-muted-foreground">Mostre seus trabalhos</div>
                    </div>
                  </DropdownMenuItem>

                  <DropdownMenuItem 
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 transition-all cursor-pointer"
                    onClick={() => handleMenuClick('settings')}
                  >
                    <Settings className="h-5 w-5 text-muted-foreground" />
                    <span className="font-medium text-foreground">Configurações</span>
                  </DropdownMenuItem>
                </div>

                <DropdownMenuSeparator />

                {/* Seção de streak */}
                <div className="p-3 bg-gradient-to-r from-orange-500/10 to-red-500/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Flame className="h-5 w-5 text-orange-500 animate-pulse" />
                      <div>
                        <div className="font-medium text-foreground">Streak de Estudos</div>
                        <div className="text-xs text-muted-foreground">Continue assim!</div>
                      </div>
                    </div>
                    <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg px-3 py-1 animate-bounce">
                      🔥 {userStats.streak}
                    </Badge>
                  </div>
                </div>

                <DropdownMenuSeparator />

                <div className="p-2">
                  <DropdownMenuItem 
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-red-500/10 hover:to-pink-500/10 transition-all cursor-pointer text-red-600"
                    onClick={() => handleMenuClick('logout')}
                  >
                    <LogOut className="h-5 w-5" />
                    <span className="font-medium">Sair</span>
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
    </header>
  )
}
