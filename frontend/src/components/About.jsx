import SectionHeading from './common/SectionHeading'
import { aboutContent } from '../data/about'
import { motion as Motion } from 'framer-motion'
import { useResponsiveMotion } from '../hooks/useResponsiveMotion'

function About() {
  const { duration, delay } = useResponsiveMotion()

  return (
    <section id="about" className="border-b border-[#1a2334] bg-[#050c18] py-20 md:py-32">
      <div className="mx-auto grid w-[min(1260px,92%)] gap-10 md:grid-cols-12 md:items-center">
        <Motion.div
          className="md:col-span-5"
          initial={{ opacity: 0, x: -48 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: duration(0.85, 0.65),
            delay: delay(0.08, 0.02),
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <img
            src={aboutContent.image}
            alt={aboutContent.imageAlt}
            loading="lazy"
            className="aspect-[3/4] w-full max-w-[360px] border border-[#25334a] object-cover"
          />
        </Motion.div>

        <Motion.div
          className="md:col-span-6 md:col-start-7"
          initial={{ opacity: 0, x: 48 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: duration(0.9, 0.7),
            delay: delay(0.2, 0.07),
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <SectionHeading eyebrow="The Philosophy" title="Architecture in the Invisible" subtitle={aboutContent.subtitle} />
          <div className="space-y-4 text-sm text-[#bcc5d8] md:text-[15px]">
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <ul className="mt-7 flex flex-wrap gap-6">
            {aboutContent.principles.map((principle) => (
              <li key={principle} className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#dce3f1]">
                <span className="h-2 w-2 bg-[#be9e61]" />
                {principle}
              </li>
            ))}
          </ul>
        </Motion.div>
      </div>
    </section>
  )
}

export default About
