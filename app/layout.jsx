import "./globals.css";
import { Inter } from 'next/font/google'

export const metadata = {
  title: "Ai Forge Next App",
  description: "Design and Developed by Somor Mk",
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="shortcut icon" href="/favicon.png" /> */}
        {/* <meta property="og:image" content="/thumbnail.png" /> */}
        <meta property="og:description" content="Ai Forge Next Landing Page - Somor Mk" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
