import "@/styles/globals.sass";
import type { AppProps } from "next/app";
import Layout from "@/components/layout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <main className={inter.className}>
        <div>
          <Component {...pageProps} />
        </div>
      </main>
    </Layout>
  );
}
