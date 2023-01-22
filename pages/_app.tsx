import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <div className="fixed top-0 w-screen h-screen bg-center bg-cover -z-50 bg-warp-loop"></div>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
