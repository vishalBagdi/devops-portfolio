import { BriefcaseBusiness, FolderGit2, Mail } from 'lucide-react'
import { contactConfig } from '../data/contact'

const footerLinks = [
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

function Footer() {
  return (
    <footer className="relative border-t border-white/8 bg-[rgba(2,6,23,0.72)]">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-2xl font-semibold tracking-[-0.04em] text-[var(--text-primary)]">
              Vishal Bagdi
            </p>
            <p className="mt-2 text-sm font-medium uppercase tracking-[0.16em] text-[var(--text-muted)]">
              DevOps Engineer
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
              AWS &bull; Docker &bull; Kubernetes &bull; Terraform &bull; CI/CD
            </p>
          </div>

          <div className="flex flex-col gap-5 lg:items-end">
            <nav
              className="flex flex-wrap items-center gap-3"
              aria-label="Footer social links"
            >
              {footerLinks.map((link) => {
                const Icon = link.icon

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                    className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-[var(--text-secondary)] transition-colors duration-200 hover:border-white/12 hover:bg-white/[0.07] hover:text-[var(--text-primary)]"
                  >
                    <Icon className="h-4 w-4 text-[var(--accent-blue)]" />
                    {link.label}
                  </a>
                )
              })}
            </nav>

            <p className="text-sm text-[var(--text-muted)]">
              &copy; 2026 Vishal Bagdi. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
