'use client'

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Clock, Users, Play, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface CourseCardProps {
  title: string
  description: string
  instructor: {
    name: string
    avatar: string
  }
  thumbnail: string
  duration: number
  level: string
  category: string
  enrolledCount: number
  rating: number
  price: number
  isEnrolled?: boolean
  progress?: number
}

export function CourseCard({
  title,
  description,
  instructor,
  thumbnail,
  duration,
  level,
  category,
  enrolledCount,
  rating,
  price,
  isEnrolled,
  progress,
}: CourseCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const remainingMinutes = minutes % 60
    return `${hours}h ${remainingMinutes}min`
  }

  return (
    <Card 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative overflow-hidden group"
    >
      <div className="relative h-[400px]">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className={`px-3 py-1 rounded-full text-xs font-medium ${
              category === 'frontend' ? 'bg-blue-100 text-blue-800' :
              category === 'backend' ? 'bg-purple-100 text-purple-800' :
              category === 'mobile' ? 'bg-green-100 text-green-800' :
              category === 'data' ? 'bg-orange-100 text-orange-800' :
              'bg-gray-100 text-gray-800'
            }`}>
              {category}
            </div>
            <div className={`px-3 py-1 rounded-full text-xs font-medium ${
              level === 'beginner' ? 'bg-green-100 text-green-800' :
              level === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {level === 'beginner' ? 'Iniciante' :
              level === 'intermediate' ? 'Intermediário' : 'Avançado'}
            </div>
          </div>

          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-white/90 mb-4">{description}</p>

          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-400" />
              <span className="text-sm text-white">{rating}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-white/90" />
              <span className="text-sm text-white/90">{formatDuration(duration)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-white/90" />
              <span className="text-sm text-white/90">{enrolledCount} alunos</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full overflow-hidden">
                <Image
                  src={instructor.avatar}
                  alt={instructor.name}
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <span className="text-sm text-white">{instructor.name}</span>
            </div>
            <div className="text-white font-semibold">R$ {price}</div>
          </div>

          {isEnrolled && (
            <div className="mt-4">
              <div className="h-2 bg-gray-700 rounded-full">
                <div 
                  className="h-2 bg-blue-500 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-sm text-white/90 mt-1 block">{progress}% concluído</span>
            </div>
          )}

          <Button 
            className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            {isEnrolled ? (
              <>
                Continuar Aprendendo
                <Play className="ml-2 h-4 w-4" />
              </>
            ) : (
              <>
                Matricular
                <ChevronRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </div>
    </Card>
  )
}
