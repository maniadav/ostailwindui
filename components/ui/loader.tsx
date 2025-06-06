"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

// Update the LoaderProps interface to include text options
export interface LoaderProps {
  size?: "sm" | "md" | "lg" | "xl"
  variant?: "default" | "gradient" | "pulse"
  className?: string
  text?: string
  textPosition?: "bottom" | "right"
}

// Update the Loader component to include text handling
export function Loader({ size = "md", variant = "default", className, text, textPosition = "bottom" }: LoaderProps) {
  // Size mappings
  const sizeMap = {
    sm: {
      container: "w-16 h-16",
      circle: 6,
      strokeWidth: 1.5,
      text: "text-sm",
      spinnerSize: "w-4 h-4",
    },
    md: {
      container: "w-24 h-24",
      circle: 8,
      strokeWidth: 2,
      text: "text-base",
      spinnerSize: "w-5 h-5",
    },
    lg: {
      container: "w-32 h-32",
      circle: 10,
      strokeWidth: 2.5,
      text: "text-lg",
      spinnerSize: "w-6 h-6",
    },
    xl: {
      container: "w-40 h-40",
      circle: 12,
      strokeWidth: 3,
      text: "text-xl",
      spinnerSize: "w-7 h-7",
    },
  }

  // Variant styles
  const variantStyles = {
    default: "text-primary",
    gradient: "text-transparent",
    pulse: "text-primary",
  }

  // Create circles for the loader
  const circles = Array.from({ length: sizeMap[size].circle }, (_, i) => ({
    id: i,
    delay: i * 0.1,
    rotate: i * (360 / sizeMap[size].circle),
  }))

  // Function to render text with "O" replaced by spinner
  const renderTextWithSpinner = () => {
    if (!text) return null

    // Split the text by "o" or "O" to replace with spinner
    const textParts = text.split(/([oO])/)

    return (
      <div
        className={cn(
          "flex items-center justify-center font-medium",
          sizeMap[size].text,
          textPosition === "bottom" ? "mt-4" : "ml-4",
        )}
      >
        {textParts.map((part, index) => {
          if (part.toLowerCase() === "o") {
            return (
              <span key={index} className="inline-flex items-center justify-center relative">
                <motion.div
                  className={cn("rounded-full border-2 border-current border-t-transparent", sizeMap[size].spinnerSize)}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />
              </span>
            )
          }
          return <span key={index}>{part}</span>
        })}
      </div>
    )
  }

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center",
        textPosition === "right" && "flex-row",
        className,
      )}
      role="status"
      aria-label={text || "Loading"}
    >
      <div className={cn("relative flex items-center justify-center", sizeMap[size].container)}>
        <div className="absolute inset-0 flex items-center justify-center">
          {variant === "gradient" && (
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-xl animate-spin-slow" />
          )}

          <svg
            className={cn("w-full h-full", variantStyles[variant])}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {circles.map((circle) => (
              <motion.circle
                key={circle.id}
                cx="50"
                cy="50"
                r={40 - circle.id}
                stroke={variant === "gradient" ? `url(#gradient-${circle.id})` : "currentColor"}
                strokeWidth={sizeMap[size].strokeWidth}
                strokeLinecap="round"
                strokeDasharray={250 - circle.id * 10}
                strokeDashoffset={200 - circle.id * 5}
                transform={`rotate(${circle.rotate} 50 50)`}
                initial={{ opacity: 0.2 }}
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  strokeDashoffset: [200 - circle.id * 5, 100 - circle.id * 5, 200 - circle.id * 5],
                }}
                transition={{
                  duration: 2 + circle.id * 0.2,
                  delay: circle.delay,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className={variant === "pulse" ? "animate-pulse" : ""}
              />
            ))}

            {variant === "gradient" && (
              <defs>
                {circles.map((circle) => (
                  <linearGradient
                    key={`gradient-${circle.id}`}
                    id={`gradient-${circle.id}`}
                    gradientTransform={`rotate(${circle.rotate})`}
                  >
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="50%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                ))}
              </defs>
            )}
          </svg>
        </div>

        {variant === "pulse" && (
          <motion.div
            className="absolute inset-0 rounded-full bg-primary/10"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        )}
      </div>

      {renderTextWithSpinner()}
    </div>
  )
}
