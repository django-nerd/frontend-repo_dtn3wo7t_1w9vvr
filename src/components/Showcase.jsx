import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Retail Automation',
    desc: 'Computer vision and agents reduce shrinkage by 36% across 1,200 stores.',
    tags: ['Vision', 'Edge', 'Agents']
  },
  {
    title: 'Knowledge Copilot',
    desc: 'RAG-powered assistant answering 40k questions/day for a global team.',
    tags: ['RAG', 'LLM', 'Search']
  },
  {
    title: 'Support Deflection',
    desc: 'Fine-tuned models deflect 62% of tickets with measurable quality gains.',
    tags: ['Fine-tune', 'Eval', 'MLOps']
  }
]

export default function Showcase() {
  return (
    <section id="work" className="relative bg-[#0b0b13] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected work</h2>
          <p className="mt-3 text-white/70">Impact-focused, production deployments.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 text-white"
            >
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-fuchsia-500/0 via-fuchsia-500/10 to-indigo-500/0 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                </div>
                <p className="mt-2 text-sm text-white/70">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
