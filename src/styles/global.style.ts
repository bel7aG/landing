import { createGlobalStyle, BenutaTheme } from 'styled-components'
import { SCREEN } from 'constant'

export const GlobalStyle = createGlobalStyle<{ theme: BenutaTheme }>`
  * {
    transition: all .1s ease;
  }

  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
  *::-webkit-scrollbar-track {
    border-radius: 8px;
  }


  h1, h2, h3, h4, h5, h6, p, li, span, strong, small {
    color: ${({ theme }) => theme?.layout?.colors?.text};
  }

  html {
    padding-top: 0 !important;
    font-size: 62.5% !important;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body, html {
    overflow-x: hidden;
  }

  body {
    background-color: ${({ theme }) => theme?.layout?.colors?.body};
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    height: 100vh !important;
    font-size: 1.6rem;
    scroll-behavior: smooth;
  }

  button {
    background-color: transparent;
    outline: none;
    border: 0;
  }

  input {
    outline: none;
    border: 0;
  }

  li, ol {
    list-style: none;
  }

  h1, h2 {
    font-weight: 700;
  }

  h3 {
    font-weight: 500;
  }

  p {
    font-weight: 300;
  }

  @media screen and (min-width: ${SCREEN.MOBILE}px) {
    h1 {
      font-size: 2.8rem;
    }

    h2 {
      font-size: 1.8rem;
    }

    h3 {
      font-size: 1.4rem;
    }

    p {
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: ${SCREEN.MOBILE}px) {
    h1 {
      font-size: 1.7rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1.4rem;
    }

    p {
      font-size: 1.3rem;
    }
  }

  a,
  a:visited,
  a:link {
    text-decoration: none;
    color: inherit;
  }

  .page {
    opacity: 0;
  }
`
