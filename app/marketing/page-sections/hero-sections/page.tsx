"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { ComponentPreviewCard } from "@/components/component-preview-card"
import { DynamicCarouselHero } from "@/components/hero-sections/dynamic-carousel-hero"
import { ArrowLeftIcon } from "@radix-ui/react-icons"

const heroSections = [
  {
    id: 1,
    title: "Dynamic Image Carousel Hero",
    description: "Full-width hero section with animated image carousel and smooth transitions",
    component: <DynamicCarouselHero />,
    code: `import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon, PlayIcon } from "@radix-ui/react-icons"
import Image from "next/image"

const heroImages = [
  {
    id: 1,
    src: "/placeholder.svg?height=800&width=1200&text=Creative+Design+Studio",
    alt: "Creative Design Studio",
    title: "Creative Design Studio",
  },
  // ... more images
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
      <motion.div
        key={currentImage.id}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 1.05, opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src={currentImage.src || "/placeholder.svg"}
          alt={currentImage.alt}
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-mono-black/70 via-mono-black/30 to-transparent" />
      </motion.div>

      {/* Content with 70/30 split layout */}
      <div className="relative z-10 flex min-h-screen">
        {/* Text Content - 70% width */}
        <div className="flex w-full lg:w-[70%] items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mb-6 text-4xl font-bold tracking-tight text-mono-white sm:text-5xl lg:text-6xl xl:text-7xl"
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
                className="mb-8 text-lg text-mono-gray-200 leading-relaxed"
              >
                Discover tailored solutions that blend creativity and strategy.
              </motion.p>
              
              <Button className="bg-mono-white text-mono-black hover:bg-mono-gray-100">
                Explore Now
              </Button>
            </div>
          </div>
        </div>

        {/* Image Carousel - 30% width */}
        <div className="hidden lg:flex lg:w-[30%] items-end justify-end p-8">
          <div className="flex space-x-4">
            {previewImages.map((image, index) => (
              <motion.div
                key={\`\${image.id}-\${index}\`}
                className="relative w-32 h-20 rounded-lg overflow-hidden border-2 border-mono-white/30"
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}`,
    features: [
      "70/30 split layout (text/carousel)",
      "Smooth image transitions every 5 seconds",
      "Two preview thumbnails at bottom-right",
      "Mobile responsive design",
      "Play/pause controls",
      "Progress indicators",
      "Hover effects on thumbnails",
      "Gradient overlays for text readability",
    ],
  },
]

export default function HeroSectionsPage() {
  const breadcrumbs = [
    { name: "marketing", path: "/marketing" },
    { name: "page sections", path: "/marketing/page-sections" },
    { name: "hero sections", path: "/marketing/page-sections/hero-sections" },
  ]

  return (
    <div className="min-h-screen bg-mono-white">
      {/* Header */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="border-b border-mono-gray-200 bg-mono-white/95 backdrop-blur-sm sticky top-0 z-50"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center group">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-2 rounded-lg border border-mono-gray-200 bg-mono-white group-hover:bg-mono-gray-50 transition-all duration-200"
                >
                  <span className="text-2xl font-bold text-mono-black">
                    Tailwind<span className="text-mono-gray-600">UI</span>
                  </span>
                </motion.div>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-1">
                {["Components", "Templates", "Documentation", "Loaders"].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item === "Loaders" ? "/loader-demo" : `/${item.toLowerCase()}`}
                      className="px-4 py-2 text-sm font-medium text-mono-gray-600 hover:text-mono-black hover:bg-mono-gray-50 rounded-lg transition-all duration-200"
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Breadcrumb */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="border-b border-mono-gray-200 bg-mono-gray-50"
      >
        <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Breadcrumb items={breadcrumbs} />
            <Link href="/marketing/page-sections">
              <Button variant="outline" className="btn-secondary">
                <ArrowLeftIcon className="mr-2 h-4 w-4" />
                Back to Page Sections
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Page Header */}
      <section className="py-16 border-b border-mono-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl font-bold text-mono-black mb-4">Hero Sections</h1>
            <p className="text-lg text-mono-gray-600 leading-relaxed">
              Stunning hero sections with dynamic layouts, animations, and interactive elements. Perfect for landing
              pages and marketing websites.
            </p>
            <div className="mt-6 flex items-center space-x-4 text-sm text-mono-gray-500">
              <span>{heroSections.length} components</span>
              <span>•</span>
              <span>Fully responsive</span>
              <span>•</span>
              <span>Framer Motion animations</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {heroSections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
              >
                <ComponentPreviewCard
                  title={section.title}
                  description={section.description}
                  component={section.component}
                  code={section.code}
                />

                {/* Features List */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.2, duration: 0.5 }}
                  className="mt-8 p-6 rounded-xl border border-mono-gray-200 bg-mono-gray-50"
                >
                  <h3 className="text-lg font-semibold text-mono-black mb-4">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                    {section.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.2 + featureIndex * 0.1, duration: 0.4 }}
                        className="flex items-center text-sm text-mono-gray-700"
                      >
                        <div className="w-2 h-2 bg-mono-black rounded-full mr-3" />
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Coming Soon */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-16 text-center p-12 rounded-2xl border border-mono-gray-200 bg-mono-gray-50"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-mono-gray-300 bg-mono-white flex items-center justify-center">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-2xl font-bold text-mono-black mb-4">More Hero Sections Coming Soon</h3>
            <p className="text-mono-gray-600 max-w-2xl mx-auto">
              We're working on more amazing hero section designs including video backgrounds, particle effects, and
              interactive 3D elements.
            </p>
            <Button className="mt-6 btn-primary">Request a Hero Section</Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
