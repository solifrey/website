import { motion } from 'framer-motion'
import { useState } from 'react'
import { Quote } from 'lucide-react'

interface CaseCardProps {
  title: string
  organization: string
  description: string
  impact: string
  quote: string
}

export default function CaseCard({ title, organization, description, impact, quote }: CaseCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative bg-gradient-to-br from-muted-grey/5 to-muted-grey/10 rounded-8 p-40 border border-divider/20 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-flow-gradient opacity-10 rounded-bl-8" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-16 mb-24">
          <div className="w-12 h-12 bg-flow-gradient rounded-8 flex items-center justify-center">
            <Quote className="w-24 h-24 text-primary-bg" />
          </div>
          <div>
            <h3 className="text-h3 font-display font-semibold">{title}</h3>
            <p className="text-body font-body text-accent-teal">{organization}</p>
          </div>
        </div>

        <p className="text-body font-body leading-relaxed text-muted-grey mb-24">
          {description}
        </p>

        <motion.div 
          className="bg-accent-teal/10 rounded-8 p-24 border-l-4 border-accent-teal"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-body font-body font-medium text-accent-teal">
            {impact}
          </p>
        </motion.div>

        <motion.blockquote 
          className="mt-24 text-body font-body italic text-text-charcoal"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          "{quote}"
        </motion.blockquote>
      </div>

      {/* Hover effect */}
      <motion.div
        className="absolute inset-0 bg-flow-gradient opacity-0"
        animate={{ opacity: isHovered ? 0.05 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}
