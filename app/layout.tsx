import { Metadata } from "next";
import Head from "next/head";
import { Providers } from "./providers";

export const metadata: Metadata = {
  icons: {
    icon: ["/favicon.ico", "favicon-16x16.png", "favicon-32x32.png"],
    apple: ["apple-touch-icon.png"],
    shortcut: ["apple-touch-icon.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="./icon.ico" />
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
