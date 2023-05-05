import { Html, Head, Main, NextScript } from 'next/document'

import { useTranslation } from "next-i18next";
export default function Document() {
  const { t } = useTranslation("common");
  return (
    <Html lang='en'>
        <Head>
        <title>{t("Pointechs")}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

