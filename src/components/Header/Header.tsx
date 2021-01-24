import { memo, FC, ReactNode } from 'react'

import { SHeader } from './SHeader'

interface HeaderProps {
  children?: ReactNode
  logoUrl?: string
}

const Header: FC<HeaderProps> = ({ children }) => {
  return <SHeader>{children}</SHeader>
}

export default memo(Header)
