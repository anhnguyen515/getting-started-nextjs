import React from "react";
import { twMerge } from "tailwind-merge";

interface RadioInputProps {
  name: string;
  options: { label: string; value: string }[];
  selectedValue: string;
  onChange: (value: string) => void;
  variant?: "primary" | "secondary" | "danger" | "success" | "warning";
  level?: "normal" | "outline" | "text";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const RadioInput: React.FC<RadioInputProps> = ({
  name,
  options,
  selectedValue,
  onChange,
  variant = "primary",
  level = "normal",
  size = "md",
  className,
}) => {
  const sizeClasses = {
    sm: "p-1.5 text-sm",
    md: "p-2 text-md",
    lg: "p-2.5 text-lg",
  };
  const textSizes = {
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg",
  };

  const baseClasses =
    "rounded-full focus:outline-none transition ease-out duration-300";

  const variantClasses = {
    normal: {
      primary:
        "bg-blue-100 text-blue-900 focus:ring-blue-500 hover:bg-blue-200 active:bg-blue-300",
      secondary:
        "bg-gray-100 text-gray-900 focus:ring-gray-300 hover:bg-gray-200 active:bg-gray-300",
      danger:
        "bg-red-100 text-red-900 focus:ring-red-500 hover:bg-red-200 active:bg-red-300",
      success:
        "bg-green-100 text-green-900 focus:ring-green-500 hover:bg-green-200 active:bg-green-300",
      warning:
        "bg-yellow-100 text-yellow-900 focus:ring-yellow-500 hover:bg-yellow-200 active:bg-yellow-300",
    },
    outline: {
      primary:
        "border border-blue-600 text-blue-900 focus:ring-blue-500 hover:bg-blue-50 active:bg-blue-100",
      secondary:
        "border border-gray-600 text-gray-900 focus:ring-gray-300 hover:bg-gray-50 active:bg-gray-100",
      danger:
        "border border-red-600 text-red-900 focus:ring-red-500 hover:bg-red-50 active:bg-red-100",
      success:
        "border border-green-600 text-green-900 focus:ring-green-500 hover:bg-green-50 active:bg-green-100",
      warning:
        "border border-yellow-600 text-yellow-900 focus:ring-yellow-500 hover:bg-yellow-50 active:bg-yellow-100",
    },
    text: {
      primary:
        "bg-transparent text-blue-900 focus:ring-0 hover:text-blue-700 active:text-blue-500",
      secondary:
        "bg-transparent text-gray-900 focus:ring-0 hover:text-gray-700 active:text-gray-500",
      danger:
        "bg-transparent text-red-900 focus:ring-0 hover:text-red-700 active:text-red-500",
      success:
        "bg-transparent text-green-900 focus:ring-0 hover:text-green-700 active:text-green-500",
      warning:
        "bg-transparent text-yellow-900 focus:ring-0 hover:text-yellow-700 active:text-yellow-500",
    },
  };

  return (
    <div className="flex flex-col">
      {options.map((option) => (
        <label
          key={option.value}
          className="flex items-center mb-2 cursor-pointer"
        >
          <div className="relative">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={() => onChange(option.value)}
              className="sr-only"
            />
            <div
              className={twMerge(
                "w-4 h-4 flex items-center justify-center",
                baseClasses,
                sizeClasses[size],
                variantClasses[level][variant],
                className
              )}
            >
              {selectedValue === option.value && (
                <div>
                  <div className="w-2.5 h-2.5 bg-current rounded-full"></div>
                </div>
              )}
            </div>
          </div>
          <span className={twMerge("ml-2", textSizes[size])}>
            {option.label}
          </span>
        </label>
      ))}
    </div>
  );
};

export default RadioInput;
