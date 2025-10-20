import { motion } from 'framer-motion'
import { Mail, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary-bg to-primary-bg/80 border-t border-divider/20">
      <div className="max-w-7xl mx-auto px-6 py-80">
        <div className="grid md:grid-cols-3 gap-40">
          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-h3 font-display font-semibold mb-24">Get in touch</h3>
            <a 
              href="mailto:hello@buildingfeeling.org"
              className="inline-flex items-center gap-12 text-accent-teal hover:text-accent-gold transition-colors duration-200"
            >
              <Mail className="w-20 h-20" />
              hello@buildingfeeling.org
            </a>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-h3 font-display font-semibold mb-24">Connect</h3>
            <div className="flex gap-16">
              <a 
                href="https://linkedin.com/in/buildingfeeling"
                className="text-accent-teal hover:text-accent-gold transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-24 h-24" />
              </a>
              <a 
                href="https://twitter.com/buildingfeeling"
                className="text-accent-teal hover:text-accent-gold transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-24 h-24" />
              </a>
            </div>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-h3 font-display font-semibold mb-24">Legal</h3>
            <p className="text-body font-body text-muted-grey leading-relaxed">
              This site uses no tracking cookies. Your privacy is respected.
            </p>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          className="mt-80 pt-40 border-t border-divider/20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-body font-body text-muted-grey">
            © 2024 Building Feeling Organisations. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
