import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="description" content="Este projeto consiste em..." />
          <meta name="keywords" content="Hubtech, next, nextjs, react" />
          <meta name="copyright" content="© Hubtech" />
          {/* <link rel="canonical" href="https://...." /> */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap"
            as="style"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap"
          />
          <link rel="apple-touch-icon" href="/favicon.png" />
          <link rel="icon" href="/favicon.png" />
          {/* pwa */}
          <meta name="theme-color" content="#fff" />
          <link rel="manifest" href="/manifest.json" />
          {/* open graph */}
          <meta property="og:site_name" content="Hubtech" />
          <meta property="og:locale" content="pt_BR" />
          {/* <meta property="og:url" content="https://..." /> */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Hubtech" />
          <meta
            property="og:description"
            content="Este projeto consiste em..."
          />
          {/* <meta property="og:image" content="https://...jpg" /> */}
          {/* <meta property="og:image:secure_url" content="https://..." /> */}
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="512" />
          <meta property="og:image:height" content="512" />
          <meta property="og:image:alt" content="Hubtech" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }

  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }
}
