import Button from './common/Button'
import { personalInfo } from '../data/personalInfo'
import { motion as Motion } from 'framer-motion'
import { useResponsiveMotion } from '../hooks/useResponsiveMotion'

function Hero() {
  const { duration, delay } = useResponsiveMotion()

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden border-b border-[#1a2334] pt-24"
    >
      <div className="absolute inset-0 bg-[linear-gradient(125deg,#050c18_0%,#06122a_38%,#0a1a36_64%,#061229_100%)]" />
      <div className="absolute inset-0 bg-[repeating-linear-gradient(132deg,rgba(125,159,219,0.12)_0px,rgba(125,159,219,0.12)_2px,transparent_2px,transparent_36px)] opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_56%,rgba(107,146,211,0.35),transparent_34%),radial-gradient(circle_at_20%_25%,rgba(14,24,49,0.8),transparent_48%)]" />
      <div className="grain-overlay absolute inset-0" />

      <div className="relative mx-auto flex w-[min(1260px,92%)] justify-center">
        <Motion.div
          className="max-w-2xl text-center"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: duration(1.05, 0.82),
            delay: delay(0.2, 0.1),
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#d7ba7f] md:text-xs">Crafting Digital Elegance</p>
          <h1 className="max-w-4xl font-serif-display text-4xl leading-[1.12] text-[#f7f9ff] sm:text-5xl md:text-6xl lg:text-7xl">
            {personalInfo.name}
          </h1>
          <p className="mt-3 text-sm text-[#d5dcec] sm:text-base md:text-lg">{personalInfo.role}</p>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[#b5bfd3] sm:text-[15px] md:text-base">
            {personalInfo.tagline}
          </p>

          <div className="mt-8 flex justify-center">
            <Button href="#projects">View Work</Button>
          </div>
        </Motion.div>

        <div className="absolute bottom-8 right-0 hidden items-end gap-4 md:flex">
          <div className="h-20 w-px bg-[#be9e61]/45" />
          <span className="text-[9px] uppercase tracking-[0.28em] text-[#be9e61] [writing-mode:vertical-rl]">
            Scroll to Explore
          </span>
        </div>
      </div>
    </section>
  )
}

export default Hero
