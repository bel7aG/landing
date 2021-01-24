import { useEffect, FC } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { CSSPlugin } from 'gsap'

import Layout from 'components'
import { GlobalStyle } from 'styles'
import { LightTheme } from 'shared'
;[CSSPlugin]

export function reportWebVitals(metric: any) {
  // The metric object ({ id, name, startTime, value, label }) is logged to the console
  if (process.env.NODE_ENV === 'development') if (metric.label === 'web-vital') console.log(metric)
}

const Application: FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector(`#jss-server-side`)
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles)
    }
  }, [])

  return (
    <StyledThemeProvider theme={LightTheme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StyledThemeProvider>
  )
}

export default Application
