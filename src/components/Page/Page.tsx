import { useEffect, useRef, FC, RefObject } from 'react'
import { SPage } from './SPage'

const Page: FC = ({ children }) => {
  const pageRef = useRef<HTMLDivElement | any>() as RefObject<HTMLDivElement>
  useEffect(() => {}, [])

  return <SPage ref={pageRef}>{children}</SPage>
}

export default Page
