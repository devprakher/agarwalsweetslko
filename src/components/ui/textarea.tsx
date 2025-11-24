import * as React from "react"

import { cn } from "@/libs/utils"


const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md [#e2e8f0] [#e2e8f0]-[ #e2e8f0] bg-background px-3 py-2 text-sm [ #e94560]-offset-background placeholder:text-[#f1f5f9]-[#333333] focus-visible:outline-none focus-visible:[ #e94560]-2 focus-visible:[ #e94560]-[ #e94560] focus-visible:[ #e94560]-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }

