"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Loader } from "@/components/ui/loader"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { ComponentPreviewCard } from "@/components/component-preview-card"

export default function LoaderDemo() {
  const breadcrumbs = [
    { name: "application ui", path: "/application-ui" },
    { name: "loaders", path: "/application-ui/loaders" },
    { name: "customizable loaders", path: "/loader-demo" },
  ]

  // Define loader examples
  const loaderExamples = [
    {
      id: 1,
      title: "Default Loader",
      description: "A clean, minimal loader with smooth animations",
      component: <Loader size="md" variant="default" />,
      code: `import { Loader } from "@/components/ui/loader"

export default function DefaultLoader() {
  return <Loader size="md" variant="default" />
}`,
    },
    {
      id: 2,
      title: "Gradient Loader",
      description: "Beautiful gradient animation with multiple colors",
      component: <Loader size="md" variant="gradient" />,
      code: `import { Loader } from "@/components/ui/loader"

export default function GradientLoader() {
  return <Loader size="md" variant="gradient" />
}`,
    },
    {
      id: 3,
      title: "Pulse Loader",
      description: "Animated pulsing effect for subtle loading indication",
      component: <Loader size="md" variant="pulse" />,
      code: `import { Loader } from "@/components/ui/loader"

export default function PulseLoader() {
  return <Loader size="md" variant="pulse" />
}`,
    },
    {
      id: 4,
      title: "Text Loader",
      description: "Loader with text where 'O' letters become spinners",
      component: <Loader size="md" variant="default" text="Loading..." />,
      code: `import { Loader } from "@/components/ui/loader"

export default function TextLoader() {
  return <Loader size="md" variant="default" text="Loading..." />
}`,
    },
    {
      id: 5,
      title: "Processing Order",
      description: "Example with multiple 'O' letters replaced by spinners",
      component: <Loader size="md" variant="gradient" text="Processing your Order..." textPosition="bottom" />,
      code: `import { Loader } from "@/components/ui/loader"

export default function ProcessingLoader() {
  return (
    <Loader 
      size="md" 
      variant="gradient" 
      text="Processing your Order..." 
      textPosition="bottom" 
    />
  )
}`,
    },
    {
      id: 6,
      title: "Large Loader",
      description: "Extra large loader for prominent loading states",
      component: <Loader size="xl" variant="pulse" text="Working On it..." textPosition="right" />,
      code: `import { Loader } from "@/components/ui/loader"

export default function LargeLoader() {
  return (
    <Loader 
      size="xl" 
      variant="pulse" 
      text="Working On it..." 
      textPosition="right" 
    />
  )
}`,
    },
  ]

  return (
    <div className="min-h-screen w-full bg-espresso">
      {/* Header */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="border-b border-taupe bg-espresso"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold text-beige">
                  Tailwind<span className="text-taupe">UI</span>
                </span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <Link
                  href="/components"
                  className="px-3 py-2 text-sm font-medium text-beige hover:text-taupe transition-colors"
                >
                  Components
                </Link>
                <Link
                  href="/templates"
                  className="px-3 py-2 text-sm font-medium text-beige hover:text-taupe transition-colors"
                >
                  Templates
                </Link>
                <Link
                  href="/documentation"
                  className="px-3 py-2 text-sm font-medium text-beige hover:text-taupe transition-colors"
                >
                  Documentation
                </Link>
                <Link href="/loader-demo" className="px-3 py-2 text-sm font-medium text-taupe">
                  Loaders
                </Link>
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
        className="border-b border-taupe bg-charcoal/30"
      >
        <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbs} />
        </div>
      </motion.section>

      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h1 className="mb-4 text-4xl font-bold text-beige">Loader Components</h1>
            <p className="mb-12 text-lg text-beige/80">
              Beautiful, customizable loader components built with Tailwind CSS and Framer Motion. Perfect for
              indicating loading states in your applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-8 text-sm font-medium text-beige/70 uppercase tracking-wider"
          >
            LOADERS
          </motion.div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {loaderExamples.map((example, index) => (
              <motion.div
                key={example.id}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              >
                <ComponentPreviewCard
                  title={example.title}
                  description={example.description}
                  component={example.component}
                  code={example.code}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mt-12 text-center"
          >
            <Link href="/application-ui">
              <Button variant="outline" className="mr-4 border-taupe text-beige hover:bg-taupe/10">
                Back to Application UI
              </Button>
            </Link>
            <Button className="bg-taupe hover:bg-charcoal text-beige">View All Components</Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
