import { IInput } from "@/types/types"
import React from "react"
import { tv } from "tailwind-variants"

const inputVariants = tv({
  base: "w-full bg-white border rounded-lg px-4 py-3 text-sm placeholder-gray-700 text-gray-700 focus:outline-none focus:ring-2 focus:border-transparent transition-all",
  variants: {
    error: {
      true: "border-error focus:ring-[var(--color-error)]",
      false: "border-gray-200 focus:ring-green-500",
    },
  },
})

const Input = ({ className, error, label, id, labelStyle, ...props }: IInput) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label className={`block text-sm font-bold text-gray-700 ${labelStyle}`}>
          {label}
        </label>
      )}
      <input
        className={`${inputVariants({ error: !!error })} ${className ?? ""}`}
        id={id}
        {...props}
      />

      {error && (
        <span className="text-xs" style={{ color: "var(--color-error)" }}>
          {error}
        </span>
      )}
    </div>
  )
}

export default Input
