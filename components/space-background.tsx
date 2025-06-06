"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Star {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  twinkleDelay: number
}

interface Planet {
  id: number
  x: number
  y: number
  size: number
  color: string
  orbitRadius: number
  orbitSpeed: number
}

export function SpaceBackground() {
  const [stars, setStars] = useState<Star[]>([])
  const [planets, setPlanets] = useState<Planet[]>([])

  useEffect(() => {
    // Generate stars
    const newStars: Star[] = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.8 + 0.2,
      twinkleDelay: Math.random() * 3,
    }))

    // Generate planets
    const newPlanets: Planet[] = Array.from({ length: 3 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 60 + 40,
      color: ["#4a5568", "#718096", "#a0aec0"][i],
      orbitRadius: Math.random() * 200 + 100,
      orbitSpeed: Math.random() * 20 + 10,
    }))

    setStars(newStars)
    setPlanets(newPlanets)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-space-black via-space-gray-950 to-space-black" />

      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-space-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
          }}
          animate={{
            opacity: [star.opacity, star.opacity * 0.3, star.opacity],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2 + star.twinkleDelay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: star.twinkleDelay,
          }}
        />
      ))}

      {/* Floating Planets */}
      {planets.map((planet) => (
        <motion.div
          key={planet.id}
          className="absolute rounded-full opacity-20"
          style={{
            left: `${planet.x}%`,
            top: `${planet.y}%`,
            width: `${planet.size}px`,
            height: `${planet.size}px`,
            background: `radial-gradient(circle at 30% 30%, ${planet.color}, ${planet.color}dd)`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [0, 360],
          }}
          transition={{
            duration: planet.orbitSpeed,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Shooting Stars */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={`shooting-${i}`}
          className="absolute w-1 h-1 bg-space-white rounded-full"
          style={{
            left: "-10px",
            top: `${Math.random() * 50}%`,
          }}
          animate={{
            x: ["0vw", "100vw"],
            y: ["0vh", "50vh"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 5 + Math.random() * 10,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Nebula Effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-space-white/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-space-gray-400/10 to-transparent rounded-full blur-3xl" />
      </div>
    </div>
  )
}
