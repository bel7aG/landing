import { useMemo, FC } from 'react'
import Link from 'next/link'

import { INavigationItem } from 'interfaces'
import { SNavigation } from './SNavigation'

export interface NavigationProps {
  isOpen: boolean
  items?: INavigationItem[]
  handleClose?: (open: boolean) => void
}

const Navigation: FC<NavigationProps> = ({ handleClose, ...props }) => {
  const { isOpen, items = [] } = props

  const elements = useMemo(
    () =>
      items.map(({ title, path }) => (
        <li key={path} onClick={() => handleClose!(false)}>
          <Link href={path}>{title}</Link>
        </li>
      )),
    []
  )
  return (
    <SNavigation isOpen={isOpen}>
      <ul>{elements}</ul>
    </SNavigation>
  )
}

export default Navigation
