function SectionHeading({ eyebrow, title, subtitle, align = 'left' }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <header className={`mb-12 max-w-2xl ${alignClass}`}>
      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#be9e61]">{eyebrow}</p>
      <h2 className="font-serif-display text-2xl leading-tight text-[#f3f7ff] md:text-[34px]">{title}</h2>
      {subtitle ? <p className="mt-3 text-sm text-[#b8c2d6] md:text-[15px]">{subtitle}</p> : null}
    </header>
  )
}

export default SectionHeading