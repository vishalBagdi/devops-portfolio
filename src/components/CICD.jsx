import {
  Activity,
  Boxes,
  Code2,
  Container,
  FlaskConical,
  FolderGit2,
  GitBranch,
  Hammer,
  Package,
  Waypoints,
  Workflow,
} from 'lucide-react'
import { m } from 'motion/react'
import GlassPanel from './GlassPanel'

const pipelineStages = [
  { label: 'Code', icon: Code2, accent: 'orange' },
  { label: 'Git', icon: GitBranch, accent: 'blue' },
  { label: 'Build', icon: Hammer, accent: 'orange' },
  { label: 'Test', icon: FlaskConical, accent: 'blue' },
  { label: 'Docker', icon: Container, accent: 'orange' },
  { label: 'ECR', icon: Package, accent: 'blue' },
  { label: 'Deploy', icon: Workflow, accent: 'orange' },
  { label: 'ECS / EKS', icon: Boxes, accent: 'blue' },
  { label: 'Monitor', icon: Activity, accent: 'orange' },
]

const tools = [
  { label: 'Git', icon: GitBranch },
  { label: 'GitHub', icon: FolderGit2 },
  { label: 'Jenkins', icon: Workflow },
  { label: 'Docker', icon: Container },
  { label: 'Terraform', icon: Waypoints },
  { label: 'AWS', icon: Package },
]

const accentClassMap = {
  orange: 'text-[var(--accent-orange)]',
  blue: 'text-[var(--accent-blue)]',
}

function StageCard({ stage, index, compact = false }) {
  const Icon = stage.icon

  return (
    <m.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.3,
        delay: index * 0.04,
        ease: 'easeOut',
      }}
      className="group relative"
    >
      <div
        className={`relative overflow-hidden rounded-[24px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.025))] shadow-[0_16px_34px_rgba(2,6,23,0.22)] transition-colors duration-300 hover:border-white/14 ${
          compact ? 'px-4 py-3.5' : 'px-3 py-4 lg:px-4'
        }`}
      >
        <span
          className={`pointer-events-none absolute right-0 top-0 h-16 w-16 rounded-full blur-2xl ${
            stage.accent === 'orange'
              ? 'bg-[rgba(255,153,67,0.12)]'
              : 'bg-[rgba(56,189,248,0.12)]'
          }`}
        />
        <div className="relative flex items-center gap-3">
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
            <Icon className={`h-4.5 w-4.5 ${accentClassMap[stage.accent]}`} />
          </span>
          <div className="min-w-0">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
              Stage
            </p>
            <p className="mt-1 text-sm font-semibold text-[var(--text-primary)]">
              {stage.label}
            </p>
          </div>
        </div>
      </div>
    </m.div>
  )
}

function ToolBadge({ tool, index }) {
  const Icon = tool.icon

  return (
    <m.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.3,
        delay: 0.16 + index * 0.03,
        ease: 'easeOut',
      }}
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.045] px-4 py-2.5 text-sm font-medium text-[var(--text-secondary)] transition-colors duration-200 hover:border-white/12 hover:bg-white/[0.065] hover:text-[var(--text-primary)]">
        <Icon className="h-4 w-4 text-[var(--accent-blue)]" />
        {tool.label}
      </div>
    </m.div>
  )
}

function CICD() {
  return (
    <section
      aria-labelledby="cicd-title"
      className="relative mx-auto max-w-7xl px-6 pb-10 pt-4 sm:px-8 lg:px-10"
    >
      <GlassPanel className="overflow-hidden p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute left-0 top-10 h-40 w-40 rounded-full bg-[rgba(56,189,248,0.08)] blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-0 h-44 w-44 rounded-full bg-[rgba(255,153,67,0.08)] blur-3xl" />

        <m.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="relative max-w-3xl"
        >
          <p className="section-kicker mb-3">CI/CD &amp; Automation</p>
          <h2
            id="cicd-title"
            className="text-3xl font-semibold tracking-[-0.04em] text-[var(--text-primary)] sm:text-4xl"
          >
            Automated delivery flow from code to monitored cloud runtime.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
            A clean CI/CD visualization showing how source changes move through build,
            validation, containerization, registry publication, deployment, and monitoring.
          </p>
        </m.div>

        <div className="relative mt-8 hidden lg:block">
          <div className="absolute left-[6%] right-[6%] top-[3.55rem] h-px bg-[linear-gradient(90deg,rgba(56,189,248,0.18),rgba(255,153,67,0.45),rgba(56,189,248,0.18))]" />
          <m.div
            className="absolute top-[3.15rem] h-3 w-3 rounded-full bg-[var(--accent-orange)] shadow-[0_0_20px_rgba(255,153,67,0.55)]"
            animate={{ x: ['6%', '94%', '6%'], opacity: [0.45, 1, 0.45] }}
            transition={{
              duration: 5.2,
              ease: 'easeInOut',
              repeat: Number.POSITIVE_INFINITY,
            }}
          />

          <div className="relative grid grid-cols-9 gap-3">
            {pipelineStages.map((stage, index) => (
              <StageCard key={stage.label} stage={stage} index={index} />
            ))}
          </div>
        </div>

        <div className="relative mt-8 space-y-3 lg:hidden">
          {pipelineStages.map((stage, index) => (
            <div key={stage.label} className="space-y-3">
              <StageCard stage={stage} index={index} compact />
              {index < pipelineStages.length - 1 ? (
                <div className="flex justify-center">
                  <div className="relative flex h-9 w-4 items-center justify-center">
                    <span className="absolute h-full w-px bg-[linear-gradient(180deg,rgba(56,189,248,0.2),rgba(255,153,67,0.42),rgba(56,189,248,0.2))]" />
                    <m.span
                      className="absolute h-2.5 w-2.5 rounded-full bg-[var(--accent-orange)] shadow-[0_0_18px_rgba(255,153,67,0.55)]"
                      animate={{ y: [-8, 8, -8], opacity: [0.45, 1, 0.45] }}
                      transition={{
                        duration: 2,
                        ease: 'easeInOut',
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    />
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="relative mt-8 rounded-[26px] border border-white/8 bg-white/[0.03] p-5 sm:p-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
            Tooling Stack
          </p>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool, index) => (
              <ToolBadge key={tool.label} tool={tool} index={index} />
            ))}
          </div>
        </div>
      </GlassPanel>
    </section>
  )
}

export default CICD
