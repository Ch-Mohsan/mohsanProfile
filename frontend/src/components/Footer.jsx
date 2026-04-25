import { motion as Motion } from 'framer-motion'
import { useResponsiveMotion } from '../hooks/useResponsiveMotion'

function Footer() {
  const { duration, delay } = useResponsiveMotion()

  return (
    <footer className="py-7">
      <Motion.div
        className="mx-auto flex w-[min(1260px,92%)] flex-col items-center justify-between gap-3 text-[10px] uppercase tracking-[0.16em] text-[#7785a0] md:flex-row"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{
          duration: duration(0.75, 0.56),
          delay: delay(0.08, 0.03),
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <p>A Vandervall archive. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#home" className="transition hover:text-[#f0d8a8]">
            Home
          </a>
          <a href="#projects" className="transition hover:text-[#f0d8a8]">
            Works
          </a>
          <a href="#contact" className="transition hover:text-[#f0d8a8]">
            Inquiry
          </a>
        </div>
      </Motion.div>
    </footer>
  )
}

export default Footer
