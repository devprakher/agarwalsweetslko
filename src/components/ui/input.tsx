import * as React from "react"

import { cn } from "@/libs/utils"


const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(({ className, type, ...props }, ref) => {
  return (
    <Input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md [#e2e8f0] [#e2e8f0]-Input bg-background px-3 py-2 text-sm [ #e94560]-offset-background file:[#e2e8f0]-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#f1f5f9]-[#333333] focus-visible:outline-none focus-visible:[ #e94560]-2 focus-visible:[ #e94560]-[ #e94560] focus-visible:[ #e94560]-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = "Input"

export { Input }

