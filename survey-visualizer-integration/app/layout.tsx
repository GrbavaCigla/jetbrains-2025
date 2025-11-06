import "./globals.css";

import Nav from "./components/nav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        <div>
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
