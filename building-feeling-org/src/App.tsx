import { motion } from 'framer-motion'
import { siteData } from './data'
import Hero from './components/Hero'
import PainCard from './components/PainCard'
import HowFailCard from './components/HowFailCard'
import SolutionItem from './components/SolutionItem'
import CaseCard from './components/CaseCard'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10">
        <div className="container-custom py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-gradient">
            Building Feeling Organisations
          </div>
          <a 
            href="#services" 
            className="btn-primary"
          >
            Work with me
          </a>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="hero" className="pt-20">
          <Hero data={siteData.hero} />
        </section>

        {/* Pain Points Section */}
        <section id="pain-points" className="section-padding bg-gradient-mesh">
          <div className="container-custom">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                The challenges you face
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Every leader knows these struggles. The question is: how do you break free?
              </p>
            </motion.div>
            <div className="space-y-32">
              {siteData.painPoints.map((pain, index) => (
                <PainCard 
                  key={index}
                  title={pain.title}
                  description={pain.description}
                  illustrationKey={pain.illustrationKey}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* How Problem is Addressed Section */}
        <section id="how-addressed" className="py-120 bg-muted-grey/10">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2 
              className="text-h2 font-display font-semibold text-center mb-80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              How the problem is addressed today
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-40">
              {siteData.howProblemAddressed.map((approach, index) => (
                <HowFailCard 
                  key={index}
                  title={approach.title}
                  description={approach.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="solution" className="py-120">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2 
              className="text-h2 font-display font-semibold text-center mb-80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              A different approach
            </motion.h2>
            <div className="space-y-80">
              {siteData.solutions.map((solution, index) => (
                <SolutionItem 
                  key={index}
                  title={solution.title}
                  description={solution.description}
                  illustrationKey={solution.illustrationKey}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section id="success-stories" className="py-120 bg-muted-grey/10">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2 
              className="text-h2 font-display font-semibold text-center mb-80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              Success stories
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-40">
              {siteData.successStories.map((story, index) => (
                <CaseCard 
                  key={index}
                  title={story.title}
                  organization={story.organization}
                  description={story.description}
                  impact={story.impact}
                  quote={story.quote}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Services/CTA Section */}
        <section id="services" className="py-120">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2 
              className="text-h2 font-display font-semibold text-center mb-80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              How we can work together
            </motion.h2>
            <CTASection services={siteData.services} cta={siteData.cta} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App