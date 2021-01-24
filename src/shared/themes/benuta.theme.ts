import baseStyled, {
  BenutaTheme,
  ThemedStyledInterface,
  css as StyledCSS,
  keyframes as frames
} from 'styled-components'

declare module 'styled-components' {
  export interface BenutaTheme {
    layout: {
      colors: {
        cover: string
        body: string
        header: string
        text: string
        textSecondary: string
      }
    }

    transition: string
  }
}

export const styled = baseStyled as ThemedStyledInterface<BenutaTheme>
export const css = StyledCSS
export const keyframes: BenutaTheme | any = frames
