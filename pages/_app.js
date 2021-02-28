import "../styles/generated.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Devastated Wasteland</title>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
