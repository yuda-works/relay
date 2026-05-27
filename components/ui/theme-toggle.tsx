"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import * as React from "react"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-9 w-9"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
    >
      <Moon className="h-5 w-5 dark:hidden" />
      <Sun className="h-5 w-5 hidden dark:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
