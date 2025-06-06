"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon, PlayIcon, PauseIcon } from "@radix-ui/react-icons"
import Image from "next/image"

interface HeroImage {
  id: number
  src: string
  alt: string
  title: string
}

const heroImages: HeroImage[] = [
  {
    id: 1,
    src: "/placeholder.svg?height=800&width=1200&text=Creative+Design+Studio",
    alt: "Creative Design Studio",
    title: "Creative Design Studio",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=800&width=1200&text=Brand+Strategy+Workshop",
    alt: "Brand Strategy Workshop",
    title: "Brand Strategy Workshop",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=800&width=1200&text=Digital+Innovation+Lab",
    alt: "Digital Innovation Lab",
    title: "Digital Innovation Lab",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=800&width=1200&text=Marketing+Excellence",
    alt: "Marketing Excellence",
    title: "Marketing Excellence",
  },
]

export function DynamicCarouselHero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPlaying])

  const currentImage = heroImages[currentImageIndex]
  const nextImage = heroImages[(currentImageIndex + 1) % heroImages.length]
  const previewImages = [currentImage, nextImage]

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-mono-white">
      {/* Main Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage.id}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 1.05, opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={currentImage.src || "/placeholder.svg"}
            alt={currentImage.alt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-mono-black/70 via-mono-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-mono-black/40 via-transparent to-mono-black/10" />
        </motion.div>
      </AnimatePresence>

      {/* Content Container */}
      <div className="relative z-10 flex min-h-screen">
        {/* Text Content - 70% width */}
        <div className="flex w-full lg:w-[70%] items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6"
              >
                <span className="inline-flex items-center rounded-full border border-mono-white/30 bg-mono-white/10 px-4 py-2 text-sm font-medium text-mono-white backdrop-blur-sm">
                  PREMIUM DESIGN SOLUTIONS
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mb-6 text-4xl font-bold tracking-tight text-mono-white sm:text-5xl lg:text-6xl xl:text-7xl leading-tight"
              >
                Elevate Your Brand with{" "}
                <span className="relative">
                  <span className="relative z-10">Stunning Design</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-mono-white/20 -z-10"></span>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mb-8 text-lg text-mono-gray-200 leading-relaxed sm:text-xl lg:text-2xl max-w-2xl"
              >
                Discover tailored solutions that blend creativity and strategy to transform your vision into reality.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  size="lg"
                  className="bg-mono-white text-mono-black hover:bg-mono-gray-100 font-semibold text-lg px-8 py-4 rounded-lg shadow-minimal-lg group transition-all duration-200"
                >
                  Explore Now
                  <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-mono-white/50 text-mono-white hover:bg-mono-white/10 hover:border-mono-white font-semibold text-lg px-8 py-4 rounded-lg backdrop-blur-sm group transition-all duration-200"
                >
                  <PlayIcon className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="mt-12 grid grid-cols-3 gap-8 max-w-md"
              >
                {[
                  { number: "500+", label: "Projects" },
                  { number: "98%", label: "Success Rate" },
                  { number: "24/7", label: "Support" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-mono-white mb-1">{stat.number}</div>
                    <div className="text-sm text-mono-gray-300 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Image Carousel - 30% width on desktop, full width on mobile */}
        <div className="hidden lg:flex lg:w-[30%] items-end justify-end p-8">
          <div className="relative">
            {/* Preview Images Container */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex space-x-4"
            >
              {previewImages.map((image, index) => (
                <motion.div
                  key={`${image.id}-${index}`}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                  className="relative group cursor-pointer"
                  onClick={() => {
                    if (index === 1) {
                      setCurrentImageIndex((currentImageIndex + 1) % heroImages.length)
                    }
                  }}
                >
                  <div className="relative w-32 h-20 rounded-lg overflow-hidden border-2 border-mono-white/30 group-hover:border-mono-white/60 transition-all duration-200 hover-lift">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-mono-black/50 to-transparent" />

                    {/* Active Indicator */}
                    {index === 0 && (
                      <div className="absolute top-2 left-2">
                        <div className="w-2 h-2 bg-mono-white rounded-full animate-pulse" />
                      </div>
                    )}

                    {/* Next Indicator */}
                    {index === 1 && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <div className="w-8 h-8 bg-mono-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <ArrowRightIcon className="w-4 h-4 text-mono-white" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Image Title */}
                  <div className="mt-2 text-xs text-mono-gray-300 text-center max-w-32 truncate">{image.title}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Carousel Controls */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.4 }}
              className="mt-6 flex items-center justify-center space-x-4"
            >
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 rounded-full border border-mono-white/30 bg-mono-white/10 hover:bg-mono-white/20 transition-all duration-200 backdrop-blur-sm"
              >
                {isPlaying ? (
                  <PauseIcon className="w-3 h-3 text-mono-white" />
                ) : (
                  <PlayIcon className="w-3 h-3 text-mono-white" />
                )}
              </button>

              {/* Progress Indicator */}
              <div className="flex space-x-1">
                {heroImages.map((_, index) => (
                  <motion.button
                    key={index}
                    className={`h-1 rounded-full transition-all duration-200 cursor-pointer ${
                      index === currentImageIndex ? "w-8 bg-mono-white" : "w-2 bg-mono-white/40 hover:bg-mono-white/60"
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Image Preview */}
      <div className="lg:hidden absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex space-x-3"
        >
          {previewImages.map((image, index) => (
            <motion.div
              key={`mobile-${image.id}-${index}`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
              className="relative group cursor-pointer"
              onClick={() => {
                if (index === 1) {
                  setCurrentImageIndex((currentImageIndex + 1) % heroImages.length)
                }
              }}
            >
              <div className="relative w-20 h-12 rounded-md overflow-hidden border border-mono-white/30 group-hover:border-mono-white/60 transition-all duration-200">
                <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-mono-black/50 to-transparent" />

                {index === 0 && (
                  <div className="absolute top-1 left-1">
                    <div className="w-1.5 h-1.5 bg-mono-white rounded-full animate-pulse" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
