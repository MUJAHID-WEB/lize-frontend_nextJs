import { Html, Head, Main, NextScript } from 'next/document';
import { useRouter } from 'next/router';

export default function Document() {
  const router = useRouter();
  return (
    <Html lang={router?.locale}>
      <Head>
        <link
          rel='preload'
          href='/fonts/Creattion.ttf'
          as='font'
          crossOrigin='anonymous'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
