import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Cezs Music",
  description: "Music app designed for instrumentalists.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center w-screen h-screen bg-[#2e2e2e] ">
        <Image src="/icon.png" alt="cezs logo" width="144" height="144" />
        {children}
      </body>
    </html>
  );
}
