import Link from "next/link"
import Image from "next/image"
import { components } from "@/lib/components"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Card } from "@/components/ui/card"

export default function EcommercePage() {
  const breadcrumbs = [{ name: "ecommerce", path: "/ecommerce" }]

  const ecommerceData = components.ecommerce

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

      {/* Hero */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">{ecommerceData.title}</h1>
            <p className="mt-4 text-lg text-gray-600">{ecommerceData.desc}</p>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {ecommerceData.sections.map((section) => (
            <div key={section.slug} className="mb-16">
              <h2 className="mb-8 text-2xl font-bold text-gray-900">{section.title}</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {section.items.map((item) => (
                  <Link key={item.slug} href={item.slug}>
                    <Card className="h-full overflow-hidden transition-all duration-200 hover:shadow-lg">
                      <div className="relative h-40 w-full overflow-hidden bg-gray-100">
                        <Image
                          src={`/placeholder.svg?height=300&width=400&text=${item.title}`}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="mb-1 text-lg font-bold text-gray-900">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
