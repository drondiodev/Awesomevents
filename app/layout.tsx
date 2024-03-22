import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins   = Poppins({ 
  weight: ["400", "500", "600", "700"], 
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Awesomevents",
  description: "Awesomevents",
  icons: {
    icon: "/assets/images/logo.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={poppins.variable}>{children}</body>
    </html>
  );
}
