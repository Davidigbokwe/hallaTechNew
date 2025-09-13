'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MessageCircle, ArrowRight } from 'lucide-react'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'

const Contact = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'Chat with support',
      value: '+234 805 667 9806',
      action: 'Chat with us',
      href: 'tel:+2348056679806',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Mail,
      title: 'Send us email',
      value: 'support@hallatech.com',
      action: 'Contact us',
      href: 'mailto:support@hallatech.com',
      gradient: 'from-purple-500 to-pink-500'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-secondary/30 via-background to-primary/5">
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
            Get In Touch
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Need support in bringing that idea to life? Contact us, and let's help you build that product or scale that business!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Methods */}
          <div className="space-y-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-background/80 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                      <div className={`bg-gradient-to-r ${method.gradient} p-4 rounded-2xl text-white`}>
                        <method.icon className="h-8 w-8" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-1">
                          {method.title}
                        </h3>
                        <p className="text-2xl font-bold text-primary mb-2">
                          {method.value}
                        </p>
                        
                        <Button
                          asChild
                          variant="ghost"
                          className="group/btn text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto font-medium"
                        >
                          <a href={method.href}>
                            {method.action}
                            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
            
            {/* Social Media Call-to-Action */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 bg-gradient-to-r from-primary to-accent text-primary-foreground overflow-hidden">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-2">
                    Follow us for updates
                  </h3>
                  <p className="text-lg mb-4 opacity-90">
                    @hallatech
                  </p>
                  <p className="text-sm opacity-75">
                    Stay connected for the latest news, product updates, and insights from the HallaTech team.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-primary blur-3xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-accent blur-2xl" />
              </div>
              
              <div className="relative z-10 bg-gradient-to-br from-background/80 to-secondary/50 backdrop-blur-sm rounded-3xl p-8 border border-primary/10">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-2xl md:text-3xl font-bold text-foreground mb-6"
                >
                  Ready to Start Your Project?
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-lg text-muted-foreground mb-8 leading-relaxed"
                >
                  Whether you need a complete product development team or specialized growth marketing support, we're here to help you succeed.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg group"
                  >
                    <a href="mailto:support@hallatech.com">
                      Start Your Project Today
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold py-6 text-lg"
                  >
                    <a href="tel:+2348056679806">
                      Schedule a Call
                    </a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact