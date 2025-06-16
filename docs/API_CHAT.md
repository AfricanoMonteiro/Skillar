# API do Sistema de Chat

Este documento descreve as APIs REST criadas para o sistema de chat da plataforma de aprendizado.

## Visão Geral

O sistema de chat possui três principais endpoints:
- `/api/chat/messages` - Gerenciamento de mensagens
- `/api/chat/chats` - Gerenciamento de conversas
- `/api/chat/notifications` - Gerenciamento de notificações

## Autenticação

Por enquanto, o sistema usa um `userId` simples para identificar usuários. Em produção, isso deve ser substituído por autenticação JWT ou similar.

## Endpoints

### 1. Mensagens (`/api/chat/messages`)

#### GET - Buscar mensagens de um chat
```
GET /api/chat/messages?chatId={chatId}&page={page}&limit={limit}
```

**Parâmetros:**
- `chatId` (obrigatório): ID do chat
- `page` (opcional): Página para paginação (padrão: 1)
- `limit` (opcional): Limite de mensagens por página (padrão: 50)

**Resposta:**
```json
{
  "success": true,
  "data": {
    "messages": [
      {
        "id": 1,
        "chatId": "1",
        "sender": "Ana Matos",
        "senderId": "user_ana",
        "avatar": "https://...",
        "message": "Oi! Como você está?",
        "time": "14:30",
        "timestamp": "2024-01-15T14:30:00.000Z",
        "isOwn": false,
        "reactions": [],
        "type": "text",
        "status": "read"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 50,
      "total": 10,
      "totalPages": 1,
      "hasNext": false,
      "hasPrev": false
    }
  }
}
```

#### POST - Enviar nova mensagem
```
POST /api/chat/messages
Content-Type: application/json

{
  "chatId": "1",
  "message": "Olá! Como vai?",
  "senderId": "current_user",
  "sender": "Você",
  "type": "text"
}
```

**Resposta:**
```json
{
  "success": true,
  "data": {
    "id": 123,
    "chatId": "1",
    "sender": "Você",
    "senderId": "current_user",
    "avatar": "/placeholder-user.jpg",
    "message": "Olá! Como vai?",
    "time": "14:35",
    "timestamp": "2024-01-15T14:35:00.000Z",
    "isOwn": true,
    "reactions": [],
    "type": "text",
    "status": "sent"
  }
}
```

#### PUT - Atualizar status da mensagem
```
PUT /api/chat/messages
Content-Type: application/json

{
  "messageId": 123,
  "status": "read"
}
```

### 2. Chats (`/api/chat/chats`)

#### GET - Buscar chats do usuário
```
GET /api/chat/chats?userId={userId}&search={search}&type={type}
```

**Parâmetros:**
- `userId` (opcional): ID do usuário (padrão: "current_user")
- `search` (opcional): Termo de busca
- `type` (opcional): Tipo do chat ("direct" ou "group")

**Resposta:**
```json
{
  "success": true,
  "data": [
    {
      "id": "1",
      "name": "Ana Matos",
      "type": "direct",
      "avatar": "https://...",
      "lastMessage": "Oi! Como você está?",
      "lastMessageTime": "2024-01-15T14:30:00.000Z",
      "time": "2 min",
      "unread": 2,
      "online": true,
      "members": [],
      "category": null,
      "role": "Designer",
      "level": "Pro",
      "participants": ["current_user", "user_ana"]
    }
  ]
}
```

#### POST - Criar novo chat
```
POST /api/chat/chats
Content-Type: application/json

{
  "name": "Novo Grupo",
  "type": "group",
  "participants": ["current_user", "user_ana", "user_joao"],
  "avatar": "https://...",
  "category": "Frontend"
}
```

#### PUT - Atualizar chat
```
PUT /api/chat/chats
Content-Type: application/json

{
  "chatId": "1",
  "name": "Novo Nome",
  "avatar": "https://...",
  "lastMessage": "Nova mensagem"
}
```

#### DELETE - Deletar chat
```
DELETE /api/chat/chats?chatId={chatId}
```

### 3. Notificações (`/api/chat/notifications`)

#### GET - Buscar notificações do usuário
```
GET /api/chat/notifications?userId={userId}&unreadOnly={boolean}&type={type}&priority={priority}&page={page}&limit={limit}
```

**Parâmetros:**
- `userId` (opcional): ID do usuário (padrão: "current_user")
- `unreadOnly` (opcional): Apenas não lidas (true/false)
- `type` (opcional): Tipo da notificação
- `priority` (opcional): Prioridade (low, normal, high, urgent)
- `page` (opcional): Página (padrão: 1)
- `limit` (opcional): Limite (padrão: 20)

