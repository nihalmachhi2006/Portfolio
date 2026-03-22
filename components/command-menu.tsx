"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { Home, Component, LayoutTemplate, PenTool, Trophy, Briefcase, FolderCode, Blocks, User, Star, Quote } from "lucide-react"

export function CommandMenu({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const router = useRouter()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [setOpen])

  const runCommand = React.useCallback(
    (command: () => unknown) => {
      setOpen(false)
      command()
    },
    [setOpen]
  )

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        
        <CommandGroup heading="Pages">
          <CommandItem onSelect={() => runCommand(() => router.push("/"))}>
            <Home className="mr-2 h-4 w-4" />
            Home
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("/components"))}>
            <Component className="mr-2 h-4 w-4" />
            Components
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("/blocks"))}>
            <LayoutTemplate className="mr-2 h-4 w-4" />
            Blocks
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("/blog"))}>
            <PenTool className="mr-2 h-4 w-4" />
            Blog
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("/hackathons"))}>
            <Trophy className="mr-2 h-4 w-4" />
            Hackathons
          </CommandItem>
        </CommandGroup>
        
        <CommandSeparator />
        
        <CommandGroup heading="Sections">
          <CommandItem onSelect={() => runCommand(() => router.push("/#about"))}>
            <User className="mr-2 h-4 w-4" />
            About
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("/#experience"))}>
            <Briefcase className="mr-2 h-4 w-4" />
            Experience
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("/#projects"))}>
            <FolderCode className="mr-2 h-4 w-4" />
            Projects
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("/#stack"))}>
            <Blocks className="mr-2 h-4 w-4" />
            Stack
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("/#awards"))}>
            <Star className="mr-2 h-4 w-4" />
            Awards
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("/#certifications"))}>
            <Star className="mr-2 h-4 w-4" />
            Certifications
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("/#quote"))}>
            <Quote className="mr-2 h-4 w-4" />
            Quote
          </CommandItem>
        </CommandGroup>
      </CommandList>
      </Command>
    </CommandDialog>
  )
}
