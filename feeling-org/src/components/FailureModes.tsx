import { motion } from 'framer-motion'
import { CircleSlash2, FileText, Trees } from 'lucide-react'

const cards = [
	{
		id: 'control',
		title: 'Control',
		frontIcon: CircleSlash2,
		front: 'Hands tightening a steering wheel.',
		back: 'More control deadens sensing.',
	},
	{
		id: 'transform',
		title: 'Transformation Programmes',
		frontIcon: FileText,
		front: 'Glossy brochure imagery.',
		back: 'Same culture, new logo.',
	},
	{
		id: 'best-practice',
		title: 'Copying Best Practice',
		frontIcon: Trees,
		front: 'Rainforest tree in desert sand.',
		back: 'Context matters. Copying kills adaptation.',
	},
]

export default function FailureModes() {
	return (
		<section className="relative py-20">
			<div className="mx-auto max-w-7xl px-6">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{cards.map(({ id, title, frontIcon: Icon, front, back }) => (
						<div key={id} className="group perspective">
							<div className="relative h-56 w-full [transform-style:preserve-3d] transition-transform duration-700 group-hover:[transform:rotateY(180deg)]">
								{/* Front */}
								<div className="absolute inset-0 rounded-xl bg-slate-900/80 p-6 border border-slate-800 [backface-visibility:hidden] flex flex-col justify-between">
									<Icon className="h-6 w-6 text-cyan-300/70" />
									<div>
										<h3 className="text-slate-100 font-semibold">{title}</h3>
										<p className="text-slate-300/80 text-sm mt-2">{front}</p>
									</div>
								</div>
								{/* Back */}
								<div className="absolute inset-0 rounded-xl bg-slate-900/90 p-6 border border-slate-800 [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center">
									<p className="text-center text-amber-200 font-medium">{back}</p>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="mt-10 text-center">
					<p className="text-slate-300/90">
						Complexity doesn’t yield to control.
						<br />
						<span className="text-cyan-200">To thrive, organisations must learn to sense and adapt instead.</span>
					</p>
				</div>
			</div>
		</section>
	)
}
