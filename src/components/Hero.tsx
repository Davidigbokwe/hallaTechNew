'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from './ui/button'
import Image from 'next/image'

const Hero = () => {
  const scrollToWorks = () => {
    const element = document.getElementById('works')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
            >
              Building Africa&apos;s Next
              <span className="text-primary ml-2">Big Products</span>
            </motion.h1>
            

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
            >
              From idea to traction — we partner with startups and companies to build scalable digital products and grow them with proven strategies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                onClick={scrollToWorks}
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full"
              >
                Explore Our Works
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative z-10">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 1, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 backdrop-blur-sm border border-primary/20"
              >
                <Image
                  src="/dasboard.png"
                  alt="Tracla App Screenshot"
                  width={1000}
                  height={750}
                  className="w-full max-w-[520px] h-auto rounded-3xl border-4 border-primary shadow-[0_8px_40px_rgba(0,0,0,0.25)] mx-auto"
                  priority
                />
              </motion.div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                x: [0, 5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-4 rounded-2xl shadow-lg z-20"
              style={{ zIndex: 20 }}
            >
              <div className="text-2xl font-bold">20+</div>
              <div className="text-sm opacity-90">Products Built</div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 10, 0],
                x: [0, -3, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground p-4 rounded-2xl shadow-lg z-20"
              style={{ zIndex: 20 }}
            >
              <div className="text-2xl font-bold">1M+</div>
              <div className="text-sm opacity-90">Users Reached</div>
            </motion.div>
          </motion.div>
        </div>
        {/* Sliding Logos Carousel (hidden on mobile, visible on md+) */}
        <div className="relative z-10 mt-10 md:mt-14 px-4 md:px-16 lg:px-32 hidden md:block">
          <div className="overflow-hidden w-full">
            <motion.div
              className="flex gap-10 items-center"
              initial={{ x: 0 }}
              animate={{ x: [0, -400, 0] }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {[
                'soundhalla.webp',
                'cashwyre.webp',
                'aldora.webp',
                'vibeazy.webp',
                'tunenova.png',
                'Teilor.webp',
                'sharp_pocket.png',
                'shopnsure.webp',
                'hallatech.webp',
                'travucash.webp',
              ].map((logo, idx) => (
                <div key={logo + idx} className="flex-shrink-0">
                  <Image
                    src={`/${logo}`}
                    alt={logo.replace(/\..+$/, '')}
                    width={90}
                    height={60}
                    className="object-contain h-12 w-auto transition duration-300"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero