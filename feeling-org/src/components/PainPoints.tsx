import { motion } from 'framer-motion'
import { CloudFog, Coins, Network, Sparkles, Activity } from 'lucide-react'

const panels = [
	{
		id: 'fog-dashboard',
		title: 'Flying through fog with yesterday’s dashboard',
		copy:
			'“The numbers look fine, but something feels wrong. You had data, not senses.”',
		Icon: CloudFog,
		variant: 'dark',
	},
	{
		id: 'coin-toss',
		title: 'Every decision feels like a coin toss',
		copy: '“Plans rewrite themselves. Anxiety of steering without traction.”',
		Icon: Coins,
		variant: 'light',
	},
	{
		id: 'busy-not-connected',
		title: 'People busy, not connected',
		copy: '“Everyone moves fast — but not together.”',
		Icon: Network,
		variant: 'dark',
	},
	{
		id: 'fireworks-to-fog',
		title: 'Transformations promise fireworks, deliver fog',
		copy: '“Glossy decks. Little that lasts.”',
		Icon: Sparkles,
		variant: 'light',
	},
	{
		id: 'lonely-at-top',
		title: 'Leaders lonely at the top of complexity',
		copy: '“You hear the system’s unease but can’t name it.”',
		Icon: Activity,
		variant: 'dark',
	},
]

export default function PainPoints() {
	return (
		<section id="pain" className="relative py-24">
			<div className="mx-auto max-w-7xl px-6">
				<div className="grid grid-cols-1 md:grid-cols-5 gap-4">
					{panels.map(({ id, title, copy, Icon, variant }, idx) => {
						const gradient =
							variant === 'dark'
								? 'from-slate-900 to-slate-800'
								: 'from-slate-800 to-slate-900'
						return (
							<motion.article
								key={id}
								whileHover={{ y: -4 }}
								transition={{ type: 'spring', stiffness: 220, damping: 24 }}
								className={`group relative overflow-hidden rounded-xl bg-gradient-to-b ${gradient} p-5 min-h-64 flex flex-col justify-between`}
							>
								{/* Subtle overlays for motion metaphors */}
								<div aria-hidden className="pointer-events-none absolute inset-0">
									{/* fog / flow glows */}
									<div className="absolute -inset-20 opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-[radial-gradient(500px_200px_at_20%_10%,rgba(94,234,212,0.15),transparent),radial-gradient(400px_160px_at_90%_80%,rgba(56,189,248,0.15),transparent)]" />
								</div>

								<div className="relative z-10 space-y-3">
									<Icon className="h-6 w-6 text-cyan-300/70 group-hover:text-cyan-200 transition-colors" />
									<h3 className="text-slate-100 font-semibold leading-tight">{title}</h3>
									<p className="text-sm text-slate-300/80">{copy}</p>
								</div>

								{/* Micro interaction per card */}
								{idx === 0 && (
									<motion.div
										className="absolute inset-0"
										initial={{ backdropFilter: 'blur(6px)' }}
										whileHover={{ backdropFilter: 'blur(0px)' }}
										transition={{ duration: 0.6 }}
									/>
								)}
								{idx === 1 && (
									<motion.div
										className="absolute right-4 top-4"
										initial={{ rotate: 0 }}
										whileHover={{ rotate: 360 }}
										transition={{ duration: 2, ease: 'easeInOut' }}
									>
										<Coins className="h-8 w-8 text-amber-300/50" />
									</motion.div>
								)}
								{idx === 2 && (
									<motion.div
										className="absolute inset-0"
										initial={{ opacity: 0 }}
										whileHover={{ opacity: 1 }}
										transition={{ duration: 0.6 }}
									>
										<div className="absolute inset-0 bg-[radial-gradient(200px_200px_at_30%_30%,rgba(94,234,212,0.15),transparent),radial-gradient(200px_200px_at_70%_70%,rgba(56,189,248,0.15),transparent)]" />
									</motion.div>
								)}
								{idx === 3 && (
									<motion.div
										className="absolute inset-0"
										initial={{ opacity: 0 }}
										whileHover={{ opacity: 1 }}
										transition={{ duration: 0.6 }}
									>
										<div className="absolute inset-0 bg-[radial-gradient(160px_160px_at_60%_40%,rgba(252,211,77,0.15),transparent)]" />
									</motion.div>
								)}
								{idx === 4 && (
									<motion.div
										className="absolute bottom-3 right-3"
										initial={{ opacity: 0.5, scaleX: 1 }}
										whileHover={{ opacity: 1, scaleX: 1.15 }}
										transition={{ duration: 0.5 }}
									>
										<div className="h-1 w-24 bg-gradient-to-r from-rose-300/60 to-emerald-300/60" />
									</motion.div>
								)}
							</motion.article>
						)
					})}
				</div>
			</div>
		</section>
	)
}
