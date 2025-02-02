import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from 'components/ui/NavBar/NavBar';
import Providers from 'components/ui/Providers';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`${geistSans.variable} ${geistMono.variable}`}</style>
      </head>
      <body>
        <Providers>
          <NavBar />
          {children}
        </Providers>

        <footer>
            <div><img src="/Logo1.png" alt="logo" style={{ width: '100px', height: '100px' }} /></div>
            <p>Copyright 2024-2025 Puripat & Thammavut All right reserved.  Terms & Conditions | Privacy Policy</p>
        </footer>
      </body>
    </html>
  );
}
