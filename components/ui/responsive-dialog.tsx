"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Drawer } from "vaul";
import { X } from "lucide-react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";

interface ResponsiveDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  /** Kolor akcentu nagłówka */
  accent?: "brand" | "gold";
}

export function ResponsiveDialog({
  open,
  onOpenChange,
  title,
  subtitle,
  children,
  accent = "brand",
}: ResponsiveDialogProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const accentText = accent === "gold" ? "text-gradient-gold" : "text-gradient-brand";

  const header = (
    <div className="mb-5">
      {subtitle && (
        <p className="mb-1 text-xs font-medium uppercase tracking-widest text-ink-faint">
          {subtitle}
        </p>
      )}
      <h3 className={cn("text-2xl font-bold tracking-tight sm:text-3xl", accentText)}>
        {title}
      </h3>
    </div>
  );

  if (isDesktop) {
    return (
      <Dialog.Root open={open} onOpenChange={onOpenChange}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out" />
          <Dialog.Content
            className="fixed left-1/2 top-1/2 z-50 max-h-[85vh] w-[92vw] max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl border border-border bg-card-2 p-7 shadow-2xl focus:outline-none"
            aria-describedby={undefined}
          >
            <Dialog.Title className="sr-only">{title}</Dialog.Title>
            {header}
            {children}
            <Dialog.Close className="absolute right-4 top-4 rounded-full p-2 text-ink-muted transition hover:bg-white/5 hover:text-ink">
              <X className="h-5 w-5" />
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    );
  }

  return (
    <Drawer.Root open={open} onOpenChange={onOpenChange}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm" />
        <Drawer.Content className="fixed inset-x-0 bottom-0 z-50 mt-24 flex max-h-[90vh] flex-col rounded-t-2xl border-t border-border bg-card-2 focus:outline-none">
          <div className="mx-auto mt-3 h-1.5 w-12 shrink-0 rounded-full bg-white/15" />
          <Drawer.Title className="sr-only">{title}</Drawer.Title>
          <div className="overflow-y-auto px-5 pb-10 pt-4">
            {header}
            {children}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
