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
import { Progress } from "@/components/ui/progress"
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
  User,
  Loader2,
  CheckCircle,
  AlertCircle,
  Star,
  Crown,
  Sparkles
} from "lucide-react"

export default function RegisterPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
    acceptNewsletter: true
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [passwordStrength, setPasswordStrength] = useState(0)
  const [passwordFeedback, setPasswordFeedback] = useState<string[]>([])
  const [isClient, setIsClient] = useState(false)

  // Hook para garantir que só renderize no cliente
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Partículas com posições fixas para evitar erro de hidratação
  const particles = useMemo(() => {
    const positions = [
      { top: 12, left: 22, delay: 0.4, duration: 3.1 },
      { top: 38, left: 78, delay: 1.3, duration: 2.6 },
      { top: 58, left: 12, delay: 2.2, duration: 3.7 },
      { top: 28, left: 88, delay: 0.7, duration: 2.3 },
      { top: 78, left: 42, delay: 1.9, duration: 3.5 },
      { top: 48, left: 68, delay: 0.2, duration: 2.8 },
      { top: 88, left: 18, delay: 2.6, duration: 3.2 },
      { top: 68, left: 92, delay: 1.4, duration: 2.7 },
      { top: 8, left: 58, delay: 0.8, duration: 3.6 },
      { top: 92, left: 72, delay: 2.3, duration: 2.4 },
      { top: 32, left: 38, delay: 1.6, duration: 3.8 },
      { top: 72, left: 8, delay: 0.5, duration: 2.2 },
      { top: 52, left: 98, delay: 2.9, duration: 3.9 },
      { top: 18, left: 32, delay: 1.0, duration: 2.1 },
      { top: 82, left: 62, delay: 2.1, duration: 4.0 },
      { top: 42, left: 2, delay: 0.6, duration: 2.5 },
      { top: 62, left: 82, delay: 2.7, duration: 3.3 },
      { top: 2, left: 52, delay: 1.2, duration: 2.9 },
      { top: 98, left: 32, delay: 2.5, duration: 3.4 },
      { top: 22, left: 72, delay: 0.3, duration: 2.8 }
    ]
    return positions
  }, [])

  // Função para lidar com mudanças nos campos do formulário
  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
    
    // Limpar erro específico quando o usuário começar a digitar
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ""
      }))
    }
  }

  // Função para validar email
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Função para calcular força da senha
  const getPasswordStrength = (password: string) => {
    let strength = 0
    let feedback = []

    if (password.length >= 8) {
      strength += 20
    } else {
      feedback.push("Pelo menos 8 caracteres")
    }

    if (/[a-z]/.test(password)) {
      strength += 20
    } else {
      feedback.push("Uma letra minúscula")
    }

    if (/[A-Z]/.test(password)) {
      strength += 20
    } else {
      feedback.push("Uma letra maiúscula")
    }

    if (/[0-9]/.test(password)) {
      strength += 20
    } else {
      feedback.push("Um número")
    }

    if (/[^A-Za-z0-9]/.test(password)) {
      strength += 20
    } else {
      feedback.push("Um caractere especial")
    }

    return { strength, feedback }
  }

  // Calcular força da senha quando a senha mudar
  useEffect(() => {
    const passwordStrengthObj = getPasswordStrength(formData.password)
    setPasswordStrength(passwordStrengthObj.strength)
    setPasswordFeedback(passwordStrengthObj.feedback)
  }, [formData.password])

  // Função para validar formulário
  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório"
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Nome deve ter pelo menos 2 caracteres"
    }

    if (!formData.email) {
      newErrors.email = "Email é obrigatório"
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Email inválido"
    }

    if (!formData.password) {
      newErrors.password = "Senha é obrigatória"
    } else if (passwordStrength < 80) {
      newErrors.password = "Senha muito fraca"
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirmação de senha é obrigatória"
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Senhas não coincidem"
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = "Você deve aceitar os termos de uso"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Função para fazer registro tradicional
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    try {
      // Simular chamada de API (substitua pela sua API real)
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Verificar se email já existe (simulação)
      if (formData.email === "admin@learnhub.com") {
        throw new Error("Este email já está em uso")
      }

      // Registro bem-sucedido
      const userData = {
        name: formData.name,
        email: formData.email,
        avatar: "/placeholder-user.jpg",
        createdAt: new Date().toISOString()
      }

      localStorage.setItem("user", JSON.stringify(userData))
      
      // Redirecionar para dashboard ou página de boas-vindas
      router.push("/dashboard")

    } catch (err: any) {
      setErrors({ general: err.message })
    } finally {
      setIsLoading(false)
    }
  }

  // Função para registro com Google
  const handleGoogleRegister = async () => {
    setIsLoading(true)
    try {
      // Implementar integração com Google OAuth
      // Por enquanto, simular sucesso
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      localStorage.setItem("user", JSON.stringify({
        email: "usuario@gmail.com",
        name: "Usuário Google",
        avatar: "/placeholder-user.jpg",
        provider: "google",
        createdAt: new Date().toISOString()
      }))
      
      router.push("/dashboard")
    } catch (err) {
      setErrors({ general: "Erro ao fazer registro com Google" })
    } finally {
      setIsLoading(false)
    }
  }

  // Função para registro com GitHub
  const handleGithubRegister = async () => {
    setIsLoading(true)
    try {
      // Implementar integração com GitHub OAuth
      // Por enquanto, simular sucesso
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      localStorage.setItem("user", JSON.stringify({
        email: "usuario@github.com",
        name: "Usuário GitHub",
        avatar: "/placeholder-user.jpg",
        provider: "github",
        createdAt: new Date().toISOString()
      }))
      
      router.push("/dashboard")
    } catch (err) {
      setErrors({ general: "Erro ao fazer registro com GitHub" })
    } finally {
      setIsLoading(false)
    }
  }

  // Função para obter cor da barra de força da senha
  const getPasswordStrengthColor = (strength: number) => {
    if (strength < 40) return "bg-red-500"
    if (strength < 70) return "bg-yellow-500"
    return "bg-green-500"
  }

  // Função para obter texto da força da senha
  const getPasswordStrengthText = (strength: number) => {
    if (strength < 40) return "Fraca"
    if (strength < 70) return "Média"
    return "Forte"
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
            Crie sua conta e comece sua jornada de aprendizado
          </p>
        </div>

        {/* Card principal */}
        <Card className="modern-card backdrop-blur-xl border-primary/20">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl gradient-text flex items-center justify-center">
              <Crown className="h-6 w-6 mr-2 text-yellow-500" />
              Cadastre-se Grátis! 🚀
            </CardTitle>
            <CardDescription>
              Junte-se a milhares de estudantes que já transformaram suas carreiras
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Benefícios */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-4 space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Acesso a todos os cursos</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Certificados reconhecidos</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Comunidade ativa</span>
              </div>
            </div>

            {/* Botões de registro social */}
            <div className="space-y-3">
              <Button
                type="button"
                variant="outline"
                className="w-full h-12 text-left bg-white/5 border-border/50 hover:bg-white/10 hover:border-primary/30 transition-all"
                onClick={handleGoogleRegister}
                disabled={isLoading}
              >
                <Chrome className="h-5 w-5 mr-3 text-blue-500" />
                Cadastrar com Google
                {isLoading && <Loader2 className="h-4 w-4 ml-auto animate-spin" />}
              </Button>

              <Button
                type="button"
                variant="outline"
                className="w-full h-12 text-left bg-white/5 border-border/50 hover:bg-white/10 hover:border-primary/30 transition-all"
                onClick={handleGithubRegister}
                disabled={isLoading}
              >
                <Github className="h-5 w-5 mr-3" />
                Cadastrar com GitHub
                {isLoading && <Loader2 className="h-4 w-4 ml-auto animate-spin" />}
              </Button>
            </div>

            {/* Separador */}
            <div className="relative">
              <Separator className="bg-border/50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-background px-4 text-sm text-muted-foreground">
                  ou cadastre-se com email
                </span>
              </div>
            </div>

            {/* Formulário de registro */}
            <form onSubmit={handleRegister} className="space-y-4">
              {/* Campo de nome */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  Nome Completo
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="Seu nome completo"
                    className={`pl-10 h-12 bg-secondary/50 border-border/50 focus:border-primary/50 ${
                      errors.name ? 'border-red-500 focus:border-red-500' : ''
                    }`}
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    disabled={isLoading}
                  />
                </div>
                {errors.name && (
                  <p className="text-xs text-red-500 flex items-center">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    {errors.name}
                  </p>
                )}
              </div>

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
                    className={`pl-10 h-12 bg-secondary/50 border-border/50 focus:border-primary/50 ${
                      errors.email ? 'border-red-500 focus:border-red-500' : ''
                    }`}
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    disabled={isLoading}
                  />
                </div>
                {errors.email && (
                  <p className="text-xs text-red-500 flex items-center">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    {errors.email}
                  </p>
                )}
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
                    placeholder="Crie uma senha forte"
                    className={`pl-10 pr-10 h-12 bg-secondary/50 border-border/50 focus:border-primary/50 ${
                      errors.password ? 'border-red-500 focus:border-red-500' : ''
                    }`}
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

                {/* Indicador de força da senha */}
                {formData.password && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Força da senha:</span>
                      <span className={`font-medium ${
                        passwordStrength < 40 ? 'text-red-500' :
                        passwordStrength < 70 ? 'text-yellow-500' : 'text-green-500'
                      }`}>
                        {getPasswordStrengthText(passwordStrength)}
                      </span>
                    </div>
                    <Progress 
                      value={passwordStrength} 
                      className="h-2"
                    />
                    {passwordFeedback.length > 0 && (
                      <div className="text-xs text-muted-foreground">
                        Precisa de: {passwordFeedback.join(", ")}
                      </div>
                    )}
                  </div>
                )}

                {errors.password && (
                  <p className="text-xs text-red-500 flex items-center">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Campo de confirmação de senha */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-sm font-medium">
                  Confirmar Senha
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirme sua senha"
                    className={`pl-10 pr-10 h-12 bg-secondary/50 border-border/50 focus:border-primary/50 ${
                      errors.confirmPassword ? 'border-red-500 focus:border-red-500' : ''
                    }`}
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                    disabled={isLoading}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-transparent"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                  </Button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-xs text-red-500 flex items-center">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              {/* Checkboxes */}
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="terms"
                    checked={formData.acceptTerms}
                    onCheckedChange={(checked) => handleInputChange("acceptTerms", checked)}
                    className={errors.acceptTerms ? 'border-red-500' : ''}
                  />
                  <Label htmlFor="terms" className="text-sm text-muted-foreground leading-tight">
                    Aceito os{" "}
                    <Link href="/terms" className="text-primary hover:text-primary/80">
                      Termos de Uso
                    </Link>{" "}
                    e{" "}
                    <Link href="/privacy" className="text-primary hover:text-primary/80">
                      Política de Privacidade
                    </Link>
                  </Label>
                </div>
                {errors.acceptTerms && (
                  <p className="text-xs text-red-500 flex items-center">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    {errors.acceptTerms}
                  </p>
                )}

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="newsletter"
                    checked={formData.acceptNewsletter}
                    onCheckedChange={(checked) => handleInputChange("acceptNewsletter", checked)}
                  />
                  <Label htmlFor="newsletter" className="text-sm text-muted-foreground leading-tight">
                    Quero receber novidades e ofertas especiais por email
                  </Label>
                </div>
              </div>

              {/* Exibir erro geral */}
              {errors.general && (
                <Alert className="border-red-500/20 bg-red-500/10">
                  <AlertCircle className="h-4 w-4 text-red-500" />
                  <AlertDescription className="text-red-500">
                    {errors.general}
                  </AlertDescription>
                </Alert>
              )}

              {/* Botão de submit */}
              <Button
                type="submit"
                className="w-full h-12 btn-primary text-lg font-semibold"
                disabled={isLoading || !formData.name || !formData.email || !formData.password || !formData.confirmPassword || !formData.acceptTerms}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                    Criando conta...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-5 w-5 mr-2" />
                    Criar Conta Grátis
                  </>
                )}
              </Button>
            </form>

            {/* Link para login */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Já tem uma conta?{" "}
                <Link 
                  href="/login" 
                  className="text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  Faça login
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