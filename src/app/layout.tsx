import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Johnny Education Centre | 小朋友私人教育中心",
  description:
    "Johnny Education Centre 專為 5 至 9 歲小學生而設，提供 AI、Python 編程、全科提升及創意繪畫等課程，讓孩子從小愛上學習。",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-HK">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
