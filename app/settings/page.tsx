"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Navigation } from "@/components/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { User, Shield, Palette, CreditCard, Key, Upload, Save, Eye, EyeOff, Smartphone, Mail } from "lucide-react"

export default function Settings() {
  const [activeTab, setActiveTab] = useState("profile")
  const [showPassword, setShowPassword] = useState(false)
  const [notifications, setNotifications] = useState({
    email: {
      courses: true,
      forum: true,
      mentorship: true,
      projects: false,
      marketing: false,
    },
    push: {
      messages: true,
      mentions: true,
      reminders: true,
      updates: false,
    },
    sms: {
      security: true,
      reminders: false,
    },
  })

  const [privacy, setPrivacy] = useState({
    profileVisibility: "public",
    showEmail: false,
    showPhone: false,
    allowMessages: true,
    showActivity: true,
    showProjects: true,
  })

  const [theme, setTheme] = useState({
    mode: "system",
    accentColor: "blue",
    fontSize: "medium",
    compactMode: false,
  })

  const connectedAccounts = [
    {
      name: "GitHub",
      icon: "🐙",
      connected: true,
      username: "joaosilva",
      lastSync: "2 horas atrás",
    },
    {
      name: "LinkedIn",
      icon: "💼",
      connected: true,
      username: "joao-silva-dev",
      lastSync: "1 dia atrás",
    },
    {
      name: "Google",
      icon: "🔍",
      connected: false,
      username: null,
      lastSync: null,
    },
    {
      name: "Discord",
      icon: "🎮",
      connected: false,
      username: null,
      lastSync: null,
    },
  ]

  const sessions = [
    {
      id: "1",
      device: "Chrome no Windows",
      location: "São Paulo, SP",
      lastActive: "Agora",
      current: true,
    },
    {
      id: "2",
      device: "Safari no iPhone",
      location: "São Paulo, SP",
      lastActive: "2 horas atrás",
      current: false,
    },
    {
      id: "3",
      device: "Firefox no Ubuntu",
      location: "São Paulo, SP",
      lastActive: "3 dias atrás",
      current: false,
    },
  ]

  const handleNotificationChange = (category: string, setting: string, value: boolean) => {
    setNotifications((prev) => ({
      ...prev,
      [category]: {
        ...prev[category as keyof typeof prev],
        [setting]: value,
      },
    }))
  }

  const handlePrivacyChange = (setting: string, value: any) => {
    setPrivacy((prev) => ({
      ...prev,
      [setting]: value,
    }))
  }

  const handleThemeChange = (setting: string, value: any) => {
    setTheme((prev) => ({
      ...prev,
      [setting]: value,
    }))
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Configurações</h1>
          <p className="text-muted-foreground">Gerencie suas preferências e configurações da conta</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="profile">Perfil</TabsTrigger>
            <TabsTrigger value="notifications">Notificações</TabsTrigger>
            <TabsTrigger value="privacy">Privacidade</TabsTrigger>
            <TabsTrigger value="appearance">Aparência</TabsTrigger>
            <TabsTrigger value="security">Segurança</TabsTrigger>
            <TabsTrigger value="billing">Cobrança</TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="mt-6">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="h-5 w-5 mr-2" />
                    Informações Pessoais
                  </CardTitle>
                  <CardDescription>Atualize suas informações básicas de perfil</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Avatar */}
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src="/placeholder.svg?height=80&width=80" />
                      <AvatarFallback className="text-lg">JS</AvatarFallback>
                    </Avatar>
                    <div>
                      <Button variant="outline" className="mb-2">
                        <Upload className="h-4 w-4 mr-2" />
                        Alterar Foto
                      </Button>
                      <p className="text-sm text-muted-foreground">JPG, PNG ou GIF. Máximo 2MB.</p>
                    </div>
                  </div>

                  {/* Basic Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Nome</Label>
                      <Input id="firstName" defaultValue="João" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Sobrenome</Label>
                      <Input id="lastName" defaultValue="Silva" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="joao.silva@email.com" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefone</Label>
                      <Input id="phone" defaultValue="+55 11 99999-9999" />
                    </div>
                  </div>

                  {/* Professional Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="title">Cargo</Label>
                      <Input id="title" defaultValue="Full Stack Developer" />
                    </div>
                    <div>
                      <Label htmlFor="company">Empresa</Label>
                      <Input id="company" defaultValue="TechCorp" />
                    </div>
                    <div>
                      <Label htmlFor="location">Localização</Label>
                      <Input id="location" defaultValue="São Paulo, SP" />
                    </div>
                    <div>
                      <Label htmlFor="website">Website</Label>
                      <Input id="website" defaultValue="https://joaosilva.dev" />
                    </div>
                  </div>

                  {/* Bio */}
                  <div>
                    <Label htmlFor="bio">Biografia</Label>
                    <Textarea
                      id="bio"
                      rows={4}
                      defaultValue="Desenvolvedor apaixonado por tecnologia com 5+ anos de experiência em React, Node.js e Python."
                    />
                  </div>

                  <Button>
                    <Save className="h-4 w-4 mr-2" />
                    Salvar Alterações
                  </Button>
                </CardContent>
              </Card>

              {/* Connected Accounts */}
              <Card>
                <CardHeader>
                  <CardTitle>Contas Conectadas</CardTitle>
                  <CardDescription>Gerencie suas integrações com outras plataformas</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {connectedAccounts.map((account) => (
                      <div key={account.name} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{account.icon}</span>
                          <div>
                            <h4 className="font-medium">{account.name}</h4>
                            {account.connected ? (
                              <div>
                                <p className="text-sm text-muted-foreground">@{account.username}</p>
                                <p className="text-xs text-muted-foreground">
                                  Última sincronização: {account.lastSync}
                                </p>
                              </div>
                            ) : (
                              <p className="text-sm text-muted-foreground">Não conectado</p>
                            )}
                          </div>
                        </div>
                        <Button variant={account.connected ? "outline" : "default"}>
                          {account.connected ? "Desconectar" : "Conectar"}
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications" className="mt-6">
            <div className="space-y-6">
              {/* Email Notifications */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="h-5 w-5 mr-2" />
                    Notificações por Email
                  </CardTitle>
                  <CardDescription>Configure quando você deseja receber emails</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Cursos</h4>
                      <p className="text-sm text-muted-foreground">Novos cursos, atualizações e conclusões</p>
                    </div>
                    <Switch
                      checked={notifications.email.courses}
                      onCheckedChange={(value) => handleNotificationChange("email", "courses", value)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Fórum</h4>
                      <p className="text-sm text-muted-foreground">Respostas aos seus posts e menções</p>
                    </div>
                    <Switch
                      checked={notifications.email.forum}
                      onCheckedChange={(value) => handleNotificationChange("email", "forum", value)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Mentoria</h4>
                      <p className="text-sm text-muted-foreground">Sessões agendadas e lembretes</p>
                    </div>
                    <Switch
                      checked={notifications.email.mentorship}
                      onCheckedChange={(value) => handleNotificationChange("email", "mentorship", value)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Projetos</h4>
                      <p className="text-sm text-muted-foreground">Convites e atualizações de projetos</p>
                    </div>
                    <Switch
                      checked={notifications.email.projects}
                      onCheckedChange={(value) => handleNotificationChange("email", "projects", value)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Marketing</h4>
                      <p className="text-sm text-muted-foreground">Novidades e promoções da plataforma</p>
                    </div>
                    <Switch
                      checked={notifications.email.marketing}
                      onCheckedChange={(value) => handleNotificationChange("email", "marketing", value)}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Push Notifications */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Smartphone className="h-5 w-5 mr-2" />
                    Notificações Push
                  </CardTitle>
                  <CardDescription>Configure notificações em tempo real no navegador</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Mensagens</h4>
                      <p className="text-sm text-muted-foreground">Novas mensagens no chat</p>
                    </div>
                    <Switch
                      checked={notifications.push.messages}
                      onCheckedChange={(value) => handleNotificationChange("push", "messages", value)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Menções</h4>
                      <p className="text-sm text-muted-foreground">Quando alguém te menciona</p>
                    </div>
                    <Switch
                      checked={notifications.push.mentions}
                      onCheckedChange={(value) => handleNotificationChange("push", "mentions", value)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Lembretes</h4>
                      <p className="text-sm text-muted-foreground">Sessões de mentoria e eventos</p>
                    </div>
                    <Switch
                      checked={notifications.push.reminders}
                      onCheckedChange={(value) => handleNotificationChange("push", "reminders", value)}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Privacy Tab */}
          <TabsContent value="privacy" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Configurações de Privacidade
                </CardTitle>
                <CardDescription>Controle quem pode ver suas informações e atividades</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="profileVisibility">Visibilidade do Perfil</Label>
                  <Select
                    value={privacy.profileVisibility}
                    onValueChange={(value) => handlePrivacyChange("profileVisibility", value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="public">Público</SelectItem>
                      <SelectItem value="connections">Apenas Conexões</SelectItem>
                      <SelectItem value="private">Privado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Mostrar Email</h4>
                      <p className="text-sm text-muted-foreground">Permitir que outros vejam seu email</p>
                    </div>
                    <Switch
                      checked={privacy.showEmail}
                      onCheckedChange={(value) => handlePrivacyChange("showEmail", value)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Mostrar Telefone</h4>
                      <p className="text-sm text-muted-foreground">Permitir que outros vejam seu telefone</p>
                    </div>
                    <Switch
                      checked={privacy.showPhone}
                      onCheckedChange={(value) => handlePrivacyChange("showPhone", value)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Permitir Mensagens</h4>
                      <p className="text-sm text-muted-foreground">Receber mensagens de outros usuários</p>
                    </div>
                    <Switch
                      checked={privacy.allowMessages}
                      onCheckedChange={(value) => handlePrivacyChange("allowMessages", value)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Mostrar Atividade</h4>
                      <p className="text-sm text-muted-foreground">Exibir sua atividade recente no perfil</p>
                    </div>
                    <Switch
                      checked={privacy.showActivity}
                      onCheckedChange={(value) => handlePrivacyChange("showActivity", value)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Mostrar Projetos</h4>
                      <p className="text-sm text-muted-foreground">Exibir seus projetos no perfil</p>
                    </div>
                    <Switch
                      checked={privacy.showProjects}
                      onCheckedChange={(value) => handlePrivacyChange("showProjects", value)}
                    />
                  </div>
                </div>

                <Button>
                  <Save className="h-4 w-4 mr-2" />
                  Salvar Configurações
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Appearance Tab */}
          <TabsContent value="appearance" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Palette className="h-5 w-5 mr-2" />
                  Aparência
                </CardTitle>
                <CardDescription>Personalize a aparência da plataforma</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="themeMode">Tema</Label>
                  <Select value={theme.mode} onValueChange={(value) => handleThemeChange("mode", value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Claro</SelectItem>
                      <SelectItem value="dark">Escuro</SelectItem>
                      <SelectItem value="system">Sistema</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="accentColor">Cor de Destaque</Label>
                  <Select value={theme.accentColor} onValueChange={(value) => handleThemeChange("accentColor", value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="blue">Azul</SelectItem>
                      <SelectItem value="green">Verde</SelectItem>
                      <SelectItem value="purple">Roxo</SelectItem>
                      <SelectItem value="orange">Laranja</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="fontSize">Tamanho da Fonte</Label>
                  <Select value={theme.fontSize} onValueChange={(value) => handleThemeChange("fontSize", value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Pequena</SelectItem>
                      <SelectItem value="medium">Média</SelectItem>
                      <SelectItem value="large">Grande</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Modo Compacto</h4>
                    <p className="text-sm text-muted-foreground">Interface mais densa com menos espaçamento</p>
                  </div>
                  <Switch
                    checked={theme.compactMode}
                    onCheckedChange={(value) => handleThemeChange("compactMode", value)}
                  />
                </div>

                <Button>
                  <Save className="h-4 w-4 mr-2" />
                  Salvar Preferências
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security" className="mt-6">
            <div className="space-y-6">
              {/* Password */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Key className="h-5 w-5 mr-2" />
                    Senha
                  </CardTitle>
                  <CardDescription>Altere sua senha para manter sua conta segura</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="currentPassword">Senha Atual</Label>
                    <div className="relative">
                      <Input id="currentPassword" type={showPassword ? "text" : "password"} className="pr-10" />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="newPassword">Nova Senha</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  <div>
                    <Label htmlFor="confirmPassword">Confirmar Nova Senha</Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                  <Button>Alterar Senha</Button>
                </CardContent>
              </Card>

              {/* Active Sessions */}
              <Card>
                <CardHeader>
                  <CardTitle>Sessões Ativas</CardTitle>
                  <CardDescription>Gerencie onde você está logado</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {sessions.map((session) => (
                      <div key={session.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <div className="flex items-center space-x-2">
                            <h4 className="font-medium">{session.device}</h4>
                            {session.current && <Badge variant="secondary">Atual</Badge>}
                          </div>
                          <p className="text-sm text-muted-foreground">{session.location}</p>
                          <p className="text-xs text-muted-foreground">Última atividade: {session.lastActive}</p>
                        </div>
                        {!session.current && (
                          <Button variant="outline" size="sm">
                            Encerrar Sessão
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Two-Factor Authentication */}
              <Card>
                <CardHeader>
                  <CardTitle>Autenticação de Dois Fatores</CardTitle>
                  <CardDescription>Adicione uma camada extra de segurança à sua conta</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">2FA não configurado</h4>
                      <p className="text-sm text-muted-foreground">
                        Configure a autenticação de dois fatores para maior segurança
                      </p>
                    </div>
                    <Button>Configurar 2FA</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Billing Tab */}
          <TabsContent value="billing" className="mt-6">
            <div className="space-y-6">
              {/* Current Plan */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="h-5 w-5 mr-2" />
                    Plano Atual
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">Plano Gratuito</h3>
                      <p className="text-sm text-muted-foreground">Acesso básico à plataforma com limitações</p>
                    </div>
                    <Button>Fazer Upgrade</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Usage */}
              <Card>
                <CardHeader>
                  <CardTitle>Uso do Plano</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Cursos Acessados</span>
                      <span>3/5</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "60%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Sessões de Mentoria</span>
                      <span>2/3</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "67%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Projetos Ativos</span>
                      <span>2/2</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "100%" }} />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Billing History */}
              <Card>
                <CardHeader>
                  <CardTitle>Histórico de Cobrança</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">Nenhuma cobrança encontrada</p>
                    <p className="text-sm text-muted-foreground">Você está no plano gratuito</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
