import { styled } from 'shared'
import { SCREEN } from 'constant'
import { NavigationProps } from './Navigation'

export const SNavigation = styled.nav<NavigationProps>`
  position: relative;

  @media (min-width: ${SCREEN.DESKTOP}px) {
    > ul > li > a {
      font-size: 1.3rem;
    }
  }

  @media (max-width: ${SCREEN.DESKTOP}px) {
    > ul > li > a {
      font-size: 1rem;
    }
  }

  @media (max-width: ${SCREEN.TABLET}px) {
    > ul > li > a {
      font-size: 0.9rem;
    }
  }

  @media (min-width: ${SCREEN.MOBILE}px) {
    height: 4rem;
    > ul {
      flex-direction: row;
      > li {
        display: block;
      }
    }
  }

  > ul {
    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: center;

    > li {
      line-height: 2.1rem;

      > a {
        font-weight: 400;
        color: ${({ theme }) => theme?.layout?.colors?.text};
        text-transform: uppercase;
      }

      &:last-child {
        display: flex;
        justify-content: center;
        align-items: center;
        border-left: 1px solid #eee;

        > a {
          color: ${({ theme }) => theme?.layout?.colors?.textSecondary};
        }
      }

      &:not(:last-child) {
        @media (min-width: ${SCREEN.TABLET}px) {
          margin-right: 2rem;
        }
        > a {
          transition: color 0.2s ${({ theme }) => theme?.transition};
          &:hover {
            color: #e89b99;
          }
        }
      }
    }
  }

  @media (max-width: ${SCREEN.MOBILE}px) {
    position: fixed;
    z-index: 20;
    height: 100vh;
    width: ${({ isOpen }) => (isOpen ? '100vw' : 0)};
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme?.layout?.colors?.cover};
    overflow: hidden;
    transition: width ${({ isOpen }) => (isOpen ? '1s' : '0.8s 0.4s')} ${({ theme }) => theme?.transition};
    > ul {
      flex-direction: column;
      height: 100%;
      opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
      transition: opacity ${({ isOpen }) => (isOpen ? '0.8s 0.8s' : '0.4s 0s')} ${({ theme }) => theme?.transition};

      > li {
        display: flex;
        align-items: center;
        justify-content: center;
        > a {
          font-weight: 700;
          font-size: 2rem;
        }
      }
    }
  }
`
