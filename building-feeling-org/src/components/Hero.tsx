import { motion } from 'framer-motion'
import { ChevronDown, ArrowRight } from 'lucide-react'

interface HeroProps {
  data: {
    title: string
    subtitle: string
  }
}

export default function Hero({ data }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-mesh">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 bg-accent-teal/20 rounded-full blur-xl"
          animate={{ 
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-40 right-32 w-24 h-24 bg-accent-gold/20 rounded-full blur-lg"
          animate={{ 
            y: [0, 15, 0],
            x: [0, -15, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className="absolute bottom-32 left-1/3 w-20 h-20 bg-accent-teal/15 rounded-full blur-md"
          animate={{ 
            y: [0, -25, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(44, 182, 179, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(44, 182, 179, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      <div className="relative z-10 container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-block bg-accent-teal/10 text-accent-teal px-6 py-2 rounded-full text-sm font-medium border border-accent-teal/20">
            Building Feeling Organisations
          </span>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-shadow"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="text-gradient">{data.title.split(' ').slice(0, 3).join(' ')}</span>
          <br />
          <span className="text-white">{data.title.split(' ').slice(3).join(' ')}</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {data.subtitle}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a 
            href="#services"
            className="btn-primary inline-flex items-center gap-3 group"
          >
            Explore how we can work together
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a 
            href="#pain-points"
            className="btn-secondary inline-flex items-center gap-3"
          >
            Learn more
            <ChevronDown className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Stats or trust indicators */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient">50+</div>
            <div className="text-sm text-gray-400">Organisations Transformed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient">3x</div>
            <div className="text-sm text-gray-400">Faster Decision Making</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient">90%</div>
            <div className="text-sm text-gray-400">Success Rate</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-400"
        >
          <span className="text-xs font-medium">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  )
}
