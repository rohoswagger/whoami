import Head from "next/head";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Hey! I'm Roshan Desai. Here you can learn more about my experiences and projects."
        />
      </Head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
