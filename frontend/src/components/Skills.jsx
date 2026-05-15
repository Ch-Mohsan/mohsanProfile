import SectionHeading from './common/SectionHeading'
import { skills } from '../data/skills'
import { motion as Motion } from 'framer-motion'
import { useResponsiveMotion } from '../hooks/useResponsiveMotion'

function Skills() {
  const { duration, delay, stagger } = useResponsiveMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger(0.22, 0.14),
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration(0.72, 0.55),
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section id="skills" className="border-b border-[#1a2334] py-20 md:py-28">
      <div className="mx-auto w-[min(1260px,92%)]">
        <Motion.div
          className="mb-14 flex flex-col justify-between gap-5 border-b border-[#1a2334] pb-10 md:flex-row md:items-end"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: duration(0.85, 0.65),
            delay: delay(0.1, 0.04),
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <SectionHeading eyebrow="Craftsmanship" title="The Toolkit" />
          <p className="max-w-sm text-sm text-[#aeb9ce]">
            Utilizing a modern stack that balances performance, scalability, and long-term maintainability.
          </p>
        </Motion.div>

        <Motion.div
          className="grid gap-x-10 gap-y-10 md:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {skills.map((group) => (
            <Motion.article key={group.category} variants={itemVariants}>
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#be9e61]">
                {group.index} / {group.category}
              </p>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-2.5 md:grid-cols-1">
                {group.items.map((item) => (
                  <li key={`${group.category}-${item}`} className="font-serif-display text-lg text-[#eef2fb]">
                    {item}
                  </li>
                ))}
              </ul>
            </Motion.article>
          ))}
        </Motion.div>
      </div>
    </section>
  )
}

export default Skills
