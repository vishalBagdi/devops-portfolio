import { BriefcaseBusiness, FolderGit2, Mail, Send } from 'lucide-react'
import { m } from 'motion/react'
import { useState } from 'react'
import GlassPanel from './GlassPanel'
import { contactConfig } from '../data/contact'

const contactLinks = [
  {
    label: 'Email',
    value: contactConfig.email,
    href: `mailto:${contactConfig.email}`,
    icon: Mail,
    accent: 'text-[var(--accent-orange)]',
  },
  {
    label: 'LinkedIn',
    value: contactConfig.linkedin,
    href: contactConfig.linkedin,
    icon: BriefcaseBusiness,
    accent: 'text-[var(--accent-blue)]',
  },
  {
    label: 'GitHub',
    value: contactConfig.github,
    href: contactConfig.github,
    icon: FolderGit2,
    accent: 'text-[var(--accent-orange)]',
  },
]

function ContactLinkCard({ item, index }) {
  const Icon = item.icon

  return (
    <m.a
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.3,
        delay: index * 0.05,
        ease: 'easeOut',
      }}
      href={item.href}
      target={item.href.startsWith('mailto:') ? undefined : '_blank'}
      rel={item.href.startsWith('mailto:') ? undefined : 'noreferrer'}
      className="group rounded-[24px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.025))] p-4 shadow-[0_16px_34px_rgba(2,6,23,0.22)] transition-colors duration-200 hover:border-white/14"
    >
      <div className="flex items-start gap-3">
        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
          <Icon className={`h-4.5 w-4.5 ${item.accent}`} />
        </span>
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
            {item.label}
          </p>
          <p className="mt-2 break-all text-sm leading-7 text-[var(--text-secondary)] transition-colors duration-200 group-hover:text-[var(--text-primary)]">
            {item.value}
          </p>
        </div>
      </div>
    </m.a>
  )
}

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })

  function handleChange(event) {
    const { name, value } = event.target
    setFormState((current) => ({
      ...current,
      [name]: value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    const subject = `Portfolio inquiry from ${formState.name || 'Website visitor'}`
    const body = [
      `Name: ${formState.name || '-'}`,
      `Email: ${formState.email || '-'}`,
      '',
      'Message:',
      formState.message || '-',
    ].join('\n')

    window.location.href = `mailto:${contactConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative mx-auto max-w-7xl scroll-mt-28 px-6 pb-10 pt-4 sm:px-8 lg:px-10"
    >
      <GlassPanel className="overflow-hidden p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute left-0 top-10 h-40 w-40 rounded-full bg-[rgba(56,189,248,0.08)] blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-0 h-44 w-44 rounded-full bg-[rgba(255,153,67,0.08)] blur-3xl" />

        <div className="grid gap-8 xl:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <m.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="relative max-w-3xl"
          >
            <p className="section-kicker mb-3">Let&apos;s Connect</p>
            <h2
              id="contact-title"
              className="text-3xl font-semibold tracking-[-0.04em] text-[var(--text-primary)] sm:text-4xl"
            >
              Let&apos;s Connect
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
              Reach out directly by email or connect through LinkedIn and GitHub.
              The form below is static and opens your email client using the configured
              contact address.
            </p>

            <ul className="mt-8 grid gap-4" role="list">
              {contactLinks.map((item, index) => (
                <li key={item.label}>
                  <ContactLinkCard item={item} index={index} />
                </li>
              ))}
            </ul>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: 0.06, ease: 'easeOut' }}
          >
            <div className="rounded-[28px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.025))] p-[1px] shadow-[0_20px_50px_rgba(2,6,23,0.28)]">
              <div className="rounded-[27px] border border-white/6 bg-[rgba(255,255,255,0.03)] p-5 sm:p-6">
                <div className="mb-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                    Contact Form
                  </p>
                  <p
                    id="contact-form-note"
                    className="mt-2 text-sm leading-7 text-[var(--text-secondary)]"
                  >
                    Static site mode: this form uses <code>mailto:</code>. Backend
                    integration can be added later if needed.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  aria-describedby="contact-form-note"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label htmlFor="contact-name" className="block">
                      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)]">
                        Name
                      </span>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        autoComplete="name"
                        className="w-full rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition-colors duration-200 placeholder:text-[var(--text-muted)] focus:border-[rgba(56,189,248,0.32)]"
                        placeholder="Your name"
                      />
                    </label>

                    <label htmlFor="contact-email" className="block">
                      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)]">
                        Email
                      </span>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        autoComplete="email"
                        className="w-full rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition-colors duration-200 placeholder:text-[var(--text-muted)] focus:border-[rgba(56,189,248,0.32)]"
                        placeholder="your.email@example.com"
                      />
                    </label>
                  </div>

                  <label htmlFor="contact-message" className="block">
                    <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)]">
                      Message
                    </span>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full resize-y rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition-colors duration-200 placeholder:text-[var(--text-muted)] focus:border-[rgba(56,189,248,0.32)]"
                      placeholder="Tell me about your project, role, or opportunity."
                    />
                  </label>

                  <button
                    type="submit"
                    aria-label="Send message using your email client"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-[rgba(255,153,67,0.34)] bg-[linear-gradient(180deg,rgba(255,153,67,0.22),rgba(255,123,28,0.12))] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(255,123,28,0.16)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(255,153,67,0.52)] sm:w-auto"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </m.div>
        </div>
      </GlassPanel>
    </section>
  )
}

export default Contact
