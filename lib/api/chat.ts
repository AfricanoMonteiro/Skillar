// Utilitários para API do Chat

export interface ChatMessage {
  id: number
  chatId: string
  sender: string
  senderId: string
  avatar: string
  message: string
  time: string
  timestamp: Date
  isOwn: boolean
  reactions: string[]
  type: "text" | "code" | "image" | "file"
  status: "sent" | "delivered" | "read"
  replyTo?: number
}

export interface ChatUser {
  id: string
  name: string
  type: "direct" | "group"
  avatar: string
  lastMessage: string
  lastMessageTime: Date
  time: string
  unread: number
  online: boolean
  members?: number
  category?: string
  role?: string
  level?: string
  participants: string[]
}

export interface ChatNotification {
  id: string
  userId: string
  fromUser: string
  fromUserId: string
  avatar: string
  type: string
  action: string
  title: string
  message: string
  chatId?: string
  messageId?: string
  timestamp: Date
  time: string
  read: boolean
  priority: string
}

// API para mensagens
export const messagesAPI = {
  // Buscar mensagens de um chat
  async getMessages(chatId: string, page = 1, limit = 50): Promise<{ messages: ChatMessage[], pagination: any }> {
    const response = await fetch(`/api/chat/messages?chatId=${chatId}&page=${page}&limit=${limit}`)
    const data = await response.json()
    
    if (!data.success) {
      throw new Error(data.error || 'Erro ao buscar mensagens')
    }
    
    return data.data
  },

  // Enviar nova mensagem
  async sendMessage(chatId: string, message: string, senderId: string, sender: string, type = 'text'): Promise<ChatMessage> {
    const response = await fetch('/api/chat/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chatId,
        message,
        senderId,
        sender,
        type
      })
    })
    
    const data = await response.json()
    
    if (!data.success) {
      throw new Error(data.error || 'Erro ao enviar mensagem')
    }
    
    return data.data
  },

  // Atualizar status da mensagem
  async updateMessageStatus(messageId: number, status: 'sent' | 'delivered' | 'read'): Promise<ChatMessage> {
    const response = await fetch('/api/chat/messages', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messageId,
        status
      })
    })
    
    const data = await response.json()
    
    if (!data.success) {
      throw new Error(data.error || 'Erro ao atualizar status da mensagem')
    }
    
    return data.data
  }
}

// API para chats
export const chatsAPI = {
  // Buscar chats do usuário
  async getChats(userId = 'current_user', search = '', type?: 'direct' | 'group'): Promise<ChatUser[]> {
    const params = new URLSearchParams({ userId, search })
    if (type) params.append('type', type)
    
    const response = await fetch(`/api/chat/chats?${params}`)
    const data = await response.json()
    
    if (!data.success) {
      throw new Error(data.error || 'Erro ao buscar chats')
    }
    
    return data.data
  },

  // Criar novo chat
  async createChat(name: string, type: 'direct' | 'group', participants: string[], avatar?: string, category?: string): Promise<ChatUser> {
    const response = await fetch('/api/chat/chats', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        type,
        participants,
        avatar,
        category
      })
    })
    
    const data = await response.json()
    
    if (!data.success) {
      throw new Error(data.error || 'Erro ao criar chat')
    }
    
    return data.data
  },

  // Atualizar chat
  async updateChat(chatId: string, updates: Partial<ChatUser>): Promise<ChatUser> {
    const response = await fetch('/api/chat/chats', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chatId,
        ...updates
      })
    })
    
    const data = await response.json()
    
    if (!data.success) {
      throw new Error(data.error || 'Erro ao atualizar chat')
    }
    
    return data.data
  },

  // Deletar chat
  async deleteChat(chatId: string): Promise<ChatUser> {
    const response = await fetch(`/api/chat/chats?chatId=${chatId}`, {
      method: 'DELETE'
    })
    
    const data = await response.json()
    
    if (!data.success) {
      throw new Error(data.error || 'Erro ao deletar chat')
    }
    
    return data.data
  }
}

