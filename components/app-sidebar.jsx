"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@radix-ui/react-collapsible";
import {
  Gauge,
  ShoppingCart,
  Boxes,
  Users,
  MonitorCheck,
  Package,
  ChevronDown,
  PackagePlus,
  PackageMinus,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function AppSidebar() {
  const [openInventory, setOpenInventory] = useState(false);

  return (
    <Sidebar
      side="left"
      variant=""
      collapsible="offcanvas"
      className="bg-[#212529]"
    >
      {/* Sidebar Header */}
      <div className="flex items-center px-4 py-4 border-b border-gray-300 bg-gray-100">
        <span className="text-lg font-semibold uppercase">Kkopi.Tea POS</span>
      </div>

      {/* Sidebar Menu Content */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {/* Standard Items */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a
                    href="/dashboard"
                    className="flex items-center gap-3 px-4 py-2 m-2 hover:bg-gray-700 rounded-md"
                  >
                    <Gauge className="w-5 h-5" />
                    <span>Dashboard</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a
                    href="/pos"
                    className="flex items-center gap-3 px-4 py-2 m-2 hover:bg-gray-700 rounded-md"
                  >
                    <MonitorCheck className="w-5 h-5" />
                    <span>POS</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <Collapsible
                  open={openInventory}
                  onOpenChange={setOpenInventory}
                >
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton asChild>
                      <div className="flex justify-between items-center px-4 py-2 m-2 cursor-pointer hover:bg-gray-700 rounded-md">
                        <div className="flex items-center gap-3">
                          <Package className="w-5 h-5" />
                          <span>Inventory</span>
                        </div>
                        <ChevronDown
                          className={`transition-transform duration-300 w-4 h-4 ${
                            openInventory ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    <div className="flex flex-col pl-10 py-1">
                      <a
                        href="/inventory/in"
                        className="flex items-center gap-2 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-sm text-gray-800 dark:text-white"
                      >
                        <PackagePlus className="w-5 h-5" />
                        <span>Inventory In</span>
                      </a>
                      <a
                        href="/inventory/out"
                        className="flex items-center gap-2 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-sm text-gray-800 dark:text-white"
                      >
                        <PackageMinus className="w-5 h-5" />
                        <span>Inventory Out</span>
                      </a>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenuItem>

              {/* Other Items */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a
                    href="/orders"
                    className="flex items-center gap-3 px-4 py-2 m-2 hover:bg-gray-700 rounded-md"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span>Orders</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a
                    href="/products"
                    className="flex items-center gap-3 px-4 py-2 m-2  hover:bg-gray-700 rounded-md"
                  >
                    <Boxes className="w-5 h-5" />
                    <span>Products</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a
                    href="/employees"
                    className="flex items-center gap-3 px-4 py-2 m-2  hover:bg-gray-700 rounded-md"
                  >
                    <Users className="w-5 h-5" />
                    <span>Employees</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Sidebar Footer */}
      <SidebarFooter className="mt-auto border-t border-gray-300">
        <div className="flex items-center p-4">
          <Image
            src="/default-profile.png"
            alt="Profile"
            width={32}
            height={32}
            className="rounded-full"
          />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
