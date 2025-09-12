'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navigation from '../src/components/Navigation'
import Hero from '../src/components/Hero'
import Services from '../src/components/Services'
import Statistics from '../src/components/Statistics'
import Works from '../src/components/Works'
import Contact from '../src/components/Contact'
import Footer from '../src/components/Footer'
import LoadingScreen from '../src/components/LoadingScreen'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Statistics />
        <Works />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  )
}