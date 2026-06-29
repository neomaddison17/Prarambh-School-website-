'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { SlideUp, SlideLeft, SlideRight, Scale } from '@/components/animations'
import { Shield, Trees, Utensils, BookOpen, Droplet, Wind } from 'lucide-react'

export default function Facilities() {
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
                Facilities
              </span>
            </h1>
          </SlideUp>
          <SlideUp delay={0.1}>
            <p className="mt-6 text-lg text-foreground/70">
              State-of-the-art spaces designed for learning, safety, and play
            </p>
          </SlideUp>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                icon: BookOpen,
                title: 'Classrooms',
                description:
                  'Bright, spacious classrooms with natural lighting, temperature control, and learning centers tailored to each age group.',
              },
              {
                icon: Trees,
                title: 'Outdoor Play Area',
                description:
                  'Secure, landscaped outdoor space with age-appropriate play equipment, gardens, and shaded areas for exploration.',
              },
              {
                icon: Utensils,
                title: 'Kitchen & Dining',
                description:
                  'Professional kitchen serving nutritious, balanced meals prepared fresh daily. Accommodations for dietary needs.',
              },
              {
                icon: Droplet,
                title: 'Bathrooms & Changing Stations',
                description:
                  'Clean, accessible facilities with appropriate fixtures for each age group and training on proper hygiene.',
              },
              {
                icon: Wind,
                title: 'Air Quality & HVAC',
                description:
                  'Advanced ventilation system ensuring clean air circulation throughout the facility for health and comfort.',
              },
              {
                icon: Shield,
                title: 'Security',
                description:
                  'Controlled entry/exit points, security cameras, and strict visitor policies to keep children safe.',
              },
            ].map((facility, index) => (
              <SlideUp key={index} delay={index * 0.08}>
                <div className="rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-lg">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <facility.icon className="text-primary" size={28} />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{facility.title}</h3>
                  <p className="text-foreground/70">{facility.description}</p>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* Spaces Detail */}
      <section className="bg-white px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SlideUp className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Specialized Learning Spaces</h2>
          </SlideUp>

          <div className="space-y-12">
            {[
              {
                name: 'Art Studio',
                description:
                  'A dedicated space for creative expression with paints, markers, clay, collage materials, and an oven for pottery. Teachers encourage imagination and experimentation.',
              },
              {
                name: 'Music & Movement Room',
                description:
                  'Large open space with musical instruments, speaker system, and dance materials. Perfect for rhythm exploration, movement activities, and group performances.',
              },
              {
                name: 'Science Lab',
                description:
                  'Hands-on exploration space with natural materials, magnifiers, simple experiments, and discovery stations. Children learn through observation and play.',
              },
              {
                name: 'Library Corner',
                description:
                  'Cozy reading area with hundreds of age-appropriate books, comfortable seating, and storytelling space. We foster a love of reading and language development.',
              },
              {
                name: 'Tech Corner',
                description:
                  'Tablets and computers with educational software for coding basics, digital art, and learning games. Technology is used as a tool, not a replacement for play.',
              },
              {
                name: 'Sensory Room',
                description:
                  'Calming space with sensory materials, light tables, sound exploration, and quiet areas for children to regulate emotions and explore their senses.',
              },
            ].map((space, index) => (
              <SlideUp key={index} delay={index * 0.08}>
                <div className="rounded-xl border-2 border-primary/20 p-6 hover:border-primary/40">
                  <h3 className="text-xl font-bold text-primary">{space.name}</h3>
                  <p className="mt-2 text-foreground/70">{space.description}</p>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Health Standards */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SlideUp className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Safety & Health Standards</h2>
            <p className="mt-4 text-lg text-foreground/60">
              Your child&apos;s safety and wellbeing is our top priority
            </p>
          </SlideUp>

          <div className="grid gap-8 md:grid-cols-2">
            <SlideUp delay={0.1} className="space-y-4 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 p-8">
              <h3 className="text-xl font-bold">Safety Protocols</h3>
              <ul className="space-y-2">
                {[
                  'Emergency exits and evacuation procedures',
                  'Fire safety equipment and drills',
                  'First aid and CPR trained staff',
                  'Incident documentation and reporting',
                  'Child-proofing throughout facility',
                  'Secure storage of hazardous materials',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary"></span>
                    <span className="text-foreground/70">{item}</span>
                  </li>
                ))}
              </ul>
            </SlideUp>

            <SlideUp delay={0.15} className="space-y-4 rounded-2xl bg-gradient-to-br from-secondary/5 to-accent/5 p-8">
              <h3 className="text-xl font-bold">Health Policies</h3>
              <ul className="space-y-2">
                {[
                  'Daily health checks upon arrival',
                  'Illness exclusion policies',
                  'Vaccination requirements',
                  'Hand hygiene and sanitation',
                  'Regular facility cleaning and disinfection',
                  'Health records and emergency contacts',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-secondary"></span>
                    <span className="text-foreground/70">{item}</span>
                  </li>
                ))}
              </ul>
            </SlideUp>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-secondary px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <SlideUp className="space-y-6">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Ready to Tour Our Facilities?
            </h2>
            <p className="text-lg text-white/90">
              Schedule a visit and see our state-of-the-art facilities in person
            </p>
            <a
              href="/contact"
              className="inline-block rounded-full bg-white px-8 py-3 font-semibold text-primary transition-all hover:shadow-lg"
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
