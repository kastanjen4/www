"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
} from "@/components/ui/sheet";
import { navLinks } from "@/components/ui/nav-links";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          aria-label="Open menu"
          className="relative z-50"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="p-0 w-80 max-w-[85vw] flex flex-col h-full"
      >
        <SheetHeader className="flex flex-row items-center justify-between border-b p-6">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Building2 className="h-5 w-5 text-primary" />
            </div>
            <span className="font-bold">Kastanjen 4</span>
          </div>
        </SheetHeader>
        <nav className="flex-1 p-6">
          <div className="space-y-2">
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 px-4 py-3 text-sm font-medium hover:text-primary transition-colors rounded-lg hover:bg-accent"
                >
                  <IconComponent className="h-5 w-5" />
                  {link.text}
                </Link>
              );
            })}
          </div>
        </nav>
        <SheetFooter className="border-t bg-muted/30 p-6">
          <div className="text-center space-y-2 w-full">
            <p className="text-sm font-medium">BRF Kastanjen 4</p>
            <p className="text-xs text-muted-foreground">
              Almbacksgatan 16, Malmö
            </p>
            <Link
              href="mailto:styrelsen@brfkastanjen4.se"
              className="text-xs text-primary hover:underline"
            >
              styrelsen@brfkastanjen4.se
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
