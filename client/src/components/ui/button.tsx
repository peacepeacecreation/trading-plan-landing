import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  `
    flex 
    items-center 
    justify-center 
    gap-[10px] 
    px-[20px] 
    py-[4px] 
    h-[34px] 
    bg-white 
    text-black 
    font-ubuntu 
    font-medium 
    text-[16px] 
    leading-[18px] 
    transition-colors 
    duration-150 
    focus-visible:outline-none 
    focus-visible:ring-2 
    focus-visible:ring-blue-500 
    focus-visible:ring-offset-2 
    disabled:pointer-events-none 
    disabled:opacity-50
  `,
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",

        primary: `
          bg-white 
          text-black 
          font-ubuntu 
          font-medium 
          text-[16px] 
          leading-[18px] 
          px-[20px] 
          py-[4px] 
          h-[34px] 
          transition-colors 
          duration-150 
          focus-visible:outline-none 
          focus-visible:ring-2 
          focus-visible:ring-blue-500 
          focus-visible:ring-offset-2 
          disabled:pointer-events-none 
          disabled:opacity-50 
          active:text-[#878787]
        `,

        cta: `
          relative
          flex
          flex-row
          justify-center
          items-center
          px-[20px]
          py-6
          gap-[10px]
          bg-white
          font-tektur
          font-semibold
          text-[20px]
          leading-[26px]
          text-center
          uppercase
          text-black
          transition-all
          duration-300
          ease-out
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-blue-500
          focus-visible:ring-offset-2
          disabled:pointer-events-none
          disabled:opacity-50
          hover:after:absolute
          hover:after:inset-0
          hover:after:bg-[#6281BB]
          hover:after:translate-x-2
          hover:after:translate-y-2
          hover:after:z-[-1]
          hover:after:content-['']
          hover:-translate-x-1
          hover:-translate-y-1
          [font-family:'Tektur',sans-serif]
        `,
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
