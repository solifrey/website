export default function Services() {
	const items = [
		{
			id: 'sense-making',
			title: 'Sense-Making Partner',
			copy: 'Transform fog into movement. Build sensing and decision systems fast.',
			cta: 'Let’s map your landscape.',
			link: '#contact',
		},
		{
			id: 'feeling-dept',
			title: 'Build the Department that Feels',
			copy: 'Embed the capacity to sense and adapt. A permanent nervous system for your enterprise.',
			cta: 'Explore permanent collaboration.',
			link: '#contact',
		},
		{
			id: 'connect',
			title: 'Connect & Co-learn',
			copy: 'Some of the best transformations start as good conversations.',
			cta: 'Book a conversation.',
			link: '#contact',
		},
	]
	return (
		<section id="services" className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-50/5">
			<div className="mx-auto max-w-7xl px-6">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{items.map((s) => (
						<div key={s.id} className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/70">
							<div className="p-6">
								<h3 className="text-slate-100 font-semibold">{s.title}</h3>
								<p className="text-slate-300/85 font-merri mt-2">{s.copy}</p>
								<div className="mt-4 max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-40">
									<a href={s.link} className="inline-flex items-center rounded-full bg-white text-slate-900 px-4 py-2 hover:bg-slate-100">
										{s.cta}
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
