"use client"

import { useState, useEffect, useMemo } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Zap,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Github,
  Chrome,
  ArrowLeft,
  Shield,
  Sparkles,
  Loader2
} from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  })
  const [error, setError] = useState("")
  const [isClient, setIsClient] = useState(false)

  // Hook para garantir que só renderize no cliente
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Partículas com posições fixas para evitar erro de hidratação
  const particles = useMemo(() => {
    const positions = [
      { top: 15, left: 25, delay: 0.5, duration: 3 },
      { top: 35, left: 75, delay: 1.2, duration: 2.5 },
      { top: 55, left: 15, delay: 2.1, duration: 3.5 },
      { top: 25, left: 85, delay: 0.8, duration: 2.8 },
      { top: 75, left: 45, delay: 1.8, duration: 3.2 },
      { top: 45, left: 65, delay: 0.3, duration: 2.7 },
      { top: 85, left: 20, delay: 2.5, duration: 3.1 },
      { top: 65, left: 90, delay: 1.5, duration: 2.9 },
      { top: 10, left: 55, delay: 0.9, duration: 3.3 },
      { top: 90, left: 70, delay: 2.2, duration: 2.6 },
      { top: 30, left: 40, delay: 1.7, duration: 3.4 },
      { top: 70, left: 10, delay: 0.6, duration: 2.4 },
      { top: 50, left: 95, delay: 2.8, duration: 3.6 },
      { top: 20, left: 30, delay: 1.1, duration: 2.3 },
      { top: 80, left: 60, delay: 1.9, duration: 3.7 }
    ]
    return positions
  }, [])

  // Função para lidar com mudanças nos campos do formulário
  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
    // Limpar erro quando o usuário começar a digitar
    if (error) setError("")
  }

  // Função para validar email
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Função para fazer login tradicional
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      // Validações básicas
      if (!formData.email || !formData.password) {
        throw new Error("Por favor, preencha todos os campos")
      }

      if (!isValidEmail(formData.email)) {
        throw new Error("Por favor, insira um email válido")
      }

      if (formData.password.length < 6) {
        throw new Error("A senha deve ter pelo menos 6 caracteres")
      }

      // Simular chamada de API (substitua pela sua API real)
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Verificar credenciais (substitua pela sua lógica de autenticação)
      if (formData.email === "admin@learnhub.com" && formData.password === "123456") {
        // Login bem-sucedido
        localStorage.setItem("user", JSON.stringify({
          email: formData.email,
          name: "João Silva",
          avatar: "/placeholder-user.jpg"
        }))
        
        router.push("/dashboard")
      } else {
        throw new Error("Credenciais inválidas. Tente email: admin@learnhub.com e senha: 123456")
      }

    } catch (err: any) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  // Função para login com Google
  const handleGoogleLogin = async () => {
    setIsLoading(true)
    try {
      // Implementar integração com Google OAuth
      // Por enquanto, simular sucesso
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      localStorage.setItem("user", JSON.stringify({
        email: "usuario@gmail.com",
        name: "Usuário Google",
        avatar: "/placeholder-user.jpg",
        provider: "google"
      }))
      
      router.push("/dashboard")
    } catch (err) {
      setError("Erro ao fazer login com Google")
    } finally {
      setIsLoading(false)
    }
  }

  // Função para login com GitHub
  const handleGithubLogin = async () => {
    setIsLoading(true)
    try {
      // Implementar integração com GitHub OAuth
      // Por enquanto, simular sucesso
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      localStorage.setItem("user", JSON.stringify({
        email: "usuario@github.com",
        name: "Usuário GitHub",
        avatar: "/placeholder-user.jpg",
        provider: "github"
      }))
      
      router.push("/dashboard")
    } catch (err) {
      setError("Erro ao fazer login com GitHub")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      {/* Padrão de fundo com partículas */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
        {isClient && particles.map((particle, i) => (
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

      <div className="w-full max-w-md relative z-10">
        {/* Header com logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-r from-primary via-secondary to-accent rounded-xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-all animate-gradient-xy">
              <Zap className="h-7 w-7 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">LearnHub</span>
          </Link>
          <p className="text-muted-foreground mt-2">
            Faça login e continue sua jornada de aprendizado
          </p>
        </div>

        {/* Card principal */}
        <Card className="modern-card backdrop-blur-xl border-primary/20">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl gradient-text">
              Bem-vindo de volta! 👋
            </CardTitle>
            <CardDescription>
              Entre na sua conta para acessar seus cursos
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Botões de login social */}
            <div className="space-y-3">
              <Button
                type="button"
                variant="outline"
                className="w-full h-12 text-left bg-white/5 border-border/50 hover:bg-white/10 hover:border-primary/30 transition-all"
                onClick={handleGoogleLogin}
                disabled={isLoading}
              >
                <Chrome className="h-5 w-5 mr-3 text-blue-500" />
                Continuar com Google
                {isLoading && <Loader2 className="h-4 w-4 ml-auto animate-spin" />}
              </Button>

              <Button
                type="button"
                variant="outline"
                className="w-full h-12 text-left bg-white/5 border-border/50 hover:bg-white/10 hover:border-primary/30 transition-all"
                onClick={handleGithubLogin}
                disabled={isLoading}
              >
                <Github className="h-5 w-5 mr-3" />
                Continuar com GitHub
                {isLoading && <Loader2 className="h-4 w-4 ml-auto animate-spin" />}
              </Button>
            </div>

            {/* Separador */}
            <div className="relative">
              <Separator className="bg-border/50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-background px-4 text-sm text-muted-foreground">
                  ou continue com email
                </span>
              </div>
            </div>

            {/* Formulário de login */}
            <form onSubmit={handleLogin} className="space-y-4">
              {/* Campo de email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    className="pl-10 h-12 bg-secondary/50 border-border/50 focus:border-primary/50"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* Campo de senha */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">
                  Senha
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Sua senha"
                    className="pl-10 pr-10 h-12 bg-secondary/50 border-border/50 focus:border-primary/50"
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    disabled={isLoading}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Lembrar-me e esqueci a senha */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={formData.rememberMe}
                    onCheckedChange={(checked) => handleInputChange("rememberMe", checked)}
                  />
                  <Label htmlFor="remember" className="text-sm text-muted-foreground">
                    Lembrar-me
                  </Label>
                </div>
                <Link 
                  href="/forgot-password" 
                  className="text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  Esqueci minha senha
                </Link>
              </div>

              {/* Exibir erro */}
              {error && (
                <Alert className="border-red-500/20 bg-red-500/10">
                  <Shield className="h-4 w-4 text-red-500" />
                  <AlertDescription className="text-red-500">
                    {error}
                  </AlertDescription>
                </Alert>
              )}

              {/* Botão de submit */}
              <Button
                type="submit"
                className="w-full h-12 btn-primary text-lg font-semibold"
                disabled={isLoading || !formData.email || !formData.password}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                    Entrando...
                  </>
                ) : (
                  <>
                    <Shield className="h-5 w-5 mr-2" />
                    Entrar na Conta
                  </>
                )}
              </Button>
            </form>

            {/* Link para cadastro */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Não tem uma conta?{" "}
                <Link 
                  href="/register" 
                  className="text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  Cadastre-se gratuitamente
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Informações de segurança */}
        <div className="mt-6 text-center">
          <div className="flex items-center justify-center space-x-2 text-xs text-muted-foreground">
            <Shield className="h-3 w-3" />
            <span>Seus dados estão protegidos com criptografia SSL</span>
          </div>
        </div>

        {/* Voltar para home */}
        <div className="mt-4 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Voltar para o início
          </Link>
        </div>
      </div>
    </div>
  )
} 