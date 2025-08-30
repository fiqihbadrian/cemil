import "./globals.css";
import type { Metadata } from "next";
import NavBar from "@/app/components/NavBar";  
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Website Cemilan Saya",
  description: "Menjual berbagai macam kripik dan stik enak.",
  keywords: ["cemilan", "kripik", "stik", "makanan ringan"],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`antialiased`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}