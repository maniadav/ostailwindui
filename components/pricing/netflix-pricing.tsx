"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Mobile",
    price: "$6.99",
    period: "/month",
    description: "For phones and tablets",
    features: ["Unlimited mobile games", "Mobile streaming", "Download on 1 device", "Mobile + tablet only"],
    popular: false,
    color: "bg-space-gray-800",
  },
  {
    name: "Basic",
    price: "$15.49",
    period: "/month",
    description: "For laptops, TVs, phones and tablets",
    features: ["Unlimited mobile games", "Watch on 1 device at a time", "Download on 1 device", "HD available"],
    popular: false,
    color: "bg-space-gray-800",
  },
  {
    name: "Standard",
    price: "$22.99",
    period: "/month",
    description: "For laptops, TVs, phones and tablets",
    features: ["Unlimited mobile games", "Watch on 2 devices at a time", "Download on 2 devices", "Full HD (1080p)"],
    popular: true,
    color: "bg-space-white text-space-black",
  },
  {
    name: "Premium",
    price: "$29.99",
    period: "/month",
    description: "For laptops, TVs, phones and tablets",
    features: [
      "Unlimited mobile games",
      "Watch on 4 devices at a time",
      "Download on 6 devices",
      "Ultra HD (4K) + HDR",
    ],
    popular: false,
    color: "bg-space-gray-800",
  },
]

export function NetflixPricing() {
  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-space-white mb-4">Choose the plan that's right for you</h2>
        <p className="text-space-gray-400 text-lg">
          Join millions of people who watch what they love, anywhere, anytime.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className={`relative rounded-2xl p-6 border transition-all duration-300 ${
              plan.popular
                ? "border-space-white shadow-glow-white"
                : "border-space-gray-700 hover:border-space-gray-600"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-space-white text-space-black px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
            )}

            <div className={`rounded-xl p-4 mb-6 ${plan.color}`}>
              <h3 className={`text-xl font-bold mb-2 ${plan.popular ? "text-space-black" : "text-space-white"}`}>
                {plan.name}
              </h3>
              <div className="flex items-baseline">
                <span className={`text-3xl font-bold ${plan.popular ? "text-space-black" : "text-space-white"}`}>
                  {plan.price}
                </span>
                <span className={`text-sm ml-1 ${plan.popular ? "text-space-gray-600" : "text-space-gray-400"}`}>
                  {plan.period}
                </span>
              </div>
            </div>

            <p className="text-space-gray-400 text-sm mb-6">{plan.description}</p>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start">
                  <Check className="h-5 w-5 text-space-white mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-space-gray-300 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                plan.popular
                  ? "bg-space-white text-space-black hover:bg-space-gray-100"
                  : "bg-space-gray-700 text-space-white hover:bg-space-gray-600"
              }`}
            >
              Get Started
            </Button>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center mt-8"
      >
        <p className="text-space-gray-500 text-sm">
          HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device
          capabilities.
        </p>
      </motion.div>
    </div>
  )
}
