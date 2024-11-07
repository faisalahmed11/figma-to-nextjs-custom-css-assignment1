import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./ui/navbar/navbar";
import { Footer } from "./ui/footer";

export const metadata: Metadata = {
  title: "John's Portfolio",
  description:
    "This is a Nextjs website assignment assigned by Governor Sindh Initiative for AI (GIAIC)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="body-container body-container-sm-padding">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
