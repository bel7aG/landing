import { styled } from 'shared'
import { SCREEN } from 'constant'

export const SPage = styled.main`
  overflow: hidden;
  scroll-behavior: smooth;

  @media (min-width: ${SCREEN.MOBILE}px) {
    padding-bottom: 12rem;
  }
  @media (max-width: ${SCREEN.MOBILE}px) {
    padding-bottom: 4rem;
  }
`
