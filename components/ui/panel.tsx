import { Slot } from "@radix-ui/react-slot"
import React from "react"
import { cn } from "@/lib/utils"

function Panel({ className, ...props }: React.ComponentProps<"section">) {
  return (
    <section
      data-slot="panel"
      className={cn(
        "screen-line-top screen-line-bottom relative w-full",
        className
      )}
      {...props}
    />
  )
}

function PanelHeader({ className, ...props }: React.ComponentProps<"header">) {
  return (
    <header
      data-slot="panel-header"
      className={cn(
        "screen-line-bottom px-4",
        className
      )}
      {...props}
    />
  )
}

function PanelTitle({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"h2"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "h2"

  return (
    <Comp
      data-slot="panel-title"
      className={cn("text-3xl font-semibold tracking-tight", className)}
      {...props}
    />
  )
}

function PanelContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
     <div data-slot="panel-body" className={cn("p-4", className)} {...props} />
  )
}

export {
  Panel,
  PanelContent,
  PanelHeader,
  PanelTitle,
}
