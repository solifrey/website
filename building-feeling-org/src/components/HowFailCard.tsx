import { motion } from 'framer-motion'
import { useState } from 'react'
import { X } from 'lucide-react'

interface HowFailCardProps {
  title: string
  description: string
}

export default function HowFailCard({ title, description }: HowFailCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      className="relative h-80 cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      onClick={() => setIsFlipped(!isFlipped)}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div
        className="absolute inset-0 w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front of card */}
        <div 
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-accent-gold/10 to-accent-teal/10 rounded-8 p-24 border border-divider/20"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="text-4xl mb-16">❌</div>
              <h3 className="text-h3 font-display font-semibold text-accent-gold">
                {title}
              </h3>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div 
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-accent-teal/10 to-accent-gold/10 rounded-8 p-24 border border-divider/20 flex items-center justify-center"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div className="text-center">
            <X className="w-32 h-32 text-accent-teal mx-auto mb-16" />
            <p className="text-body font-body leading-relaxed text-text-charcoal">
              {description}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
