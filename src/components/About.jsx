import { Cloud, Container, Waypoints } from "lucide-react";
import { m } from "motion/react";
import GlassPanel from "./GlassPanel";

const focusCards = [
  {
    title: "AWS",
    subtitle: "Cloud Infrastructure",
    icon: Cloud,
    accent: "text-[var(--accent-orange)]",
  },
  {
    title: "Docker",
    subtitle: "Containerization",
    icon: Container,
    accent: "text-[var(--accent-blue)]",
  },
  {
    title: "Terraform",
    subtitle: "Infrastructure as Code",
    icon: Waypoints,
    accent: "text-[var(--accent-orange)]",
  },
];

function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative mx-auto max-w-7xl scroll-mt-28 px-6 pb-10 pt-4 sm:px-8 lg:px-10"
    >
      <GlassPanel className="p-6 sm:p-8 lg:p-10">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
          <m.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <p className="section-kicker mb-3">About Me</p>
            <h2
              id="about-title"
              className="text-3xl font-semibold tracking-[-0.04em] text-[var(--text-primary)] sm:text-4xl"
            >
              Cloud-first engineering with a focus on automation and reliable
              delivery.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
              I&apos;m a AWS DevOps Engineer with over 1.5 years of hands-on
              experience in AWS EC2, S3, Nginx, PM2, CI/CD, Linux server
              administration, application deployment, monitoring, and
              troubleshooting. Skilled in deploying and managing scalable web
              applications, configuring production environments, automating
              deployment workflows, and ensuring system reliability and
              performance. As a DevOps Engineer focused on cloud infrastructure,
              containerization, automation, and continuous delivery. I work with
              AWS services, Docker, Kubernetes, Terraform, Linux, Git, and CI/CD
              tools to build reliable and scalable deployment environments. a
            </p>
          </m.div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
            {focusCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <m.div
                  key={card.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.06,
                    ease: "easeOut",
                  }}
                  className="h-full"
                >
                  <div className="group h-full rounded-[26px] border border-white/8 bg-white/[0.035] p-[1px] shadow-[0_20px_50px_rgba(2,6,23,0.28)]">
                    <div className="flex h-full flex-col justify-between rounded-[25px] border border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-5 transition-colors duration-200 group-hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.025))]">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                        <Icon className={`h-5 w-5 ${card.accent}`} />
                      </div>
                      <div className="mt-6">
                        <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                          {card.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                          {card.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </m.div>
              );
            })}
          </div>
        </div>
      </GlassPanel>
    </section>
  );
}

export default About;
