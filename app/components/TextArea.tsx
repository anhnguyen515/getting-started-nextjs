import { twMerge } from "tailwind-merge";

type TextAreaVariants =
  | "primary"
  | "secondary"
  | "danger"
  | "success"
  | "warning";
type TextAreaLevels = "normal" | "outline" | "text";
type TextAreaSizes = "sm" | "md" | "lg";

interface TextAreaProps {
  variant?: TextAreaVariants;
  level?: TextAreaLevels;
  size?: TextAreaSizes;
  className?: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  readOnly?: boolean;
  maxLength?: number;
}

const TextArea = ({
  variant = "primary",
  level = "normal",
  size = "md",
  className,
  value,
  onChange,
  placeholder,
  readOnly,
  maxLength,
}: TextAreaProps) => {
  const sizeClasses = {
    sm: "p-1.5 text-sm",
    md: "p-2 text-md",
    lg: "p-2.5 text-lg",
  };

  const classes = twMerge(
    "block w-full h-full rounded-md focus:outline-none focus:ring-2 focus:ring-offset-0 transition ease-out duration-300",
    sizeClasses[size],
    {
      normal: {
        primary:
          "bg-blue-100 text-blue-900 placeholder-blue-600 focus:ring-blue-500 dark:bg-blue-900 dark:text-blue-100 dark:placeholder-blue-400 dark:focus:ring-blue-500",
        secondary:
          "bg-gray-100 text-gray-900 placeholder-gray-600 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:placeholder-gray-400 dark:focus:ring-gray-600",
        danger:
          "bg-red-100 text-red-900 placeholder-red-600 focus:ring-red-500 dark:bg-red-900 dark:text-red-100 dark:placeholder-red-400 dark:focus:ring-red-500",
        success:
          "bg-green-100 text-green-900 placeholder-green-600 focus:ring-green-500 dark:bg-green-900 dark:text-green-100 dark:placeholder-green-400 dark:focus:ring-green-500",
        warning:
          "bg-yellow-100 text-yellow-900 placeholder-yellow-600 focus:ring-yellow-500 dark:bg-yellow-900 dark:text-yellow-100 dark:placeholder-yellow-400 dark:focus:ring-yellow-500",
      },
      outline: {
        primary:
          "border border-blue-600 text-blue-900 placeholder-blue-600 focus:ring-blue-500 focus:ring-offset-0 dark:border-blue-500 dark:text-blue-100 dark:placeholder-blue-400 dark:focus:ring-blue-500",
        secondary:
          "border border-gray-600 text-gray-900 placeholder-gray-600 focus:ring-gray-300 focus:ring-offset-0 dark:border-gray-700 dark:text-gray-200 dark:placeholder-gray-400 dark:focus:ring-gray-600",
        danger:
          "border border-red-600 text-red-900 placeholder-red-600 focus:ring-red-500 focus:ring-offset-0 dark:border-red-500 dark:text-red-100 dark:placeholder-red-400 dark:focus:ring-red-500",
        success:
          "border border-green-600 text-green-900 placeholder-green-600 focus:ring-green-500 focus:ring-offset-0 dark:border-green-500 dark:text-green-100 dark:placeholder-green-400 dark:focus:ring-green-500",
        warning:
          "border border-yellow-600 text-yellow-900 placeholder-yellow-600 focus:ring-yellow-500 focus:ring-offset-0 dark:border-yellow-500 dark:text-yellow-100 dark:placeholder-yellow-400 dark:focus:ring-yellow-500",
      },
      text: {
        primary:
          "bg-transparent text-blue-900 placeholder-blue-600 focus:ring-0 dark:text-blue-100 dark:placeholder-blue-400",
        secondary:
          "bg-transparent text-gray-900 placeholder-gray-600 focus:ring-0 dark:text-gray-200 dark:placeholder-gray-400",
        danger:
          "bg-transparent text-red-900 placeholder-red-600 focus:ring-0 dark:text-red-100 dark:placeholder-red-400",
        success:
          "bg-transparent text-green-900 placeholder-green-600 focus:ring-0 dark:text-green-100 dark:placeholder-green-400",
        warning:
          "bg-transparent text-yellow-900 placeholder-yellow-600 focus:ring-0 dark:text-yellow-100 dark:placeholder-yellow-400",
      },
    }[level][variant],
    className
  );

  const textColorClasses = {
    primary: "text-blue-900/50 dark:text-blue-300/50",
    secondary: "text-gray-900/50 dark:text-gray-300/50",
    danger: "text-red-900/50 dark:text-red-300/50",
    success: "text-green-900/50 dark:text-green-300/50",
    warning: "text-yellow-900/50 dark:text-yellow-300/50",
  };

  const counterClasses = twMerge(
    "absolute bottom-1 right-2 text-xs",
    textColorClasses[variant]
  );

  return (
    <div className="relative w-full h-full">
      <textarea
        className={classes}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        readOnly={readOnly}
        maxLength={maxLength}
      />
      {!!value && (
        <div className={counterClasses}>
          {value.length}/{maxLength}
        </div>
      )}
    </div>
  );
};

export default TextArea;
