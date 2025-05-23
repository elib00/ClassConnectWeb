import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // customize weights as needed
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ClassConnect",
  description: "Monitor student performance in real-time and improve parent-teacher communication.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
