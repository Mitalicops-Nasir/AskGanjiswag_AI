import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Main_Heropage/Nav";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Ask Series AI Engine",
  description: "Search Engine for Ask Ganjiswag Podcast Series",
  icons: {
   icon: "/logo.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          {/* Nav is neede dhere */}
          <Nav />
          {children}

          <Toaster />
        </main>
      </body>
    </html>
  );
}
