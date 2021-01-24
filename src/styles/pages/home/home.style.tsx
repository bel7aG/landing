import { styled } from 'shared'

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
    h2,
    h3,
    p {
      max-width: 61rem;
      margin: 0 auto;
      &:not(:last-child) {
        margin-bottom: 2rem;
      }
      text-align: center;
    }
  }

  > div:nth-child(2) {
    > h1 {
      font-size: 3.4rem;
      font-weight: 700;
    }

    > *:not(h1) {
      color: ${({ theme }) => theme?.layout?.colors?.textSecondary};
    }
  }

  > div:last-child {
    > h2 {
      font-weight: 400;
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
          max-height: 38rem;
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
            > span {
              font-weight: 500;
              font-size: 3.2rem;
              color: #e89b99;
              text-align: center;
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
    }
  }
`
