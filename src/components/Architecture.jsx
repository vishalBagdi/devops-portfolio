import {
  Activity,
  AppWindow,
  Boxes,
  Cloud,
  Database,
  Network,
  Package,
  ShieldCheck,
  Users,
  Waypoints,
  Workflow,
} from 'lucide-react'
import { m } from 'motion/react'
import { useState } from 'react'
import GlassPanel from './GlassPanel'

const architectureNodes = [
  {
    id: 'users',
    title: 'Users',
    description: 'External users and clients interacting with the application entry point.',
    icon: Users,
    accent: 'blue',
    desktop: { x: 50, y: 8 },
  },
  {
    id: 'aws-cloud',
    title: 'AWS Cloud',
    description: 'The cloud foundation hosting networking, compute, storage, and observability.',
    icon: Cloud,
    accent: 'orange',
    desktop: { x: 50, y: 20 },
  },
  {
    id: 'route-balancer',
    title: 'Route / Load Balancer',
    description: 'Traffic routing and balancing across the runtime environment.',
    icon: Network,
    accent: 'blue',
    desktop: { x: 50, y: 32 },
  },
  {
    id: 'ecs',
    title: 'ECS',
    description: 'Container orchestration for managed application workloads on AWS.',
    icon: Boxes,
    accent: 'orange',
    desktop: { x: 24, y: 46 },
  },
  {
    id: 'eks',
    title: 'EKS',
    description: 'Managed Kubernetes control plane for cluster-based deployments.',
    icon: Waypoints,
    accent: 'blue',
    desktop: { x: 76, y: 46 },
  },
  {
    id: 'ecr',
    title: 'ECR',
    description: 'Private image registry for storing and delivering container artifacts.',
    icon: Package,
    accent: 'orange',
    desktop: { x: 24, y: 60 },
  },
  {
    id: 'kubernetes',
    title: 'Kubernetes',
    description: 'Container scheduling, scaling, and service orchestration inside the cluster.',
    icon: Workflow,
    accent: 'blue',
    desktop: { x: 76, y: 60 },
  },
  {
    id: 'application',
    title: 'Application',
    description: 'The deployed service layer serving business logic and user-facing functionality.',
    icon: AppWindow,
    accent: 'orange',
    desktop: { x: 50, y: 74 },
  },
  {
    id: 's3',
    title: 'S3',
    description: 'Object storage supporting assets, artifacts, and static delivery use cases.',
    icon: Database,
    accent: 'blue',
    desktop: { x: 24, y: 88 },
  },
  {
    id: 'cloudwatch',
    title: 'CloudWatch',
    description: 'Monitoring, metrics, logs, and operational visibility for running workloads.',
    icon: Activity,
    accent: 'orange',
    desktop: { x: 76, y: 88 },
  },
  {
    id: 'iam',
    title: 'IAM',
    description: 'Access control and permission boundaries across the architecture.',
    icon: ShieldCheck,
    accent: 'blue',
    desktop: { x: 50, y: 96 },
  },
]

const architectureLines = [
  { from: 'users', to: 'aws-cloud' },
  { from: 'aws-cloud', to: 'route-balancer' },
  { from: 'route-balancer', to: 'ecs' },
  { from: 'route-balancer', to: 'eks' },
  { from: 'ecs', to: 'ecr' },
  { from: 'eks', to: 'kubernetes' },
  { from: 'ecr', to: 'application' },
  { from: 'kubernetes', to: 'application' },
  { from: 'application', to: 's3' },
  { from: 'application', to: 'cloudwatch' },
  { from: 's3', to: 'iam' },
  { from: 'cloudwatch', to: 'iam' },
]

const mobileStages = [
  ['users'],
  ['aws-cloud'],
  ['route-balancer'],
  ['ecs', 'eks'],
  ['ecr', 'kubernetes'],
  ['application'],
  ['s3', 'cloudwatch'],
  ['iam'],
]

