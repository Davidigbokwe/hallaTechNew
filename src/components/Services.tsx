'use client'

import { motion } from 'framer-motion'
import { Code, TrendingUp, Megaphone, Palette, Database, Shield } from 'lucide-react'
import { Card, CardContent } from './ui/card'
import Image from 'next/image'

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Product Development',
      description: 'We build sustainable and highly scalable tech products using cutting-edge technologies.',
      image: '/Product_development.webp',
    },
    {
      icon: TrendingUp,
      title: 'Growth Marketing',
      description: 'We help startups achieve user and revenue growth through proven marketing strategies.',
      image: '/Growth_marketing.webp',
    },
    {
      icon: Megaphone,
      title: 'Digital Advertising',
      description: 'Strategic ad campaigns that drive conversions and maximize your marketing ROI.',
      image: '/Digital_advertising.webp',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that create exceptional user experiences and drive engagement.',
      image: '/uiux.webp',
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Turn your data into actionable insights with advanced analytics and reporting solutions.',
      image: '/Data_analytics.webp',
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Ensure your products are secure, compliant, and protect your users\' data.',
      image: '/Security_ompliance.webp',
    },
  ]

  return (
    <section id="services" className="py-20 bg-secondary/30">
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
            Services
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How We Can Help
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Need help building or growing a tech product? We partner with startups and businesses to launch MVPs, grow traction, and scale impact.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-background/80 backdrop-blur-sm">
                <div className="relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={192}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm rounded-full p-3">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h4 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Build fast. Grow smart. Focus on impact.
          </h4>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            HallaTech is a venture studio that helps companies and founders build and grow tech products. We offer product development, growth services, and strategic support to launch and scale ventures that matter.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Services