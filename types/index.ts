export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  bio?: string
  skills: string[]
  objectives: string[]
  role: "student" | "mentor" | "instructor" | "company"
  points: number
  badges: Badge[]
  joinedAt: Date
  lastActive: Date
}

export interface Course {
  id: string
  title: string
  description: string
  instructor: User
  thumbnail: string
  duration: number
  level: "beginner" | "intermediate" | "advanced"
  category: string
  enrolledCount: number
  rating: number
  lessons: Lesson[]
  createdAt: Date
}

export interface Lesson {
  id: string
  title: string
  description: string
  videoUrl?: string
  duration: number
  order: number
  completed?: boolean
}

export interface ForumPost {
  id: string
  title: string
  content: string
  author: User
  category: string
  tags: string[]
  replies: ForumReply[]
  likes: number
  views: number
  createdAt: Date
  updatedAt: Date
}

export interface ForumReply {
  id: string
  content: string
  author: User
  likes: number
  createdAt: Date
}

export interface ChatMessage {
  id: string
  content: string
  author: User
  chatId: string
  type: "text" | "image" | "file"
  createdAt: Date
}

export interface Badge {
  id: string
  name: string
  description: string
  icon: string
  rarity: "common" | "rare" | "epic" | "legendary"
}

export interface Notification {
  id: string
  type: "message" | "forum" | "course" | "badge" | "mentorship"
  title: string
  content: string
  read: boolean
  createdAt: Date
}
