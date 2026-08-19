import {
  ArrowDown,
  ArrowRight,
  Boxes,
  BriefcaseBusiness,
  Cloud,
  Container,
  Download,
  FolderGit2,
  GitBranch,
  Mail,
  Package,
  TerminalSquare,
  UserRound,
  Workflow,
} from 'lucide-react'
import { m } from 'motion/react'
import GlassPanel from './GlassPanel'
import { contactConfig } from '../data/contact'
import { resumeFilePath } from '../data/resume'

const socialLinks = [
  {
    label: 'GitHub',
    href: contactConfig.github,
    icon: FolderGit2,
  },
  {
    label: 'LinkedIn',
    href: contactConfig.linkedin,
    icon: BriefcaseBusiness,
  },
  {
    label: 'Email',
    href: `mailto:${contactConfig.email}`,
    icon: Mail,
  },
]

const infrastructureFlow = [
  { label: 'Developer', icon: UserRound, accent: 'text-[var(--accent-orange)]' },
  { label: 'Git', icon: GitBranch, accent: 'text-[var(--accent-blue)]' },
  { label: 'CI/CD', icon: Workflow, accent: 'text-[var(--accent-orange)]' },
  { label: 'Docker', icon: Container, accent: 'text-[var(--accent-blue)]' },
  { label: 'ECR', icon: Package, accent: 'text-[var(--accent-orange)]' },
  { label: 'ECS / EKS', icon: Boxes, accent: 'text-[var(--accent-blue)]' },
  { label: 'AWS Cloud', icon: Cloud, accent: 'text-[var(--accent-orange)]' },
]

const terminalBlocks = [
  {
    command: '$ whoami',
    lines: ['vishal-bagdi'],
  },
  {
    command: '$ docker ps',
    lines: [
      'CONTAINER ID    IMAGE       STATUS',
      'a12bc34         devops-app  Running',
    ],
  },
  {
    command: '$ kubectl get pods',
    lines: [
      'NAME              STATUS',
      'portfolio-app     Running',
    ],
  },
  {
    command: '$ terraform plan',
    lines: ['Infrastructure changes: 0'],
  },
]

function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative mx-auto flex min-h-[calc(100vh-6.5rem)] max-w-7xl scroll-mt-28 items-center px-6 pb-10 pt-6 sm:px-8 lg:px-10"
    >
      <div className="grid w-full items-center gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(360px,520px)]">
        <m.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="status-pill">
              <span className="signal-dot" />
              Available for opportunities
            </span>
            <span className="status-pill status-pill-blue">
              <TerminalSquare className="h-3.5 w-3.5" />
              AWS &bull; Docker &bull; Kubernetes
            </span>
          </div>

          <div className="space-y-6">
            <p className="section-kicker">Hello, I&apos;m</p>
            <div className="space-y-4">
              <h1
                id="hero-title"
                className="text-5xl font-semibold tracking-[-0.06em] text-[var(--text-primary)] sm:text-6xl lg:text-7xl"
              >
                Vishal Bagdi
              </h1>
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium tracking-[0.16em] text-[var(--text-secondary)] uppercase">
                <span className="h-2 w-2 rounded-full bg-[var(--accent-orange)] shadow-[0_0_18px_rgba(255,153,67,0.65)]" />
                DevOps Engineer
              </div>
            </div>

            <div className="space-y-4">
              <p className="max-w-3xl text-2xl font-medium leading-tight text-white sm:text-3xl lg:text-[2.15rem]">
                Building, automating &amp; deploying reliable cloud
                infrastructure.
              </p>
              <p className="max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
                DevOps Engineer focused on scalable AWS environments, container
                platforms, infrastructure as code, and delivery pipelines that
                stay fast, observable, and dependable.
              </p>
              <p className="font-mono text-sm tracking-[0.16em] text-[var(--accent-blue)] uppercase">
                AWS &bull; Docker &bull; Kubernetes &bull; Terraform &bull; CI/CD
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[rgba(255,153,67,0.34)] bg-[linear-gradient(180deg,rgba(255,153,67,0.22),rgba(255,123,28,0.16))] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(255,123,28,0.16)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(255,153,67,0.52)]"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={resumeFilePath}
              download
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/6 px-6 py-3.5 text-sm font-semibold text-[var(--text-primary)] backdrop-blur-xl transition-colors duration-200 hover:bg-white/10"
            >
              Download Resume
              <Download className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                  aria-label={link.label}
                  className="inline-flex items-center gap-3 rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-sm font-medium text-[var(--text-secondary)] transition-colors duration-200 hover:bg-white/8 hover:text-white"
                >
                  <Icon className="h-4 w-4 text-[var(--accent-blue)]" />
                  {link.label}
                </a>
              )
            })}
          </div>
        </m.div>

        <m.div
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: 'easeOut' }}
          className="relative"
        >
          <div className="pointer-events-none absolute -left-8 top-10 h-32 w-32 rounded-full bg-[rgba(255,153,67,0.12)] blur-3xl" />
          <div className="pointer-events-none absolute -right-4 bottom-8 h-36 w-36 rounded-full bg-[rgba(56,189,248,0.12)] blur-3xl" />

          <div className="relative space-y-5">
            <GlassPanel className="overflow-hidden p-5 sm:p-6">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="section-kicker mb-2">Infrastructure Flow</p>
                  <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                    Delivery pipeline overview
                  </h3>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 font-mono text-xs uppercase tracking-[0.16em] text-[var(--text-muted)]">
                  visual-only
                </div>
              </div>

              <div className="grid gap-2.5">
                {infrastructureFlow.map((step, index) => {
                  const Icon = step.icon

                  return (
                    <m.div
                      key={step.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.35,
                        delay: 0.18 + index * 0.05,
                        ease: 'easeOut',
                      }}
                    >
                      <div className="rounded-2xl border border-white/8 bg-white/4 px-4 py-3.5">
                        <div className="flex items-center gap-3">
                          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]">
                            <Icon className={`h-5 w-5 ${step.accent}`} />
                          </span>
                          <div className="min-w-0">
                            <p className="text-sm font-semibold tracking-[0.14em] text-[var(--text-primary)] uppercase">
                              {step.label}
                            </p>
                          </div>
                        </div>
                      </div>

                      {index < infrastructureFlow.length - 1 ? (
                        <div className="flex justify-center py-1.5">
                          <ArrowDown className="h-4 w-4 text-[var(--text-muted)]" />
                        </div>
                      ) : null}
                    </m.div>
                  )
                })}
              </div>
            </GlassPanel>

           
          </div>
        </m.div>
      </div>
    </section>
  )
}

export default Hero
