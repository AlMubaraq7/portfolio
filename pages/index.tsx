import Head from "next/head";
import ogImage from "@/public/screenshot.png";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>Mubaraq Momoh | Frontend Developer</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="description" content="Mubaraq Momoh | Frontend Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Mubaraq Momoh | Frontend Developer"
        />
        <meta
          name="description"
          content="Hey there! I'm Mubaraq Momoh, and I'm a Bachelor of Science in Computer Engineering."
        />

        <meta
          property="og:title"
          content="Mubaraq Momoh | Frontend Developer"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zerosevenal.vercel.app" />
        <meta property="og:image" content={ogImage.src} />
        <meta
          property="og:description"
          content="Hey there! I'm Mubaraq Momoh, and I'm a Bachelor of Science in Computer Engineering."
        />
      </Head>
      <Home />
    </>
  );
}
