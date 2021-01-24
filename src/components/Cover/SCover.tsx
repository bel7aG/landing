import { styled } from 'shared'
import { SCREEN } from 'constant'

export const SCover = styled.div`
  z-index: 20;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: ${({ theme }) => theme?.layout?.colors?.cover};

  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    opacity: 0;
    width: 100%;

    max-width: 39rem;
    height: auto;
    @media (max-width: ${SCREEN.MOBILE}px) {
      width: 80%;
    }
  }
`
