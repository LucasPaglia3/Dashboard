import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-default",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        espera:
          "border-transparent bg-red-200 border border-red-300 text-red-700 hover:bg-red-300",
        bobinando:
          "border-transparent bg-yellow-200 border border-yellow-300 text-yellow-700 hover:bg-yellow-300/80",
        terminado:
          "border-transparent bg-green-200 border border-green-300 text-green-700 hover:bg-green-300/80",
        entregado:
          "border-transparent bg-[#02af77] border-1 border-green-700 text-green-200 hover:bg-green-700/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
