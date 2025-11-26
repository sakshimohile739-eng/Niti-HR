"use client";

import { ReactNode } from "react";

type ChatHeaderProps = {
  children?: ReactNode;
};

type ChatHeaderBlockProps = {
  children: ReactNode;
};

export function ChatHeader({ children }: ChatHeaderProps) {
  return (
    <div className="w-full max-w-3xl mx-auto px-5 pt-5">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold tracking-tight">
          NitiHR – HR Policy Assistant
        </h1>
        <p className="text-sm text-muted-foreground">
          Ask HR and Indian labour-law questions. I’ll generate draft policy
          templates and simple explanations. This is not legal advice; always
          have HR/legal review before using any policy.
        </p>
      </div>

      {children && (
        <div className="mt-4">
          {children}
        </div>
      )}
    </div>
  );
}

export function ChatHeaderBlock({ children }: ChatHeaderBlockProps) {
  return (
    <div className="flex items-center justify-between gap-3 mt-4">
      {children}
    </div>
  );
}
