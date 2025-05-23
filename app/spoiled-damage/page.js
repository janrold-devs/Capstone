import React from "react";
import { cookies } from "next/headers";

import { AppSidebar } from "@/components/app-sidebar";
import Header from "@/components/header";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default async function Page() {
  const cookieStore = cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <main className="flex flex-col flex-1 min-h-screen">
        {/* Top bar with sidebar toggle and icons */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-300 w-full bg-gray-100">
          <SidebarTrigger />
          <Header />
        </div>

        {/* Main content area */}
        <div className="flex-1 p-4 ">
          <h1 className="text-2xl font-bold">Spoiled & Damage</h1>
          <p className="mt-2 text-gray-600">
            Welcome to your dashboard! Here you can manage your settings and view your data.
          </p>
        </div>
        
      </main>
    </SidebarProvider>
  );
}