const accentClasses = {
  orange: {
    icon: 'text-[var(--accent-orange)]',
    border: 'border-[rgba(255,153,67,0.3)]',
    glow: 'bg-[rgba(255,153,67,0.12)]',
  },
  blue: {
    icon: 'text-[var(--accent-blue)]',
    border: 'border-[rgba(56,189,248,0.28)]',
    glow: 'bg-[rgba(56,189,248,0.12)]',
  },
}

function ArchitectureNode({ node, isActive, onActivate, compact = false }) {
  const accent = accentClasses[node.accent]
  const Icon = node.icon

  return (
    <button
      type="button"
      onMouseEnter={() => onActivate(node.id)}
      onFocus={() => onActivate(node.id)}
      onClick={() => onActivate(node.id)}
      aria-pressed={isActive}
      className={`group relative overflow-hidden rounded-[24px] border bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.025))] text-left backdrop-blur-xl transition-all duration-300 ${
        compact ? 'w-full px-4 py-3' : 'w-36 px-4 py-3.5 lg:w-40'
      } ${
        isActive
          ? `${accent.border} bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.035))] shadow-[0_20px_45px_rgba(2,6,23,0.34)]`
          : 'border-white/8 bg-white/[0.035] shadow-[0_16px_34px_rgba(2,6,23,0.2)] hover:border-white/14'
      }`}
    >
      <span
        className={`pointer-events-none absolute right-0 top-0 h-16 w-16 rounded-full blur-2xl transition-opacity duration-300 ${
          accent.glow
        } ${isActive ? 'opacity-100' : 'opacity-70'}`}
      />
      <span className="relative flex items-start gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
          <Icon className={`h-4.5 w-4.5 ${accent.icon}`} />
        </span>
        <span className="min-w-0">
          <span className="block text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
            Service
          </span>
          <span className="mt-1 block text-sm font-semibold leading-5 text-[var(--text-primary)]">
            {node.title}
          </span>
        </span>
      </span>
      <span className="sr-only">{node.description}</span>
    </button>
  )
}

function ArchitectureLines({ activeNode }) {
  function getNode(id) {
    return architectureNodes.find((node) => node.id === id)
  }

  function isHighlighted(line) {
    return line.from === activeNode || line.to === activeNode
  }

  return (
    <svg
      viewBox="0 0 100 108"
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      {architectureLines.map((line, index) => {
        const from = getNode(line.from)
        const to = getNode(line.to)
        const active = isHighlighted(line)

        return (
          <g key={`${line.from}-${line.to}`}>
            <line
              x1={from.desktop.x}
              y1={from.desktop.y}
              x2={to.desktop.x}
              y2={to.desktop.y}
              stroke={active ? 'rgba(255, 153, 67, 0.78)' : 'rgba(148, 163, 184, 0.24)'}
              strokeWidth={active ? '0.7' : '0.45'}
              strokeLinecap="round"
            />
            <m.line
              x1={from.desktop.x}
              y1={from.desktop.y}
              x2={to.desktop.x}
              y2={to.desktop.y}
              stroke={active ? 'rgba(56, 189, 248, 0.95)' : 'rgba(56, 189, 248, 0.35)'}
              strokeWidth={active ? '0.45' : '0.3'}
              strokeLinecap="round"
              strokeDasharray="2.5 4"
              animate={{ strokeDashoffset: [0, -13] }}
              transition={{
                duration: 1.8 + index * 0.05,
                ease: 'linear',
                repeat: Number.POSITIVE_INFINITY,
              }}
            />
          </g>
        )
      })}
    </svg>
  )
}

