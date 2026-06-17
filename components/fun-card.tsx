import { cn } from "@/lib/utils"
import type React from "react"

export function FunCard({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("card-fun bg-card text-card-foreground", className)}
      {...props}
    >
      {children}
    </div>
  )
}
