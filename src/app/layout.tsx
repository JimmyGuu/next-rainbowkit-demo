"use client";

import "./globals.css";
import WalletProvider from "@/context/wagmi";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Next RainbowKit Demo</title>
        <meta name="description" content="For test" />
      </head>
      <body>
        <WalletProvider>
          {children}
        </WalletProvider>
      </body>
    </html>
  );
}
