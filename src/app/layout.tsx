import { ClerkProvider } from "@clerk/nextjs";
import { HeroUIProvider } from "@heroui/system";
import { Nunito, Permanent_Marker } from "next/font/google";

import type { Metadata } from "next";
import "./globals.css";

const MyAppFont = Nunito({ subsets: ["latin"] });
const TittleFont = Permanent_Marker({ weight: "400", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fabulinha",
  description: "A simple blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={MyAppFont.className}
      >
        <ClerkProvider>
          <HeroUIProvider>
            {children}
          </HeroUIProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
