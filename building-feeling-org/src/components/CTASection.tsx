import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowRight, Mail } from 'lucide-react'

interface Service {
  title: string
  type: string
  description: string
  cta: string
}

interface CTASectionProps {
  services: Service[]
  cta: {
    title: string
    description: string
  }
}

export default function CTASection({ services, cta }: CTASectionProps) {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  return (
    <div className="space-y-80">
      {/* Services Grid */}
      <div className="grid md:grid-cols-3 gap-40">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative bg-gradient-to-br from-muted-grey/5 to-muted-grey/10 rounded-8 p-40 border border-divider/20 overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            viewport={{ once: true }}
            onHoverStart={() => setHoveredService(index)}
            onHoverEnd={() => setHoveredService(null)}
            whileHover={{ scale: 1.05 }}
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-flow-gradient opacity-10 rounded-bl-8" />
            
            <div className="relative z-10">
              <div className="mb-24">
                <h3 className="text-h3 font-display font-semibold mb-8">{service.title}</h3>
                <span className="inline-block bg-accent-teal/20 text-accent-teal px-16 py-8 rounded-8 text-sm font-display font-medium">
                  {service.type}
                </span>
              </div>

              <p className="text-body font-body leading-relaxed text-muted-grey mb-32">
                {service.description}
              </p>

              <motion.a
                href="#contact"
                className="inline-flex items-center gap-12 bg-flow-gradient text-primary-bg px-24 py-16 rounded-8 font-display font-medium hover:scale-105 transition-transform duration-200"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {service.cta}
                <ArrowRight className="w-16 h-16" />
              </motion.a>
            </div>

            {/* Hover effect */}
            <motion.div
              className="absolute inset-0 bg-flow-gradient opacity-0"
              animate={{ opacity: hoveredService === index ? 0.1 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </div>

      {/* Main CTA */}
      <motion.div
        className="text-center bg-gradient-to-br from-accent-teal/10 to-accent-gold/10 rounded-8 p-80 border border-divider/20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-h2 font-display font-semibold mb-32">
          {cta.title}
        </h2>
        <p className="text-body-large font-body leading-relaxed text-muted-grey mb-40 max-w-4xl mx-auto">
          {cta.description}
        </p>
        
        <motion.a
          href="mailto:hello@buildingfeeling.org"
          className="inline-flex items-center gap-16 bg-flow-gradient text-primary-bg px-40 py-24 rounded-8 font-display font-semibold text-lg hover:scale-105 transition-transform duration-200"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Mail className="w-24 h-24" />
          Get in touch
        </motion.a>
      </motion.div>
    </div>
  )
}
