export const techStack = [
  'Tailwind CSS',
  'Lucide React',
  'Motion for React',
  'Glassmorphism UI',
]

export const starterCommands = [
  {
    prompt: '$',
    command: 'npm install tailwindcss @tailwindcss/vite lucide-react motion',
    result: 'dependencies synced',
  },
  {
    prompt: '$',
    command: 'npm run build',
    result: 'production bundle verified',
  },
  {
    prompt: '$',
    command: 'theme.apply --profile premium-technical',
    result: 'design system online',
  },
]

export const capabilityCards = [
  {
    icon: 'foundation',
    label: 'Foundation',
    title: 'Reusable styling primitives',
    description:
      'Global tokens, glass surfaces, thin borders, and soft shadows create a clean visual baseline for future portfolio modules.',
  },
  {
    icon: 'motion',
    label: 'Experience',
    title: 'Subtle motion without noise',
    description:
      'Motion is configured for polished entrances and micro-interactions that feel modern and fast without drifting into flashy visuals.',
  },
  {
    icon: 'reliability',
    label: 'Quality',
    title: 'Technical and recruiter-friendly',
    description:
      'The palette, spacing, and contrast are tuned to read as professional and premium while keeping the layout easy to scan.',
  },
]
