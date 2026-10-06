import { useEffect, useState } from 'react'

/**
 * Adds an `is-visible` class to `.reveal` elements as they scroll into view.
 * Runs once per mount; safe with StrictMode double-invocation.
 */
export function useScrollReveal() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const els = Array.from(document.querySelectorAll('.reveal'))

    if (reduce || !('IntersectionObserver' in window)) {
      els.forEach(el => el.classList.add('is-visible'))
      return
    }

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
}

/** True once the page has scrolled past `offset` px (used for the navbar style swap). */
export function useScrolled(offset = 24) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])
  return scrolled
}

/** Locks body scroll while a mobile menu (or modal) is open. */
export function useBodyScrollLock(locked) {
  useEffect(() => {
    if (!locked) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [locked])
}
