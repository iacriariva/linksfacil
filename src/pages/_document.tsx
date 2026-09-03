import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#820AD1" />
          <meta name="description" content="Gerenciador de links com favicons" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <link rel="apple-touch-icon" href="/icon-192.svg" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="apple-mobile-web-app-title" content="LinksFácil" />
        </Head>
        <body className="bg-canvas">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
