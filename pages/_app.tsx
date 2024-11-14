import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins, Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div id="root" className={spaceGrotesk.className}>
      <Component {...pageProps} />
    </div>
  );
}
