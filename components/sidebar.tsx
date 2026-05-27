"use client"

import { ListIcon, ChevronRight, CheckCircle2, Circle, Loader2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import * as React from "react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Sidebar as BaseSidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar"
import { AGENTS } from "@/data/agents"

import { Settings } from "./settings"

interface SidebarProps extends React.ComponentProps<typeof BaseSidebar> {
  activeAgentIndex: number,
  isWorkflowFinished: boolean,
}

export function Sidebar({ activeAgentIndex, isWorkflowFinished, ...props }: SidebarProps) {
  return (
    <BaseSidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/" className="flex items-center gap-2">
                <Image
                  className="dark:invert h-7 sm:h-8 md:h-9 w-auto object-contain transition-opacity"
                  src="/icon.png"
                  alt="Yuda Works icon"
                  width={3584}
                  height={1024}
                  priority
                />
                <span className="font-semibold">Relay</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <Collapsible asChild defaultOpen className="group/collapsible">
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton>
                  <ListIcon />
                  <span>Orchestration</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {AGENTS.map((agent, index) => {
                    const isPast = activeAgentIndex > index || isWorkflowFinished
                    const isActive = activeAgentIndex === index

                    return (
                      <SidebarMenuSubItem key={agent.key} className="flex items-center gap-4">
                        <SidebarMenuSubButton>
                          {isPast ? (
                            <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                          ) : isActive ? (
                            <Loader2 className="w-5 h-5 text-zinc-500 animate-spin" />
                          ) : (
                            <Circle className="w-5 h-5" />
                          )}
                          <span>{agent.name}</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    )
                  })}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
          <Settings />
        </SidebarMenu>
      </SidebarContent>
    </BaseSidebar>
  )
}
