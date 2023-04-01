import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
      <title>Hello 👋</title>
      <meta property="og:image" content="/images/preview.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:description" content="An upcoming hackathon for youths in Singapore" />
      </Head>
      <body className="bg">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
