import type { Metadata } from "next";
import "./globals.css";

import { Rock_3D } from 'next/font/google'

const rock3d = Rock_3D({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-rock3d',
})

export const metadata: Metadata = {
  title: "Tom Fullylove",
  description: "A full stack engineer with a love of problem solving and an affinity for design and UX, currently working at Veygo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rock3d.className}>
        {children}
      </body>
    </html>
  );
}
