import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="favicon.png" type="image/png" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap"
            rel="stylesheet"
          />

          <meta name="title" content="Início | move.it" />
          <meta name="description" content="" />

          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://moveit-cristianekoshino.vercel.app/"
          />
          <meta property="og:title" content="Início | move.it" />
          <meta property="og:description" content="" />
          <meta property="og:image" content="/public/imgs/screen.jpg" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://moveit-cristianekoshino.vercel.app/"
          />
          <meta property="twitter:title" content="Início | move.it" />
          <meta property="twitter:description" content="" />
          <meta property="twitter:image" content="/public/imgs/screen.jpg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
