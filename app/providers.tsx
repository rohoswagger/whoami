"use client";

import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";

import { Rubik, Open_Sans } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

export const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: "400",
});

const theme = extendTheme({
  fonts: {
    heading:
      'Rubik, Poppins, Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    body: 'Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
  },
  styles: {
    global: {
      "html, body": {
        scrollBehavior: "smooth",
        bg: "#FBF5E9",
      },
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Box mx="30px">
      <ChakraProvider theme={theme}>
        <NavBar />
        {children}
        <Footer />
      </ChakraProvider>
    </Box>
  );
}
