import React, { forwardRef, useState } from "react";

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
  type?: "text" | "password";
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      value,
      onChange,
      label,
      placeholder,
      helperText,
      errorMessage,
      disabled,
      invalid,
      variant = "outlined",
      size = "md",
      type = "text",
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const baseStyles =
      "w-full rounded-lg focus:outline-none focus:ring-2 transition";
    const variantStyles = {
      outlined: "border border-gray-300 focus:ring-blue-500",
      filled: "bg-gray-100 border border-transparent focus:ring-blue-500",
      ghost: "bg-transparent border-b border-gray-300 focus:ring-blue-500",
    };
    const sizeStyles = {
      sm: "px-2 py-1 text-sm",
      md: "px-3 py-2 text-base",
      lg: "px-4 py-3 text-lg",
    };

    return (
      <div className="flex flex-col gap-1 w-full">
        {label && (
          <label className="text-sm font-medium text-gray-700">{label}</label>
        )}
        <div className="relative">
          <input
            ref={ref}
            type={type === "password" && showPassword ? "text" : type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            aria-invalid={invalid}
            className={`
              ${baseStyles} 
              ${variantStyles[variant]} 
              ${sizeStyles[size]} 
              ${invalid ? "border-red-500" : ""} 
              ${disabled ? "opacity-50 cursor-not-allowed" : ""}
            `}
          />
          {type === "password" && (
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          )}
        </div>
        {helperText && !invalid && (
          <p className="text-xs text-gray-500">{helperText}</p>
        )}
        {invalid && errorMessage && (
          <p className="text-xs text-red-500">{errorMessage}</p>
        )}
      </div>
    );
  }
);
