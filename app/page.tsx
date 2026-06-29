'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { SlideUp, SlideLeft, SlideRight, Scale, Bounce } from '@/components/animations'
import { ArrowRight, BookOpen, Users, Smile, Award } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 md:py-32">
        {/* Decorative rounded shapes - like reference image */}
        <div className="absolute top-20 right-0 w-80 h-80 bg-primary/20 rounded-full -mr-40"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/15 rounded-full -ml-40"></div>
        <div className="absolute top-1/2 right-1/4 w-60 h-60 bg-accent/15 rounded-full"></div>
        
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            {/* Left Content */}
            <SlideLeft className="space-y-8">
              <SlideUp delay={0.1}>
                <span className="inline-block rounded-full bg-primary/20 px-6 py-2 text-sm font-black text-primary">
                  ✨ WELCOME TO LEARNING
                </span>
              </SlideUp>
              <SlideUp delay={0.2}>
                <h1 className="text-balance text-6xl md:text-7xl font-black leading-tight">
                  Where Little Minds{' '}
                  <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    Grow & Shine
                  </span>
                </h1>
              </SlideUp>
              <SlideUp delay={0.3}>
                <p className="text-xl text-foreground/80 leading-relaxed">
                  At Prarambh Preschool, we believe every child is unique. Our play-based learning approach combines creativity, exploration, and social development to give your child the best start.
                </p>
              </SlideUp>
              <SlideUp delay={0.4} className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/enrollment"
                  className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-primary to-primary/90 px-8 py-4 font-black text-white text-lg transition-all hover:shadow-2xl hover:shadow-primary/50 hover:scale-110 active:scale-95"
                >
                  Enroll Today <ArrowRight size={22} />
                </Link>
                <Link
                  href="/about"
                  className="rounded-2xl border-3 border-primary px-8 py-4 font-black text-primary text-lg transition-all hover:bg-primary hover:text-white hover:scale-105 active:scale-95"
                >
                  Learn More
                </Link>
              </SlideUp>
            </SlideLeft>

            {/* Right Image */}
            <SlideRight className="relative h-96 md:h-[520px]">
              <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl border-8 border-white/50">
                <Image
                  src="/hero.jpg"
                  alt="Happy children at Prarambh Preschool"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative px-4 py-20 md:py-32">
        {/* Decorative shape */}
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-secondary/10 rounded-full -ml-48"></div>
        
        <div className="mx-auto max-w-7xl relative z-10">
          <SlideUp className="mb-16 text-center">
            <h2 className="text-5xl md:text-6xl font-black">Why Choose Prarambh?</h2>
            <p className="mt-6 text-xl text-foreground/70">
              We provide a nurturing environment with expert care and innovative learning methods
            </p>
          </SlideUp>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                icon: BookOpen,
                title: 'Play-Based Learning',
                description: 'Learning through play encourages creativity, problem-solving, and natural curiosity.',
                color: 'from-primary/20 to-primary/5',
              },
              {
                icon: Users,
                title: 'Social Development',
                description: 'We foster friendships, teamwork, and emotional intelligence in every activity.',
                color: 'from-secondary/20 to-secondary/5',
              },
              {
                icon: Smile,
                title: 'Caring Teachers',
                description: 'Our experienced educators provide individualized attention and support.',
                color: 'from-accent/20 to-accent/5',
              },
              {
                icon: Award,
                title: 'Certified Programs',
                description: 'All programs follow national early education standards and best practices.',
                color: 'from-primary/10 to-secondary/10',
              },
            ].map((feature, index) => (
              <Scale key={index} delay={index * 0.1}>
                <div className={`rounded-3xl bg-gradient-to-br ${feature.color} backdrop-blur-sm border-2 border-white/60 p-8 text-center shadow-lg transition-all hover:shadow-2xl hover:scale-105 hover:-translate-y-2`}>
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-md">
                    <feature.icon className="text-primary" size={40} />
                  </div>
                  <h3 className="mb-3 text-2xl font-black">{feature.title}</h3>
                  <p className="text-base text-foreground/70 leading-relaxed">{feature.description}</p>
                </div>
              </Scale>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Preview Section */}
      <section className="px-4 py-20 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SlideUp className="mb-16 text-center">
            <h2 className="text-5xl md:text-6xl font-black">Our Programs</h2>
            <p className="mt-6 text-xl text-foreground/70">
              Tailored programs for every age and developmental stage
            </p>
          </SlideUp>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                age: '2-3 Years',
                name: 'Tiny Explorers',
                description: 'Introduction to group settings, basic social skills, and sensory exploration.',
                color: 'from-primary via-primary to-primary/80',
                icon: '🧒',
              },
              {
                age: '3-4 Years',
                name: 'Discovery Kids',
                description: 'Structured learning with more independence, early literacy, and number skills.',
                color: 'from-secondary via-secondary to-secondary/80',
                icon: '👧',
              },
              {
                age: '4-5 Years',
                name: 'Bright Learners',
                description: 'Kindergarten preparation with advanced academics, projects, and leadership skills.',
                color: 'from-accent via-accent to-accent/80',
                icon: '🎓',
              },
            ].map((program, index) => (
              <SlideUp key={index} delay={index * 0.1}>
                <div className={`relative group cursor-pointer rounded-3xl bg-gradient-to-br ${program.color} p-8 text-white transition-all hover:shadow-2xl hover:scale-105 overflow-hidden`}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-white transition-opacity"></div>
                  <div className="relative z-10">
                    <div className="text-5xl mb-4">{program.icon}</div>
                    <span className="inline-block rounded-full bg-white/30 px-4 py-1 text-sm font-black backdrop-blur-sm">
                      {program.age}
                    </span>
                    <h3 className="mt-6 text-3xl font-black">{program.name}</h3>
                    <p className="mt-4 text-white/90 text-lg leading-relaxed">{program.description}</p>
                    <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-black text-primary transition-all hover:shadow-lg hover:scale-110 active:scale-95">
                      Learn More <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </SlideUp>
            ))}
          </div>

          <SlideUp delay={0.3} className="mt-16 text-center">
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 rounded-full border-3 border-primary px-8 py-4 font-black text-primary text-lg transition-all hover:bg-primary hover:text-white hover:scale-105 active:scale-95"
            >
              View All Programs <ArrowRight size={20} />
            </Link>
          </SlideUp>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary via-secondary to-accent px-4 py-20 md:py-32">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full -ml-36 -mb-36"></div>
        
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <SlideUp className="space-y-8">
            <h2 className="text-5xl md:text-6xl font-black text-white">
              Ready to Start Your Child&apos;s Journey?
            </h2>
            <p className="text-2xl text-white/95 leading-relaxed">
              Schedule a tour today and see why parents love Prarambh Preschool
            </p>
            <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 pt-6">
              <Link
                href="/enrollment"
                className="rounded-2xl bg-white px-10 py-4 font-black text-primary text-lg transition-all hover:shadow-2xl hover:scale-110 active:scale-95"
              >
                Schedule a Tour
              </Link>
              <a
                href="tel:(555) 123-4567"
                className="rounded-2xl border-3 border-white px-10 py-4 font-black text-white text-lg transition-all hover:bg-white hover:text-primary hover:scale-110 active:scale-95"
              >
                Call Us Now
              </a>
            </div>
          </SlideUp>
        </div>
      </section>

      <Footer />
    </div>
  )
}
