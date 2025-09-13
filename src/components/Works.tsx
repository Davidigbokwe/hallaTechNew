'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, X } from 'lucide-react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import Image from 'next/image'

interface Project {
  name: string
  url: string
  slogan: string
  description: string
  image: string
  category: string
}

const Works = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      name: 'SoundHalla',
      url: 'https://soundhalla.com/',
      slogan: 'Amplify Your Sound',
      description: 'A platform that helps emerging artists get heard by providing marketing and funding powered by AI.',
      image: '/soundhalla.webp',
      category: 'Music & Entertainment'
    },
    {
      name: 'Cashwyre',
      url: 'https://cashwyre.com/',
      slogan: 'Send Money, Simplified',
      description: 'Cashwyre is simplifying payments globally. Send and receive money across borders. It\'s fast, easy, and secure.',
      image: '/cashwyre.webp',
      category: 'Fintech'
    },
    {
      name: 'Aldora',
      url: 'http://aldora.com/',
      slogan: 'Game Analytics Redefined',
      description: 'A data analytics platform providing rich insights into gaming trends and performance.',
      image: '/aldora.webp',
      category: 'Gaming & Analytics'
    },
    {
      name: 'Vibeazy',
      url: 'https://www.vibeazy.com/',
      slogan: 'Find Your Vibe',
      description: 'Find places to chill on your budget. Discover restaurants, lounges, and hangouts that match your vibe and wallet.',
      image: '/vibeazy.webp',
      category: 'Lifestyle'
    },
    {
      name: 'MendAfrica',
      url: 'http://mendafrica.com/',
      slogan: 'Direct Impact, Real Change',
      description: 'Give directly to verified, high-impact projects across Africa. Discover and support initiatives that make real impacts.',
      image: '/mendafrica.webp',
      category: 'Social Impact'
    },
    {
      name: 'Tracla',
      url: 'https://www.tracla.com/',
      slogan: 'Track Every Step',
      description: 'Advanced tracking and logistics solution for better supply chain management and transparency.',
      image: '/reee.webp',
      category: 'Logistics'
    },
    {
      name: 'TuneNova',
      url: 'https://www.tunenova.com/',
      slogan: 'Music Discovery Reimagined',
      description: 'Discover new music through AI-powered recommendations and connect with artists worldwide.',
      image: '/tunenova.png',
      category: 'Music & Entertainment'
    },
    {
      name: 'SharpPocket',
      url: 'https://www.mysharppocket.com/',
      slogan: 'Smart Spending Solutions',
      description: 'Personal finance management made simple with intelligent budgeting and expense tracking.',
      image: '/sharp_pocket.webp',
      category: 'Fintech'
    },
    {
      name: 'ShopNSure',
      url: 'https://www.shopnsure.com/',
      slogan: 'Shop with Confidence',
      description: 'Secure online shopping platform with buyer protection and verified merchant network.',
      image: '/shopnsure.webp',
      category: 'E-commerce'
    }
  ]

  const openProject = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="works" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">
            Our Works
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Some Of The Products We&apos;ve Built And Supported
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From startups to scale-ups, we&apos;ve helped build products that matter and create real impact in the world.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredProject(project.name)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <Card className="h-full overflow-hidden border-0 bg-gradient-to-br from-background to-secondary/30 hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <motion.div
                    animate={{
                      scale: hoveredProject === project.name ? 1.1 : 1
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={400}
                      height={100}
                      className="w-full h-48 object-contain px-4"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm text-primary text-xs font-semibold px-3 py-1 rounded-full">
                    {project.category}
                  </div>

                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: hoveredProject === project.name ? 1 : 0,
                      y: hoveredProject === project.name ? 0 : 20
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Button
                      onClick={(e) => {
                        e.stopPropagation()
                        openProject(project.url)
                      }}
                      className="bg-background/90 text-primary hover:bg-background hover:text-primary border border-primary/20 backdrop-blur-sm"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Site
                    </Button>
                  </motion.div>
                </div>

                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.name}
                  </h4>
                  <p className="text-sm font-medium text-primary mb-3">
                    {project.slogan}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-lg z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-background rounded-3xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  width={800}
                  height={192}
                  className="w-full h-48 object-contain px-4"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm hover:bg-background"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-foreground">
                    {selectedProject.name}
                  </h3>
                  <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                    {selectedProject.category}
                  </span>
                </div>
                
                <p className="text-lg font-medium text-primary mb-4">
                  {selectedProject.slogan}
                </p>
                
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {selectedProject.description}
                </p>
                
                <Button
                  onClick={() => openProject(selectedProject.url)}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit {selectedProject.name}
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Works