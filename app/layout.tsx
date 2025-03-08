import type { Metadata } from "next";
import "./globals.css";

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
      <body>
        {children}
      </body>
    </html>
  );
}
