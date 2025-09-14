import {
  initialThemeState,
  ThemeProvider,
} from "@/src/providers/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { ReactNode } from "react";
import "../globals.css";

export const metadata: Metadata = {
  title: "IA Ebooks",
  description: "Improve your knowledge with IA ebooks",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider
          defaultTheme={initialThemeState.default}
          storageKey={initialThemeState.storageKey}
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
