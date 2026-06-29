'use client'

import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { SlideUp, SlideLeft, SlideRight, Scale } from '@/components/animations'
import { Calendar, User, ArrowRight } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'The Benefits of Play-Based Learning',
    excerpt:
      'Discover how play-based learning develops essential skills like problem-solving, creativity, and social intelligence in young children.',
    category: 'Education',
    author: 'Sarah Johnson',
    date: 'March 15, 2024',
    content:
      'Play is the natural way children learn. Through play, children develop language, social skills, and physical coordination...',
  },
  {
    id: 2,
    title: 'Nutrition Tips for Growing Children',
    excerpt:
      "Learn about healthy eating habits and nutritious meal ideas that support your child's growth and development.",
    category: 'Health',
    author: 'Michael Chen',
    date: 'March 10, 2024',
    content: 'Proper nutrition is crucial for young children. We provide balanced meals at Prarambh...',
  },
  {
    id: 3,
    title: 'Supporting Emotional Development at Home',
    excerpt:
      'Practical strategies for parents to help their children develop emotional intelligence and healthy coping skills.',
    category: 'Parenting',
    author: 'Emily Rodriguez',
    date: 'March 5, 2024',
    content: "Emotional development is as important as academic growth. Here are ways to support your child...",
  },
  {
    id: 4,
    title: 'Preparing Your Child for Kindergarten',
    excerpt:
      "Tips and activities to help your child transition smoothly from preschool to kindergarten with confidence.",
    category: 'Transition',
    author: 'Sarah Johnson',
    date: 'February 28, 2024',
    content: 'The transition to kindergarten is an exciting milestone. Preparation is key to ensuring success...',
  },
  {
    id: 5,
    title: 'The Importance of Outdoor Play',
    excerpt:
      'Explore why outdoor activities are essential for physical health, mental well-being, and developmental growth.',
    category: 'Health',
    author: 'Michael Chen',
    date: 'February 20, 2024',
    content: "Outdoor play is vital for children's development. At Prarambh, we prioritize outdoor learning...",
  },
  {
    id: 6,
    title: 'Creative Arts Activities for Young Learners',
    excerpt:
      'Discover how art and creative expression help children develop fine motor skills and self-confidence.',
    category: 'Activities',
    author: 'Emily Rodriguez',
    date: 'February 15, 2024',
    content: 'Art is a powerful tool for learning and self-expression. We incorporate art into our daily programs...',
  },
]

const categories = ['All', 'Education', 'Health', 'Parenting', 'Activities', 'Transition']

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-background px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <SlideUp>
            <h1 className="text-4xl font-bold md:text-5xl">
              Prarambh{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
          </SlideUp>
          <SlideUp delay={0.1}>
            <p className="mt-6 text-lg text-foreground/70">
              Insights, tips, and stories from our community
            </p>
          </SlideUp>
        </div>
      </section>

      {/* Featured Post */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SlideUp>
            <div className="grid gap-8 overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 md:grid-cols-2 md:items-center">
              <div className="p-8 md:p-12">
                <span className="inline-block rounded-full bg-primary text-white px-4 py-2 text-sm font-semibold">
                  Featured
                </span>
                <h2 className="mt-4 text-3xl font-bold">{blogPosts[0].title}</h2>
                <p className="mt-4 text-foreground/70">{blogPosts[0].excerpt}</p>

                <div className="mt-6 flex flex-wrap gap-4 text-sm text-foreground/60">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    {blogPosts[0].author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {blogPosts[0].date}
                  </div>
                </div>

                <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white transition-all hover:shadow-lg">
                  Read Article <ArrowRight size={18} />
                </button>
              </div>

              <div className="h-80 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-6xl">📚</div>
              </div>
            </div>
          </SlideUp>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-white px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SlideUp className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Recent Articles</h2>
          </SlideUp>

          <div className="grid gap-8 md:grid-cols-2">
            {blogPosts.slice(1).map((post, index) => (
              <SlideUp key={post.id} delay={index * 0.08}>
                <article className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-lg">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <div className="text-5xl">📖</div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="inline-block w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {post.category}
                    </div>

                    <h3 className="mt-3 text-xl font-bold text-foreground">{post.title}</h3>
                    <p className="mt-2 flex-1 text-foreground/70">{post.excerpt}</p>

                    <div className="mt-4 flex flex-wrap gap-3 border-t pt-4 text-sm text-foreground/60">
                      <div className="flex items-center gap-2">
                        <User size={14} />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        {post.date}
                      </div>
                    </div>

                    <button className="mt-4 inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:text-primary/80">
                      Read More <ArrowRight size={16} />
                    </button>
                  </div>
                </article>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gradient-to-r from-primary to-secondary px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <SlideUp className="space-y-6 text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Get insights delivered to your inbox
            </h2>
            <p className="text-lg text-white/90">
              Subscribe to our newsletter for parenting tips and school updates
            </p>
            <form className="flex flex-col gap-3 sm:flex-row sm:gap-2 justify-center">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 rounded-full bg-white px-6 py-3 text-foreground placeholder-foreground/50 focus:outline-none max-w-sm"
              />
              <button
                type="submit"
                className="rounded-full bg-white px-8 py-3 font-semibold text-primary transition-all hover:shadow-lg"
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
