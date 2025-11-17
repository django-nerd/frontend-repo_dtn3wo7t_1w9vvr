import { Cpu, Bot, Brain, Sparkles, Shield, Rocket } from 'lucide-react'
import { motion } from 'framer-motion'

const items = [
  {
    icon: Bot,
    title: 'Autonomous Agents',
    desc: 'Task-driven agents with tools, memory, and guardrails that operate safely in your environment.'
  },
  {
    icon: Brain,
    title: 'LLM Applications',
    desc: 'RAG search, chat systems, and copilots tailored to your data with enterprise observability.'
  },
  {
    icon: Cpu,
    title: 'Computer Vision',
    desc: 'Real-time detection, tracking, and OCR pipelines — optimized for edge and cloud.'
  },
  {
    icon: Shield,
    title: 'Security & Governance',
    desc: 'Privacy-by-design, policy enforcement, and evaluation suites baked in from day one.'
  },
  {
    icon: Rocket,
    title: 'MLOps & Scaling',
    desc: 'From prototype to production with CI/CD, monitoring, and cost-aware infrastructure.'
  },
  {
    icon: Sparkles,
    title: 'Model Fine-Tuning',
    desc: 'Train, distill, and optimize models for your unique tasks and performance targets.'
  }
]

export default function Features() {
  return (
    <section id="services" className="relative bg-[#090912] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What we build</h2>
          <p className="mt-3 text-white/70">Full-stack AI systems designed for reliability, safety, and speed.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 text-white shadow-lg shadow-purple-500/10"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute -inset-40 bg-gradient-to-tr from-fuchsia-600/10 to-indigo-600/10 blur-2xl" />
              </div>
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                  <item.icon className="h-6 w-6 text-fuchsia-300" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-white/70">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
