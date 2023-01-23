import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <meta property="og:image" content="/images/preview.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <body className="bg">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
