import { useState, useEffect } from 'react'

interface StateType {
  width: number
  height: number
}

export const useWindowSize = () => {
  const isSSR = typeof window === 'undefined'
  const [state, setState] = useState<StateType>({
    width: isSSR ? 0 : window.innerWidth,
    height: isSSR ? 0 : window.innerHeight
  })

  const handler = () => {
    setState({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  useEffect(() => {
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  return state
}
