import {
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  Cloud,
  Container,
  FolderGit2,
  ServerCog,
  Waypoints,
  Workflow,
} from 'lucide-react'
import { m } from 'motion/react'
import GlassPanel from './GlassPanel'

const responsibilities = [
  { label: 'AWS infrastructure management', icon: Cloud, accent: 'text-[var(--accent-orange)]' },
  { label: 'Docker containerization', icon: Container, accent: 'text-[var(--accent-blue)]' },
  { label: 'ECS/ECR deployments', icon: BriefcaseBusiness, accent: 'text-[var(--accent-orange)]' },
  { label: 'Terraform infrastructure provisioning', icon: Waypoints, accent: 'text-[var(--accent-blue)]' },
  { label: 'CI/CD automation', icon: Workflow, accent: 'text-[var(--accent-orange)]' },
  { label: 'Linux administration', icon: ServerCog, accent: 'text-[var(--accent-blue)]' },
  { label: 'Git/GitHub', icon: FolderGit2, accent: 'text-[var(--accent-orange)]' },
]

function ResponsibilityItem({ item, index }) {
  const Icon = item.icon

  return (
    <m.li
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.3,
        delay: 0.1 + index * 0.04,
        ease: 'easeOut',
      }}
    >
      <div className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.035] px-4 py-3 transition-colors duration-200 hover:border-white/12 hover:bg-white/[0.05]">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
          <Icon className={`h-4.5 w-4.5 ${item.accent}`} />
        </span>
        <p className="pt-1 text-sm leading-7 text-[var(--text-secondary)]">
          {item.label}
        </p>
      </div>
    </m.li>
  )
}

function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="relative mx-auto max-w-7xl scroll-mt-28 px-6 pb-10 pt-4 sm:px-8 lg:px-10"
    >
      <GlassPanel className="overflow-hidden p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute left-0 top-8 h-40 w-40 rounded-full bg-[rgba(56,189,248,0.08)] blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-0 h-44 w-44 rounded-full bg-[rgba(255,153,67,0.08)] blur-3xl" />

        <m.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="relative max-w-3xl"
        >
          <p className="section-kicker mb-3">Experience</p>
          <h2
            id="experience-title"
            className="text-3xl font-semibold tracking-[-0.04em] text-[var(--text-primary)] sm:text-4xl"
          >
            Professional experience presented through a clean, responsive timeline.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
            A concise role summary focused on responsibilities and delivery areas,
            without inventing additional dates, achievements, or metrics.
          </p>
        </m.div>

        <div className="relative mt-8">
          <div className="hidden md:block">
            <div className="absolute left-[2.2rem] top-0 h-full w-px bg-[linear-gradient(180deg,rgba(56,189,248,0.16),rgba(255,153,67,0.35),rgba(56,189,248,0.16))]" />
          </div>

          <m.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="relative md:pl-20"
          >
            <div className="mb-5 flex items-center gap-4 md:absolute md:left-0 md:top-2 md:mb-0">
              <span className="inline-flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border border-[rgba(255,153,67,0.28)] bg-[linear-gradient(180deg,rgba(255,153,67,0.18),rgba(255,123,28,0.08))] p-4 shadow-[0_0_26px_rgba(255,153,67,0.18)]">
                <BriefcaseBusiness className="h-6 w-6 text-[var(--accent-orange)]" />
              </span>
            </div>

            <div className="rounded-[28px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.025))] p-[1px] shadow-[0_20px_50px_rgba(2,6,23,0.28)]">
              <div className="rounded-[27px] border border-white/6 bg-[rgba(255,255,255,0.03)] p-5 sm:p-6 lg:p-7">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                      Position
                    </p>
                    <h3 className="text-2xl font-semibold text-[var(--text-primary)]">
                      DevOps Engineer
                    </h3>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2 lg:min-w-[320px]">
                    <div className="inline-flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.035] px-4 py-3">
                      <Building2 className="h-4.5 w-4.5 text-[var(--accent-blue)]" />
                      <span className="text-sm font-medium text-[var(--text-secondary)]">
                        Techyukt Software Solutions Private Limited
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.035] px-4 py-3">
                      <CalendarDays className="h-4.5 w-4.5 text-[var(--accent-orange)]" />
                      <span className="text-sm font-medium text-[var(--text-secondary)]">
                        August 2025 - Present
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                    Responsibilities
                  </p>
                  <ul className="grid gap-3 md:grid-cols-2" role="list">
                    {responsibilities.map((item, index) => (
                      <ResponsibilityItem key={item.label} item={item} index={index} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </m.div>
        </div>
      </GlassPanel>
    </section>
  )
}

export default Experience
