import { motion, useReducedMotion } from 'framer-motion'

export default function ScrollCue() {
	const reduce = useReducedMotion()
	return (
		<div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
			{reduce ? (
				<div className="text-slate-400">↓</div>
			) : (
				<motion.div
					initial={{ y: 0, opacity: 0.6 }}
					animate={{ y: [0, 6, 0], opacity: [0.6, 1, 0.6] }}
					transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
					className="text-slate-400"
				>
					↓
				</motion.div>
			)}
		</div>
	)
}
