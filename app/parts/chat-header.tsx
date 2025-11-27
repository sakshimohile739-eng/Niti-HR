"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { AI_NAME } from "@/config";

type ChatHeaderProps = {
  children?: ReactNode;
};

export function ChatHeader({ children }: ChatHeaderProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-3 px-4 py-3">
        {/* Left: Logo + title */}
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 shrink-0">
            <Image
              src="/logo.png"
              alt="Niti HR Policy Assistant logo"
              fill
              className="rounded-full border border-slate-200 bg-slate-50 object-contain"
              priority
            />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <h1 className="text-sm font-semibold text-slate-900 sm:text-base">
                {AI_NAME}
              </h1>
              <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
                Beta
              </span>
            </div>
            <p className="text-[11px] text-slate-500 sm:text-xs">
              India-focused HR & labour policy helper for startups.
              Not a substitute for legal advice.
            </p>
          </div>
        </div>

        {/* Right: optional extra blocks (if you use them) */}
        {children && (
          <div className="hidden shrink-0 sm:block">
            {children}
          </div>
        )}
      </div>
    </header>
  );
}

export function ChatHeaderBlock({ children }: ChatHeaderProps) {
  return (
    <div className="flex items-center gap-2 text-xs text-slate-500">
      {children}
    </div>
  );
}

