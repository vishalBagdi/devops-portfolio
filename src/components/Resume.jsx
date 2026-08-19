import { Download, FileText } from 'lucide-react'
import { m } from 'motion/react'
import GlassPanel from './GlassPanel'
import { resumeFilePath } from '../data/resume'

function Resume() {
  return (
    <section
      aria-labelledby="resume-title"
      className="relative mx-auto max-w-7xl px-6 pb-10 pt-4 sm:px-8 lg:px-10"
    >
      <GlassPanel className="overflow-hidden p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute left-0 top-8 h-40 w-40 rounded-full bg-[rgba(56,189,248,0.08)] blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-0 h-44 w-44 rounded-full bg-[rgba(255,153,67,0.08)] blur-3xl" />

        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <m.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,153,67,0.16),rgba(56,189,248,0.08))]">
              <FileText className="h-6 w-6 text-[var(--accent-orange)]" />
            </div>
            <p className="section-kicker mb-3">Resume</p>
            <h2
              id="resume-title"
              className="text-3xl font-semibold tracking-[-0.04em] text-[var(--text-primary)] sm:text-4xl"
            >
              Interested in working together?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
              Download my resume and learn more about my DevOps experience.
            </p>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: 0.06, ease: 'easeOut' }}
            className="shrink-0"
          >
            <a
              href={resumeFilePath}
              download
              className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-[rgba(255,153,67,0.34)] bg-[linear-gradient(180deg,rgba(255,153,67,0.22),rgba(255,123,28,0.12))] px-6 py-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(255,123,28,0.16)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(255,153,67,0.52)] sm:w-auto"
            >
              <Download className="h-4.5 w-4.5" />
              Download Resume
            </a>
          </m.div>
        </div>
      </GlassPanel>
    </section>
  )
}

export default Resume
