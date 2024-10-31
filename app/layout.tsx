import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { GithubIcon, Logo } from "@/components/icons";

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
        <div className="flex p-2 border-b-2 gap-4 border-white w-full sm:hidden">
          <Logo size={24} />
          <GithubIcon />
        </div>
        <div className="container justify-center">
          {children}
        </div>
      </body>
    </html>
  );
}
