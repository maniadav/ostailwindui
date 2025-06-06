"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { components } from "@/lib/components"
import { Breadcrumb } from "@/components/ui/breadcrumb"

interface SectionPageProps {
  params: {
    category: string
    section: string
  }
}

export default function SectionPage({ params }: SectionPageProps) {
  const pathname = usePathname()
  const [breadcrumbs, setBreadcrumbs] = useState<{ name: string; path: string }[]>([])
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [items, setItems] = useState<any[]>([])

  useEffect(() => {
    // Generate breadcrumbs based on the current path
    const pathSegments = pathname.split("/").filter(Boolean)
    const breadcrumbItems = pathSegments.map((segment, index) => {
      const path = `/${pathSegments.slice(0, index + 1).join("/")}`
      return {
        name: segment.replace(/-/g, " "),
        path,
      }
    })

    setBreadcrumbs(breadcrumbItems)

    // Find the current section details from the components object
    const category = Object.values(components).find((cat) => cat.slug === `/${params.category}`)
    if (category) {
      const section = category.sections.find((sec) => sec.slug === `/${params.category}/${params.section}`)
      if (section) {
        setTitle(section.title)
        setDescription("")
        setItems(section.items)
      } else {
        setTitle(category.title)
        setDescription(category.desc)
        setItems([])
      }
    }
  }, [pathname, params])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold text-gray-900">
                  OSTailwind<span className="text-blue-500">UI</span>
                </span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <Link href="/components" className="px-3 py-2 text-sm font-medium text-gray-900 hover:text-blue-500">
                  Components
                </Link>
                <Link href="/templates" className="px-3 py-2 text-sm font-medium text-gray-900 hover:text-blue-500">
                  Templates
                </Link>
                <Link href="/documentation" className="px-3 py-2 text-sm font-medium text-gray-900 hover:text-blue-500">
                  Documentation
                </Link>
                <Link href="/loader-demo" className="px-3 py-2 text-sm font-medium text-gray-900 hover:text-blue-500">
                  Loaders
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbs} />
        </div>
      </section>

      {/* Section Title */}
      <section className="border-b border-gray-200 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          {description && <p className="mt-2 text-lg text-gray-600">{description}</p>}
        </div>
      </section>

      {/* Component Items */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {items.map((item) => (
              <Link key={item.slug} href={item.slug}>
                <div className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <div className="relative h-40 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={`/placeholder.svg?height=300&width=400&text=${item.title}`}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600">{item.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
