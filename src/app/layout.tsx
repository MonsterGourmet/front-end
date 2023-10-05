import StyledConfig from '@/styles/_styled.config'
import GlobalStyle from '@/styles/_globalStyled'

import type { Metadata } from 'next'

import { Inter } from 'next/font/google'
import Head from './head'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <Head />
        <head>
        <link rel="shortcut icon" href="/LogoOficcial.png" type="image/x-icon" />
        </head>
        <body style={{position: 'relative'}}>
          <GlobalStyle />
          <StyledConfig>{children}</StyledConfig>
        </body>
      </html>
  )
}
