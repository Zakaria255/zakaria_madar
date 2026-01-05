import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Providers } from "./providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zakaria Ahmed Madar | Odoo Functional Consultant & Senior Web Developer",
  description: "Professional portfolio of Zakaria Ahmed Madar - Odoo Functional Consultant, Senior Web Developer, and Digital Operations Manager.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          inter.variable,
          poppins.variable,
          "antialiased min-h-screen flex flex-col transition-colors duration-300"
        )}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
