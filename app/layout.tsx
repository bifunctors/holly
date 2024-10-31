import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { TopBar } from "@/components/top-bar";

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
        <TopBar />
        <div className="container justify-center">
          {children}
        </div>
      </body>
    </html>
  );
}
