import SectionHeading from './common/SectionHeading'
import { experience } from '../data/experience'
import { motion as Motion } from 'framer-motion'
import { useResponsiveMotion } from '../hooks/useResponsiveMotion'

function Experience() {
  const { duration, delay } = useResponsiveMotion()

  return (
    <section id="experience" className="border-b border-[#1a2334] bg-[#071120] py-20 md:py-32">
      <div className="mx-auto grid w-[min(1260px,92%)] gap-12 md:grid-cols-12">
        <Motion.div
          className="md:col-span-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: duration(0.85, 0.65),
            delay: delay(0.1, 0.04),
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <SectionHeading
            eyebrow="The Chronicle"
            title="A Journey of Precision"
            subtitle="Tracing the evolution from monolithic logic to fluid architectural systems."
          />
        </Motion.div>

        <div className="relative md:col-span-7 md:col-start-6">
          <div className="absolute left-0 top-2 hidden h-[calc(100%-20px)] w-px bg-[#2b374d] md:block" />

          <div className="space-y-12">
            {experience.map((item, index) => {
              const fromLeft = index % 2 === 0
              return (
              <Motion.article
                key={item.period}
                className="relative md:pl-14"
                initial={{ opacity: 0, x: fromLeft ? -70 : 70 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: duration(0.85, 0.65),
                  delay: index * delay(0.14, 0.08),
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <span className="absolute -left-[3px] top-1.5 hidden h-2 w-2 bg-[#be9e61] md:block" />
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#be9e61]">{item.period}</p>
                <h3 className="font-serif-display text-xl text-[#eff3fb]">{item.role}</h3>
                <p className="mt-1 text-sm text-[#c8d1e5]">{item.company}</p>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#adbad2]">{item.description}</p>
              </Motion.article>
            )})}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
