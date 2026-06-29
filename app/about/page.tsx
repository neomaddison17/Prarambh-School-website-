'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { SlideUp, SlideLeft, SlideRight, Scale } from '@/components/animations'
import { Heart, Target, Users, Lightbulb } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-background px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <SlideUp>
            <h1 className="text-4xl font-bold md:text-5xl">
              About{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Prarambh
              </span>
            </h1>
          </SlideUp>
          <SlideUp delay={0.1}>
            <p className="mt-6 text-lg text-foreground/70">
              Dedicated to nurturing young minds and building the foundation for lifelong learning
            </p>
          </SlideUp>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <SlideLeft className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold">Our Mission</h2>
                <p className="mt-4 text-foreground/70">
                  To provide a safe, nurturing, and stimulating environment where every child can explore,
                  learn, and grow at their own pace. We believe in the power of play-based learning and
                  individualized attention to unlock each child&apos;s unique potential.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold">Our Vision</h2>
                <p className="mt-4 text-foreground/70">
                  To be the most trusted preschool in the community, recognized for developing confident,
                  creative, and compassionate learners who are prepared to succeed in school and life.
                </p>
              </div>
            </SlideLeft>

            <SlideRight>
              <div className="grid gap-4">
                {[
                  {
                    icon: Heart,
                    title: 'Care & Compassion',
                    description: 'Every child feels loved and valued in our community.',
                  },
                  {
                    icon: Target,
                    title: 'Excellence',
                    description: 'We maintain the highest standards in education and safety.',
                  },
                  {
                    icon: Lightbulb,
                    title: 'Innovation',
                    description: 'We continuously improve our programs and methods.',
                  },
                  {
                    icon: Users,
                    title: 'Community',
                    description: 'We build strong partnerships with families and the community.',
                  },
                ].map((value, index) => (
                  <Scale key={index} delay={index * 0.1}>
                    <div className="rounded-lg bg-white p-4 shadow-sm">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                          <value.icon className="text-primary" size={24} />
                        </div>
                        <div>
                          <h3 className="font-bold">{value.title}</h3>
                          <p className="text-sm text-foreground/60">{value.description}</p>
                        </div>
                      </div>
                    </div>
                  </Scale>
                ))}
              </div>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SlideUp className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Our Leadership Team</h2>
            <p className="mt-4 text-lg text-foreground/60">
              Experienced educators committed to your child&apos;s development
            </p>
          </SlideUp>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Founder & Director',
                bio: '20+ years in early childhood education',
              },
              {
                name: 'Emily Rodriguez',
                role: 'Head of Curriculum',
                bio: 'Certified in play-based learning methodology',
              },
              {
                name: 'Michael Chen',
                role: 'Wellness Director',
                bio: 'Specialist in child development and nutrition',
              },
            ].map((member, index) => (
              <SlideUp key={index} delay={index * 0.1}>
                <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 p-6 text-center">
                  <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-gradient-to-br from-primary to-secondary"></div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary">{member.role}</p>
                  <p className="mt-2 text-sm text-foreground/60">{member.bio}</p>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <SlideUp className="mb-12 text-center">
            <h2 className="text-3xl font-bold">Our Story</h2>
          </SlideUp>

          <SlideUp delay={0.1} className="space-y-6 text-foreground/80">
            <p>
              Prarambh Preschool was founded in 2015 by Sarah Johnson, an educator with over 20 years of
              experience in early childhood development. Sarah&apos;s vision was simple but powerful: create a
              preschool where every child feels safe, valued, and excited to learn.
            </p>
            <p>
              What started as a small facility with just two classrooms has grown into a thriving learning
              community. Today, Prarambh serves families from all backgrounds, united by a shared belief
              in the transformative power of quality early education.
            </p>
            <p>
              Our approach has always been rooted in research. We blend proven methodologies with creative
              innovation, always keeping the child at the center of everything we do. Our teachers are not
              just educators—they are mentors, guides, and cheerleaders for every student.
            </p>
            <p>
              Over the years, we&apos;ve watched our graduates thrive in elementary school and beyond. Many parents
              return to tell us how the confidence, curiosity, and skills their children developed at Bright
              Minds have served them well. That&apos;s the impact we&apos;re proudest of.
            </p>
          </SlideUp>
        </div>
      </section>

      <Footer />
    </div>
  )
}
