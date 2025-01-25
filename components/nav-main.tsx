"use client"

import { ChevronRight, type LucideIcon } from "lucide-react"

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { Separator } from "@radix-ui/react-separator"

export function NavMain({
    items,
}: {
    items: {
        title: string
        url: string
        icon?: LucideIcon
        isActive?: boolean
        items?: {
            title: string
            url: string,
            icon?: LucideIcon
        }[]
    }[]
}) {
    return (
        <SidebarGroup>
            <SidebarMenu>
                {items.map((item) => {
                    return item.items && item.items.length > 0 ?
                        <div key={item.title}>
                            <div className="w-full h-1 border-t-2 my-4"></div>
                            <div className="space-y-3">
                                {item.items?.map((subItem) => (
                                    <SidebarMenuItem key={subItem.title}>
                                        <SidebarMenuSubButton asChild>
                                            <a href={subItem.url}>
                                                {subItem.icon && <subItem.icon />}
                                                <span>{subItem.title}</span>
                                            </a>
                                        </SidebarMenuSubButton>
                                    </SidebarMenuItem>
                                ))}
                            </div>
                        </div> :
                        <SidebarMenuItem key={item.title}>
                            <a href={item.url}>
                                <SidebarMenuButton tooltip={item.title}>
                                    {item.icon && <item.icon />}
                                    <span>{item.title}</span>
                                </SidebarMenuButton>
                            </a>
                        </SidebarMenuItem>
                })}
            </SidebarMenu>
        </SidebarGroup>
    )
}
