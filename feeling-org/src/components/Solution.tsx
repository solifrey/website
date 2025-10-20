import { motion } from 'framer-motion'
import { Brain, Map, FlaskConical, Rss, HeartPulse } from 'lucide-react'

const items = [
	{
		id: 'sense-making',
		title: 'Sense-making at Scale',
		copy: 'Leadership meetings start with stories, not reports. Patterns emerge, decisions sharpen.',
		icon: Brain,
	},
	{
		id: 'estuarine-mapping',
		title: 'Estuarine Mapping – Seeing Where Change Can Flow',
		copy: 'Map your organisational currents. Stop fighting the tide.',
		icon: Map,
	},
	{
		id: 'safe-to-fail',
		title: 'Safe-to-Fail Experimentation',
		copy: 'Small, diverse experiments reveal the path faster than grand plans.',
		icon: FlaskConical,
	},
	{
		id: 'distributed-sensing',
		title: 'Distributed Sensing Networks',
		copy: 'Every employee becomes a sensor — your organisation develops nerves.',
		icon: Rss,
	},
	{
		id: 'embedding',
		title: 'Embedding the Feeling Organisation',
		copy: 'Culture and strategy begin to breathe together.',
		icon: HeartPulse,
	},
]

export default function Solution() {
	return (
		<section id="solution" className="relative py-28">
			<div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
				{/* Left: copy list with connecting line */}
				<div className="relative">
					<div aria-hidden className="absolute left-0 right-0 top-8 h-px bg-gradient-to-r from-cyan-400/20 via-cyan-300/30 to-transparent" />
					<ul className="space-y-10">
						{items.map(({ id, title, copy, icon: Icon }, i) => (
							<li key={id} className="relative">
								<div className="flex items-start gap-4">
									<div className="mt-1 shrink-0">
										<Icon className="h-6 w-6 text-cyan-300" />
									</div>
									<div>
										<h3 className="text-slate-100 font-semibold">{title}</h3>
										<p className="text-slate-300/85 font-merri mt-2 max-w-prose">{copy}</p>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>

				{/* Right: soft motion illustration */}
				<div className="relative min-h-[520px] overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50">
					{/* flowing estuary metaphor */}
					<motion.div
						className="absolute -inset-1"
						initial={{ opacity: 0.25, rotate: 0 }}
						animate={{ opacity: 0.45, rotate: 360 }}
						transition={{ repeat: Infinity, duration: 120, ease: 'linear' }}
					>
						<div className="size-full bg-[conic-gradient(from_0deg_at_50%_50%,rgba(34,211,238,0.08),transparent_40%,rgba(45,212,191,0.08),transparent_80%)]" />
					</motion.div>
					<div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_60%_40%,rgba(34,211,238,0.18),transparent),radial-gradient(700px_350px_at_30%_70%,rgba(45,212,191,0.16),transparent)]" />
					<div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
				</div>
			</div>
		</section>
	)
}
