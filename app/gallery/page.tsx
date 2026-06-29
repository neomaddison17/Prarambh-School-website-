'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { SlideUp, Scale } from '@/components/animations'
import { X } from 'lucide-react'

const galleryItems = [
  { id: 1, category: 'Activities', title: 'Art Class Fun', description: 'Children exploring colors and creativity' },
  { id: 2, category: 'Learning', title: 'Science Experiment', description: 'Hands-on learning with natural materials' },
  { id: 3, category: 'Play', title: 'Outdoor Adventures', description: 'Having fun on the playground' },
  { id: 4, category: 'Activities', title: 'Music Time', description: 'Group music and rhythm activities' },
  { id: 5, category: 'Learning', title: 'Reading Circle', description: 'Story time with friends' },
  { id: 6, category: 'Social', title: 'Lunch Together', description: 'Sharing meals and conversations' },
  { id: 7, category: 'Play', title: 'Water Play', description: 'Summer water exploration' },
  { id: 8, category: 'Events', title: 'Graduation Day', description: 'Celebrating milestones' },
  { id: 9, category: 'Social', title: 'Community Games', description: 'Team games and cooperation' },
]

const categories = ['All', 'Activities', 'Learning', 'Play', 'Social', 'Events']

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<(typeof galleryItems)[0] | null>(null)

  const filteredItems =
    selectedCategory === 'All' ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-background px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <SlideUp>
            <h1 className="text-4xl font-bold md:text-5xl">
              Our{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Gallery
              </span>
            </h1>
          </SlideUp>
          <SlideUp delay={0.1}>
            <p className="mt-6 text-lg text-foreground/70">
              Moments of joy, learning, and growth at Prarambh
            </p>
          </SlideUp>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="px-4 py-8 md:py-12">
        <div className="mx-auto max-w-7xl">
          <SlideUp className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-6 py-2 font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                    : 'bg-white text-foreground hover:bg-primary/10'
                }`}
              >
                {category}
              </button>
            ))}
          </SlideUp>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            {filteredItems.map((item, index) => (
              <Scale key={item.id} delay={index * 0.05}>
                <div
                  onClick={() => setSelectedImage(item)}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 aspect-square"
                >
                  {/* Image Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                    <div className="text-center">
                      <div className="text-4xl mb-2">📸</div>
                      <p className="text-sm text-foreground/50 px-4">{item.title}</p>
                    </div>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 transition-all group-hover:bg-black/40 flex items-end">
                    <div className="w-full translate-y-8 transition-transform group-hover:translate-y-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
                      <h3 className="font-bold">{item.title}</h3>
                      <p className="text-sm text-white/80">{item.description}</p>
                    </div>
                  </div>
                </div>
              </Scale>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative w-full max-w-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
              aria-label="Close"
            >
              <X size={32} />
            </button>

            {/* Modal Content */}
            <div className="rounded-2xl bg-white overflow-hidden">
              <div className="relative h-96 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-6xl">📸</div>
              </div>
              <div className="p-8">
                <div className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                  {selectedImage.category}
                </div>
                <h2 className="mt-4 text-2xl font-bold">{selectedImage.title}</h2>
                <p className="mt-2 text-foreground/70">{selectedImage.description}</p>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="mt-6 rounded-lg bg-primary px-6 py-2 font-semibold text-white transition-all hover:shadow-lg"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="bg-white px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <SlideUp className="space-y-6">
            <h2 className="text-3xl font-bold md:text-4xl">Want to see more?</h2>
            <p className="text-lg text-foreground/60">
              Schedule a tour and experience Prarambh firsthand
            </p>
            <a
              href="/contact"
              className="inline-block rounded-full bg-primary px-8 py-3 font-semibold text-white transition-all hover:shadow-lg"
            >
              Schedule a Tour
            </a>
          </SlideUp>
        </div>
      </section>

      <Footer />
    </div>
  )
}
