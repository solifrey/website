import { motion } from 'framer-motion'
import { useState } from 'react'
import { AlertTriangle, TrendingDown, Users, Zap, User } from 'lucide-react'

interface PainCardProps {
  title: string
  description: string
  illustrationKey: string
  index: number
}

export default function PainCard({ title, description, illustrationKey, index }: PainCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getIllustration = () => {

    switch (illustrationKey) {
      case 'fog-dashboard':
        return (
          <div className="relative w-full h-80 glass-effect rounded-2xl flex items-center justify-center overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex flex-col items-center gap-4">
              <AlertTriangle className="w-20 h-20 text-red-400" strokeWidth={1} />
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400 mb-2">Flying Blind</div>
                <div className="text-sm text-gray-400">Yesterday's data, today's decisions</div>
              </div>
            </div>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>
        )
      case 'coin-toss':
        return (
          <div className="relative w-full h-80 glass-effect rounded-2xl flex items-center justify-center overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex flex-col items-center gap-4">
              <motion.div
                animate={isHovered ? { rotateY: 360, scale: 1.1 } : { rotateY: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <TrendingDown className="w-20 h-20 text-yellow-400" strokeWidth={1} />
              </motion.div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-2">Coin Toss</div>
                <div className="text-sm text-gray-400">Strategic decisions feel random</div>
              </div>
            </div>
          </div>
        )
      case 'silos':
        return (
          <div className="relative w-full h-80 glass-effect rounded-2xl flex items-center justify-center overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex flex-col items-center gap-4">
              <Users className="w-20 h-20 text-blue-400" strokeWidth={1} />
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-2">Siloed Teams</div>
                <div className="text-sm text-gray-400">Everyone moving, but not together</div>
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-4 opacity-20">
                {[1, 2, 3].map((i) => (
                  <motion.div 
                    key={i} 
                    className="w-8 h-8 bg-blue-400/30 rounded"
                    animate={isHovered ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  />
                ))}
              </div>
            </div>
          </div>
        )
      case 'fireworks-fog':
        return (
          <div className="relative w-full h-80 glass-effect rounded-2xl flex items-center justify-center overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex flex-col items-center gap-4">
              <Zap className="w-20 h-20 text-purple-400" strokeWidth={1} />
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-2">False Promises</div>
                <div className="text-sm text-gray-400">Fireworks that deliver fog</div>
              </div>
            </div>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-primary-bg/80 to-transparent"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        )
      case 'lonely-leader':
        return (
          <div className="relative w-full h-80 glass-effect rounded-2xl flex items-center justify-center overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-500/10 to-slate-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex flex-col items-center gap-4">
              <User className="w-20 h-20 text-gray-400" strokeWidth={1} />
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-400 mb-2">Lonely at the Top</div>
                <div className="text-sm text-gray-400">Feeling the unease, can't name it</div>
              </div>
            </div>
          </div>
        )
      default:
        return (
          <div className="relative w-full h-80 glass-effect rounded-2xl flex items-center justify-center">
            <div className="text-6xl opacity-30">❓</div>
          </div>
        )
    }
  }

  return (
    <motion.div
      className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-16 items-center mb-24`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="flex-1 space-y-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-2 h-2 bg-accent-teal rounded-full"></div>
          <span className="text-sm font-medium text-accent-teal uppercase tracking-wider">
            Challenge {index + 1}
          </span>
        </div>
        
        <motion.h3 
          className="text-3xl lg:text-4xl font-bold leading-tight"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          {title}
        </motion.h3>
        
        <p className="text-lg text-gray-300 leading-relaxed">
          {description}
        </p>

        <motion.div 
          className="flex items-center gap-2 text-accent-teal"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="w-8 h-px bg-accent-teal"></div>
          <span className="text-sm font-medium">This sounds familiar?</span>
        </motion.div>
      </div>
      
      <motion.div 
        className="flex-1 max-w-md"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {getIllustration()}
      </motion.div>
    </motion.div>
  )
}
