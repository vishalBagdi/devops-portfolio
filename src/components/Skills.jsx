import { Boxes, Cloud, TerminalSquare, Workflow } from 'lucide-react'
import { m } from 'motion/react'
import GlassPanel from './GlassPanel'

const skillGroups = [
  {
    title: 'Cloud',
    icon: Cloud,
    accent: 'text-[var(--accent-orange)]',
    skills: [
      'AWS',
      'EC2',
      'S3',
      'IAM',
      'VPC',
      'ECS',
      'EKS',
      'ECR',
      'Lambda',
      'CloudWatch',
    ],
  },
  {
    title: 'DevOps',
    icon: Workflow,
    accent: 'text-[var(--accent-blue)]',
    skills: ['CI/CD', 'Git', 'GitHub', 'Jenkins', 'Terraform'],
  },
  {
    title: 'Containers',
    icon: Boxes,
    accent: 'text-[var(--accent-orange)]',
    skills: ['Docker', 'Kubernetes', 'Docker Compose', 'Amazon ECS', 'Amazon EKS'],
  },
  {
    title: 'Operating Systems',
    icon: TerminalSquare,
    accent: 'text-[var(--accent-blue)]',
    skills: ['Linux', 'Ubuntu', 'Windows'],
  },
]

function SkillBadge({ label }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.045] px-3.5 py-2 text-sm font-medium text-[var(--text-secondary)] transition-colors duration-200 group-hover:border-white/12 group-hover:bg-white/[0.065] group-hover:text-[var(--text-primary)]">
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-blue)] shadow-[0_0_12px_rgba(56,189,248,0.55)]" />
      {label}
    </span>
  )
}

function SkillCategoryCard({ title, icon: Icon, accent, skills, index }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.35,
        delay: index * 0.05,
        ease: 'easeOut',
      }}
      className="group h-full"
    >
      <div className="h-full rounded-[26px] border border-white/8 bg-white/[0.03] p-[1px] shadow-[0_20px_50px_rgba(2,6,23,0.28)]">
        <div className="flex h-full flex-col rounded-[25px] border border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-5 sm:p-6">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                Category
              </p>
              <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                {title}
              </h3>
            </div>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
              <Icon className={`h-5 w-5 ${accent}`} />
            </span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {skills.map((skill) => (
              <SkillBadge key={skill} label={skill} />
            ))}
          </div>
        </div>
      </div>
    </m.div>
  )
}

function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="relative mx-auto max-w-7xl scroll-mt-28 px-6 pb-10 pt-4 sm:px-8 lg:px-10"
    >
      <GlassPanel className="p-6 sm:p-8 lg:p-10">
        <m.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <p className="section-kicker mb-3">Skills</p>
          <h2
            id="skills-title"
            className="text-5xl font-semibold tracking-[-0.04em] text-[var(--text-primary)] sm:text-2xl"
          >
            Tools and platforms used to build dependable delivery environments.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
            A focused stack across cloud, automation, containers, and operating
            systems, organized for clarity without percentages or artificial
            experience labels.
          </p>
        </m.div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <SkillCategoryCard key={group.title} index={index} {...group} />
          ))}
        </div>
      </GlassPanel>
    </section>
  )
}

export default Skills
