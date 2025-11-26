"use client";

import { ReactNode } from "react";
import { AI_NAME } from "@/config";

type ChatHeaderProps = {
  children?: ReactNode;
};

export function ChatHeader({ children }: ChatHeaderProps) {
  return (
    <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b bg-background/80 backdrop-blur">
      <div>
        <h1 className="text-lg font-semibold">
          Niti HR Policy Assistant
        </h1>
        <p className="text-xs text-muted-foreground">
          Ask {AI_NAME} questions about Indian labour laws & HR policies.  
          This assistant is for educational help only and does not provide legal advice.
        </p>
      </div>
      {children && <div className="flex items-center gap-2">{children}</div>}
    </div>
  );
}

type ChatHeaderBlockProps = {
  children?: ReactNode;
};

export function ChatHeaderBlock({ children }: ChatHeaderBlockProps) {
  return (
    <div className="flex items-center gap-2">
      {children}
    </div>
  );
}
