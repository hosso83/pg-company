import { JSX } from "react";

export default function Separator({
  orientation = "horizontal",
  className = "",
}: {
  orientation?: "horizontal" | "vertical";
  className?: string;
}): JSX.Element {
  return (
    <div
      className={
        orientation === "vertical"
          ? `w-px h-full bg-white/10 mx-4 ${className}`
          : `h-px w-full bg-white/10 my-4 ${className}`
      }
      aria-orientation={orientation}
      role="separator"
    />
  );
}
