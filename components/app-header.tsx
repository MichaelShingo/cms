"use client";

import { Bell, Search } from "lucide-react";

import type { User } from "@/lib/types";
import { Divider } from "@heroui/divider";
import { Button } from "@heroui/react";

type UserProps = {
  user: User | null;
};

export default function AppHeader({ user }: UserProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b px-6">
      <Divider
        orientation="vertical"
        className="mx-2 data-[orientation=vertical]:h-4"
      />
      <div className="flex flex-1 items-center justify-between">
        <h1 className="text-xl font-semibold">Welcome, {user?.name} </h1>
        <div className="flex items-center gap-4">
          <Button variant="bordered" size="sm">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
          <Button variant="bordered" size="sm">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Notifications</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
