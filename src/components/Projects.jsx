import {
  ArrowRight,
  Boxes,
  FolderGit2,
  GitBranch,
  Info,
  Shield,
  Waypoints,
} from 'lucide-react'
import { m } from 'motion/react'
import { useState } from 'react'
import GlassPanel from './GlassPanel'
import ProjectModal from './ProjectModal'
import { projects } from '../data/projects'

const projectAccentMap = {
  0: {
    icon: 'text-[var(--accent-orange)]',
    glow: 'bg-[rgba(255,153,67,0.14)]',
    border: 'group-hover:border-[rgba(255,153,67,0.24)]',
  },
  1: {
    icon: 'text-[var(--accent-blue)]',
    glow: 'bg-[rgba(56,189,248,0.14)]',
    border: 'group-hover:border-[rgba(56,189,248,0.24)]',
  },
  2: {
    icon: 'text-[var(--accent-orange)]',
    glow: 'bg-[rgba(255,153,67,0.14)]',
    border: 'group-hover:border-[rgba(255,153,67,0.24)]',
  },
  3: {
    icon: 'text-[var(--accent-blue)]',
    glow: 'bg-[rgba(56,189,248,0.14)]',
    border: 'group-hover:border-[rgba(56,189,248,0.24)]',
  },
}

const projectIcons = [Boxes, Shield, Waypoints, GitBranch]

function TechnologyBadge({ label }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/8 bg-white/[0.045] px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)] transition-colors duration-200 group-hover:border-white/12 group-hover:bg-white/[0.065] group-hover:text-[var(--text-primary)]">
      {label}
    </span>
  )
}

function ArchitecturePreview({ steps, accentClass }) {
  return (
    <div className="rounded-2xl border border-white/8 bg-[rgba(255,255,255,0.025)] p-4">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
        Architecture Preview
      </p>
      <div className="flex flex-wrap items-center gap-2">
        {steps.map((step, index) => (
          <div key={step} className="contents">
            <span className="rounded-full border border-white/8 bg-white/[0.05] px-3 py-1.5 text-[0.72rem] font-medium text-[var(--text-secondary)]">
              {step}
            </span>
            {index < steps.length - 1 ? (
              <ArrowRight className={`h-3.5 w-3.5 ${accentClass}`} />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ project, index, onOpenDetails }) {
  const accent = projectAccentMap[index]
  const Icon = projectIcons[index]

  return (
    <m.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.35,
        delay: index * 0.05,
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
            <span className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.04] px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
              DevOps Project
            </span>
          </div>

          <div className="relative flex flex-1 flex-col">
            <h3 className="text-2xl font-semibold leading-tight text-[var(--text-primary)]">
              {project.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <TechnologyBadge key={technology} label={technology} />
              ))}
            </div>

            <div className="mt-5">
              <ArchitecturePreview
                steps={project.architecture}
                accentClass={accent.icon}
              />
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm font-semibold text-[var(--text-primary)] transition-colors duration-200 hover:bg-white/10"
              >
                <FolderGit2 className="h-4 w-4 text-[var(--accent-blue)]" />
                GitHub
              </a>
              <button
                type="button"
                onClick={() => onOpenDetails(project)}
                aria-haspopup="dialog"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[rgba(255,153,67,0.28)] bg-[linear-gradient(180deg,rgba(255,153,67,0.18),rgba(255,123,28,0.08))] px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:border-[rgba(255,153,67,0.45)]"
              >
                <Info className="h-4 w-4" />
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </m.article>
  )
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <>
      <section
        id="projects"
        aria-labelledby="projects-title"
        className="relative mx-auto max-w-7xl scroll-mt-28 px-6 pb-10 pt-4 sm:px-8 lg:px-10"
      >
        <GlassPanel className="overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute left-0 top-12 h-40 w-40 rounded-full bg-[rgba(56,189,248,0.08)] blur-3xl" />
          <div className="pointer-events-none absolute right-0 top-0 h-44 w-44 rounded-full bg-[rgba(255,153,67,0.08)] blur-3xl" />

          <m.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="relative max-w-3xl"
          >
            <p className="section-kicker mb-3">Featured DevOps Projects</p>
            <h2
              id="projects-title"
              className="text-3xl font-semibold tracking-[-0.04em] text-[var(--text-primary)] sm:text-4xl"
            >
              Practical delivery, infrastructure, and container orchestration projects.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
              A selection of hands-on DevOps work across container deployment,
              infrastructure as code, Kubernetes operations, and automated delivery
              workflows.
            </p>
          </m.div>

          <div className="relative mt-8 grid gap-4 xl:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onOpenDetails={setSelectedProject}
              />
            ))}
          </div>
        </GlassPanel>
      </section>

      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </>
  )
}

export default Projects
