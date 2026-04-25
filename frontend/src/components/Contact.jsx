import { personalInfo } from '../data/personalInfo'
import { motion as Motion } from 'framer-motion'
import { useResponsiveMotion } from '../hooks/useResponsiveMotion'

const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}`

function MailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]">
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M6.94 6.5a1.94 1.94 0 1 1 0-3.88 1.94 1.94 0 0 1 0 3.88ZM4.76 20h4.36V8.67H4.76V20ZM11.8 8.67h4.18v1.55h.06c.58-1.05 2-2.16 4.12-2.16 4.4 0 5.21 2.89 5.21 6.65V20h-4.36v-4.67c0-1.11-.02-2.53-1.54-2.53-1.54 0-1.78 1.2-1.78 2.45V20H11.8V8.67Z" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.36-1.17-3.36-1.17-.46-1.17-1.12-1.48-1.12-1.48-.92-.63.07-.61.07-.61 1.02.07 1.56 1.04 1.56 1.04.9 1.54 2.35 1.1 2.93.85.09-.66.35-1.1.64-1.35-2.21-.25-4.54-1.11-4.54-4.95 0-1.09.39-1.98 1.03-2.68-.11-.25-.45-1.28.1-2.66 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.21 2.41.1 2.66.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.56 4.95.36.31.68.93.68 1.87v2.77c0 .26.17.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  )
}

const contactOptions = [
  { label: 'Gmail', href: gmailComposeUrl, icon: MailIcon },
  { label: 'LinkedIn', href: personalInfo.linkedin, icon: LinkedInIcon },
  { label: 'GitHub', href: personalInfo.github, icon: GitHubIcon },
  {
    label: 'CV',
    href: '/mohsan%27s-cv.pdf',
    value: 'Download CV',
    download: 'Mohsan-Ali-Zafar-CV.pdf',
  },
]

function Contact() {
  const { duration, delay } = useResponsiveMotion()

  return (
    <section id="contact" className="border-b border-[#1a2334] py-20 md:py-28">
      <Motion.div
        className="mx-auto w-[min(1260px,92%)] text-center"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{
          duration: duration(0.9, 0.68),
          delay: delay(0.1, 0.04),
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#be9e61]">Start a Conversation</p>
        <h2 className="font-serif-display text-2xl text-[#f3f7ff] md:text-[34px]">Let us build something enduring.</h2>
        <ul className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-[#9eabc4]">
          {contactOptions.map((link) => {
            const isExternal = link.href.startsWith('http') || link.href.startsWith('mailto:')
            const isDownload = Boolean(link.download)

            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={isExternal && !isDownload ? '_blank' : undefined}
                  rel={isExternal && !isDownload ? 'noreferrer noopener' : undefined}
                  download={link.download}
                  aria-label={link.label}
                  title={link.label}
                  className={`inline-flex items-center justify-center rounded-full border transition hover:border-[#be9e61] hover:text-[#f0d8a8] ${
                    isDownload
                      ? 'border-[#be9e61]/70 bg-[#be9e61] px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#101722] hover:bg-[#d6b57a]'
                      : 'border-[#be9e61]/55 bg-[#071427]/60 p-4 text-[#f0d8a8]'
                  }`}
                >
                  {isDownload ? link.value : <link.icon />}
                  <span className="sr-only">{link.label}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </Motion.div>
    </section>
  )
}

export default Contact
