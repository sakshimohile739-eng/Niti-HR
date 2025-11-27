"use client";

import Image from "next/image";
import type { ReactNode } from "react";

type ChatHeaderProps = {
  children?: ReactNode;
};

type ChatHeaderBlockProps = {
  children?: ReactNode;
};

export function ChatHeader({ children }: ChatHeaderProps) {
  return (
    <header className="w-full rounded-2xl border border-slate-200 bg-white/95 backdrop-blur px-5 py-4 mb-4 shadow-sm">
      <div className="flex items-start gap-4">
        {/* Logo / icon */}
        <div className="h-12 w-12 rounded-full border border-slate-200 bg-white flex items-center justify-center shrink-0">
          {/* If you uploaded /public/logo.png it will show up here */}
          <Image
            src="/logo.png"
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
              An AI assistant that helps Indian startups and small businesses
              draft HR policy templates and understand key Indian labour-laws in simple language.
            </p>
          </div>

          <ul className="mt-1 text-xs md:text-xs text-slate-600 list-disc list-inside space-y-1">
