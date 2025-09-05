"use client";

import { ComponentProps } from "react";
import { NavMain } from "./components/NavMain";
import { Sidebar, SidebarContent, SidebarFooter, SidebarTrigger } from "@/components/ui/sidebar";
import { Sun } from "lucide-react";
import { useThemeStore } from "@/stores";
import menus from "./menus";

export function AppSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
  const { isDarkMode, setIsDarkMode } = useThemeStore();

  function handleToggleTheme() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <NavMain items={menus.navMain} />
      </SidebarContent>

      <SidebarFooter className="flex flex-row items-center justify-between px-4 py-2">
        <SidebarTrigger />

        <button>
          <Sun onClick={handleToggleTheme} />
        </button>
      </SidebarFooter>
    </Sidebar>
  );
}
