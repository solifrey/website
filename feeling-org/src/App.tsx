import { motion, useReducedMotion } from 'framer-motion'
import PainPoints from './components/PainPoints'
import FailureModes from './components/FailureModes'
import Solution from './components/Solution'
import SuccessStories from './components/SuccessStories'
import Services from './components/Services'
import Contact from './components/Contact'
import ScrollCue from './components/ScrollCue'

function FadeSection(props: { children: React.ReactNode }) {
	return (
		<motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: '-10% 0px' }} transition={{ duration: 0.8 }}>
			{props.children}
		</motion.section>
	)
}

function Hero() {
	const reduce = useReducedMotion()
	return (
		<section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
			<a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:rounded-md focus:bg-white focus:text-slate-900 focus:px-3 focus:py-2">Skip to content</a>
			{/* Flowing background */}
			<div aria-hidden className="pointer-events-none absolute inset-0">
				<div className="absolute -inset-[20%] opacity-40">
					<div className="size-full bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(32,186,196,0.25),transparent),radial-gradient(800px_400px_at_20%_100%,rgba(24,119,158,0.20),transparent),radial-gradient(1000px_500px_at_90%_60%,rgba(14,91,84,0.25),transparent)]" />
				</div>
				{reduce ? null : (
					<motion.div
						className="absolute -inset-[30%]"
						initial={{ opacity: 0.2, rotate: 0 }}
						animate={{ opacity: 0.35, rotate: 360 }}
						transition={{ repeat: Infinity, duration: 80, ease: 'linear' }}
					>
						<div className="size-full bg-[conic-gradient(from_90deg_at_50%_50%,rgba(17,94,89,0.15),transparent_70%)]" />
					</motion.div>
				)}
				<div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/30 to-slate-950" />
			</div>

			{/* Content */}
			<div className="relative z-10 max-w-5xl px-6 text-center">
				<motion.h1
					className="font-[Inter] text-4xl sm:text-5xl md:text-6xl leading-tight font-extrabold tracking-tight text-slate-100"
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.9, ease: 'easeOut' }}
				>
					What if your organisation could
					<br />
					sense change before it hits
					<br />
					the balance sheet?
				</motion.h1>
				<motion.p
					className="mt-6 text-lg md:text-xl font-merri text-slate-300 max-w-3xl mx-auto"
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
				>
					I help leadership teams turn complexity from a threat into an advantage — by building sensing and decision systems that let your organisation feel what’s coming and act before others even notice.
				</motion.p>

				<motion.div
					className="mt-10"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 2.0, duration: 0.8 }}
				>
					<a href="#pain" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-slate-900 bg-gradient-to-r from-teal-300 to-cyan-300 hover:from-teal-200 hover:to-cyan-200 transition-colors">
						See how it works ↓
					</a>
				</motion.div>
			</div>

			<ScrollCue />
		</section>
	)
}

function App() {
	return (
		<main id="main" className="min-h-screen bg-slate-950">
			<Hero />
			<FadeSection>
				<PainPoints />
			</FadeSection>
			<FadeSection>
				<FailureModes />
			</FadeSection>
			<FadeSection>
				<Solution />
			</FadeSection>
			<FadeSection>
				<SuccessStories />
			</FadeSection>
			<FadeSection>
				<Services />
			</FadeSection>
			<FadeSection>
				<Contact />
			</FadeSection>
		</main>
	)
}

export default App
