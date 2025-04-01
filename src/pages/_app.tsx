import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Image from "next/image";
import wallet from "@/wallet.svg";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="text-center bg-[#f3f5f7] h-[100vmin]">
      <header className="min-h-[10vh] flex flex-col items-center justify-center text-[calc(10px_+_2vmin)] text-[white]">
        <Image
          src={wallet}
          alt="logo"
          className="h-[8vmin] pointer-events-none"
        />
      </header>
      <Component {...pageProps} />
    </div>
  );
}
