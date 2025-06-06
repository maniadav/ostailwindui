import { Button } from "@/components/ui/button"

interface PlaceholderComponentProps {
  title: string
  description?: string
}

export function PlaceholderComponent({ title, description }: PlaceholderComponentProps) {
  return (
    <div className="flex min-h-[200px] w-full flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 bg-gray-50 p-8 text-center">
      <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
      {description && <p className="mb-4 text-sm text-gray-600">{description}</p>}
      <Button variant="outline" size="sm">
        Example Button
      </Button>
    </div>
  )
}
