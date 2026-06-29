'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { SlideUp, SlideLeft, SlideRight } from '@/components/animations'
import { CheckCircle, Clock, FileText, DollarSign } from 'lucide-react'

export default function Enrollment() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const enrollmentSteps = [
    {
      number: 1,
      title: 'Schedule a Tour',
      description: 'Visit our facilities and meet the team. Learn about our programs and philosophy.',
    },
    {
      number: 2,
      title: 'Complete Application',
      description: 'Fill out the enrollment application form with your child and family information.',
    },
    {
      number: 3,
      title: 'Parent Interview',
      description: 'Meet with our director to discuss your needs and ensure a great fit.',
    },
    {
      number: 4,
      title: 'Acceptance & Agreement',
      description: 'Receive acceptance and review the enrollment agreement and policies.',
    },
    {
      number: 5,
      title: 'Prepare & Start',
      description: 'Complete necessary paperwork, immunization records, and emergency contacts.',
    },
  ]

  const faqs = [
    {
      question: 'What are the age requirements?',
      answer: 'We accept children ages 2-5 years. Children must be toilet trained for the Discovery Kids (3-4) and Bright Learners (4-5) programs.',
    },
    {
      question: 'What are the tuition rates?',
      answer:
        'Tuition varies by program. Tiny Explorers: $800-1000/month, Discovery Kids: $950-1150/month, Bright Learners: $1100-1300/month. Discounts available for full-time enrollment.',
    },
    {
      question: 'What is the teacher-to-student ratio?',
      answer: 'Tiny Explorers: 1:6, Discovery Kids: 1:8, Bright Learners: 1:10. Ratios meet or exceed state requirements.',
    },
    {
      question: 'Do you offer flexible scheduling?',
      answer:
        'Yes! We offer morning sessions, afternoon sessions, and full-day options. We also provide drop-in care and before/after school programs.',
    },
    {
      question: 'What about meals and snacks?',
      answer:
        'We provide healthy snacks and lunch daily. We accommodate dietary restrictions, allergies, and preferences. Please inform us of any allergies.',
    },
    {
      question: 'Are you accredited?',
      answer: 'Yes, Prarambh is accredited by the National Association for the Education of Young Children (NAEYC).',
    },
    {
      question: 'What is your sick child policy?',
      answer:
        'Children with fever, vomiting, or diarrhea should not attend. Please keep sick children home for 24 hours after symptoms resolve.',
    },
    {
      question: 'Do you offer financial assistance?',
      answer: 'We offer sliding scale tuition based on family income. Scholarships and grants are available for qualifying families.',
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
              Enrollment at{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Prarambh
              </span>
            </h1>
          </SlideUp>
          <SlideUp delay={0.1}>
            <p className="mt-6 text-lg text-foreground/70">
              Join our community and start your child's learning journey
            </p>
          </SlideUp>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { icon: Clock, title: 'Flexible Hours', desc: '7:30 AM - 6:00 PM' },
              { icon: DollarSign, title: 'Affordable Rates', desc: 'Starting at $800/month' },
              { icon: FileText, title: 'Easy Process', desc: '5-step enrollment' },
              { icon: CheckCircle, title: 'NAEYC Accredited', desc: 'Quality assured' },
            ].map((item, index) => (
              <SlideUp key={index} delay={index * 0.1}>
                <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mx-auto mb-4">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm text-foreground/60">{item.desc}</p>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Process */}
      <section className="bg-white px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SlideUp className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Enrollment Process</h2>
          </SlideUp>

          <div className="space-y-6">
            {enrollmentSteps.map((step, index) => (
              <SlideUp key={step.number} delay={index * 0.08}>
                <div className="flex gap-6 rounded-xl border-2 border-primary/20 p-6 hover:border-primary/40 transition-colors">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold text-lg flex-shrink-0">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="mt-2 text-foreground/70">{step.description}</p>
                  </div>
                </div>
              </SlideUp>
            ))}
          </div>

          <SlideUp delay={0.4} className="mt-12 text-center">
            <a
              href="/contact"
              className="inline-block rounded-full bg-primary px-8 py-3 font-semibold text-white transition-all hover:shadow-lg"
            >
              Start Your Journey
            </a>
          </SlideUp>
        </div>
      </section>

      {/* Program Options */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SlideUp className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Tuition & Program Options</h2>
          </SlideUp>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: 'Tiny Explorers',
                age: '2-3 Years',
                morning: '$800/month',
                afternoon: '$800/month',
                fullDay: '$1400/month',
              },
              {
                name: 'Discovery Kids',
                age: '3-4 Years',
                morning: '$950/month',
                afternoon: '$950/month',
                fullDay: '$1600/month',
              },
              {
                name: 'Bright Learners',
                age: '4-5 Years',
                morning: '$1100/month',
                afternoon: '$1100/month',
                fullDay: '$1800/month',
              },
            ].map((program, index) => (
              <SlideUp key={index} delay={index * 0.1}>
                <div className="rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 p-8">
                  <h3 className="text-xl font-bold text-primary">{program.name}</h3>
                  <p className="mt-2 text-foreground/60">{program.age}</p>

                  <div className="mt-6 space-y-3 border-t pt-6">
                    <div>
                      <p className="text-sm text-foreground/60">Morning (9am-12pm)</p>
                      <p className="font-bold">{program.morning}</p>
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60">Afternoon (1pm-4pm)</p>
                      <p className="font-bold">{program.afternoon}</p>
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60">Full Day (8:30am-3:30pm)</p>
                      <p className="font-bold">{program.fullDay}</p>
                    </div>
                  </div>
                </div>
              </SlideUp>
            ))}
          </div>

          <SlideUp delay={0.3} className="mt-8 rounded-lg bg-primary/10 p-6 text-center">
            <p className="text-foreground/70">
              **Discounts available for full-time enrollment, multiple children, and financial assistance programs available.
            </p>
          </SlideUp>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <SlideUp className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
          </SlideUp>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <SlideUp key={index} delay={index * 0.05}>
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full text-left"
                >
                  <div className="rounded-lg border border-border p-6 transition-all hover:border-primary hover:bg-primary/5">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-foreground pr-4">{faq.question}</h3>
                      <span
                        className={`text-primary transition-transform flex-shrink-0 ${
                          expandedFaq === index ? 'rotate-180' : ''
                        }`}
                      >
                        ▼
                      </span>
                    </div>

                    {expandedFaq === index && (
                      <p className="mt-4 text-foreground/70">{faq.answer}</p>
                    )}
                  </div>
                </button>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
