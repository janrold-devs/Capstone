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
  SidebarHeader
} from "@/components/ui/sidebar";

import {
  Gauge,
  Users,
  MonitorCheck,
  CupSoda,
  UtensilsCrossed,
  ChartSpline,
  ArrowLeftRight
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function AppSidebar() {


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
      <SidebarContent className={'bg-gray-100'}>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {/* Standard Items */}
              <SidebarHeader className={'font-medium'}>Dashboard</SidebarHeader>
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

              <SidebarHeader className={'font-medium'}>Inventory</SidebarHeader>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a
                    href="/products"
                    className="flex items-center gap-3 px-4 py-2 m-2  hover:bg-gray-700 rounded-md"
                  >
                    <CupSoda className="w-5 h-5" />
                    <span>Products</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a
                    href="/ingredients-materials"
                    className="flex items-center gap-3 px-4 py-2 m-2 hover:bg-gray-700 rounded-md"
                  >
                    <UtensilsCrossed className="w-5 h-5" />
                    <span>Ingredients & Materials</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a
                    href="/stock-in"
                    className="flex items-center gap-3 px-4 py-2 m-2 hover:bg-gray-700 rounded-md"
                  >
                    <MonitorCheck className="w-5 h-5" />
                    <span>Stock In</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a
                    href="/spoiled-damage"
                    className="flex items-center gap-3 px-4 py-2 m-2 hover:bg-gray-700 rounded-md"
                  >
                    <MonitorCheck className="w-5 h-5" />
                    <span>Spoiled & Damaged</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarHeader className={'font-medium'}>Reports</SidebarHeader>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a
                    href="/transactions"
                    className="flex items-center gap-3 px-4 py-2 m-2  hover:bg-gray-700 rounded-md"
                  >
                    <ArrowLeftRight className="w-5 h-5" />
                    <span>Transactions</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a
                    href="/sales"
                    className="flex items-center gap-3 px-4 py-2 m-2  hover:bg-gray-700 rounded-md"
                  >
                    <ChartSpline className="w-5 h-5" />
                    <span>Sales</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarHeader className={'font-medium'}>User Mangement</SidebarHeader>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a
                    href="/"
                    className="flex items-center gap-3 px-4 py-2 m-2  hover:bg-gray-700 rounded-md"
                  >
                    <Users className="w-5 h-5" />
                    <span>Users</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
