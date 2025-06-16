"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Play,
  Plus,
  Star,
  Clock,
  Users,
  ChevronRight,
  ChevronLeft,
  Info,
  Volume2,
  VolumeX,
  ThumbsUp,
  Download
} from "lucide-react"

export default function Courses() {
  const [isClient, setIsClient] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    try {
      setIsClient(true)
    } catch (error) {
      console.error("Error in Courses component:", error)
      setHasError(true)
    }
  }, [])

  if (hasError) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Algo deu errado</h1>
          <p className="text-gray-400 mb-4">Ocorreu um erro ao carregar a página de cursos.</p>
          <Button onClick={() => window.location.reload()} className="bg-white text-black">
            Recarregar Página
          </Button>
        </div>
      </div>
    )
  }

  // Featured course (hero)
  const featuredCourse = {
    title: "Full Stack Development com Next.js 14",
    description: "Domine o desenvolvimento full-stack moderno com Next.js 14, TypeScript, Tailwind CSS e muito mais. Aprenda a criar aplicações web completas do zero com as tecnologias mais demandadas do mercado.",
    instructor: {
      name: "Maria Santos",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1c8?w=40&h=40&fit=crop&crop=face",
    },
    thumbnail: "/img/finalistas.jpeg",
    duration: "48h",
    students: 12450,
    rating: 4.9,
    year: "2024",
    maturity: "16+",
    quality: "4K"
  }

  // Course categories
  const courseCategories = [
    {
      title: "Trending Now",
      courses: [
        {
          id: 1,
          title: "React com TypeScript",
          thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop",
          duration: "32h",
          rating: 4.8,
          level: "Intermediário"
        },
        {
          id: 2,
          title: "Node.js e Express API",
          thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=300&h=200&fit=crop",
          duration: "40h",
          rating: 4.9,
          level: "Intermediário"
        },
        {
          id: 3,
          title: "Python Data Science",
          thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop",
          duration: "56h",
          rating: 4.8,
          level: "Iniciante"
        },
        {
          id: 4,
          title: "Flutter Mobile Apps",
          thumbnail: "https://images.unsplash.com/photo-1512941937669-0a1dd7228f2d?w=300&h=200&fit=crop",
          duration: "45h",
          rating: 4.6,
          level: "Intermediário"
        },
        {
          id: 5,
          title: "Vue.js 3 Composition API",
          thumbnail: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=300&h=200&fit=crop",
          duration: "35h",
          rating: 4.7,
          level: "Intermediário"
        },
        {
          id: 6,
          title: "AWS Cloud Practitioner",
          thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=200&fit=crop",
          duration: "35h",
          rating: 4.7,
          level: "Iniciante"
        }
      ]
    },
    {
      title: "Popular on LearnHub",
      courses: [
        {
          id: 7,
          title: "JavaScript Moderno ES6+",
          thumbnail: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=300&h=200&fit=crop",
          duration: "28h",
          rating: 4.9,
          level: "Iniciante"
        },
        {
          id: 8,
          title: "MongoDB Avançado",
          thumbnail: "https://images.unsplash.com/photo-1544077960-604201fe74bc?w=300&h=200&fit=crop",
          duration: "30h",
          rating: 4.8,
          level: "Avançado"
        },
        {
          id: 9,
          title: "Design System Completo",
          thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=200&fit=crop",
          duration: "24h",
          rating: 4.7,
          level: "Avançado"
        },
        {
          id: 10,
          title: "Docker e Kubernetes",
          thumbnail: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=300&h=200&fit=crop",
          duration: "42h",
          rating: 4.8,
          level: "Avançado"
        },
        {
          id: 11,
          title: "GraphQL com Apollo",
          thumbnail: "https://images.unsplash.com/photo-1558655146-364adaf607de?w=300&h=200&fit=crop",
          duration: "38h",
          rating: 4.6,
          level: "Intermediário"
        },
        {
          id: 12,
          title: "Tailwind CSS Masterclass",
          thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
          duration: "20h",
          rating: 4.6,
          level: "Intermediário"
        }
      ]
    },
    {
      title: "New Releases",
      courses: [
        {
          id: 13,
          title: "Next.js 14 Completo",
          thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop",
          duration: "52h",
          rating: 4.9,
          level: "Avançado"
        },
        {
          id: 14,
          title: "Svelte e SvelteKit",
          thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop",
          duration: "36h",
          rating: 4.7,
          level: "Intermediário"
        },
        {
          id: 15,
          title: "Rust Programming",
          thumbnail: "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?w=300&h=200&fit=crop",
          duration: "44h",
          rating: 4.8,
          level: "Avançado"
        },
        {
          id: 16,
          title: "Web3 e Blockchain",
          thumbnail: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=300&h=200&fit=crop",
          duration: "48h",
          rating: 4.5,
          level: "Avançado"
        },
        {
          id: 17,
          title: "AI e Machine Learning",
          thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&h=200&fit=crop",
          duration: "60h",
          rating: 4.9,
          level: "Avançado"
        },
        {
          id: 18,
          title: "Cybersecurity Fundamentals",
          thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=300&h=200&fit=crop",
          duration: "40h",
          rating: 4.7,
          level: "Iniciante"
        }
      ]
    },
    {
      title: "Frontend Development",
      courses: [
        {
          id: 19,
          title: "React Native Avançado",
          thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=200&fit=crop",
          duration: "46h",
          rating: 4.8,
          level: "Avançado"
        },
        {
          id: 20,
          title: "Angular 17 Completo",
          thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=300&h=200&fit=crop",
          duration: "50h",
          rating: 4.6,
          level: "Intermediário"
        },
        {
          id: 21,
          title: "CSS Grid e Flexbox",
          thumbnail: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=300&h=200&fit=crop",
          duration: "18h",
          rating: 4.7,
          level: "Iniciante"
        },
        {
          id: 22,
          title: "Three.js e WebGL",
          thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300&h=200&fit=crop",
          duration: "42h",
          rating: 4.8,
          level: "Avançado"
        },
        {
          id: 23,
          title: "Progressive Web Apps",
          thumbnail: "https://images.unsplash.com/photo-1555949963-f7c0c2b8b8b8?w=300&h=200&fit=crop",
          duration: "32h",
          rating: 4.6,
          level: "Intermediário"
        },
        {
          id: 24,
          title: "Micro Frontends",
          thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
          duration: "38h",
          rating: 4.7,
          level: "Avançado"
        }
      ]
    }
  ]

  const CourseCard = ({ course }: { course: any }) => (
    <div className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:z-10">
      <div className="relative aspect-video rounded-md overflow-hidden bg-gray-800">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMzc0MTUxIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOUM5Qzk3IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiPkltYWdlbSBuw6NvIGVuY29udHJhZGE8L3RleHQ+Cjwvc3ZnPgo=';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button size="sm" className="rounded-full w-12 h-12 bg-white text-black hover:bg-gray-200">
            <Play className="h-5 w-5 ml-1" />
          </Button>
        </div>

        {/* Course info overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-white font-semibold text-sm mb-2 line-clamp-2">{course.title}</h3>
          <div className="flex items-center space-x-4 text-xs text-gray-300 mb-2">
            <span className="flex items-center">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
              {course.rating}
            </span>
            <span className="flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              {course.duration}
            </span>
            <Badge variant="secondary" className="text-xs bg-gray-700 text-white border-0">
              {course.level}
            </Badge>
          </div>
          <div className="flex items-center space-x-2">
            <Button size="sm" variant="ghost" className="h-8 w-8 p-0 rounded-full bg-gray-800/80 text-white hover:bg-gray-700">
              <Plus className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="ghost" className="h-8 w-8 p-0 rounded-full bg-gray-800/80 text-white hover:bg-gray-700">
              <ThumbsUp className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="ghost" className="h-8 w-8 p-0 rounded-full bg-gray-800/80 text-white hover:bg-gray-700">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )

  const CourseRow = ({ title, courses }: { title: string; courses: any[] }) => {
    const [scrollPosition, setScrollPosition] = useState(0)
    const maxScroll = Math.max(0, courses.length - 6) * 250

    const scrollLeft = () => {
      setScrollPosition(Math.max(0, scrollPosition - 250))
    }

    const scrollRight = () => {
      setScrollPosition(Math.min(maxScroll, scrollPosition + 250))
    }

    return (
      <div className="mb-12">
        <h2 className="text-white text-xl font-semibold mb-4 px-4 md:px-16">{title}</h2>
        <div className="relative group">
          {scrollPosition > 0 && (
            <Button
              onClick={scrollLeft}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/50 text-white border-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          )}
          
          {scrollPosition < maxScroll && (
            <Button
              onClick={scrollRight}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/50 text-white border-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          )}

          <div className="overflow-hidden px-4 md:px-16">
            <div 
              className="flex space-x-2 transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${scrollPosition}px)` }}
            >
              {courses.map((course) => (
                <div key={course.id} className="flex-shrink-0 w-60">
                  <CourseCard course={course} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Background image */}
      <div 
        className="fixed inset-0 z-0 opacity-30"
        style={{
          backgroundImage: "url('/img/finalistas.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed"
        }}
      />
      
      {/* Dark overlay */}
      <div className="fixed inset-0 z-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10">
        <Navigation />

        {/* Hero Section */}
        <section className="relative h-screen flex items-center">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${featuredCourse.thumbnail})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}
            onError={() => {
              console.log("Background image failed to load");
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />
          
          <div className="relative z-20 px-4 md:px-16 max-w-2xl">
            <div className="flex items-center space-x-4 mb-4">
              <Badge className="bg-red-600 text-white font-bold px-3 py-1">
                SÉRIE
              </Badge>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <span>{featuredCourse.year}</span>
                <span className="border border-gray-500 px-2 py-0.5 text-xs">{featuredCourse.maturity}</span>
                <span>{featuredCourse.duration}</span>
                <Badge variant="outline" className="border-gray-500 text-gray-300">
                  {featuredCourse.quality}
                </Badge>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-shadow-lg">
              {featuredCourse.title}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-xl text-shadow">
              {featuredCourse.description}
            </p>

            <div className="flex items-center space-x-4 mb-8">
              <div className="flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={featuredCourse.instructor.avatar} />
                  <AvatarFallback>{featuredCourse.instructor.name[0]}</AvatarFallback>
                </Avatar>
                <span className="text-sm text-gray-300">{featuredCourse.instructor.name}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-semibold">{featuredCourse.rating}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-300">
                  {isClient ? featuredCourse.students.toLocaleString('pt-BR') : featuredCourse.students}
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-semibold px-8 py-3 text-lg">
                <Play className="h-5 w-5 mr-2" />
                Assistir
              </Button>
              <Button size="lg" variant="outline" className="border-gray-500 text-white hover:bg-gray-800 font-semibold px-8 py-3 text-lg">
                <Info className="h-5 w-5 mr-2" />
                Mais informações
              </Button>
            </div>
          </div>

          {/* Volume control */}
          <div className="absolute bottom-32 right-4 md:right-16 z-20">
            <Button
              onClick={() => setIsMuted(!isMuted)}
              variant="outline"
              size="sm"
              className="rounded-full w-12 h-12 border-gray-500 text-white hover:bg-gray-800"
            >
              {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </Button>
          </div>
        </section>

        {/* Course Rows */}
        <section className="pb-20">
          {courseCategories.map((category, index) => (
            <CourseRow
              key={index}
              title={category.title}
              courses={category.courses}
            />
          ))}
        </section>
      </div>
    </div>
  )
}

