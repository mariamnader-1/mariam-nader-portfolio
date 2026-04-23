import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mariam Nader | Computer Engineer",
  description:
    "Professional portfolio of Mariam Nader — Computer Engineering graduate specializing in web, mobile, and software development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
