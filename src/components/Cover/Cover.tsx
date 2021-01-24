import { useEffect, useRef, FC, RefObject } from 'react'

import { StarterTweens } from 'tweens'
import { BenutaLogo } from 'public/static'
import { SCover } from './SCover'

interface CoverProps {
  logo: string
}

const Cover: FC<CoverProps> = (props) => {
  const { logo } = props

  const layerRef = useRef<HTMLDivElement | any>() as RefObject<HTMLDivElement>

  useEffect(() => {
    const { current } = layerRef
    if (current) StarterTweens(current)
  }, [layerRef])

  return (
    <SCover ref={layerRef}>
      <img className="cover-logo" src={logo || BenutaLogo} alt="" />
    </SCover>
  )
}

export default Cover
