'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Programs', href: '/programs' },
  { label: 'Facilities', href: '/facilities' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/20">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-8 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center text-primary">
          <div className="relative h-20 w-48 md:w-56">
            <Image
              src="/prarambh-logo.png"
              alt="Prarambh logo"
              fill
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="hidden rounded-full bg-primary px-6 py-2 font-medium text-white transition-transform hover:scale-105 md:inline-block"
        >
          Enroll Now
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="space-y-2 border-t border-border/20 px-4 py-4 bg-background/50">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block rounded-full bg-primary px-3 py-2 text-center font-medium text-white transition-colors hover:bg-opacity-90"
                onClick={() => setIsOpen(false)}
              >
                Enroll Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
