import React from "react";
import { tv } from "tailwind-variants";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: string;
  label?: string;
  id: string;
  labelStyle?:string;
}

const inputVariants = tv({
  base: "w-full bg-gray-50 border rounded-lg px-4 py-3 text-sm placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:border-transparent transition-all",
  variants: {
    error: {
      true: "border-[var(--color-error)] focus:ring-[var(--color-error)]",
      false: "border-gray-200 focus:ring-green-500",
    },
  },
});

const Input = ({ className, error, label, id, labelStyle, ...props }: InputProps) => {
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
  );
};

export default Input;
