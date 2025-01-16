import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const getDynamicTitle = () => {
    switch (router.pathname) {
      case "/":
        return "AlterYouth | Towards a Literate Bangladesh";
      case "/about":
        return "About | AlterYouth";
      case "/how-it-works":
        return "How it works | AlterYouth";
      default:
        return "AlterYouth";
    }
  };
  return (
    <>
      <Head>
        <title>{getDynamicTitle()}</title>
      </Head>{" "}
      <Component {...pageProps} />;
    </>
  );
}
