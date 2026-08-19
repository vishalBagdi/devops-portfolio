import { Award, Cloud, ExternalLink, ShieldCheck, Waypoints } from 'lucide-react'
import { m } from 'motion/react'
import GlassPanel from './GlassPanel'

const certifications = [
  {
    technology: 'AWS Certification',
    certificateName: '[Certification Name]',
    certificateUrl: 'https://example.com/aws-certificate',
    icon: Cloud,
    accent: 'text-[var(--accent-orange)]',
    glow: 'bg-[rgba(255,153,67,0.12)]',
    border: 'group-hover:border-[rgba(255,153,67,0.24)]',
  },
  {
    technology: 'Terraform',
    certificateName: '[Certification Name]',
    certificateUrl: 'https://example.com/terraform-certificate',
    icon: Waypoints,
    accent: 'text-[var(--accent-blue)]',
    glow: 'bg-[rgba(56,189,248,0.12)]',
    border: 'group-hover:border-[rgba(56,189,248,0.24)]',
  },
  {
    technology: 'Kubernetes',
    certificateName: '[Certification Name]',
    certificateUrl: 'https://example.com/kubernetes-certificate',
    icon: ShieldCheck,
    accent: 'text-[var(--accent-orange)]',
    glow: 'bg-[rgba(255,153,67,0.12)]',
    border: 'group-hover:border-[rgba(255,153,67,0.24)]',
  },
]

function CertificationCard({ certification, index }) {
  const Icon = certification.icon

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
        className={`relative h-full overflow-hidden rounded-[26px] border border-white/8 bg-white/[0.03] p-[1px] shadow-[0_20px_50px_rgba(2,6,23,0.28)] transition-colors duration-300 ${certification.border}`}
      >
        <div className="relative flex h-full flex-col rounded-[25px] border border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-5 sm:p-6">
          <span
            className={`pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-full blur-3xl ${certification.glow}`}
          />

          <div className="relative mb-5 flex items-start justify-between gap-4">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
              <Icon className={`h-5 w-5 ${certification.accent}`} />
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.04] px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
              <Award className="h-3.5 w-3.5" />
              Certification
            </span>
          </div>

          <div className="relative flex flex-1 flex-col">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
              Technology
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-[var(--text-primary)]">
              {certification.technology}
            </h3>

            <div className="mt-5 rounded-2xl border border-white/8 bg-white/[0.035] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                Certificate Name
              </p>
              <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                {certification.certificateName}
              </p>
            </div>

            <div className="mt-6">
              <a
                href={certification.certificateUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm font-semibold text-[var(--text-primary)] transition-colors duration-200 hover:bg-white/10"
              >
                View Certificate
                <ExternalLink className="h-4 w-4 text-[var(--accent-blue)]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </m.article>
  )
}

function Certifications() {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-title"
      className="relative mx-auto max-w-7xl scroll-mt-28 px-6 pb-10 pt-4 sm:px-8 lg:px-10"
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
          <p className="section-kicker mb-3">Certifications</p>
          <h2
            id="certifications-title"
            className="text-3xl font-semibold tracking-[-0.04em] text-[var(--text-primary)] sm:text-4xl"
          >
            Certifications presented as easy-to-update placeholders.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
            The certification names and URLs are intentionally left as placeholders
            so they can be replaced with exact records later without changing the layout.
          </p>
        </m.div>

        <div className="relative mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((certification, index) => (
            <CertificationCard
              key={certification.technology}
              certification={certification}
              index={index}
            />
          ))}
        </div>
      </GlassPanel>
    </section>
  )
}

export default Certifications
