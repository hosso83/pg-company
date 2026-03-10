"use client";

interface AdminInlineTextProps {
  value: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export function AdminInlineText({
  value,
  className,
  as = "p",
}: AdminInlineTextProps) {
  const Tag = as;

  return <Tag className={className}>{value}</Tag>;
}
