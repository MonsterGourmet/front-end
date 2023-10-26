import Head from './head'

import StyledConfig from '@/styles/_styled.config'
import GlobalStyle from '@/styles/_globalStyled'

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