function Architecture() {
  const [activeNodeId, setActiveNodeId] = useState('application')
  const activeNode =
    architectureNodes.find((node) => node.id === activeNodeId) ?? architectureNodes[0]
  const ActiveIcon = activeNode.icon

  return (
    <section
      aria-labelledby="architecture-title"
      className="relative mx-auto max-w-7xl px-6 pb-10 pt-4 sm:px-8 lg:px-10"
    >
      <GlassPanel className="overflow-hidden p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute left-8 top-0 h-44 w-44 rounded-full bg-[rgba(56,189,248,0.08)] blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-20 h-48 w-48 rounded-full bg-[rgba(255,153,67,0.08)] blur-3xl" />

        <div className="relative">
          <m.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <p className="section-kicker mb-3">Architecture Visualization</p>
            <h2
              id="architecture-title"
              className="text-3xl font-semibold tracking-[-0.04em] text-[var(--text-primary)] sm:text-4xl"
            >
              Interactive AWS delivery architecture with container and observability layers.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
              Hover or tap a service to highlight it in the flow and inspect its role
              in the platform design.
            </p>
          </m.div>

          <div className="mt-8 grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
            <div>
              <div className="relative hidden min-h-[54rem] md:block">
                <ArchitectureLines activeNode={activeNodeId} />

                {architectureNodes.map((node, index) => (
                  <m.div
                    key={node.id}
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.28,
                      delay: index * 0.03,
                      ease: 'easeOut',
                    }}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `${node.desktop.x}%`,
                      top: `${node.desktop.y}%`,
                    }}
                  >
                    <ArchitectureNode
                      node={node}
                      isActive={activeNodeId === node.id}
                      onActivate={setActiveNodeId}
                    />
                  </m.div>
                ))}
              </div>

              <div className="space-y-4 md:hidden">
                {mobileStages.map((stage, index) => (
                  <div key={stage.join('-')} className="space-y-3">
                    <div
                      className={`grid gap-3 ${
                        stage.length > 1 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'
                      }`}
                    >
                      {stage.map((nodeId) => {
                        const node = architectureNodes.find((item) => item.id === nodeId)

                        return (
                          <ArchitectureNode
                            key={node.id}
                            node={node}
                            compact
                            isActive={activeNodeId === node.id}
                            onActivate={setActiveNodeId}
                          />
                        )
                      })}
                    </div>

                    {index < mobileStages.length - 1 ? (
                      <div className="flex justify-center">
                        <div className="relative flex h-10 w-4 items-center justify-center">
                          <span className="absolute h-full w-px bg-[linear-gradient(180deg,rgba(56,189,248,0.2),rgba(255,153,67,0.42),rgba(56,189,248,0.2))]" />
                          <m.span
                            className="absolute h-2.5 w-2.5 rounded-full bg-[var(--accent-orange)] shadow-[0_0_18px_rgba(255,153,67,0.55)]"
                            animate={{ y: [-8, 8, -8], opacity: [0.45, 1, 0.45] }}
                            transition={{
                              duration: 2.1,
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
            </div>

            <m.aside
              key={activeNode.id}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
            >
              <div className="sticky top-28 rounded-[28px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-[1px] shadow-[0_20px_50px_rgba(2,6,23,0.28)]">
                <div className="relative overflow-hidden rounded-[27px] border border-white/6 bg-[rgba(6,12,24,0.82)] p-6">
                  <span
                    className={`pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-full blur-3xl ${
                      activeNode.accent === 'orange'
                        ? 'bg-[rgba(255,153,67,0.14)]'
                        : 'bg-[rgba(56,189,248,0.14)]'
                    }`}
                  />

                  <p className="section-kicker mb-3">Focused Service</p>
                  <div className="relative flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                      <ActiveIcon
                        className={`h-5 w-5 ${
                          activeNode.accent === 'orange'
                            ? 'text-[var(--accent-orange)]'
                            : 'text-[var(--accent-blue)]'
                        }`}
                      />
                    </span>
                    <div>
                      <h3 className="text-2xl font-semibold text-[var(--text-primary)]">
                        {activeNode.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                        {activeNode.description}
                      </p>
                    </div>
                  </div>

                  <div className="relative mt-6 rounded-2xl border border-white/8 bg-white/[0.035] px-4 py-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                      Interaction
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                      Hover a node on desktop or tap a node on mobile to trace its
                      placement in the architecture flow.
                    </p>
                  </div>
                </div>
              </div>
            </m.aside>
          </div>
        </div>
      </GlassPanel>
    </section>
  )
}

export default Architecture
