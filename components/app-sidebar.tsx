'use client'
import { Calendar, Home, Inbox, Search, Settings, LayoutDashboard, Plus, Plug, UserRoundPen, CalendarCheck } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
} from "@/components/ui/sidebar"
import { NavMain } from "./nav-main"
import NavHeader from "./nav-header"

// Menu items.
const data = {
    user: {
        name: 'gabby',
        email: 'johndoe@gmail.com'
    },
    navMain: [
        {
            title: 'Dashboard',
            url: '/dashboard',
            icon: LayoutDashboard
        },
        {
            title: 'Posts',
            url: '#',
            icon: Home,
            items: [
                {
                    title: "New Post",
                    url: "/create-post",
                    icon: Plus,
                },
                {
                    title: "Scheduled posts",
                    url: "#",
                    icon: Calendar,
                },
                {
                    title: "Posts",
                    url: "#",
                    icon: Inbox,
                },
            ]
        },
        {
            title: "Channel",
            url: "#",
            icon: Search,
            items: [
                {
                    title: 'Connect channel',
                    url: '#',
                    icon: Plug
                },
            ]
        },
        {
            title: "Settings",
            url: "#",
            icon: Settings,
            items: [
                {
                    title: 'profile',
                    url: '#',
                    icon: UserRoundPen
                },
                {
                    title: 'subscription',
                    url: '#',
                    icon: CalendarCheck
                },
            ]
        },
    ]
}

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader>
                <NavHeader />
            </SidebarHeader>


            <SidebarContent className="mt-6">
                <NavMain items={data.navMain} />
            </SidebarContent>


            <SidebarFooter>

            </SidebarFooter>
        </Sidebar>
    )
}
