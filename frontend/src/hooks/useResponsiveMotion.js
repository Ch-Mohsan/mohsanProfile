import { useEffect, useState } from 'react'

const DESKTOP_QUERY = '(min-width: 768px)'

function getInitialDesktopValue() {
  if (typeof window === 'undefined') {
    return true
  }

  return window.matchMedia(DESKTOP_QUERY).matches
}

export function useResponsiveMotion() {
  const [isDesktop, setIsDesktop] = useState(getInitialDesktopValue)

  useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_QUERY)

    const onChange = (event) => {
      setIsDesktop(event.matches)
    }

    setIsDesktop(mediaQuery.matches)

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', onChange)
      return () => mediaQuery.removeEventListener('change', onChange)
    }

    mediaQuery.addListener(onChange)
    return () => mediaQuery.removeListener(onChange)
  }, [])

  const duration = (desktopValue, mobileValue) => (isDesktop ? desktopValue : mobileValue)
  const delay = (desktopValue, mobileValue) => (isDesktop ? desktopValue : mobileValue)
  const stagger = (desktopValue, mobileValue) => (isDesktop ? desktopValue : mobileValue)

  return { isDesktop, duration, delay, stagger }
}