import { NextRequest, NextResponse } from 'next/server'

// Simulação de banco de dados em memória para notificações
let notifications: any[] = [
  {
    id: "1",
    userId: "current_user",
    fromUser: "Ana Matos",
    fromUserId: "user_ana",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1c8?w=40&h=40&fit=crop&crop=face",
    type: "message_reaction", // message, mention, reaction, call, etc.
    action: "curtiu sua mensagem no grupo React",
    title: "Nova reação",
    message: "Ana Matos curtiu sua mensagem",
    chatId: "3",
    messageId: "123",
    timestamp: new Date("2024-01-15T14:28:00"),
    time: "2 min atrás",
    read: false,
    priority: "normal" // low, normal, high, urgent
  },
  {
    id: "2",
    userId: "current_user",
    fromUser: "João Silva",
    fromUserId: "user_joao",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    type: "mention",
    action: "te mencionou no grupo React",
    title: "Você foi mencionado",
    message: "João Silva te mencionou: @você pode revisar este código?",
    chatId: "3",
    messageId: "124",
    timestamp: new Date("2024-01-15T14:25:00"),
    time: "5 min atrás",
    read: false,
    priority: "high"
  },
  {
    id: "3",
    userId: "current_user",
    fromUser: "Maria Santos",
    fromUserId: "user_maria",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    type: "message",
    action: "enviou uma mensagem",
    title: "Nova mensagem",
    message: "Oi! Tudo bem? Preciso da sua ajuda com um projeto.",
    chatId: "6",
    messageId: "125",
    timestamp: new Date("2024-01-15T14:20:00"),
    time: "10 min atrás",
    read: true,
    priority: "normal"
  },
  {
    id: "4",
    userId: "current_user",
    fromUser: "Pedro Costa",
    fromUserId: "user_pedro",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    type: "file_share",
    action: "compartilhou um arquivo",
    title: "Arquivo compartilhado",
    message: "Pedro Costa compartilhou: projeto-final.zip",
    chatId: "1",
    messageId: "126",
    timestamp: new Date("2024-01-15T14:15:00"),
    time: "15 min atrás",
    read: true,
    priority: "normal"
  },
  {
    id: "5",
    userId: "current_user",
    fromUser: "Sistema",
    fromUserId: "system",
    avatar: "/system-avatar.png",
    type: "system",
    action: "backup concluído",
    title: "Backup automático",
    message: "Backup das suas conversas foi concluído com sucesso.",
    chatId: null,
    messageId: null,
    timestamp: new Date("2024-01-15T14:00:00"),
    time: "30 min atrás",
    read: true,
    priority: "low"
  }
]

// Função para calcular tempo relativo
function getRelativeTime(date: Date): string {
  const now = new Date()
  const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60))
  
  if (diffInMinutes < 1) return "agora"
  if (diffInMinutes < 60) return `${diffInMinutes} min atrás`
  
  const diffInHours = Math.floor(diffInMinutes / 60)
  if (diffInHours < 24) return `${diffInHours}h atrás`
  
  const diffInDays = Math.floor(diffInHours / 24)
  if (diffInDays < 7) return `${diffInDays}d atrás`
  
  return date.toLocaleDateString('pt-BR')
}

