import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
	{
		id: 'gov',
		title: 'Crisis to Clarity (Government)',
		image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
		quote: '“Decision latency dropped by half — teams finally trusted the data.”',
		accent: 'from-rose-300 to-rose-500',
	},
	{
		id: 'energy',
		title: 'Energy Company in Flow',
		image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop',
		quote: '“Strategy stopped being theatre.” — CEO',
		accent: 'from-cyan-300 to-teal-400',
	},
	{
		id: 'health',
		title: 'Healthcare Stories that Saved Millions',
		image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop',
		quote: '“The stories saved us millions — and gave us back morale.” — CFO',
		accent: 'from-amber-300 to-orange-400',
	},
]

export default function SuccessStories() {
	const [idx, setIdx] = useState(0)

	useEffect(() => {
		const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
		if (mq.matches) return
		const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 6000)
		return () => clearInterval(t)
	}, [])

	useEffect(() => {
		function onKey(e: KeyboardEvent) {
			if (e.key === 'ArrowLeft') setIdx((i) => (i - 1 + slides.length) % slides.length)
			if (e.key === 'ArrowRight') setIdx((i) => (i + 1) % slides.length)
		}
		window.addEventListener('keydown', onKey)
		return () => window.removeEventListener('keydown', onKey)
	}, [])

	const current = slides[idx]

	return (
		<section id="success" className="relative py-24">
			<div className="mx-auto max-w-6xl px-6">
				<div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60">
					<div className="relative h-[460px]">
						<img src={current.image} alt="case" className="absolute inset-0 h-full w-full object-cover brightness-75 grayscale" />
						<div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20" />
						<div className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${current.accent}`} />

						<div className="relative z-10 h-full flex items-center">
							<div className="px-8 max-w-2xl">
								<h3 className="text-2xl md:text-3xl font-semibold text-white">{current.title}</h3>
								<p className="mt-4 text-lg text-slate-200 font-merri">{current.quote}</p>
							</div>
							<div className="ml-auto flex items-center gap-2 pr-6">
								<button aria-label="Previous" onClick={() => setIdx((idx - 1 + slides.length) % slides.length)} className="rounded-full border border-slate-700/60 bg-slate-800/60 p-2 hover:bg-slate-700">
									<ChevronLeft className="h-5 w-5 text-slate-200" />
								</button>
								<button aria-label="Next" onClick={() => setIdx((idx + 1) % slides.length)} className="rounded-full border border-slate-700/60 bg-slate-800/60 p-2 hover:bg-slate-700">
									<ChevronRight className="h-5 w-5 text-slate-200" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
