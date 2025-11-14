import "@styles/globals.css";
import Script from "next/script";

function Application({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://unpkg.com/@stackbit/annotations@0.6/dist/annotations.js"
        strategy="beforeInteractive"
      />
      <Component {...pageProps} />
    </>
  );
}

export default Application;
