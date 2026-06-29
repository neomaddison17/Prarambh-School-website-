'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Heart, Share2, Send } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="flex items-center mb-4">
            <Link href="/">
              <Image
                src="/prarambh-logo.png"
                alt="Prarambh logo"
                width={96}
                height={48}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="transition-colors hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="transition-colors hover:text-primary">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 font-bold">Contact Us</h3>
            <div className="space-y-2 text-sm">
              <div className="flex gap-2">
                <Phone size={16} className="mt-0.5 flex-shrink-0 text-primary" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex gap-2">
                <Mail size={16} className="mt-0.5 flex-shrink-0 text-primary" />
                <span>hello@brightminds.com</span>
              </div>
              <div className="flex gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-primary" />
                <span>123 Learning Lane, Education City</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="mb-4 font-bold">Follow Us</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary transition-transform hover:scale-110"
                aria-label="Like us"
              >
                <Heart size={18} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary transition-transform hover:scale-110"
                aria-label="Share"
              >
                <Share2 size={18} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary transition-transform hover:scale-110"
                aria-label="Message"
              >
                <Send size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm text-gray-300">
          <p>&copy; 2024 Prarambh Preschool. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
