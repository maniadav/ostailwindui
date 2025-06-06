"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Rocket, Satellite, Globe, Zap } from "lucide-react"

const plans = [
  {
    name: "Explorer",
    price: "$29",
    period: "/month",
    description: "Perfect for space enthusiasts",
    icon: Rocket,
    features: ["Basic space data access", "5 satellite connections", "Standard support", "Monthly reports"],
    popular: false,
  },
  {
    name: "Navigator",
    price: "$79",
    period: "/month",
    description: "For professional astronomers",
    icon: Satellite,
    features: [
      "Advanced space analytics",
      "25 satellite connections",
      "Priority support",
      "Real-time data streams",
      "Custom dashboards",
    ],
    popular: true,
  },
  {
    name: "Commander",
    price: "$199",
    period: "/month",
    description: "Enterprise space solutions",
    icon: Globe,
    features: [
      "Full space data suite",
      "Unlimited connections",
      "24/7 dedicated support",
      "AI-powered insights",
      "Custom integrations",
      "White-label options",
    ],
    popular: false,
  },
]

export function SpacePricing() {
  return (
    <div className="w-full max-w-6xl mx-auto p-6 relative">
      {/* Floating Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute top-10 right-10 w-8 h-8 border-2 border-space-white/30 rounded-full"
      />
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-4 h-4 bg-space-white/20 rounded-full"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="inline-block mb-6"
        >
          <Zap className="h-12 w-12 text-space-white" />
        </motion.div>
        <h2 className="text-4xl font-bold text-space-white mb-4 text-glow">Space Mission Pricing</h2>
        <p className="text-space-gray-400 text-lg">Choose your cosmic adventure</p>
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
              className={`relative rounded-2xl p-8 border backdrop-blur-md transition-all duration-500 ${
                plan.popular
                  ? "border-space-white/50 bg-space-white/10 shadow-glow-white"
                  : "border-space-gray-700 bg-space-gray-950/30 hover:border-space-gray-600"
              }`}
            >
              {plan.popular && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                >
                  <span className="bg-space-white text-space-black px-6 py-2 rounded-full text-sm font-bold shadow-space-lg">
                    🚀 POPULAR
                  </span>
                </motion.div>
              )}

              <div className="text-center mb-8">
                <motion.div
                  animate={{
                    rotate: plan.popular ? [0, 360] : [0, 10, -10, 0],
                    scale: plan.popular ? [1, 1.1, 1] : [1, 1.05, 1],
                  }}
                  transition={{
                    duration: plan.popular ? 4 : 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                    plan.popular ? "bg-space-white/20" : "bg-space-gray-800"
                  }`}
                >
                  <IconComponent className="h-8 w-8 text-space-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-space-white mb-2">{plan.name}</h3>
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
                    <div className="w-2 h-2 bg-space-white rounded-full mr-3 animate-twinkle" />
                    <span className="text-space-gray-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <Button
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? "bg-space-white text-space-black hover:bg-space-gray-100 shadow-glow-white"
                    : "bg-space-gray-800 text-space-white hover:bg-space-gray-700 border border-space-gray-600"
                }`}
              >
                Launch Mission
              </Button>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
