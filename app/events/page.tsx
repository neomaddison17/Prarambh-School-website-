'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { SlideUp, SlideLeft, SlideRight, Scale } from '@/components/animations'
import { Calendar, Clock, Users, MapPin } from 'lucide-react'

const upcomingEvents = [
  {
    id: 1,
    title: 'Spring Open House',
    date: 'April 12, 2024',
    time: '10:00 AM - 2:00 PM',
    location: 'Main Campus',
    description: 'Join us for our annual spring open house. Tour classrooms, meet teachers, and discover why families love Prarambh!',
    category: 'Open House',
  },
  {
    id: 2,
    title: 'Tiny Explorers Graduation',
    date: 'April 25, 2024',
    time: '2:00 PM - 3:30 PM',
    location: 'Outdoor Play Area',
    description: 'Celebrate our youngest graduates as they prepare for their next adventure in Discovery Kids!',
    category: 'Celebration',
  },
  {
    id: 3,
    title: 'Family Science Night',
    date: 'May 3, 2024',
    time: '5:00 PM - 7:00 PM',
    location: 'Science Lab',
    description: 'Hands-on science experiments for the whole family. Kids and parents explore together!',
    category: 'Workshop',
  },
  {
    id: 4,
    title: 'Field Day & Sports Carnival',
    date: 'May 15, 2024',
    time: '9:00 AM - 12:00 PM',
    location: 'Outdoor Campus',
    description: 'Fun games, races, and activities celebrating physical fitness and teamwork.',
    category: 'Sports',
  },
  {
    id: 5,
    title: 'Summer Art Exhibition',
    date: 'June 2, 2024',
    time: '4:00 PM - 6:00 PM',
    location: 'Art Studio',
    description: 'Display of student artwork throughout the year. Refreshments and celebration!',
    category: 'Exhibition',
  },
  {
    id: 6,
    title: 'Kindergarten Readiness Workshop',
    date: 'June 10, 2024',
    time: '6:00 PM - 7:30 PM',
    location: 'Main Building',
    description: 'For parents of Bright Learners preparing for kindergarten. Q&A with local elementary school teacher.',
    category: 'Workshop',
  },
]

const categories = ['All', 'Open House', 'Celebration', 'Workshop', 'Sports', 'Exhibition']

export default function Events() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-background px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <SlideUp>
            <h1 className="text-4xl font-bold md:text-5xl">
              Community{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Events
              </span>
            </h1>
          </SlideUp>
          <SlideUp delay={0.1}>
            <p className="mt-6 text-lg text-foreground/70">
              Join us for celebrations, workshops, and family activities
            </p>
          </SlideUp>
        </div>
      </section>

      {/* Featured Event */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SlideUp>
            <div className="grid gap-8 overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-secondary md:grid-cols-2 md:items-center text-white">
              <div className="p-8 md:p-12 order-2 md:order-1">
                <span className="inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
                  {upcomingEvents[0].category}
                </span>
                <h2 className="mt-4 text-3xl font-bold">{upcomingEvents[0].title}</h2>
                <p className="mt-4 text-white/90">{upcomingEvents[0].description}</p>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <Calendar size={20} />
                    <span>{upcomingEvents[0].date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={20} />
                    <span>{upcomingEvents[0].time}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={20} />
                    <span>{upcomingEvents[0].location}</span>
                  </div>
                </div>

                <button className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-semibold text-primary transition-all hover:shadow-lg">
                  Learn More
                </button>
              </div>

              <div className="h-96 bg-white/10 flex items-center justify-center order-1 md:order-2">
                <div className="text-6xl">🎉</div>
              </div>
            </div>
          </SlideUp>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-white px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SlideUp className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Upcoming Events</h2>
            <p className="mt-4 text-lg text-foreground/60">
              Mark your calendar and join our community celebrations
            </p>
          </SlideUp>

          <div className="space-y-4">
            {upcomingEvents.slice(1).map((event, index) => (
              <SlideUp key={event.id} delay={index * 0.08}>
                <div className="rounded-2xl border-2 border-border p-6 hover:border-primary/40 transition-all">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="flex-1">
                      <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-3">
                        {event.category}
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">{event.title}</h3>
                      <p className="mt-3 text-foreground/70">{event.description}</p>

                      <div className="mt-4 flex flex-wrap gap-4 text-sm text-foreground/60">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={16} />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          {event.location}
                        </div>
                      </div>
                    </div>

                    <button className="mt-4 md:mt-0 rounded-full bg-primary px-6 py-2 font-semibold text-white transition-all hover:shadow-lg whitespace-nowrap">
                      RSVP
                    </button>
                  </div>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar Overview */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SlideUp className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Annual Calendar</h2>
            <p className="mt-4 text-lg text-foreground/60">
              Key dates and important milestones throughout the school year
            </p>
          </SlideUp>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              { season: 'Fall', events: ['School Year Begins', 'Parent Meet & Greet', 'Fall Festival', 'Thanksgiving Celebration'] },
              { season: 'Winter', events: ['Winter Holiday Party', 'New Year Open House', 'Winter Field Trip', 'Midyear Check-in'] },
              { season: 'Spring', events: ['Spring Open House', 'Earth Day Activities', 'Spring Celebration', 'Kindergarten Readiness'] },
              { season: 'Summer', events: ['Summer Programs', 'Field Days', 'Art Exhibition', 'Graduation Ceremonies'] },
            ].map((quarter, index) => (
              <SlideUp key={index} delay={index * 0.1}>
                <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
                  <h3 className="mb-4 text-xl font-bold text-primary">{quarter.season}</h3>
                  <ul className="space-y-3">
                    {quarter.events.map((event, i) => (
                      <li key={i} className="flex items-center gap-3 text-foreground/70">
                        <span className="h-2 w-2 rounded-full bg-primary"></span>
                        {event}
                      </li>
                    ))}
                  </ul>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-secondary px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <SlideUp className="space-y-6">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Don&apos;t Miss Any Events
            </h2>
            <p className="text-lg text-white/90">
              Subscribe to our newsletter to get event invitations and community updates
            </p>
            <form className="flex flex-col gap-3 sm:flex-row justify-center max-w-sm mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 rounded-full bg-white px-6 py-3 text-foreground placeholder-foreground/50 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-white px-6 py-3 font-semibold text-primary transition-all hover:shadow-lg"
              >
                Subscribe
              </button>
            </form>
          </SlideUp>
        </div>
      </section>

      <Footer />
    </div>
  )
}
