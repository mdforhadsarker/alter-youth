import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <title>AlterYouth | Towards a Literate Bangladesh</title>
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
