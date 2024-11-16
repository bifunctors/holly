import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { TopBar } from "@/components/top-bar";
import { MobileMenu } from "@/components/mobile-menu";
import { Player } from "@/components/player";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Holly",
  description: "Tree lights frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "dark flex flex-col justify-center")}>
        <div className="container justify-center">
          <TopBar />
          {children}
        </div>
        <Player />
      </body>
    </html>
  );
}
