import { useEffect, useRef } from 'react'

export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed')
          observer.disconnect()
        }
      },
      { threshold: options.threshold || 0.1, ...options }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}

export function useMultiReveal(count, options = {}) {
  const refs = Array.from({ length: count }, () => useRef(null))

  useEffect(() => {
    refs.forEach((ref, i) => {
      const el = ref.current
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => el.classList.add('revealed'), i * 100)
            observer.disconnect()
          }
        },
        { threshold: 0.1, ...options }
      )
      observer.observe(el)
    })
  }, [])

  return refs
}
