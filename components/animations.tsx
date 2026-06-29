'use client'

import { motion, useInView } from 'framer-motion'
import React from 'react'

interface AnimationProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function FadeIn({ children, className, delay = 0 }: AnimationProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}

export function SlideUp({ children, className, delay = 0 }: AnimationProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}

export function SlideLeft({ children, className, delay = 0 }: AnimationProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}

export function SlideRight({ children, className, delay = 0 }: AnimationProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}

export function Scale({ children, className, delay = 0 }: AnimationProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  )
}

export function Bounce({ children, className }: Omit<AnimationProps, 'delay'>) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}

export function Parallax({
  children,
  className,
  offset = 50,
}: AnimationProps & { offset?: number }) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: false })

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        y: isInView ? 0 : offset,
      }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  )
}
