import { useRef, memo, FC, ReactNode, RefObject } from 'react'

import { Page, Header, Cover } from 'components'
import { BenutaLogo } from 'public/static'
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
        <Header />
        <Page>{children}</Page>
      </SLayout>
    </>
  )
}

export default memo(Layout)
