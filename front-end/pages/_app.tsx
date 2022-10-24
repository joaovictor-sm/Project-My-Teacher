import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Cabecalho } from '../src/components/Cabecalho/Cabecalho'
import { ThemeProvider } from '@emotion/react'
import themes from '../src/themes/themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themes}>
      <Cabecalho></Cabecalho>
      <Component {...pageProps} />
      </ThemeProvider>
      )
}

export default MyApp