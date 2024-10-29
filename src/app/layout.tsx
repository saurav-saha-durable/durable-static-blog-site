import "app/globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <Link className="link" href="/">
            <h1>That Blog Site</h1>
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
