'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Statistics = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const stats = [
    {
      value: 20,
      suffix: '+',
      label: 'Products Built',
      description: 'Innovative solutions delivered'
    },
    {
      value: 5,
      suffix: '+',
      label: 'Industries Served',
      description: 'Diverse market expertise'
    },
    {
      value: 1000000,
      suffix: '+',
      label: 'Users Reached',
      description: 'Global impact achieved',
      format: (val: number) => `${(val / 1000000).toFixed(1)}M`
    },
    {
      value: 48,
      suffix: '+',
      label: 'Countries',
      description: 'Worldwide presence'
    }
  ]

  const Counter = ({ 
    value, 
    suffix = '', 
    format 
  }: { 
    value: number
    suffix?: string
    format?: (val: number) => string
  }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!isInView) return

      const duration = 2000 // 2 seconds
      const steps = 60
      const stepValue = value / steps
      const stepTime = duration / steps

      let current = 0
      const timer = setInterval(() => {
        current += stepValue
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, stepTime)

      return () => clearInterval(timer)
    }, [isInView, value])

    const displayValue = format ? format(count) : count.toLocaleString()
    return <span>{displayValue}{suffix}</span>
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Impacts So Far
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Products developed, businesses scaled, and impacts made
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="relative">
                {/* Background Circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-2xl transform group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Content */}
                <div className="relative bg-background/80 backdrop-blur-sm rounded-2xl p-6 border border-primary/10 group-hover:border-primary/20 transition-all duration-300 group-hover:shadow-xl">
                  <motion.div
                    className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Counter 
                      value={stat.value} 
                      suffix={stat.suffix}
                      format={stat.format}
                    />
                  </motion.div>
                  
                  <h4 className="text-lg md:text-xl font-semibold text-foreground mb-1">
                    {stat.label}
                  </h4>
                  
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Whether you're starting from scratch or looking to grow, we build with you — and grow with you.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Statistics