**Resposta:**
```json
{
  "success": true,
  "data": {
    "notifications": [
      {
        "id": "1",
        "userId": "current_user",
        "fromUser": "Ana Matos",
        "fromUserId": "user_ana",
        "avatar": "https://...",
        "type": "message_reaction",
        "action": "curtiu sua mensagem no grupo React",
        "title": "Nova reação",
        "message": "Ana Matos curtiu sua mensagem",
        "chatId": "3",
        "messageId": "123",
        "timestamp": "2024-01-15T14:28:00.000Z",
        "time": "2 min atrás",
        "read": false,
        "priority": "normal"
      }
    ],
    "stats": {
      "total": 5,
      "unread": 2,
      "byType": {
        "message": 2,
        "mention": 1,
        "reaction": 1,
        "system": 1,
        "file_share": 0
      },
      "byPriority": {
        "low": 1,
        "normal": 3,
        "high": 1,
        "urgent": 0
      }
    },
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 5,
      "totalPages": 1,
      "hasNext": false,
      "hasPrev": false
    }
  }
}
```

#### POST - Criar nova notificação
```
POST /api/chat/notifications
Content-Type: application/json

{
  "userId": "current_user",
  "fromUser": "João Silva",
  "fromUserId": "user_joao",
  "type": "mention",
  "action": "te mencionou no grupo React",
  "title": "Você foi mencionado",
  "message": "João Silva te mencionou: @você pode revisar este código?",
  "chatId": "3",
  "messageId": "124",
  "priority": "high"
}
```

#### PUT - Marcar notificação como lida
```
PUT /api/chat/notifications
Content-Type: application/json

// Marcar uma notificação específica
{
  "notificationId": "1",
  "read": true
}

// Marcar todas como lidas
{
  "markAllAsRead": true,
  "userId": "current_user"
}
```

#### DELETE - Deletar notificação
```
// Deletar notificação específica
DELETE /api/chat/notifications?notificationId={notificationId}

// Deletar todas as notificações do usuário
DELETE /api/chat/notifications?deleteAll=true&userId={userId}
```

## Tipos de Dados

### Tipos de Mensagem
- `text`: Mensagem de texto simples
- `code`: Código ou snippet
- `image`: Imagem
- `file`: Arquivo

### Status da Mensagem
- `sent`: Enviada
- `delivered`: Entregue
- `read`: Lida

### Tipos de Chat
- `direct`: Chat direto entre 2 pessoas
- `group`: Grupo com 3+ pessoas

### Tipos de Notificação
- `message`: Nova mensagem
- `mention`: Menção em mensagem
- `message_reaction`: Reação em mensagem
- `call`: Chamada de voz/vídeo
- `file_share`: Compartilhamento de arquivo
- `system`: Notificação do sistema

### Prioridades de Notificação
- `low`: Baixa prioridade
- `normal`: Prioridade normal
- `high`: Alta prioridade
- `urgent`: Urgente

## Códigos de Erro

### 400 - Bad Request
- Campos obrigatórios ausentes
- Dados inválidos
- Validação falhou

### 404 - Not Found
- Chat não encontrado
- Mensagem não encontrada
- Notificação não encontrada

### 409 - Conflict
- Chat direto já existe entre os usuários

### 500 - Internal Server Error
- Erro interno do servidor

## Exemplos de Uso

### Enviar uma mensagem
```javascript
const response = await fetch('/api/chat/messages', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    chatId: '1',
    message: 'Olá! Como vai?',
    senderId: 'current_user',
    sender: 'Você',
    type: 'text'
  })
})

const data = await response.json()
if (data.success) {
  console.log('Mensagem enviada:', data.data)
}
```

### Buscar chats
```javascript
const response = await fetch('/api/chat/chats?userId=current_user&search=Ana')
const data = await response.json()
if (data.success) {
  console.log('Chats encontrados:', data.data)
}
```

### Marcar notificações como lidas
```javascript
const response = await fetch('/api/chat/notifications', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    markAllAsRead: true,
    userId: 'current_user'
  })
})

const data = await response.json()
if (data.success) {
  console.log('Notificações marcadas como lidas:', data.data.updated)
}
```

## Funcionalidades Implementadas

✅ **Mensagens em tempo real** - Envio e recebimento de mensagens
✅ **Status de entrega** - Sent, delivered, read
✅ **Notificações** - Sistema completo de notificações
✅ **Busca** - Busca em chats e mensagens
✅ **Paginação** - Para mensagens e notificações
✅ **Validação** - Validação de dados de entrada
✅ **Tipos de chat** - Direto e em grupo
✅ **Prioridades** - Sistema de prioridades para notificações

## Próximos Passos

🔄 **WebSockets** - Para mensagens em tempo real
🔄 **Autenticação JWT** - Sistema de autenticação robusto
🔄 **Upload de arquivos** - Suporte a imagens e arquivos
🔄 **Reações** - Sistema de reações em mensagens
🔄 **Menções** - Sistema de menções (@usuário)
🔄 **Banco de dados** - Migrar de memória para banco real
🔄 **Criptografia** - Criptografia end-to-end
🔄 **Backup** - Sistema de backup automático 