import { useMemo, FC } from 'react'
import Link from 'next/link'

import { INavigationItem } from 'interfaces'
import { SNavigation } from './SNavigation'

interface NavigationProps {
  items?: INavigationItem[]
}

const Navigation: FC<NavigationProps> = (props) => {
  const { items = [] } = props

  const elements = useMemo(
    () =>
      items.map(({ title, path }) => (
        <li key={path}>
          <Link href={path}>{title}</Link>
        </li>
      )),
    []
  )
  return (
    <SNavigation>
      <ul>{elements}</ul>
    </SNavigation>
  )
}

export default Navigation
