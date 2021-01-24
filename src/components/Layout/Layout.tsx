import { useRef, memo, FC, ReactNode, RefObject } from 'react'

import { Page, Header, Navigation, Cover } from 'components'
import { BenutaLogo } from 'public/static'
import { NAV_ITEMS } from 'constant'
import { SLayout } from './SLayout'

export interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const layoutRef = useRef<HTMLDivElement | any>() as RefObject<HTMLDivElement>

  return (
    <>
      <Cover logo={BenutaLogo} />
      <SLayout ref={layoutRef}>
        <Header>
          <Navigation items={NAV_ITEMS} />
        </Header>
        <Page>{children}</Page>
      </SLayout>
    </>
  )
}

export default memo(Layout)
