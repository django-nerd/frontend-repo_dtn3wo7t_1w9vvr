import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative bg-[#090912] py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 sm:p-12 text-center shadow-xl">
          <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-fuchsia-600/20 blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Ready to ship your AI roadmap?
            </h2>
            <p className="mt-3 text-white/70 max-w-2xl mx-auto">
              Tell us about your use case. Well design a high-impact plan and start delivering outcomes in weeks, not months.
            </p>
            <form className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
              <input className="col-span-1 rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50" placeholder="Name" />
              <input className="col-span-1 rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50" placeholder="Company" />
              <input className="col-span-1 rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50" placeholder="Email" />
              <textarea className="col-span-1 sm:col-span-3 min-h-[120px] rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50" placeholder="What are you building?" />
              <div className="sm:col-span-3 flex items-center justify-center">
                <button type="button" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 hover:opacity-90">
                  Get proposal
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
