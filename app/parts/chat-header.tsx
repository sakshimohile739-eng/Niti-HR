"use client";

import type { ReactNode } from "react";
import Image from "next/image";

type ChatHeaderProps = {
  children?: ReactNode;
};

export function ChatHeader({ children }: ChatHeaderProps) {
  return (
    <header className="w-full border-b border-slate-200 bg-gradient-to-b from-[#fff7ec] to-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-4 md:flex-row md:items-start md:justify-between">
        {/* Left side: logo + text */}
        <div className="flex items-start gap-4">
          {/* Logo circle */}
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm border border-slate-200 overflow-hidden">
            <Image
              src="/logo.png"
              alt="Niti HR Policy Assistant logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>

          {/* Title + description + disclaimer */}
          <div className="space-y-2">
            <div>
              <h1 className="text-xl md:text-2xl font-semibold text-slate-900">
                NitiHR – Policy Assistant
              </h1>
              <p className="mt-1 text-sm text-slate-700 max-w-2xl">
                An AI assistant that helps Indian startups and small businesses
                draft HR policy templates and understand key Indian labour-law
                concepts in simple language.
              </p>
            </div>

            <ul className="mt-1 space-y-1 text-xs text-slate-700">
              <li>
                • Use it to get <span className="font-semibold">draft wording</span>,
                checklists and ideas – not final HR documents.
              </li>
              <li>
                • Outputs may be incomplete, outdated or wrong. They{" "}
                <span className="font-semibold">do not constitute legal advice</span>.
              </li>
              <li>
                • Always have a qualified HR professional or labour lawyer
                review any policy before you implement it.
              </li>
            </ul>
          </div>
        </div>

        {/* Right side: whatever children page.tsx passes (New HR question button etc.) */}
        {children && (
          <div className="md:mt-1 md:self-start">
            {children}
          </div>
        )}
      </div>
    </header>
  );
}
