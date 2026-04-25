import SectionHeading from './common/SectionHeading'
import ProjectCard from './common/ProjectCard'
import { projects } from '../data/projects'
import { motion as Motion } from 'framer-motion'
import { useResponsiveMotion } from '../hooks/useResponsiveMotion'

const projectLayout = [
  { wrapper: 'col-span-12 md:col-span-7', aspect: 'aspect-video' },
  { wrapper: 'col-span-12 md:col-span-4 md:col-start-9 md:mt-24', aspect: 'aspect-[4/5]' },
  { wrapper: 'col-span-12 md:col-span-5 md:col-start-2', aspect: 'aspect-square' },
  { wrapper: 'col-span-12 md:col-span-6 md:col-start-7 md:-mt-16', aspect: 'aspect-[16/10]' },
]

function Projects() {
  const { duration, delay } = useResponsiveMotion()

  return (
    <section id="projects" className="border-b border-[#1a2334] bg-[#030a14] py-20 md:py-32">
      <div className="mx-auto w-[min(1260px,92%)]">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: duration(0.85, 0.65),
            delay: delay(0.12, 0.05),
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <SectionHeading eyebrow="Selected Archives" title="Curated Works" align="center" />
        </Motion.div>

        <div className="grid grid-cols-12 gap-x-8 gap-y-16 md:gap-y-24">
          {projects.map((project, index) => {
            const layout = projectLayout[index % projectLayout.length]
            const fromLeft = index % 2 === 0
            return (
              <Motion.div
                key={project.title}
                className={layout.wrapper}
                initial={{ opacity: 0, x: fromLeft ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: duration(0.9, 0.68),
                  delay: index * delay(0.14, 0.08),
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <ProjectCard project={project} imageClassName={layout.aspect} />
              </Motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
