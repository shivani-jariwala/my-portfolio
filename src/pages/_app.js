import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;600;700&display=swap");
        body {
          font-family: "Roboto Mono", monospace;
          background-color: #0f172a; /* bg-slate-900 */
        }
        .animate-wave {
          animation: wave-animation 2.5s infinite;
        }
        @keyframes wave-animation {
          0% {
            transform: rotate(0deg);
          }
          10% {
            transform: rotate(14deg);
          }
          20% {
            transform: rotate(-8deg);
          }
          30% {
            transform: rotate(14deg);
          }
          40% {
            transform: rotate(-4deg);
          }
          50% {
            transform: rotate(10deg);
          }
          60% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
      `}</style>
      <main className={`${robotoMono.variable}`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </>
  );
}
