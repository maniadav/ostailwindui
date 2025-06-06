"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Zap, Star, Crown } from "lucide-react"

const plans = [
  {
    name: "BASIC",
    price: "$19",
    period: "/mo",
    description: "Get started with neon",
    icon: Zap,
    features: ["Neon UI Components", "Basic Animations", "5 Projects", "Community Support"],
    popular: false,
    neonColor: "neon-blue",
    glowColor: "shadow-neon-blue",
  },
  {
    name: "PRO",
    price: "$49",
    period: "/mo",
    description: "Professional neon experience",
    icon: Star,
    features: [
      "Advanced Neon Effects",
      "Custom Animations",
      "Unlimited Projects",
      "Priority Support",
      "Export Options",
    ],
    popular: true,
    neonColor: "neon-purple",
    glowColor: "shadow-neon-purple",
  },
  {
    name: "ELITE",
    price: "$99",
    period: "/mo",
    description: "Ultimate neon power",
    icon: Crown,
    features: [
      "Premium Neon Library",
      "AI-Powered Effects",
      "White-label License",
      "24/7 VIP Support",
      "Custom Development",
      "Team Collaboration",
    ],
    popular: false,
    neonColor: "neon-pink",
    glowColor: "shadow-neon-pink",
  },
]

export function NeonPricing() {
  return (
    <div className="w-full max-w-6xl mx-auto p-6 relative overflow-hidden">
      {/* Neon Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <motion.div
              key={i}
              className="border border-neon-blue/20"
              animate={{
                opacity: [0.1, 0.3, 0.1],
                borderColor: ["rgba(0, 245, 255, 0.1)", "rgba(191, 0, 255, 0.2)", "rgba(255, 0, 128, 0.1)"],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.02,
              }}
            />
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <motion.h2
          className="text-5xl font-bold mb-4 text-neon-blue animate-neon-pulse"
          animate={{
            textShadow: [
              "0 0 5px #00f5ff, 0 0 10px #00f5ff, 0 0 15px #00f5ff",
              "0 0 10px #bf00ff, 0 0 20px #bf00ff, 0 0 30px #bf00ff",
              "0 0 5px #ff0080, 0 0 10px #ff0080, 0 0 15px #ff0080",
              "0 0 5px #00f5ff, 0 0 10px #00f5ff, 0 0 15px #00f5ff",
            ],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        >
          NEON PRICING
        </motion.h2>
        <p className="text-space-gray-400 text-lg">Choose your electric experience</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {plans.map((plan, index) => {
          const IconComponent = plan.icon
          return (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{
                y: -10,
                boxShadow:
                  plan.neonColor === "neon-blue"
                    ? "0 0 30px rgba(0, 245, 255, 0.5)"
                    : plan.neonColor === "neon-purple"
                      ? "0 0 30px rgba(191, 0, 255, 0.5)"
                      : "0 0 30px rgba(255, 0, 128, 0.5)",
              }}
              className={`relative rounded-2xl p-8 bg-space-black border-2 transition-all duration-500 ${
                plan.popular
                  ? `border-${plan.neonColor} ${plan.glowColor}`
                  : `border-${plan.neonColor}/50 hover:border-${plan.neonColor}`
              }`}
            >
              {plan.popular && (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.5, type: "spring", bounce: 0.5 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                >
                  <span
                    className={`text-${plan.neonColor} px-6 py-2 rounded-full text-sm font-bold border border-${plan.neonColor} bg-space-black animate-neon-pulse`}
                  >
                    ⚡ POPULAR ⚡
                  </span>
                </motion.div>
              )}

              <div className="text-center mb-8">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    rotate: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                    scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  }}
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 border-2 border-${plan.neonColor} ${plan.glowColor}`}
                >
                  <IconComponent className={`h-10 w-10 text-${plan.neonColor}`} />
                </motion.div>
                <h3 className={`text-3xl font-bold mb-2 text-${plan.neonColor} animate-neon-pulse`}>{plan.name}</h3>
                <p className="text-space-gray-400 text-sm uppercase tracking-wider">{plan.description}</p>
              </div>

              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center">
                  <span className={`text-5xl font-bold text-${plan.neonColor}`}>{plan.price}</span>
                  <span className="text-space-gray-400 ml-2 text-lg">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 + featureIndex * 0.1 }}
                    className="flex items-center"
                  >
                    <motion.div
                      className={`w-3 h-3 rounded-full mr-4 bg-${plan.neonColor}`}
                      animate={{
                        boxShadow: [
                          `0 0 5px var(--${plan.neonColor})`,
                          `0 0 15px var(--${plan.neonColor})`,
                          `0 0 5px var(--${plan.neonColor})`,
                        ],
                      }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    />
                    <span className="text-space-white">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <Button
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 bg-space-black border-2 border-${plan.neonColor} text-${plan.neonColor} hover:bg-${plan.neonColor} hover:text-space-black ${plan.glowColor} hover:shadow-2xl`}
              >
                ACTIVATE NOW
              </Button>
            </motion.div>
          )
        })}
      </div>

      {/* Floating Neon Elements */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-4 h-4 bg-neon-blue rounded-full shadow-neon-blue"
      />
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          rotate: [0, -180, -360],
        }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute bottom-20 left-20 w-6 h-6 bg-neon-pink rounded-full shadow-neon-pink"
      />
    </div>
  )
}
