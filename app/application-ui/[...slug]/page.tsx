"use client";

import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
  useState,
} from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { components } from "@/lib/components";
import { slugComponentMap, componentMap } from "./components-map";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { ComponentPreviewCard } from "@/components/preview-card";

interface ComponentPageProps {
  params: {
    slug: string[];
  };
}

export default function ComponentPage({ params }: ComponentPageProps) {
  const pathname = usePathname();
  const [breadcrumbs, setBreadcrumbs] = useState<
    { name: string; path: string }[]
  >([]);
  const slugKey = params.slug.join("/");

  useEffect(() => {
    const pathSegments = pathname.split("/").filter(Boolean);
    const breadcrumbItems = pathSegments.map((segment, index) => {
      const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
      return {
        name: segment.replace(/-/g, " "),
        path,
      };
    });
    setBreadcrumbs(breadcrumbItems);
  }, [pathname]);

  console.log({ slugKey });
  const keys = slugComponentMap[slugKey] || [];
  const placeholderComponents = keys.map((key) => componentMap[key]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Tailwind<span className="text-blue-500">UI</span>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <Link
                  href="/components"
                  className="text-sm font-medium text-gray-900 hover:text-blue-500"
                >
                  Components
                </Link>
                <Link
                  href="/templates"
                  className="text-sm font-medium text-gray-900 hover:text-blue-500"
                >
                  Templates
                </Link>
                <Link
                  href="/documentation"
                  className="text-sm font-medium text-gray-900 hover:text-blue-500"
                >
                  Documentation
                </Link>
                <Link
                  href="/loader-demo"
                  className="text-sm font-medium text-gray-900 hover:text-blue-500"
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
          <h1 className="text-3xl font-bold text-gray-900">
            {slugKey.replace(/\//g, " → ")}
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            This page renders components based on the current URL slug.
          </p>
        </div>
      </section>

      {/* Component Examples */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {!placeholderComponents || placeholderComponents.length === 0 ? (
            <p className="text-gray-500">No components found for this path.</p>
          ) : (
            placeholderComponents.map((component, index) => (
              <ComponentPreviewCard
                key={index}
                title={component.title}
                description={component.description}
                component={component.component}
                code={component.code}
              />
            ))
          )}
        </div>
      </section>
    </div>
  );
}
