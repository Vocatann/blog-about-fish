import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/header";
import Footer from "@/components/footer";
import ChatbotWindow from "@/components/chatbot-window";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Fishy blog",
  description: "A blog about fish",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="bg-bg h-full flex flex-col gap-y-10">
        <Providers>
          <Header/>
          <div className="flex-grow">
            {children}
          </div>
          <Footer/>
          <ChatbotWindow/>
        </Providers>
      </body>
    </html>
  );
}