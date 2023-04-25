import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
	return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body className="font-sans bg-white text-neutral-900 scroll-smooth">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
