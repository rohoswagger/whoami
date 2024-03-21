import Head from "next/head";
import { Providers } from "./providers";

export const metadata = {
  icons: {
    icon: ["/favicon.ico", "favicon-16x16.png", "favicon-32x32.png"],
    apple: ["apple-touch-icon.png"],
    android: ["android-chrome-192x192.png", "android-chrome-512x512.png"],
    ms: ["mstile-150x150.png"],
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
