function Button({ href, children, variant = 'primary', className = '', ...props }) {
  const base =
    'inline-flex items-center justify-center border px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] transition duration-300'

  const variants = {
    primary:
      'border-[#d4d8e3] bg-transparent text-[#f4f7ff] hover:border-[#be9e61] hover:text-[#f0d8a8]',
    ghost: 'border-[#3a4455] bg-transparent text-[#dce2ef] hover:border-[#be9e61] hover:text-[#f0d8a8]',
  }

  if (href) {
    return (
      <a className={`${base} ${variants[variant]} ${className}`} href={href} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button