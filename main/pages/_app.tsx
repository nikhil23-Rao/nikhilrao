import "font-awesome/css/font-awesome.min.css";
import "react-vertical-timeline-component/style.min.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    window.onbeforeunload = () => {
      localStorage.clear();
    };
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
