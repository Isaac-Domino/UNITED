import "@/styles/globals.css";
import "@/styles/typography.css";
import Navbar from "../components/Navbar";
import type { AppProps } from "next/app";
import NextThemeProvider from "@/components/next-theme-provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextThemeProvider defaultTheme="light">
        <Navbar />
        <Component {...pageProps} />
      </NextThemeProvider>
    </>
  );
}
