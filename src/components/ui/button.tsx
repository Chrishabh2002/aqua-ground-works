import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 shadow-soft",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:scale-105",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:scale-105",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:scale-105 shadow-soft",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:scale-105",
        link: "text-primary underline-offset-4 hover:underline hover:scale-105",
        hero: "bg-gradient-to-r from-primary via-warning to-primary bg-[length:200%_100%] text-primary-foreground shadow-glow hover:bg-[position:100%_0%] hover:scale-105 active:scale-95 font-semibold rounded-full px-8 py-4 text-lg",
        "secondary-hero": "bg-transparent border-2 border-white/30 text-white backdrop-blur-sm hover:bg-white/20 hover:border-white hover:scale-105 rounded-full px-8 py-4 text-lg font-semibold",
        service: "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:scale-105 shadow-soft rounded-xl px-6 py-3 font-medium",
        contact: "bg-gradient-to-r from-primary to-warning text-white hover:from-primary/90 hover:to-warning/90 hover:scale-105 shadow-medium rounded-xl font-semibold"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-12 rounded-lg px-8 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
