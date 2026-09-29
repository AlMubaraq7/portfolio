import Head from "next/head";
import ogImage from "@/public/screenshot.png";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>Mubaraq Momoh | SWE and Email Designer</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta
          name="description"
          content="I'm Mubaraq Momoh, A Software Engineer and Email Designer."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Mubaraq Momoh | SWE and Email Designer"
        />
        <meta
          name="description"
          content="I'm Mubaraq Momoh, A Software Engineer and Email Designer."
        />

        <meta
          property="og:title"
          content="Mubaraq Momoh | SWE and Email Designer"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zerosevenal.vercel.app" />
        <meta property="og:image" content={ogImage.src} />
        <meta
          property="og:description"
          content="I'm Mubaraq Momoh, A Software Engineer and Email Designer."
        />
      </Head>
      <Home />
    </>
  );
}
