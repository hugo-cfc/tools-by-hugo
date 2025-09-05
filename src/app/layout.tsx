"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSideBar";
import { useThemeStore } from "@/stores";
import { SnackbarProvider } from "notistack";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isDarkMode } = useThemeStore();

  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7820886442029994"
          crossOrigin="anonymous"
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased  ${isDarkMode ? "dark" : ""}`}>
        <SnackbarProvider
          maxSnack={7}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          autoHideDuration={5000}
        >
          <SidebarProvider>
            <AppSidebar />

            <SidebarTrigger className="xs:block md:hidden" />

            <main className="py-4 px-4 flex-1">{children}</main>

            <div className="h-38 w-full bg-white fixed bottom-0 left-0" />
          </SidebarProvider>
        </SnackbarProvider>
      </body>
    </html>
  );
}
