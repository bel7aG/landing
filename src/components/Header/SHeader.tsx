import { styled } from 'shared'
import { SCREEN } from 'constant'

export const SHeader = styled.header<{ isOpen: boolean }>`
  @media (min-width: ${SCREEN.MOBILE}px) {
    height: 4rem;
    max-width: 122rem;
    padding: 0 1rem;
    margin: 0 auto;

    > button {
      display: none;
    }
  }

  @media (max-width: ${SCREEN.MOBILE}px) {
    > button {
      position: fixed;
      z-index: 21;
      right: 1rem;
      top: 1rem;
      transform: rotate(${({ isOpen }) => (isOpen ? '65deg' : 0)});
      transition: transform 0.4s ${({ theme }) => theme?.transition};

      > svg {
        width: 4rem;
        height: 4rem;
      }
    }
  }
`
