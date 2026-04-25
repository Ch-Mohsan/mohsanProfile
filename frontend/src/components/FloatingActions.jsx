import { useEffect, useState } from 'react'

function FloatingActions() {
  const [showAtPageEnd, setShowAtPageEnd] = useState(false)

  useEffect(() => {
    const updateVisibility = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      const isNearBottom = scrollTop + clientHeight >= scrollHeight - 120
      setShowAtPageEnd(isNearBottom)
    }

    updateVisibility()

    window.addEventListener('scroll', updateVisibility, { passive: true })
    window.addEventListener('resize', updateVisibility)

    return () => {
      window.removeEventListener('scroll', updateVisibility)
      window.removeEventListener('resize', updateVisibility)
    }
  }, [])

  return (
    <div
      className={`fixed bottom-5 right-4 z-50 flex flex-col gap-2 transition-all duration-300 sm:bottom-6 sm:right-6 ${
        showAtPageEnd ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <a
        href="#home"
        className="inline-flex items-center justify-center rounded-full border border-[#30415f] bg-[#071427]/92 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#e5ecfa] shadow-[0_12px_24px_-14px_rgba(0,0,0,0.9)] backdrop-blur-md transition hover:border-[#be9e61] hover:text-[#f0d8a8]"
        aria-label="Move to top"
      >
        Move to top
      </a>
    </div>
  )
}

export default FloatingActions