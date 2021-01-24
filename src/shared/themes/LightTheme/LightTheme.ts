import { BenutaTheme } from 'styled-components'

export const LightTheme: BenutaTheme = {
  layout: {
    colors: {
      cover: '#eaeaea',
      body: '#ffffff',
      header: '#ffffff',
      text: '#333',
      textSecondary: '#8c8c8c'
    }
  },

  transition: 'cubic-bezier(0.73, 0.12, 0.24, 0.99)'
}

export type LightTheme = typeof LightTheme
