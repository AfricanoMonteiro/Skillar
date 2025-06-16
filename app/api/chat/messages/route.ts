import { NextRequest, NextResponse } from 'next/server'

// Simulação de banco de dados em memória
let messages: any[] = [
  {
    id: 1,
    chatId: "1",
    sender: "Ana Matos",
    senderId: "user_ana",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1c8?w=40&h=40&fit=crop&crop=face",
    message: "Oi! Como você está?",
    time: "14:30",
    timestamp: new Date("2024-01-15T14:30:00"),
    isOwn: false,
    reactions: [],
    type: "text",
    status: "read"
  },
  {
    id: 2,
    chatId: "1",
    sender: "Ana Matos",
    senderId: "user_ana",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1c8?w=40&h=40&fit=crop&crop=face",
    message: "Estava pensando em nosso projeto...",
    time: "14:31",
    timestamp: new Date("2024-01-15T14:31:00"),
    isOwn: false,
    reactions: [],
    type: "text",
    status: "read"
  },
  {
    id: 3,
    chatId: "1",
    sender: "Você",
    senderId: "current_user",
    avatar: "/placeholder-user.jpg",
    message: "Oi Ana! Estou bem, obrigado. E você?",
    time: "14:32",
    timestamp: new Date("2024-01-15T14:32:00"),
    isOwn: true,
    reactions: [],
    type: "text",
    status: "read"
  },
  {
    id: 4,
    chatId: "1",
    sender: "Você",
    senderId: "current_user",
    avatar: "/placeholder-user.jpg",
    message: "Sobre o projeto, tive algumas ideias interessantes!",
    time: "14:32",
    timestamp: new Date("2024-01-15T14:32:00"),
    isOwn: true,
    reactions: [],
    type: "text",
    status: "delivered"
  }
]

// GET - Buscar mensagens de um chat
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const chatId = searchParams.get('chatId')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '50')

    if (!chatId) {
      return NextResponse.json(
        { error: 'Chat ID é obrigatório' },
        { status: 400 }
      )
    }

    // Filtrar mensagens por chat
    const chatMessages = messages
      .filter(msg => msg.chatId === chatId)
      .sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime())

    // Paginação
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedMessages = chatMessages.slice(startIndex, endIndex)

    return NextResponse.json({
      success: true,
      data: {
        messages: paginatedMessages,
        pagination: {
          page,
          limit,
          total: chatMessages.length,
          totalPages: Math.ceil(chatMessages.length / limit),
          hasNext: endIndex < chatMessages.length,
          hasPrev: page > 1
        }
      }
    })
  } catch (error) {
    console.error('Erro ao buscar mensagens:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

// POST - Enviar nova mensagem
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { chatId, message, senderId, sender, type = 'text' } = body

    // Validações
    if (!chatId || !message || !senderId || !sender) {
      return NextResponse.json(
        { error: 'Campos obrigatórios: chatId, message, senderId, sender' },
        { status: 400 }
      )
    }

    if (message.trim().length === 0) {
      return NextResponse.json(
        { error: 'Mensagem não pode estar vazia' },
        { status: 400 }
      )
    }

    if (message.length > 1000) {
      return NextResponse.json(
        { error: 'Mensagem muito longa (máximo 1000 caracteres)' },
        { status: 400 }
      )
    }

    // Criar nova mensagem
    const newMessage = {
      id: Date.now(),
      chatId,
      sender,
      senderId,
      avatar: senderId === 'current_user' ? '/placeholder-user.jpg' : `https://images.unsplash.com/photo-1494790108755-2616b612b1c8?w=40&h=40&fit=crop&crop=face`,
      message: message.trim(),
      time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      timestamp: new Date(),
      isOwn: senderId === 'current_user',
      reactions: [],
      type,
      status: 'sent'
    }

    // Adicionar à lista de mensagens
    messages.push(newMessage)

    // Simular entrega da mensagem após 1 segundo
    setTimeout(() => {
      const messageIndex = messages.findIndex(msg => msg.id === newMessage.id)
      if (messageIndex !== -1) {
        messages[messageIndex].status = 'delivered'
      }
    }, 1000)

    // Simular leitura da mensagem após 3 segundos (se não for própria)
    if (!newMessage.isOwn) {
      setTimeout(() => {
        const messageIndex = messages.findIndex(msg => msg.id === newMessage.id)
        if (messageIndex !== -1) {
          messages[messageIndex].status = 'read'
        }
      }, 3000)
    }

    return NextResponse.json({
      success: true,
      data: newMessage
    }, { status: 201 })

  } catch (error) {
    console.error('Erro ao enviar mensagem:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

// PUT - Atualizar status da mensagem
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { messageId, status } = body

    if (!messageId || !status) {
      return NextResponse.json(
        { error: 'Campos obrigatórios: messageId, status' },
        { status: 400 }
      )
    }

    const validStatuses = ['sent', 'delivered', 'read']
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { error: 'Status inválido. Use: sent, delivered, read' },
        { status: 400 }
      )
    }

    const messageIndex = messages.findIndex(msg => msg.id === messageId)
    if (messageIndex === -1) {
      return NextResponse.json(
        { error: 'Mensagem não encontrada' },
        { status: 404 }
      )
    }

    messages[messageIndex].status = status

    return NextResponse.json({
      success: true,
      data: messages[messageIndex]
    })

  } catch (error) {
    console.error('Erro ao atualizar status da mensagem:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
} 