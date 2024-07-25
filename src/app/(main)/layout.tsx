import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import StoreProvider from "@/Provider/StoreProvider";
import ReactQueryProvider from "@/Provider/ReactQueryProvider";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

axios.defaults.withCredentials = true;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <ReactQueryProvider>
        <html lang="en">
          <body className={inter.className}>
            <div className="min-h-screen bg-white">{children}</div>
          </body>
        </html>
      </ReactQueryProvider>
    </StoreProvider>
  );
}
