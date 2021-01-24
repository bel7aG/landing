import { styled } from 'shared'
import { SCREEN } from 'constant'

export const SHome = styled.div`
  > div:first-child {
    > img {
      width: 100%;
      height: auto;
      max-height: 77.1rem;
    }
  }

  > div:not(:first-child) {
    max-width: 122rem;
    margin: 0 auto;
    padding: 4rem 1rem 0;
    > h1,
    > h2,
    > h3,
    > p {
      max-width: 68rem;
      margin: 0 auto;
      &:not(:last-child) {
        margin-bottom: 2rem;
      }
      text-align: center;
    }
  }

  > div:nth-child(2) {
    > *:not(h1) {
      color: ${({ theme }) => theme?.layout?.colors?.textSecondary};
    }
  }

  > div:last-child {
    > h2 {
      font-weight: 500;
      font-size: 2.2rem;
    }
    > div {
      padding: 1rem 0;
      position: relative;

      > div {
        display: flex;
        justify-content: space-between;

        > div {
          position: relative;
          overflow: hidden;

          &::before,
          > a {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }

          &::before {
            content: '';
            background-color: rgba(0, 0, 0, 0.4);
            z-index: 9;
          }

          > a {
            z-index: 10;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
            > span {
              font-weight: 700;
              color: #e89b99;
              text-align: center;
              max-width: 85%;
              margin: 0 auto;
              line-height: 3rem;

              @media screen and (min-width: ${SCREEN.DESKTOP}px) {
                font-size: 3.2rem;
              }

              @media screen and (max-width: ${SCREEN.DESKTOP}px) {
                font-size: 2.6rem;
              }

              @media screen and (max-width: ${SCREEN.MOBILE}px) {
                font-size: 1.4rem;
              }
            }
          }

          > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          > h1 {
            z-index: 10;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }

          &::before,
          > img,
          > a {
            transition: all 0.75s ${({ theme }) => theme?.transition};
          }

          &:hover {
            > img,
            > a {
              transform: scale(1.15);
            }

            &::before {
              background-color: rgba(0, 0, 0, 0);
            }
          }
        }

        &:first-child {
          margin-bottom: 3rem;
        }

        @media screen and (min-width: ${SCREEN.MOBILE}px) {
          > div {
            height: 38rem;
          }

          &:first-child {
            > div:first-child {
              width: calc(65% - 1.5rem);
            }

            > div:last-child {
              width: calc(35% - 1.5rem);
            }
          }

          &:last-child {
            > div {
              width: calc(50% - 1rem);
            }
          }
        }
        @media screen and (max-width: ${SCREEN.MOBILE}px) {
          > div {
            height: 19rem;
          }

          > div {
            width: 49%;
          }
        }
      }
    }
  }
`