// GET - Buscar notificações do usuário
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId') || 'current_user'
    const unreadOnly = searchParams.get('unreadOnly') === 'true'
    const type = searchParams.get('type') // message, mention, reaction, call, system
    const priority = searchParams.get('priority') // low, normal, high, urgent
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '20')

    // Filtrar notificações do usuário
    let userNotifications = notifications.filter(notification => 
      notification.userId === userId
    )

    // Filtrar apenas não lidas
    if (unreadOnly) {
      userNotifications = userNotifications.filter(notification => !notification.read)
    }

    // Filtrar por tipo
    if (type) {
      userNotifications = userNotifications.filter(notification => notification.type === type)
    }

    // Filtrar por prioridade
    if (priority) {
      userNotifications = userNotifications.filter(notification => notification.priority === priority)
    }

    // Ordenar por timestamp (mais recentes primeiro)
    userNotifications.sort((a, b) => 
      new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    )

    // Paginação
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedNotifications = userNotifications.slice(startIndex, endIndex)

    // Atualizar tempo relativo
    const notificationsWithTime = paginatedNotifications.map(notification => ({
      ...notification,
      time: getRelativeTime(new Date(notification.timestamp))
    }))

    // Estatísticas
    const stats = {
      total: userNotifications.length,
      unread: userNotifications.filter(n => !n.read).length,
      byType: {
        message: userNotifications.filter(n => n.type === 'message').length,
        mention: userNotifications.filter(n => n.type === 'mention').length,
        reaction: userNotifications.filter(n => n.type === 'message_reaction').length,
        system: userNotifications.filter(n => n.type === 'system').length,
        file_share: userNotifications.filter(n => n.type === 'file_share').length
      },
      byPriority: {
        low: userNotifications.filter(n => n.priority === 'low').length,
        normal: userNotifications.filter(n => n.priority === 'normal').length,
        high: userNotifications.filter(n => n.priority === 'high').length,
        urgent: userNotifications.filter(n => n.priority === 'urgent').length
      }
    }

    return NextResponse.json({
      success: true,
      data: {
        notifications: notificationsWithTime,
        stats,
        pagination: {
          page,
          limit,
          total: userNotifications.length,
          totalPages: Math.ceil(userNotifications.length / limit),
          hasNext: endIndex < userNotifications.length,
          hasPrev: page > 1
        }
      }
    })

  } catch (error) {
    console.error('Erro ao buscar notificações:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

// POST - Criar nova notificação
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { 
      userId, 
      fromUser, 
      fromUserId, 
      type, 
      action, 
      title, 
      message, 
      chatId, 
      messageId, 
      priority = 'normal' 
    } = body

    // Validações
    if (!userId || !fromUser || !type || !action || !title || !message) {
      return NextResponse.json(
        { error: 'Campos obrigatórios: userId, fromUser, type, action, title, message' },
        { status: 400 }
      )
    }

    const validTypes = ['message', 'mention', 'message_reaction', 'call', 'file_share', 'system']
    if (!validTypes.includes(type)) {
      return NextResponse.json(
        { error: `Tipo inválido. Use: ${validTypes.join(', ')}` },
        { status: 400 }
      )
    }

    const validPriorities = ['low', 'normal', 'high', 'urgent']
    if (!validPriorities.includes(priority)) {
      return NextResponse.json(
        { error: `Prioridade inválida. Use: ${validPriorities.join(', ')}` },
        { status: 400 }
      )
    }

    // Criar nova notificação
    const newNotification = {
      id: Date.now().toString(),
      userId,
      fromUser,
      fromUserId: fromUserId || 'unknown',
      avatar: `https://images.unsplash.com/photo-1494790108755-2616b612b1c8?w=40&h=40&fit=crop&crop=face`,
      type,
      action,
      title,
      message,
      chatId: chatId || null,
      messageId: messageId || null,
      timestamp: new Date(),
      time: 'agora',
      read: false,
      priority
    }

    notifications.push(newNotification)

    return NextResponse.json({
      success: true,
      data: newNotification
    }, { status: 201 })

  } catch (error) {
    console.error('Erro ao criar notificação:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

// PUT - Marcar notificação como lida/não lida
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { notificationId, read, markAllAsRead, userId } = body

    // Marcar todas como lidas
    if (markAllAsRead && userId) {
      const userNotifications = notifications.filter(n => n.userId === userId)
      userNotifications.forEach(notification => {
        notification.read = true
      })

      return NextResponse.json({
        success: true,
        message: `${userNotifications.length} notificações marcadas como lidas`,
        data: { updated: userNotifications.length }
      })
    }

    // Marcar notificação específica
    if (!notificationId) {
      return NextResponse.json(
        { error: 'notificationId é obrigatório' },
        { status: 400 }
      )
    }

    const notificationIndex = notifications.findIndex(n => n.id === notificationId)
    if (notificationIndex === -1) {
      return NextResponse.json(
        { error: 'Notificação não encontrada' },
        { status: 404 }
      )
    }

    notifications[notificationIndex].read = read !== undefined ? read : true

    return NextResponse.json({
      success: true,
      data: notifications[notificationIndex]
    })

  } catch (error) {
    console.error('Erro ao atualizar notificação:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

// DELETE - Deletar notificação
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const notificationId = searchParams.get('notificationId')
    const deleteAll = searchParams.get('deleteAll') === 'true'
    const userId = searchParams.get('userId')

    // Deletar todas as notificações do usuário
    if (deleteAll && userId) {
      const initialLength = notifications.length
      notifications = notifications.filter(n => n.userId !== userId)
      const deletedCount = initialLength - notifications.length

      return NextResponse.json({
        success: true,
        message: `${deletedCount} notificações deletadas`,
        data: { deleted: deletedCount }
      })
    }

    // Deletar notificação específica
    if (!notificationId) {
      return NextResponse.json(
        { error: 'notificationId é obrigatório' },
        { status: 400 }
      )
    }

    const notificationIndex = notifications.findIndex(n => n.id === notificationId)
    if (notificationIndex === -1) {
      return NextResponse.json(
        { error: 'Notificação não encontrada' },
        { status: 404 }
      )
    }

    const deletedNotification = notifications.splice(notificationIndex, 1)[0]

    return NextResponse.json({
      success: true,
      data: deletedNotification,
      message: 'Notificação deletada com sucesso'
    })

  } catch (error) {
    console.error('Erro ao deletar notificação:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
} 