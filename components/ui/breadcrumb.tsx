import Link from "next/link"

interface BreadcrumbItem {
  name: string
  path: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex w-full flex-wrap items-center space-x-2 md:space-x-4">
        <li className="flex items-center">
          <Link href="/" className="text-sm font-medium text-mono-gray-500 hover:text-mono-black transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.path} className="flex items-center">
            <svg
              className="h-5 w-5 flex-shrink-0 text-mono-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
            </svg>
            <Link
              href={item.path}
              className={`ml-2 text-sm font-medium transition-colors ${
                index === items.length - 1
                  ? "text-mono-black hover:text-mono-gray-700"
                  : "text-mono-gray-500 hover:text-mono-black"
              }`}
              aria-current={index === items.length - 1 ? "page" : undefined}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  )
}

export const BreadcrumbList = () => null
export const BreadcrumbItem = () => null
export const BreadcrumbLink = () => null
export const BreadcrumbPage = () => null
export const BreadcrumbSeparator = () => null
export const BreadcrumbEllipsis = () => null
