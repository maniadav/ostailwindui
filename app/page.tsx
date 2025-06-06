"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { components } from "@/lib/components";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SpaceBackground } from "@/components/space-background";
// import { NetflixPricing } from "@/components/pricing/netflix-pricing"
// import { SpacePricing } from "@/components/pricing/space-pricing"
// import { NeonPricing } from "@/components/pricing/neon-pricing"
// import { AnimePricing } from "@/components/pricing/anime-pricing"
import {
  GitHubLogoIcon,
  MagnifyingGlassIcon,
  ArrowRightIcon,
  RocketIcon,
} from "@radix-ui/react-icons";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activePricingTab, setActivePricingTab] = useState("netflix");

  const breadcrumbs = [
    { name: "marketing", path: "/marketing" },
    { name: "application ui", path: "/application-ui" },
    { name: "ecommerce", path: "/ecommerce" },
  ];

  // Get the main categories from the components object
  const categories = [
    components.marketing,
    components.applicationUI,
    components.ecommerce,
  ];

  // Flatten all components for search
  const allComponents = categories.flatMap((category) =>
    category.sections.flatMap((section) =>
      section.items.map((item) => ({
        ...item,
        sectionTitle: section.title,
        categoryTitle: category.title,
      }))
    )
  );

  // Filter components based on search query
  const filteredComponents = searchQuery
    ? allComponents.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.sectionTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.categoryTitle.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  // const pricingTabs = [
  //   { id: "netflix", name: "Netflix Style", component: NetflixPricing },
  //   { id: "space", name: "Space Theme", component: SpacePricing },
  //   { id: "neon", name: "Neon Style", component: NeonPricing },
  //   { id: "anime", name: "Anime Style", component: AnimePricing },
  // ]

  // const ActivePricingComponent = pricingTabs.find((tab) => tab.id === activePricingTab)?.component || NetflixPricing

  return (
    <div className="min-h-screen bg-space-black relative overflow-hidden">
      <SpaceBackground />

      {/* Header */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-50 border-b border-space-gray-800 bg-space-black/80 backdrop-blur-md sticky top-0"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center group">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-2 rounded-lg border border-space-gray-700 bg-space-white/5 group-hover:bg-space-white/10 transition-all duration-300"
                >
                  <span className="text-2xl font-bold text-gray-900">
                    OSTailwind<span className="text-blue-500">UI</span>{" "}
                  </span>
                </motion.div>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-1">
                {["Components", "Templates", "Documentation", "Loaders"].map(
                  (item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={
                          item === "Loaders"
                            ? "/loader-demo"
                            : `/${item.toLowerCase()}`
                        }
                        className="px-4 py-2 text-sm font-medium text-space-gray-300 hover:text-space-white hover:bg-space-white/10 rounded-lg transition-all duration-200"
                      >
                        {item}
                      </Link>
                    </motion.div>
                  )
                )}
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link
                  href="https://github.com/ostailwindui/components"
                  className="p-2 text-space-gray-400 hover:text-space-white transition-colors rounded-lg hover:bg-space-white/10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubLogoIcon className="h-5 w-5" />
                </Link>
              </motion.div>
              <Button
                variant="outline"
                className="hidden md:inline-flex btn-secondary"
              >
                Sign in
              </Button>
              <Button className="btn-primary">
                <RocketIcon className="mr-2 h-4 w-4" />
                Get started
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mb-6 inline-flex items-center rounded-full border border-space-gray-700 bg-space-white/5 px-4 py-2 text-sm font-medium text-space-gray-300 backdrop-blur-sm"
              >
                <span className="mr-2">✨</span>
                OPEN SOURCE UI COMPONENTS
              </motion.div>
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mb-6 text-4xl font-extrabold tracking-tight text-space-white sm:text-5xl lg:text-6xl"
              >
                Beautiful UI components,{" "}
                <span className="text-glow">crafted with Tailwind CSS</span>
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mb-8 text-lg text-space-gray-400 leading-relaxed"
              >
                Over 500+ professionally designed, fully responsive, expertly
                crafted component examples you can drop into your Tailwind
                projects and customize to your heart's content. 100% open source
                and free to use.
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-wrap gap-4"
              >
                <Button size="lg" className="btn-primary group">
                  Browse components
                  <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Link
                  href="https://github.com/ostailwindui/components"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="btn-secondary flex items-center gap-2"
                  >
                    <GitHubLogoIcon className="h-5 w-5" />
                    Contribute on GitHub
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative h-[400px] w-full overflow-hidden rounded-2xl border border-space-gray-700 bg-gradient-to-br from-space-white/5 to-space-gray-900/20 shadow-space-xl backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-space-white/5 to-space-gray-900/10" />
                <Image
                  src="/placeholder.svg?height=800&width=600&text=Space+UI+Preview"
                  alt="UI Components Preview"
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 border border-space-gray-600 rounded-2xl" />
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10], rotate: [0, 180, 360] }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl border border-space-gray-700 bg-space-white/5 backdrop-blur-sm shadow-space-lg"
              />
              <motion.div
                animate={{ y: [10, -10, 10], rotate: [360, 180, 0] }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -left-4 w-16 h-16 rounded-xl border border-space-gray-700 bg-space-gray-800/50 backdrop-blur-sm shadow-space-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation & Search Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="border-y border-space-gray-800 bg-space-gray-950/30 backdrop-blur-sm relative z-10"
      >
        <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div className="order-2 lg:order-1">
              <Breadcrumb items={breadcrumbs} />
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-space-gray-500" />
              </div>
              <Input
                type="search"
                placeholder="Search components..."
                className="pl-12 w-full border-space-gray-700 bg-space-black/50 text-space-white placeholder:text-space-gray-500 rounded-lg backdrop-blur-sm focus:border-space-gray-600 focus:ring-space-white/20"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Search Results */}
      {searchQuery && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-12 border-b border-space-gray-800 bg-space-gray-950/20 relative z-10"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 p-6 rounded-xl border border-space-gray-700 bg-space-black/50 backdrop-blur-sm">
              <h2 className="text-xl font-semibold text-space-white mb-2">
                Search Results for "{searchQuery}"
              </h2>
              <p className="text-space-gray-400">
                {filteredComponents.length} component
                {filteredComponents.length !== 1 ? "s" : ""} found
              </p>
            </div>
            {filteredComponents.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredComponents.map((item, index) => (
                  <motion.div
                    key={item.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <Link href={item.slug}>
                      <div className="card-glass group hover:border-space-gray-600 transition-all duration-300">
                        <div className="relative h-40 w-full overflow-hidden bg-gradient-to-br from-space-gray-800/50 to-space-gray-900/50">
                          <Image
                            src={`/placeholder.svg?height=300&width=400&text=${item.title}`}
                            alt={item.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-space-black/20 to-transparent" />
                        </div>
                        <div className="p-5">
                          <div className="text-xs font-medium text-space-gray-500 mb-2 uppercase tracking-wider">
                            {item.categoryTitle} / {item.sectionTitle}
                          </div>
                          <h3 className="text-lg font-semibold text-space-white group-hover:text-glow transition-all duration-300 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-sm text-space-gray-400">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full border border-space-gray-700 bg-space-white/5 flex items-center justify-center">
                  <MagnifyingGlassIcon className="h-8 w-8 text-space-gray-600" />
                </div>
                <p className="text-space-gray-400 text-lg">
                  No components found matching your search.
                </p>
              </div>
            )}
          </div>
        </motion.section>
      )}

      {/* Pricing Section */}

      {/* Featured Categories */}
      <section className="py-20 bg-gradient-to-b from-space-black to-space-gray-950 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-space-white mb-4">
              Explore Component Categories
            </h2>
            <p className="text-lg text-space-gray-400 max-w-2xl mx-auto">
              Discover our comprehensive collection of UI components organized
              by category
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + categoryIndex * 0.2, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <Link href={category.slug}>
                  <div className="card-space h-full p-8 group-hover:shadow-glow-white transition-all duration-500">
                    <div className="mb-6">
                      <motion.div
                        animate={{
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                        className="w-16 h-16 rounded-xl border border-space-gray-700 bg-space-white/10 flex items-center justify-center mb-6 group-hover:bg-space-white/20 transition-colors"
                      >
                        <span className="text-3xl">
                          {categoryIndex === 0
                            ? "🎯"
                            : categoryIndex === 1
                            ? "⚡"
                            : "🛒"}
                        </span>
                      </motion.div>
                      <h3 className="text-2xl font-bold text-space-white group-hover:text-glow transition-all duration-300 mb-3">
                        {category.title}
                      </h3>
                      <p className="text-space-gray-400 leading-relaxed mb-4">
                        {category.desc}
                      </p>
                    </div>
                    <div className="flex items-center text-space-gray-300 group-hover:text-space-white transition-colors">
                      <span className="text-sm font-medium">
                        Explore {category.sections.length} sections
                      </span>
                      <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="relative bg-gradient-to-r from-space-gray-900 via-space-black to-space-gray-900 py-20 border-t border-space-gray-800 overflow-hidden"
      >
        {/* Animated Background Elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-10 right-10 w-32 h-32 border border-space-gray-700 rounded-full opacity-20"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-10 left-10 w-24 h-24 border border-space-gray-600 rounded-full opacity-30"
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.2, duration: 0.5 }}
              className="mb-6 text-4xl font-bold text-space-white sm:text-5xl text-glow"
            >
              Ready to build your next project?
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.4, duration: 0.5 }}
              className="mb-10 text-xl text-space-gray-400 leading-relaxed"
            >
              Get started with our open-source Tailwind CSS components and build
              beautiful interfaces in minutes.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.6, duration: 0.5 }}
              className="flex flex-wrap justify-center gap-6"
            >
              <Button size="lg" className="btn-primary text-lg px-8 py-4 group">
                Browse components
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link
                href="https://github.com/ostailwindui/components"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="btn-secondary flex items-center gap-2 text-lg px-8 py-4"
                >
                  <GitHubLogoIcon className="h-5 w-5" />
                  Star on GitHub
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-space-black border-t border-space-gray-800 py-16 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
            <div className="md:col-span-1">
              <div className="p-3 rounded-xl border border-space-gray-700 bg-space-white/5 inline-block mb-6">
                <h3 className="text-xl font-bold text-space-white">
                  Tailwind<span className="text-space-gray-400">UI</span>
                </h3>
              </div>
              <p className="text-space-gray-400 leading-relaxed mb-6">
                Beautiful UI components crafted with Tailwind CSS. Open source
                and free to use.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://github.com/ostailwindui/components"
                  className="p-2 text-space-gray-400 hover:text-space-white transition-colors rounded-lg hover:bg-space-white/10 border border-space-gray-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubLogoIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {[
              {
                title: "Resources",
                links: [
                  { name: "Documentation", href: "#" },
                  { name: "Components", href: "#" },
                  { name: "Templates", href: "#" },
                  { name: "Loaders", href: "/loader-demo" },
                ],
              },
              {
                title: "Community",
                links: [
                  { name: "GitHub", href: "#" },
                  { name: "Discord", href: "#" },
                  { name: "Twitter", href: "#" },
                  { name: "Blog", href: "#" },
                ],
              },
              {
                title: "Legal",
                links: [
                  { name: "Privacy Policy", href: "#" },
                  { name: "Terms of Service", href: "#" },
                  { name: "License", href: "#" },
                  { name: "Support", href: "#" },
                ],
              },
            ].map((section, index) => (
              <div key={section.title}>
                <h3 className="text-lg font-semibold text-space-white mb-6">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-space-gray-400 hover:text-space-white transition-colors hover:underline"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-space-gray-800 text-center">
            <p className="text-space-gray-500">
              © {new Date().getFullYear()} ostailwindui. All rights reserved.
              Built with ❤️ and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
