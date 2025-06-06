"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Heart, Star, Sparkles } from "lucide-react"

const plans = [
  {
    name: "Kawaii",
    price: "¥1,200",
    period: "/month",
    description: "Perfect for anime beginners",
    icon: Heart,
    features: ["Basic anime library", "SD quality streaming", "1 device", "Community forums"],
    popular: false,
    gradient: "from-anime-sakura/20 to-anime-ocean/20",
    accent: "anime-sakura",
  },
  {
    name: "Otaku",
    price: "¥2,400",
    period: "/month",
    description: "For true anime lovers",
    icon: Star,
    features: [
      "Premium anime collection",
      "HD quality streaming",
      "3 devices",
      "Early access episodes",
      "Exclusive content",
    ],
    popular: true,
    gradient: "from-anime-lavender/20 to-anime-sunset/20",
    accent: "anime-lavender",
  },
  {
    name: "Senpai",
    price: "¥3,600",
    period: "/month",
    description: "Ultimate anime experience",
    icon: Sparkles,
    features: [
      "Complete anime universe",
      "4K quality streaming",
      "Unlimited devices",
      "VIP events access",
      "Manga library included",
      "Creator meet & greets",
    ],
    popular: false,
    gradient: "from-anime-gold/20 to-anime-forest/20",
    accent: "anime-gold",
  },
]

export function AnimePricing() {
  return (
    <div className="w-full max-w-6xl mx-auto p-6 relative">
      {/* Floating Sakura Petals */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-anime-sakura rounded-full opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            rotate: [0, 360],
            opacity: [0.6, 0.2, 0.6],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="inline-block mb-6"
        >
          <div className="text-6xl">🌸</div>
        </motion.div>
        <h2 className="text-4xl font-bold text-space-white mb-4">Anime Subscription Plans</h2>
        <p className="text-space-gray-400 text-lg">Choose your anime adventure! (◕‿◕)</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => {
          const IconComponent = plan.icon
          return (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative rounded-3xl p-8 border backdrop-blur-md transition-all duration-500 bg-gradient-to-br ${plan.gradient} ${
                plan.popular
                  ? "border-anime-lavender shadow-space-xl"
                  : "border-space-gray-700 hover:border-anime-sakura/50"
              }`}
            >
              {plan.popular && (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.5, type: "spring", bounce: 0.6 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                >
                  <span className="bg-gradient-to-r from-anime-lavender to-anime-sunset text-space-white px-6 py-2 rounded-full text-sm font-bold shadow-space-lg">
                    ✨ Most Popular ✨
                  </span>
                </motion.div>
              )}

              <div className="text-center mb-8">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 bg-gradient-to-br from-${plan.accent}/30 to-${plan.accent}/10 border-2 border-${plan.accent}/50`}
                >
                  <IconComponent className={`h-10 w-10 text-${plan.accent}`} />
                </motion.div>
                <h3 className="text-3xl font-bold text-space-white mb-2">{plan.name}</h3>
                <p className="text-space-gray-400 text-sm">{plan.description}</p>
              </div>

              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-space-white">{plan.price}</span>
                  <span className="text-space-gray-400 ml-2">{plan.period}</span>
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
                      className={`w-3 h-3 rounded-full mr-4 bg-${plan.accent}`}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: featureIndex * 0.2,
                      }}
                    />
                    <span className="text-space-gray-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  className={`w-full py-4 rounded-2xl font-bold transition-all duration-300 bg-gradient-to-r from-${plan.accent}/80 to-${plan.accent}/60 text-space-white hover:from-${plan.accent} hover:to-${plan.accent}/80 shadow-space-lg hover:shadow-space-xl animate-anime-bounce`}
                >
                  Start Watching! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧
                </Button>
              </motion.div>
            </motion.div>
          )
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="text-center mt-12"
      >
        <p className="text-space-gray-500 text-sm">
          All plans include ad-free viewing and offline downloads. Prices in Japanese Yen. (´∀｀)♡
        </p>
      </motion.div>
    </div>
  )
}
