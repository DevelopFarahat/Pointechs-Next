import { Html, Head, Main, NextScript } from 'next/document'

import { useTranslation } from "next-i18next";
export default function Document() {
  const { t } = useTranslation("common");
  return (
    <Html lang='en'>
        <Head>
        <title>{t("Pointechs")}</title>
        <link rel="manifest" href="manifest.json"/>
          <link rel="apple-touch-icon" href="/favicon-16x16.png"/>
          <meta name="theme-color" content="#fff" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="apple-touch-icon" href="apple-touch-icon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

