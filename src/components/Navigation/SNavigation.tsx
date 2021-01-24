import { styled } from 'shared'
import { SCREEN } from 'constant'

export const SNavigation = styled.nav`
  @media (min-width: ${SCREEN.MOBILE}px) {
  }
  position: relative;
  height: 4rem;
  > ul {
    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: center;

    > li {
      > a {
        color: ${({ theme }) => theme?.layout?.colors?.text};
        text-transform: uppercase;
      }
      &:last-child {
        > a {
          color: ${({ theme }) => theme?.layout?.colors?.textSecondary};
        }
      }

      &:not(:last-child) {
        > a {
          transition: color 0.2s ${({ theme }) => theme?.transition};
          &:hover {
            color: #e89b99;
          }
        }
      }
    }
  }
`
