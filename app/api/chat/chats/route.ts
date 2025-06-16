import { NextRequest, NextResponse } from 'next/server'

// Simulação de banco de dados em memória para chats
let chats: any[] = [
  {
    id: "1",
    name: "Ana Matos",
    type: "direct",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1c8?w=50&h=50&fit=crop&crop=face",
    lastMessage: "Oi! Como você está?",
    lastMessageTime: new Date("2024-01-15T14:30:00"),
    time: "2 min",
    unread: 2,
    online: true,
    members: [],
    category: null,
    role: "Designer",
    level: "Pro",
    participants: ["current_user", "user_ana"]
  },
  {
    id: "2",
    name: "Anastasia Steele",
    type: "direct",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
    lastMessage: "Obrigada pela ajuda!",
    lastMessageTime: new Date("2024-01-15T14:25:00"),
    time: "5 min",
    unread: 0,
    online: true,
    members: [],
    category: null,
    role: "Desenvolvedora",
    level: "Expert",
    participants: ["current_user", "user_anastasia"]
  },
  {
    id: "3",
    name: "Grupo React",
    type: "group",
    avatar: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=50&h=50&fit=crop",
    lastMessage: "João: Nova versão disponível",
    lastMessageTime: new Date("2024-01-15T14:15:00"),
    time: "15 min",
    unread: 5,
    online: true,
    members: 24,
    category: "Frontend",
    role: null,
    level: null,
    participants: ["current_user", "user_joao", "user_maria", "user_pedro"]
  },
  {
    id: "4",
    name: "Vinicius Raj",
    type: "direct",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
    lastMessage: "Vamos fazer pair programming?",
    lastMessageTime: new Date("2024-01-15T13:30:00"),
    time: "1h",
    unread: 0,
    online: false,
    members: [],
    category: null,
    role: "Desenvolvedor",
    level: "Pro",
    participants: ["current_user", "user_vinicius"]
  },
  {
    id: "5",
    name: "Ashish Singh",
    type: "direct",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
    lastMessage: "Projeto finalizado!",
    lastMessageTime: new Date("2024-01-15T12:30:00"),
    time: "2h",
    unread: 0,
    online: false,
    members: [],
    category: null,
    role: "Backend Dev",
    level: "Senior",
    participants: ["current_user", "user_ashish"]
  }
]

// Função para calcular tempo relativo
function getRelativeTime(date: Date): string {
  const now = new Date()
  const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60))
  
  if (diffInMinutes < 1) return "agora"
  if (diffInMinutes < 60) return `${diffInMinutes} min`
  
  const diffInHours = Math.floor(diffInMinutes / 60)
  if (diffInHours < 24) return `${diffInHours}h`
  
  const diffInDays = Math.floor(diffInHours / 24)
  if (diffInDays < 7) return `${diffInDays}d`
  
  return date.toLocaleDateString('pt-BR')
}

// GET - Buscar todos os chats do usuário
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId') || 'current_user'
    const search = searchParams.get('search') || ''
    const type = searchParams.get('type') // 'direct' ou 'group'

    // Filtrar chats do usuário
    let userChats = chats.filter(chat => 
      chat.participants.includes(userId)
    )

    // Filtrar por busca
    if (search) {
      userChats = userChats.filter(chat =>
        chat.name.toLowerCase().includes(search.toLowerCase()) ||
        chat.lastMessage.toLowerCase().includes(search.toLowerCase())
      )
    }

    // Filtrar por tipo
    if (type) {
      userChats = userChats.filter(chat => chat.type === type)
    }

    // Ordenar por última mensagem
    userChats.sort((a, b) => 
      new Date(b.lastMessageTime).getTime() - new Date(a.lastMessageTime).getTime()
    )

    // Atualizar tempo relativo
    userChats = userChats.map(chat => ({
      ...chat,
      time: getRelativeTime(new Date(chat.lastMessageTime))
    }))

    return NextResponse.json({
      success: true,
      data: userChats
    })

  } catch (error) {
    console.error('Erro ao buscar chats:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

// POST - Criar novo chat
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, type, participants, avatar, category } = body

    // Validações
    if (!name || !type || !participants || !Array.isArray(participants)) {
      return NextResponse.json(
        { error: 'Campos obrigatórios: name, type, participants (array)' },
        { status: 400 }
      )
    }

    if (!['direct', 'group'].includes(type)) {
      return NextResponse.json(
        { error: 'Tipo deve ser "direct" ou "group"' },
        { status: 400 }
      )
    }

    if (type === 'direct' && participants.length !== 2) {
      return NextResponse.json(
        { error: 'Chat direto deve ter exatamente 2 participantes' },
        { status: 400 }
      )
    }

    if (type === 'group' && participants.length < 3) {
      return NextResponse.json(
        { error: 'Grupo deve ter pelo menos 3 participantes' },
        { status: 400 }
      )
    }

    // Verificar se chat direto já existe
    if (type === 'direct') {
      const existingChat = chats.find(chat => 
        chat.type === 'direct' && 
        chat.participants.length === 2 &&
        chat.participants.every((p: string) => participants.includes(p))
      )

      if (existingChat) {
        return NextResponse.json(
          { error: 'Chat direto já existe entre estes usuários' },
          { status: 409 }
        )
      }
    }

    // Criar novo chat
    const newChat = {
      id: Date.now().toString(),
      name,
      type,
      avatar: avatar || `https://images.unsplash.com/photo-1494790108755-2616b612b1c8?w=50&h=50&fit=crop&crop=face`,
      lastMessage: type === 'group' ? 'Grupo criado' : 'Chat iniciado',
      lastMessageTime: new Date(),
      time: 'agora',
      unread: 0,
      online: true,
      members: type === 'group' ? participants.length : [],
      category: category || null,
      role: null,
      level: null,
      participants
    }

    chats.push(newChat)

    return NextResponse.json({
      success: true,
      data: newChat
    }, { status: 201 })

  } catch (error) {
    console.error('Erro ao criar chat:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

// PUT - Atualizar chat
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { chatId, name, avatar, category, lastMessage } = body

    if (!chatId) {
      return NextResponse.json(
        { error: 'Chat ID é obrigatório' },
        { status: 400 }
      )
    }

    const chatIndex = chats.findIndex(chat => chat.id === chatId)
    if (chatIndex === -1) {
      return NextResponse.json(
        { error: 'Chat não encontrado' },
        { status: 404 }
      )
    }

    // Atualizar campos fornecidos
    if (name) chats[chatIndex].name = name
    if (avatar) chats[chatIndex].avatar = avatar
    if (category) chats[chatIndex].category = category
    if (lastMessage) {
      chats[chatIndex].lastMessage = lastMessage
      chats[chatIndex].lastMessageTime = new Date()
      chats[chatIndex].time = 'agora'
    }

    return NextResponse.json({
      success: true,
      data: chats[chatIndex]
    })

  } catch (error) {
    console.error('Erro ao atualizar chat:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

// DELETE - Deletar chat
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const chatId = searchParams.get('chatId')

    if (!chatId) {
      return NextResponse.json(
        { error: 'Chat ID é obrigatório' },
        { status: 400 }
      )
    }

    const chatIndex = chats.findIndex(chat => chat.id === chatId)
    if (chatIndex === -1) {
      return NextResponse.json(
        { error: 'Chat não encontrado' },
        { status: 404 }
      )
    }

    const deletedChat = chats.splice(chatIndex, 1)[0]

    return NextResponse.json({
      success: true,
      data: deletedChat,
      message: 'Chat deletado com sucesso'
    })

  } catch (error) {
    console.error('Erro ao deletar chat:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
} 