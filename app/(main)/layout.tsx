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
  const renderHeader = () => (
    <header className="text-white w-2/3 ">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">
          <Image src="/icon.png" alt="cezs logo" width="80" height="80" />
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="/timeline" className="hover:text-blue-300">
                timeline
              </a>
            </li>
            <li>
              <a href="/search" className="hover:text-blue-300">
                search
              </a>
            </li>
            <li>
              <a href="/messages" className="hover:text-blue-300">
                messages
              </a>
            </li>
            <li>
              <a href="/profile" className="hover:text-blue-300">
                profile
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
  return (
    <html lang="en">
      <body className="flex flex-col items-center w-screen h-screen bg-[#2e2e2e]">
        {renderHeader()}
        {children}
      </body>
    </html>
  );
}
