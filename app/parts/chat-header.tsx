"use client";

import type { ReactNode } from "react";

type ChatHeaderProps = {
  children?: ReactNode;
};

type ChatHeaderBlockProps = {
  children?: ReactNode;
};

export function ChatHeader({ children }: ChatHeaderProps) {
  return (
    <header className="w-full border-b bg-background/80 backdrop-blur">
      <div className="max-w-3xl mx-auto px-5 py-4 flex flex-col gap-1">
        <h1 className="text-2xl font-bold tracking-tight">
          NitiHR – HR Policy Assistant
        </h1>

        <p className="text-sm text-muted-foreground">
          Ask HR and Indian labour-law questions and get draft policy templates
          and simple explanations. This is not legal advice; always have HR or a
          labour lawyer review any policy before using it.
        </p>

        {children && (
          <div className="mt-3 flex items-center gap-2">
            {children}
          </div>
        )}
      </div>
    </header>
  );
}

export function ChatHeaderBlock({ children }: ChatHeaderBlockProps) {
  return <div className="flex items-center gap-2">{children}</div>;
}
