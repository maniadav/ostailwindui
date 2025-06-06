"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { components } from "@/lib/components";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { ComponentPreviewCard } from "@/components/component-preview-card";
import { PlaceholderComponent } from "@/components/placeholder-component";

interface ComponentPageProps {
  params: {
    category: string;
    section: string;
    slug: string[];
  };
}

export default function ComponentPage({ params }: ComponentPageProps) {
  const pathname = usePathname();
  const [breadcrumbs, setBreadcrumbs] = useState<
    { name: string; path: string }[]
  >([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    // Generate breadcrumbs based on the current path
    const pathSegments = pathname.split("/").filter(Boolean);
    const breadcrumbItems = pathSegments.map((segment, index) => {
      const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
      return {
        name: segment.replace(/-/g, " "),
        path,
      };
    });

    setBreadcrumbs(breadcrumbItems);

    // Find the current component details from the components object
    const category = Object.values(components).find(
      (cat) => cat.slug === `/${params.category}`
    );
    if (category) {
      const section = category.sections.find(
        (sec) => sec.slug === `/${params.category}/${params.section}`
      );
      if (section) {
        const componentSlug = `/${params.category}/${
          params.section
        }/${params.slug.join("/")}`;
        const component = section.items.find(
          (item) => item.slug === componentSlug
        );
        if (component) {
          setTitle(component.title);
          setDescription(component.desc);
        } else {
          setTitle(section.title);
          setDescription("");
        }
      } else {
        setTitle(category.title);
        setDescription(category.desc);
      }
    }
  }, [pathname, params]);

  // Generate placeholder components (3 for demonstration)
  const placeholderComponents = Array(3)
    .fill(null)
    .map((_, index) => ({
      id: index,
      title: `${title} Example ${index + 1}`,
      description: `This is a placeholder for ${title} component example ${
        index + 1
      }`,
      component: (
        <PlaceholderComponent
          title={`${title} Example ${index + 1}`}
          description={description}
        />
      ),
      code: `import { PlaceholderComponent } from "@/components/placeholder-component";`,
    }));

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
                <Link
                  href="/components"
                  className="px-3 py-2 text-sm font-medium text-gray-900 hover:text-blue-500"
                >
                  Components
                </Link>
                <Link
                  href="/templates"
                  className="px-3 py-2 text-sm font-medium text-gray-900 hover:text-blue-500"
                >
                  Templates
                </Link>
                <Link
                  href="/documentation"
                  className="px-3 py-2 text-sm font-medium text-gray-900 hover:text-blue-500"
                >
                  Documentation
                </Link>
                <Link
                  href="/loader-demo"
                  className="px-3 py-2 text-sm font-medium text-gray-900 hover:text-blue-500"
                >
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

      {/* Component Title */}
      <section className="border-b border-gray-200 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          {description && (
            <p className="mt-2 text-lg text-gray-600">{description}</p>
          )}
        </div>
      </section>

      {/* Component Examples */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {placeholderComponents.map((component) => (
            <ComponentPreviewCard
              key={component.id}
              title={component.title}
              description={component.description}
              component={component.component}
              code={component.code}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
