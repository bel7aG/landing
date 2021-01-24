import { useState, useEffect, memo, FC } from 'react'

import { Navigation, CarpetSVG } from 'components'
import { NAV_ITEMS } from 'constant'
import { SHeader } from './SHeader'
import { useWindowSize } from 'hooks'

interface HeaderProps {
  logoUrl?: string
}

const Header: FC<HeaderProps> = () => {
  const [isOpen, setOpen] = useState<boolean>(false)
  const [disabled, setDisabled] = useState<boolean>(false)

  const { width } = useWindowSize()

  const handleCarpet = (open: boolean) => {
    setOpen(open)
    setDisabled(true)
    setTimeout(
      () => {
        setDisabled(false)
      },
      open ? 1000 : 1500
    )
  }

  useEffect(() => {
    if (width <= 768) {
      setOpen(false)
    }
  }, [width <= 768])

  return (
    <SHeader isOpen={isOpen}>
      <button disabled={disabled} onClick={() => handleCarpet(!isOpen)}>
        <CarpetSVG />
      </button>
      <Navigation handleClose={handleCarpet} isOpen={isOpen} items={NAV_ITEMS} />
    </SHeader>
  )
}

export default memo(Header)
