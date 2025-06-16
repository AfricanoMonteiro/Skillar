'use client'

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function FeaturedSection({ title, courses }: { title: string; courses: any[] }) {
  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white text-xl font-semibold">{title}</h2>
        <Button variant="ghost" className="text-white hover:bg-gray-800">
          Ver todos
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="flex overflow-x-auto scrollbar-hide">
        {courses.map((course) => (
          <div
            key={course.id}
            className="w-[200px] mr-4 cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            <div className="relative h-[300px]">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white text-sm font-semibold">{course.title}</h3>
                    <p className="text-gray-400 text-xs">{course.category}</p>
                  </div>
                  <Button variant="ghost" className="text-white hover:bg-gray-800">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
