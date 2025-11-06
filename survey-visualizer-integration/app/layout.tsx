import "./globals.css";

import Nav from "./components/nav";

import { Sora } from 'next/font/google';

const sora = Sora({
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.className} antialiased`}
      >
        <div>
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
