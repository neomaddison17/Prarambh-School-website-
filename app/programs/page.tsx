'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { SlideUp, SlideLeft, SlideRight, Scale } from '@/components/animations'
import { CheckCircle } from 'lucide-react'

export default function Programs() {
  const programs = [
    {
      age: '2-3 Years',
      name: 'Tiny Explorers',
      description:
        'Our foundational program introduces toddlers to group settings with a focus on comfort, trust, and early social skills.',
      color: 'from-primary to-primary/70',
      highlights: [
        'Sensory exploration activities',
        'Separation anxiety support',
        'Introduction to routines',
        'Music and movement',
        'Parent communication logs',
      ],
      schedule: 'Morning (9am-12pm) & Afternoon (1pm-4pm)',
      ratio: '1:6 (Teacher to Student)',
    },
    {
      age: '3-4 Years',
      name: 'Discovery Kids',
      description:
        'Building on social foundations, this program introduces structured learning with early literacy and numeracy concepts.',
      color: 'from-secondary to-secondary/70',
      highlights: [
        'Letter and number recognition',
        'Small group instruction',
        'Art and creative expression',
        'Outdoor exploration',
        'Circle time discussions',
      ],
      schedule: 'Full-day (8:30am-3:30pm) available',
      ratio: '1:8 (Teacher to Student)',
    },
    {
      age: '4-5 Years',
      name: 'Bright Learners',
      description:
        'Our advanced program prepares children for kindergarten with enhanced academics, projects, and leadership development.',
      color: 'from-accent to-accent/70',
      highlights: [
        'Pre-literacy skills',
        'Math concepts and problem-solving',
        'Science experiments',
        'Leadership projects',
        'Field trips and community',
      ],
      schedule: 'Full-day (8:30am-3:30pm)',
      ratio: '1:10 (Teacher to Student)',
    },
  ]

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
                Programs
              </span>
            </h1>
          </SlideUp>
          <SlideUp delay={0.1}>
            <p className="mt-6 text-lg text-foreground/70">
              Each program is thoughtfully designed for your child&apos;s developmental stage
            </p>
          </SlideUp>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-12">
            {programs.map((program, index) => (
              <SlideUp key={index} delay={index * 0.1}>
                <div className="grid gap-8 overflow-hidden rounded-3xl bg-white md:grid-cols-2">
                  {/* Left Side - Info */}
                  <div className="p-8 md:p-12">
                    <span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                      {program.age}
                    </span>
                    <h2 className="mt-4 text-3xl font-bold">{program.name}</h2>
                    <p className="mt-4 text-foreground/70">{program.description}</p>

                    <div className="mt-8 space-y-3">
                      <h3 className="font-bold">Program Highlights:</h3>
                      {program.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-sm text-foreground/70">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 space-y-3 border-t pt-6">
                      <div>
                        <p className="text-sm font-semibold text-foreground/60">Schedule</p>
                        <p className="text-foreground">{program.schedule}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground/60">Teacher to Student Ratio</p>
                        <p className="text-foreground">{program.ratio}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Visual */}
                  <div className={`bg-gradient-to-br ${program.color} relative overflow-hidden p-8 md:p-12`}>
                    <div className="relative z-10 h-full flex flex-col justify-center text-white">
                      <div className="mb-6 text-6xl font-bold opacity-20">{program.age.split('-')[0]}</div>
                      <p className="text-lg font-semibold">Tailored for this age group</p>
                      <p className="mt-2 text-white/80">
                        Developmentally appropriate activities and learning outcomes
                      </p>
                      <button className="mt-8 inline-block rounded-full bg-white px-6 py-3 font-semibold text-foreground transition-transform hover:scale-105 w-fit">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="bg-white px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SlideUp className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">What We Teach</h2>
            <p className="mt-4 text-lg text-foreground/60">
              Our comprehensive curriculum addresses all areas of child development
            </p>
          </SlideUp>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Cognitive Development',
                items: [
                  'Problem-solving skills',
                  'Critical thinking',
                  'Early literacy and numeracy',
                  'Science exploration',
                ],
              },
              {
                title: 'Social & Emotional',
                items: [
                  'Emotional regulation',
                  'Friendship building',
                  'Empathy and kindness',
                  'Conflict resolution',
                ],
              },
              {
                title: 'Physical Development',
                items: [
                  'Fine motor skills',
                  'Gross motor development',
                  'Sports and games',
                  'Health and wellness',
                ],
              },
              {
                title: 'Creative Expression',
                items: [
                  'Art and painting',
                  'Music and rhythm',
                  'Dance and movement',
                  'Imaginative play',
                ],
              },
              {
                title: 'Language Skills',
                items: [
                  'Communication',
                  'Vocabulary building',
                  'Listening skills',
                  'Storytelling',
                ],
              },
              {
                title: 'Life Skills',
                items: [
                  'Independence',
                  'Self-care routines',
                  'Cooperation',
                  'Responsibility',
                ],
              },
            ].map((area, index) => (
              <Scale key={index} delay={index * 0.05}>
                <div className="rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 p-6">
                  <h3 className="mb-4 text-xl font-bold text-primary">{area.title}</h3>
                  <ul className="space-y-2">
                    {area.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-foreground/70">
                        <span className="h-2 w-2 rounded-full bg-secondary"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Scale>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Schedule Sample */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <SlideUp className="mb-12 text-center">
            <h2 className="text-3xl font-bold">Sample Daily Schedule</h2>
            <p className="mt-4 text-foreground/60">(Discovery Kids Program)</p>
          </SlideUp>

          <SlideUp delay={0.1} className="space-y-4 rounded-2xl bg-white p-8 shadow-sm">
            {[
              { time: '8:30 - 9:00', activity: 'Arrival & Free Play' },
              { time: '9:00 - 9:30', activity: 'Circle Time & Morning Meeting' },
              { time: '9:30 - 10:15', activity: 'Structured Learning Activity' },
              { time: '10:15 - 10:45', activity: 'Snack & Outdoor Play' },
              { time: '10:45 - 11:45', activity: 'Centers & Small Group Instruction' },
              { time: '11:45 - 12:15', activity: 'Lunch' },
              { time: '12:15 - 1:00', activity: 'Quiet Time / Rest' },
              { time: '1:00 - 2:00', activity: 'Art, Music, or Movement' },
              { time: '2:00 - 2:30', activity: 'Afternoon Snack & Play' },
              { time: '2:30 - 3:00', activity: 'Closing Circle & Pickup' },
            ].map((item, index) => (
              <div key={index} className="flex gap-6 border-b pb-4 last:border-0">
                <div className="w-32 font-semibold text-primary">{item.time}</div>
                <div className="text-foreground/70">{item.activity}</div>
              </div>
            ))}
          </SlideUp>
        </div>
      </section>

      <Footer />
    </div>
  )
}