// API para notificações
export const notificationsAPI = {
  // Buscar notificações do usuário
  async getNotifications(
    userId = 'current_user', 
    options: {
      unreadOnly?: boolean
      type?: string
      priority?: string
      page?: number
      limit?: number
    } = {}
  ): Promise<{ notifications: ChatNotification[], stats: any, pagination: any }> {
    const params = new URLSearchParams({ userId })
    
    if (options.unreadOnly) params.append('unreadOnly', 'true')
    if (options.type) params.append('type', options.type)
    if (options.priority) params.append('priority', options.priority)
    if (options.page) params.append('page', options.page.toString())
    if (options.limit) params.append('limit', options.limit.toString())
    
    const response = await fetch(`/api/chat/notifications?${params}`)
    const data = await response.json()
    
    if (!data.success) {
      throw new Error(data.error || 'Erro ao buscar notificações')
    }
    
    return data.data
  },

  // Criar nova notificação
  async createNotification(notification: {
    userId: string
    fromUser: string
    fromUserId?: string
    type: string
    action: string
    title: string
    message: string
    chatId?: string
    messageId?: string
    priority?: string
  }): Promise<ChatNotification> {
    const response = await fetch('/api/chat/notifications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(notification)
    })
    
    const data = await response.json()
    
    if (!data.success) {
      throw new Error(data.error || 'Erro ao criar notificação')
    }
    
    return data.data
  },

  // Marcar notificação como lida
  async markAsRead(notificationId: string): Promise<ChatNotification> {
    const response = await fetch('/api/chat/notifications', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        notificationId,
        read: true
      })
    })
    
    const data = await response.json()
    
    if (!data.success) {
      throw new Error(data.error || 'Erro ao marcar notificação como lida')
    }
    
    return data.data
  },

  // Marcar todas as notificações como lidas
  async markAllAsRead(userId = 'current_user'): Promise<{ updated: number }> {
    const response = await fetch('/api/chat/notifications', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        markAllAsRead: true,
        userId
      })
    })
    
    const data = await response.json()
    
    if (!data.success) {
      throw new Error(data.error || 'Erro ao marcar todas as notificações como lidas')
    }
    
    return data.data
  },

  // Deletar notificação
  async deleteNotification(notificationId: string): Promise<ChatNotification> {
    const response = await fetch(`/api/chat/notifications?notificationId=${notificationId}`, {
      method: 'DELETE'
    })
    
    const data = await response.json()
    
    if (!data.success) {
      throw new Error(data.error || 'Erro ao deletar notificação')
    }
    
    return data.data
  },

  // Deletar todas as notificações
  async deleteAllNotifications(userId = 'current_user'): Promise<{ deleted: number }> {
    const response = await fetch(`/api/chat/notifications?deleteAll=true&userId=${userId}`, {
      method: 'DELETE'
    })
    
    const data = await response.json()
    
    if (!data.success) {
      throw new Error(data.error || 'Erro ao deletar todas as notificações')
    }
    
    return data.data
  }
}

// Utilitários gerais
export const chatUtils = {
  // Formatar tempo relativo
  formatRelativeTime(date: Date): string {
    const now = new Date()
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60))
    
    if (diffInMinutes < 1) return "agora"
    if (diffInMinutes < 60) return `${diffInMinutes} min`
    
    const diffInHours = Math.floor(diffInMinutes / 60)
    if (diffInHours < 24) return `${diffInHours}h`
    
    const diffInDays = Math.floor(diffInHours / 24)
    if (diffInDays < 7) return `${diffInDays}d`
    
    return date.toLocaleDateString('pt-BR')
  },

  // Validar mensagem
  validateMessage(message: string): { valid: boolean, error?: string } {
    if (!message.trim()) {
      return { valid: false, error: 'Mensagem não pode estar vazia' }
    }
    
    if (message.length > 1000) {
      return { valid: false, error: 'Mensagem muito longa (máximo 1000 caracteres)' }
    }
    
    return { valid: true }
  },

  // Gerar avatar padrão
  generateDefaultAvatar(name: string): string {
    const colors = [
      'from-blue-500 to-cyan-500',
      'from-green-500 to-emerald-500',
      'from-purple-500 to-violet-500',
      'from-orange-500 to-red-500',
      'from-pink-500 to-rose-500',
      'from-indigo-500 to-blue-500'
    ]
    
    const colorIndex = name.length % colors.length
    return colors[colorIndex]
  },

  // Detectar menções em mensagem
  detectMentions(message: string): string[] {
    const mentionRegex = /@(\w+)/g
    const mentions = []
    let match
    
    while ((match = mentionRegex.exec(message)) !== null) {
      mentions.push(match[1])
    }
    
    return mentions
  },

  // Detectar links em mensagem
  detectLinks(message: string): string[] {
    const linkRegex = /(https?:\/\/[^\s]+)/g
    return message.match(linkRegex) || []
  }
} 