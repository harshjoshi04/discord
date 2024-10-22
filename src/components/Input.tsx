import { isStringEmptyOrNull } from "@/lib/shared";
import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface InputProp extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string;
}

const Input = forwardRef<HTMLInputElement, InputProp>(
  ({ type = "text", disabled, title = "", className, ...props }, ref) => {
    return (
      <div className="space-y-1">
        {!isStringEmptyOrNull(title) && (
          <p className="text-[14px] text-secondTextColor font-bold">
            {title.toLocaleUpperCase()} <sup className="text-red-600">*</sup>
          </p>
        )}
        <input
          type={type}
          className={twMerge(
            `bg-secondColor px-4 py-2   outline-none placeholder:text-MainColor placeholder:text-xs text-sm  border-MainColor border-opacity-50 disabled:opacity-65`,
            className
          )}
          ref={ref}
          disabled={disabled}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
