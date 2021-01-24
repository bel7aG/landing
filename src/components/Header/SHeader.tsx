import { styled } from 'shared'
import { SCREEN } from 'constant'

export const SHeader = styled.header`
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
      z-index: 5;
      right: 1rem;
      top: 1rem;
      transition: transform 0.4s ${({ theme }) => theme?.transition};
      &:hover {
        transform: rotate(65deg);
      }

      > svg {
        width: 4rem;
        height: 4rem;
      }
    }
  }
`
