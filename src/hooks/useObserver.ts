import * as React from 'react'

export const useObserver = (
  ref: React.MutableRefObject<HTMLDivElement | null>,
  canProcess: boolean,
  canLoad: boolean,
  cb: VoidFunction,
) => {
  const observer = React.useRef<IntersectionObserver | null>(null)

  React.useEffect(() => {
    if (!canProcess) return
    if (observer.current) observer.current.disconnect()

    observer.current = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting && canLoad) {
        cb()
      }
    })

    if (!ref.current) return
    observer.current.observe(ref.current)
  }, [canLoad, canProcess, cb, ref])
}
