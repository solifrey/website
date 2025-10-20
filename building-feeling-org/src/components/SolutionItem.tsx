import { motion } from 'framer-motion'
import { useState } from 'react'

interface SolutionItemProps {
  title: string
  description: string
  illustrationKey: string
  index: number
}

export default function SolutionItem({ title, description, illustrationKey, index }: SolutionItemProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getIllustration = () => {
    switch (illustrationKey) {
      case 'sense-making':
        return (
          <div className="w-full h-64 bg-gradient-to-br from-accent-teal/20 to-accent-teal/5 rounded-8 flex items-center justify-center relative">
            <motion.div 
              className="text-6xl"
              animate={isHovered ? { scale: 1.1, rotate: 5 } : {}}
              transition={{ duration: 0.3 }}
            >
              🧠
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-teal/10 to-transparent animate-pulse" />
          </div>
        )
      case 'estuarine-mapping':
        return (
          <div className="w-full h-64 bg-gradient-to-br from-accent-gold/20 to-accent-gold/5 rounded-8 flex items-center justify-center relative">
            <div className="grid grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <motion.div 
                  key={i} 
                  className="w-12 h-12 bg-accent-gold/40 rounded-full"
                  animate={isHovered ? { scale: 1.2, opacity: 0.8 } : {}}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                />
              ))}
            </div>
          </div>
        )
      case 'experimentation':
        return (
          <div className="w-full h-64 bg-gradient-to-br from-accent-teal/20 to-accent-gold/20 rounded-8 flex items-center justify-center">
            <motion.div 
              className="text-6xl"
              animate={isHovered ? { rotate: 360 } : {}}
              transition={{ duration: 0.7 }}
            >
              🧪
            </motion.div>
          </div>
        )
      case 'sensing-networks':
        return (
          <div className="w-full h-64 bg-gradient-to-br from-accent-teal/20 to-accent-teal/5 rounded-8 flex items-center justify-center relative">
            <div className="relative">
              {[1, 2, 3, 4, 5].map((i) => (
                <motion.div 
                  key={i}
                  className="absolute w-8 h-8 bg-accent-teal/60 rounded-full"
                  style={{
                    left: `${20 + (i * 15)}px`,
                    top: `${20 + Math.sin(i) * 20}px`
                  }}
                  animate={isHovered ? { 
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 1, 0.6]
                  } : {}}
                  transition={{ 
                    duration: 1, 
                    delay: i * 0.1,
                    repeat: isHovered ? Infinity : 0
                  }}
                />
              ))}
            </div>
          </div>
        )
      case 'feeling-org':
        return (
          <div className="w-full h-64 bg-gradient-to-br from-accent-gold/20 to-accent-teal/20 rounded-8 flex items-center justify-center">
            <motion.div 
              className="text-6xl"
              animate={isHovered ? { scale: 1.1 } : {}}
              transition={{ duration: 0.3 }}
            >
              💝
            </motion.div>
          </div>
        )
      default:
        return (
          <div className="w-full h-64 bg-gradient-to-br from-muted-grey/20 to-muted-grey/5 rounded-8 flex items-center justify-center">
            <div className="text-6xl opacity-30">✨</div>
          </div>
        )
    }
  }

  return (
    <motion.div
      className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-40 items-center`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="flex-1">
        <motion.h3 
          className="text-h3 font-display font-semibold mb-24 text-gradient"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          {title}
        </motion.h3>
        <p className="text-body font-body leading-relaxed text-muted-grey">
          {description}
        </p>
        <motion.blockquote 
          className="mt-24 pl-24 border-l-4 border-accent-teal text-body font-body italic text-accent-teal"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          "Small changes, big impact."
        </motion.blockquote>
      </div>
      
      <motion.div 
        className="flex-1"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        {getIllustration()}
      </motion.div>
    </motion.div>
  )
}
