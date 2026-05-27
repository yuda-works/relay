import * as React from "react"

import { cn } from "@/lib/utils"

export const TYPOGRAPHY_CLASSES = {
  h1: "scroll-m-20 text-4xl font-extrabold tracking-tight",
  h2: "scroll-m-20 text-3xl font-semibold tracking-tight",
  h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
  h4: "scroll-m-20 text-xl font-semibold tracking-tight",
  p: "",
  a: "font-medium text-zinc-900 dark:text-zinc-100 hover:underline",
} as const

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>
type PProps = React.HTMLAttributes<HTMLParagraphElement>
type AProps = React.AnchorHTMLAttributes<HTMLAnchorElement>

export function H1({ children, className, ...props }: HeadingProps) {
  return (
    <h1 {...props} className={cn(TYPOGRAPHY_CLASSES.h1, className)}>
      {children}
    </h1>
  )
}

export function H2({ children, className, ...props }: HeadingProps) {
  return (
    <h2 {...props} className={cn(TYPOGRAPHY_CLASSES.h2, className)}>
      {children}
    </h2>
  )
}

export function H3({ children, className, ...props }: HeadingProps) {
  return (
    <h3 {...props} className={cn(TYPOGRAPHY_CLASSES.h3, className)}>
      {children}
    </h3>
  )
}

export function H4({ children, className, ...props }: HeadingProps) {
  return (
    <h4 {...props} className={cn(TYPOGRAPHY_CLASSES.h4, className)}>
      {children}
    </h4>
  )
}

export function P({ children, className, ...props }: PProps) {
  return (
    <p {...props} className={cn(TYPOGRAPHY_CLASSES.p, className)}>
      {children}
    </p>
  )
}

export function A({ children, className, ...props }: AProps) {
  return (
    <a {...props} className={cn(TYPOGRAPHY_CLASSES.a, className)}>
      {children}
    </a>
  )
}
