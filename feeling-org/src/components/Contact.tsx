export default function Contact() {
	return (
		<section id="contact" className="relative py-28">
			<div aria-hidden className="absolute inset-0">
				<div className="absolute -inset-20 bg-[radial-gradient(800px_300px_at_50%_10%,rgba(34,211,238,0.12),transparent),radial-gradient(900px_380px_at_60%_80%,rgba(45,212,191,0.1),transparent)]" />
			</div>
			<div className="relative mx-auto max-w-3xl px-6 text-center">
				<h2 className="text-3xl md:text-4xl font-semibold text-white">
					If your organisation feels numb to what’s changing — let’s wake its senses.
				</h2>
				<p className="mt-4 text-slate-300/90 font-merri">
					Whether you need pragmatic help, a long-term capability, or simply a conversation about what’s emerging — reach out. The future belongs to organisations that can feel before they decide.
				</p>

				<div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
					<a href="#" className="rounded-full text-center bg-gradient-to-r from-teal-300 to-cyan-300 text-slate-900 px-6 py-3 hover:from-teal-200 hover:to-cyan-200">Start a Conversation</a>
					<a href="#" className="rounded-full text-center border border-slate-700 px-6 py-3 text-slate-100 hover:bg-slate-800">Download Capability Overview</a>
				</div>

				<form className="mt-10 text-left rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
					<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
						<label className="block">
							<span className="text-sm text-slate-300">Name</span>
							<input className="mt-1 w-full rounded-md bg-slate-800 border border-slate-700 px-3 py-2 text-slate-100" placeholder="Your name" />
						</label>
						<label className="block">
							<span className="text-sm text-slate-300">Email</span>
							<input className="mt-1 w-full rounded-md bg-slate-800 border border-slate-700 px-3 py-2 text-slate-100" placeholder="you@example.com" />
						</label>
					</div>
					<label className="block mt-4">
						<span className="text-sm text-slate-300">Message</span>
						<textarea rows={4} className="mt-1 w-full rounded-md bg-slate-800 border border-slate-700 px-3 py-2 text-slate-100" placeholder="Tell me a little about your context" />
					</label>
					<div className="mt-4">
						<button type="button" className="rounded-md bg-white text-slate-900 px-4 py-2 hover:bg-slate-100">Send</button>
					</div>
				</form>
			</div>
		</section>
	)
}
