'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { SlideUp, Scale } from '@/components/animations'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Jennifer Martinez',
    role: 'Parent of Emma (Tiny Explorers)',
    image: '👩',
    text: "Prarambh has been such a wonderful experience for Emma. The teachers are caring, attentive, and really know each child. Emma comes home excited about what she learned!",
    rating: 5,
  },
  {
    name: 'David Chen',
    role: 'Parent of Liam (Discovery Kids)',
    image: '👨',
    text: "My son has grown so much in confidence and independence since joining Prarambh. The play-based approach really works. We're so grateful for this school.",
    rating: 5,
  },
  {
    name: 'Lisa Thompson',
    role: 'Parent of Sophie (Bright Learners)',
    image: '👩',
    text: "Sophie is thriving at Prarambh! She's learned so much academically, but more importantly, she's developed wonderful social skills and a love of learning.",
    rating: 5,
  },
  {
    name: 'Marcus Johnson',
    role: 'Parent of Maya (Discovery Kids)',
    image: '👨',
    text: 'The communication between teachers and parents is excellent. I always know what Maya is learning and how I can support her at home. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Sarah Lee',
    role: 'Parent of Noah (Tiny Explorers)',
    image: '👩',
    text: "Prarambh feels like an extension of our family. Noah loves his teachers and his friends. The facility is clean, safe, and full of learning opportunities.",
    rating: 5,
  },
  {
    name: 'Robert Williams',
    role: 'Parent of Ava (Bright Learners)',
    image: '👨',
    text: "We chose Prarambh for kindergarten prep, and Ava is well-prepared and confident. The curriculum is well-rounded and engaging. Thank you!",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-background px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <SlideUp>
            <h1 className="text-4xl font-bold md:text-5xl">
              What Parents{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Say About Us
              </span>
            </h1>
          </SlideUp>
          <SlideUp delay={0.1}>
            <p className="mt-6 text-lg text-foreground/70">
              Real stories from families in our community
            </p>
          </SlideUp>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { stat: '500+', label: 'Happy Families' },
              { stat: '95%', label: 'Parent Satisfaction' },
              { stat: '15+', label: 'Years of Excellence' },
            ].map((item, index) => (
              <SlideUp key={index} delay={index * 0.1}>
                <div className="text-center rounded-2xl bg-white p-8 shadow-sm">
                  <div className="text-4xl font-bold text-primary">{item.stat}</div>
                  <p className="mt-2 text-foreground/70">{item.label}</p>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="bg-white px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SlideUp className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Testimonials</h2>
          </SlideUp>

          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <Scale key={index} delay={index * 0.08}>
                <div className="rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 p-8 shadow-sm transition-all hover:shadow-lg">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} className="fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-lg text-foreground/80 mb-6">"{testimonial.text}"</p>

                  {/* Author */}
                  <div className="flex items-center gap-4 border-t pt-4">
                    <div className="text-3xl">{testimonial.image}</div>
                    <div>
                      <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-foreground/60">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </Scale>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-secondary px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <SlideUp className="space-y-6">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Join Our Community Today
            </h2>
            <p className="text-lg text-white/90">
              Give your child the Prarambh preschool experience
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a
                href="/contact"
                className="inline-block rounded-full bg-white px-8 py-3 font-semibold text-primary transition-all hover:shadow-lg"
              >
                Schedule a Tour
              </a>
              <a
                href="/about"
                className="inline-block rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                Learn More
              </a>
            </div>
          </SlideUp>
        </div>
      </section>

      <Footer />
    </div>
  )
}
