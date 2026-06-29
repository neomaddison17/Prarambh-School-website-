'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { SlideUp, SlideLeft, SlideRight } from '@/components/animations'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-background px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <SlideUp>
            <h1 className="text-4xl font-bold md:text-5xl">
              Get in{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
          </SlideUp>
          <SlideUp delay={0.1}>
            <p className="mt-6 text-lg text-foreground/70">
              We&apos;d love to hear from you. Reach out with any questions or to schedule a tour.
            </p>
          </SlideUp>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Contact Information */}
            <SlideLeft className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold md:text-4xl">Contact Information</h2>
                <p className="mt-4 text-foreground/70">
                  Feel free to reach out to us using any of the methods below
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <a href="tel:(555) 123-4567" className="text-foreground/70 hover:text-primary">
                      (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <a href="mailto:hello@brightminds.com" className="text-foreground/70 hover:text-primary">
                      hello@brightminds.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold">Address</h3>
                    <p className="text-foreground/70">123 Learning Lane, Education City, EC 12345</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold">Hours</h3>
                    <p className="text-foreground/70">
                      Monday - Friday: 7:30 AM - 6:00 PM
                      <br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="h-64 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="mx-auto text-primary/50 mb-2" size={32} />
                  <p className="text-foreground/50 text-sm">Map view would appear here</p>
                </div>
              </div>
            </SlideLeft>

            {/* Contact Form */}
            <SlideRight>
              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <h2 className="mb-6 text-2xl font-bold">Send us a Message</h2>

                {submitted ? (
                  <div className="flex h-96 items-center justify-center rounded-lg bg-primary/10">
                    <div className="text-center">
                      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl">
                        ✓
                      </div>
                      <h3 className="font-bold text-primary">Message Sent!</h3>
                      <p className="mt-2 text-sm text-foreground/70">
                        Thank you for reaching out. We&apos;ll get back to you soon.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-foreground">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-2 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-foreground">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-2 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-foreground">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-2 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="(555) 000-0000"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-foreground">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-2 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        placeholder="Tell us about your inquiry..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-all hover:shadow-lg hover:shadow-primary/30"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </SlideRight>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
