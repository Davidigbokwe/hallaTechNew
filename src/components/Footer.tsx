'use client'

import { motion } from 'framer-motion'
import { Linkedin, Twitter, Instagram, Mail, Phone } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ]

  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'Our Works', href: '#works' },
    { label: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (sectionId: string) => {
    if (sectionId.startsWith('#')) {
      const elementId = sectionId.substring(1)
      const element = document.getElementById(elementId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <footer className="bg-gradient-to-br from-primary to-accent text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="mb-6">
              <motion.h2
                whileHover={{ scale: 1.05 }}
                className="text-3xl font-bold mb-4 cursor-pointer"
              >
                HallaTech
              </motion.h2>
              <p className="text-primary-foreground/80 text-lg leading-relaxed max-w-md">
                HallaTech is a venture studio that helps companies and founders build and grow tech products.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <motion.a
                href="mailto:support@hallatechnologies.com"
                whileHover={{ x: 5 }}
                className="flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-colors group"
              >
                <Mail className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
                support@hallatechnologies.com
              </motion.a>
              
              <motion.a
                href="tel:+2348056679806"
                whileHover={{ x: 5 }}
                className="flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-colors group"
              >
                <Phone className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
                +234 805 667 9806
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    whileHover={{ x: 5 }}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                  >
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media section removed as requested */}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-primary-foreground/20 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-center md:text-left">
              © {new Date().getFullYear()} HallaTech. All rights reserved.
            </p>
            
            <p className="text-primary-foreground/60 text-center md:text-right">
              Building the future, one product at a time.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer