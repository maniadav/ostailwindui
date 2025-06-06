"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Copy, Code, Eye, Smartphone, Tablet, Monitor, Laptop } from "lucide-react"
import { cn } from "@/lib/utils"

interface ComponentPreviewCardProps {
  title: string
  description?: string
  component: React.ReactNode
  code: string
}

export function ComponentPreviewCard({ title, description, component, code }: ComponentPreviewCardProps) {
  const [copied, setCopied] = useState(false)
  const [viewMode, setViewMode] = useState<"preview" | "code">("preview")
  const [screenSize, setScreenSize] = useState<"xs" | "sm" | "md" | "lg" | "xl">("lg")

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const screenSizeMap = {
    xs: "w-full max-w-[320px]",
    sm: "w-full max-w-[480px]",
    md: "w-full max-w-[640px]",
    lg: "w-full max-w-[768px]",
    xl: "w-full",
  }

  return (
    <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
      <Card className="overflow-hidden border border-mono-gray-200 bg-mono-white shadow-minimal-md hover:shadow-minimal-lg transition-shadow duration-200">
        <CardHeader className="bg-mono-gray-50 px-6 py-4 border-b border-mono-gray-200">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-medium text-mono-black">{title}</CardTitle>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1 rounded-md border border-mono-gray-200 bg-mono-white p-1">
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "h-8 px-2 text-xs",
                    viewMode === "preview"
                      ? "bg-mono-gray-100 text-mono-black"
                      : "text-mono-gray-600 hover:text-mono-black",
                  )}
                  onClick={() => setViewMode("preview")}
                >
                  <Eye className="mr-1 h-3 w-3" />
                  Preview
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "h-8 px-2 text-xs",
                    viewMode === "code"
                      ? "bg-mono-gray-100 text-mono-black"
                      : "text-mono-gray-600 hover:text-mono-black",
                  )}
                  onClick={() => setViewMode("code")}
                >
                  <Code className="mr-1 h-3 w-3" />
                  Code
                </Button>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 border-mono-gray-200 hover:bg-mono-gray-50"
                onClick={copyToClipboard}
              >
                {copied ? (
                  <Check className="h-3 w-3 text-green-600" />
                ) : (
                  <Copy className="h-3 w-3 text-mono-gray-600" />
                )}
              </Button>
            </div>
          </div>
          {description && <p className="mt-2 text-sm text-mono-gray-600">{description}</p>}
        </CardHeader>
        <CardContent className="p-0">
          {viewMode === "preview" ? (
            <div className="border-t border-mono-gray-200">
              <div className="flex items-center justify-between border-b border-mono-gray-200 bg-mono-gray-50 px-6 py-2">
                <div className="text-xs text-mono-gray-600 font-medium uppercase tracking-wider">
                  Responsive Preview
                </div>
                <div className="flex items-center space-x-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className={cn("h-7 w-7", screenSize === "xs" && "bg-mono-gray-100")}
                    onClick={() => setScreenSize("xs")}
                  >
                    <Smartphone className="h-3 w-3 text-mono-gray-600" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={cn("h-7 w-7", screenSize === "sm" && "bg-mono-gray-100")}
                    onClick={() => setScreenSize("sm")}
                  >
                    <Smartphone className="h-4 w-4 text-mono-gray-600" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={cn("h-7 w-7", screenSize === "md" && "bg-mono-gray-100")}
                    onClick={() => setScreenSize("md")}
                  >
                    <Tablet className="h-3 w-3 text-mono-gray-600" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={cn("h-7 w-7", screenSize === "lg" && "bg-mono-gray-100")}
                    onClick={() => setScreenSize("lg")}
                  >
                    <Laptop className="h-3 w-3 text-mono-gray-600" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={cn("h-7 w-7", screenSize === "xl" && "bg-mono-gray-100")}
                    onClick={() => setScreenSize("xl")}
                  >
                    <Monitor className="h-3 w-3 text-mono-gray-600" />
                  </Button>
                </div>
              </div>
              <div className="flex justify-center overflow-auto p-8 bg-mono-white">
                <motion.div
                  className={cn("transition-all duration-300", screenSizeMap[screenSize])}
                  key={screenSize}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {component}
                </motion.div>
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="border-t border-mono-gray-200 bg-mono-gray-50 p-6"
            >
              <pre className="overflow-x-auto rounded-lg bg-mono-black p-4 border border-mono-gray-200">
                <code className="text-sm text-mono-white">{code}</code>
              </pre>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}
