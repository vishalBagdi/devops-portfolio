import {
  Activity,
  ArrowUpRight,
  Boxes,
  Cloud,
  Database,
  Network,
  Package,
  Server,
  ShieldCheck,
  Waypoints,
  Zap,
} from 'lucide-react'
import { m } from 'motion/react'
import GlassPanel from './GlassPanel'
import { awsServices } from '../data/awsServices'

const iconMap = {
  Activity,
  Boxes,
  Database,
  Network,
  Package,
  Server,
  ShieldCheck,
  Waypoints,
  Zap,
}

const accentMap = {
  orange: {
    icon: 'text-[var(--accent-orange)]',
    glow: 'bg-[rgba(255,153,67,0.14)]',
    border: 'group-hover:border-[rgba(255,153,67,0.24)]',
  },
  blue: {
    icon: 'text-[var(--accent-blue)]',
    glow: 'bg-[rgba(56,189,248,0.14)]',
    border: 'group-hover:border-[rgba(56,189,248,0.24)]',
  },
}

function AWSServiceCard({ service, index }) {
  const Icon = iconMap[service.icon]
  const accent = accentMap[service.accent]

  return (
    <m.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{
        duration: 0.35,
        delay: index * 0.04,
        ease: 'easeOut',
      }}
      className="group h-full"
    >
      <div
        className={`relative h-full overflow-hidden rounded-[26px] border border-white/8 bg-white/[0.03] p-[1px] shadow-[0_20px_50px_rgba(2,6,23,0.28)] transition-colors duration-300 ${accent.border}`}
      >
        <div className="relative flex h-full flex-col rounded-[25px] border border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-5 sm:p-6">
          <div
            className={`pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-full blur-3xl transition-opacity duration-300 group-hover:opacity-100 ${accent.glow} opacity-70`}
          />

          <div className="relative mb-5 flex items-start justify-between gap-4">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
              <Icon className={`h-5 w-5 ${accent.icon}`} />
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-white/8 bg-white/[0.04] px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
              AWS
              <ArrowUpRight className="h-3 w-3" />
            </span>
          </div>

          <div className="relative mt-auto">
            <h3 className="text-xl font-semibold text-[var(--text-primary)]">
              {service.name}
            </h3>
            <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
              {service.description}
            </p>
          </div>
        </div>
      </div>
    </m.article>
  )
}

function AWSExpertise() {
  return (
    <section
      id="aws"
      aria-labelledby="aws-title"
      className="relative mx-auto max-w-7xl scroll-mt-28 px-6 pb-10 pt-4 sm:px-8 lg:px-10"
    >
      <GlassPanel className="overflow-hidden p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-[rgba(255,153,67,0.08)] blur-3xl" />
        <div className="pointer-events-none absolute left-0 top-24 h-36 w-36 rounded-full bg-[rgba(56,189,248,0.08)] blur-3xl" />

        <m.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="relative max-w-3xl"
        >
          <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-white/8 bg-white/[0.035] px-4 py-2">
            <Cloud className="h-4 w-4 text-[var(--accent-orange)]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">
              AWS Cloud Expertise
            </span>
          </div>

          <h2
            id="aws-title"
            className="text-3xl font-semibold tracking-[-0.04em] text-[var(--text-primary)] sm:text-4xl"
          >
            Core AWS services used to design, deploy, and operate cloud platforms.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
            A concise view of the AWS services most relevant to infrastructure,
            container workloads, security, networking, observability, and
            serverless architecture.
          </p>
        </m.div>

        <div className="relative mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {awsServices.map((service, index) => (
            <AWSServiceCard key={service.name} service={service} index={index} />
          ))}
        </div>
      </GlassPanel>
    </section>
  )
}

export default AWSExpertise
