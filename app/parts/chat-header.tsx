"use client";

import Image from "next/image";
import type { ReactNode } from "react";

type ChatHeaderProps = {
  children?: ReactNode;
};

type ChatHeaderBlockProps = {
  children?: ReactNode;
  className?: string;
};

export function ChatHeader({ children }: ChatHeaderProps) {
  return (
    <header className="w-full rounded-2xl border border-slate-200 bg-white/95 backdrop-blur px-5 py-4 mb-4 shadow-sm">
      <div className="flex items-start gap-4">
        {/* Logo */}
        <div className="h-12 w-12 rounded-full border border-slate-200 bg-white flex items-center justify-center shrink-0">
          <Image
            src="/logo.png" // make sure this file exists in /public
            alt="NitiHR – Policy Assistant"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>

        {/* Text content */}
        <div className="flex-1 space-y-2">
          <div>
            <h1 className="text-xl md:text-2xl font-semibold text-slate-900">
              NitiHR – Policy Assistant
            </h1>
            <p className="mt-1 text-sm text-slate-600">
              An AI assistant that helps Indian startups and small businesses draft HR
              policy templates and understand key Indian labour-law concepts in simple
              language.
            </p>
          </div>

          <ul className="mt-1 text-xs md:text-xs text-slate-600 list-disc list-inside space-y-1">
            <li>
              Use it to get <strong>draft wording</strong>, checklists and ideas — not
              final HR documents.
            </li>
            <li>
              Outputs may be incomplete, outdated or wrong.{" "}
              <strong>They do not constitute legal advice.</strong>
            </li>
            <li>
              Always have a qualified HR professional or Company Secretary review any
              policy before you implement it.
            </li>
          </ul>

          {children ? (
            <div className="pt-2 flex flex-wrap items-center gap-3">
              {children}
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}

export function ChatHeaderBlock({
  children,
  className = "",
}: ChatHeaderBlockProps) {
  return (
    <div className={`inline-flex flex-wrap items-center gap-3 ${className}`}>
      {children}
    </div>
  );
}

export default ChatHeader;
