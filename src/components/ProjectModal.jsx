import { AnimatePresence, m } from 'motion/react'
import { ExternalLink, FolderGit2, Info, X } from 'lucide-react'
import { useEffect, useRef } from 'react'

const detailSections = [
  { key: 'overview', label: 'Project Overview' },
  { key: 'problem', label: 'Problem' },
  { key: 'solution', label: 'Solution' },
  { key: 'architecture', label: 'Architecture' },
  { key: 'technologies', label: 'Technologies' },
  { key: 'implementation', label: 'Implementation' },
  { key: 'challenges', label: 'Challenges' },
  { key: 'result', label: 'Result' },
]

function ProjectModal({ project, isOpen, onClose }) {
  const closeButtonRef = useRef(null)

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    const previousActiveElement = document.activeElement

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    closeButtonRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)

      if (previousActiveElement instanceof HTMLElement) {
        previousActiveElement.focus()
      }
    }
  }, [isOpen, onClose])

  function renderSectionContent(sectionKey) {
    if (sectionKey === 'architecture') {
      return (
        <div className="flex flex-wrap items-center gap-2">
          {project.architecture.map((step, index) => (
            <div key={step} className="contents">
              <span className="rounded-full border border-white/8 bg-white/[0.05] px-3 py-1.5 text-[0.72rem] font-medium text-[var(--text-secondary)]">
                {step}
              </span>
              {index < project.architecture.length - 1 ? (
                <span className="text-[var(--accent-orange)]">-&gt;</span>
              ) : null}
            </div>
          ))}
        </div>
      )
    }

    if (sectionKey === 'technologies') {
      return (
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/8 bg-white/[0.05] px-3 py-1.5 text-[0.78rem] font-medium text-[var(--text-secondary)]"
            >
              {technology}
            </span>
          ))}
        </div>
      )
    }

    const value = project[sectionKey]

    return (
      <p className="text-sm leading-7 text-[var(--text-secondary)]">
        {value || 'Placeholder: additional project detail can be added here.'}
      </p>
    )
  }

  return (
    <AnimatePresence>
      {isOpen ? (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="fixed inset-0 z-[70] flex items-end justify-center bg-[rgba(2,6,23,0.72)] p-3 backdrop-blur-md sm:items-center sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              onClose()
            }
          }}
        >
          <m.div
            initial={{ opacity: 0, y: 22, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
            role="dialog"
            aria-modal="true"
            aria-labelledby={project ? `project-modal-title-${project.id}` : undefined}
            className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,18,34,0.96),rgba(6,12,24,0.96))] shadow-[0_28px_90px_rgba(2,6,23,0.52)]"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="pointer-events-none absolute left-0 top-0 h-32 w-32 rounded-full bg-[rgba(56,189,248,0.12)] blur-3xl" />
            <div className="pointer-events-none absolute right-0 top-0 h-36 w-36 rounded-full bg-[rgba(255,153,67,0.12)] blur-3xl" />

            <div className="relative flex items-start justify-between gap-4 border-b border-white/8 px-5 py-5 sm:px-6">
              <div className="min-w-0">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.04] px-3 py-1.5">
                  <Info className="h-3.5 w-3.5 text-[var(--accent-orange)]" />
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                    Project Details
                  </span>
                </div>
                <h3
                  id={`project-modal-title-${project.id}`}
                  className="text-2xl font-semibold leading-tight text-[var(--text-primary)] sm:text-3xl"
                >
                  {project.title}
                </h3>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[var(--text-primary)] transition-colors duration-200 hover:bg-white/10"
                aria-label="Close project details"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative overflow-y-auto px-5 py-5 sm:px-6 sm:py-6">
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
                <div className="space-y-4">
                  {detailSections.map((section) => (
                    <section
                      key={section.key}
                      className="rounded-[24px] border border-white/8 bg-white/[0.035] p-4 sm:p-5"
                    >
                      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                        {section.label}
                      </p>
                      {renderSectionContent(section.key)}
                    </section>
                  ))}
                </div>

                <aside className="space-y-4">
                  <div className="rounded-[24px] border border-white/8 bg-white/[0.035] p-4 sm:p-5">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                      GitHub Repository
                    </p>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm font-semibold text-[var(--text-primary)] transition-colors duration-200 hover:bg-white/10"
                    >
                      <FolderGit2 className="h-4 w-4 text-[var(--accent-blue)]" />
                      Open Repository
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>

                  <div className="rounded-[24px] border border-white/8 bg-white/[0.035] p-4 sm:p-5">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                      Notes
                    </p>
                    <p className="text-sm leading-7 text-[var(--text-secondary)]">
                      Where exact implementation specifics are not yet documented,
                      this modal uses realistic placeholder wording that can be
                      replaced with project-specific details later.
                    </p>
                  </div>
                </aside>
              </div>
            </div>
          </m.div>
        </m.div>
      ) : null}
    </AnimatePresence>
  )
}

export default ProjectModal
