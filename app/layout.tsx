import { Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/providers/theme"
import { TooltipProvider } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

import type { Metadata } from "next"

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: "Relay",
  description: "AI multi-agent workspace for collaborative product planning, architecture, and execution.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en" suppressHydrationWarning
      className={cn("h-full", "antialiased", "font-sans", inter.variable)}
    >
      <head />
      <body className="flex flex-col min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
