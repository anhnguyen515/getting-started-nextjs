import { twMerge } from "tailwind-merge";

type ButtonVariants =
  | "primary"
  | "secondary"
  | "danger"
  | "success"
  | "warning";

type ButtonLevels = "normal" | "outline" | "text";
type ButtonSizes = "sm" | "md" | "lg"; // Added sizes

interface ButtonProps {
  variant?: ButtonVariants;
  level?: ButtonLevels;
  size?: ButtonSizes; // Added size prop
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({
  variant = "primary",
  level = "normal",
  size = "md", // Default size
  className,
  children,
  onClick,
}: ButtonProps) => {
  const sizeClasses = {
    sm: "p-1.5 text-sm",
    md: "p-2 text-md",
    lg: "p-2.5 text-lg",
  };

  const classes = twMerge(
    "inline-flex items-center justify-center rounded-md font-medium focus:ring-2 focus:ring-offset-0 focus:ring-offset-white dark:focus:ring-offset-dark transition ease-out duration-300 cursor-pointer",
    sizeClasses[size], // Apply size classes
    {
      normal: {
        primary:
          "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-500",
        secondary:
          "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:focus:ring-gray-600",
        danger:
          "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-500",
        success:
          "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-500",
        warning:
          "bg-yellow-600 text-white hover:bg-yellow-700 focus:ring-yellow-500 dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:focus:ring-yellow-500",
      },
      outline: {
        primary:
          "border border-blue-600 text-blue-600 hover:bg-blue-600/20 focus:ring-blue-500 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-600/20 dark:focus:ring-blue-500",
        secondary:
          "border border-gray-100 text-gray-800 hover:bg-gray-800/20 focus:ring-gray-300 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800/20 dark:focus:ring-gray-600",
        danger:
          "border border-red-600 text-red-600 hover:bg-red-600/20 focus:ring-red-500 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-600/20 dark:focus:ring-red-500",
        success:
          "border border-green-600 text-green-600 hover:bg-green-600/20 focus:ring-green-500 dark:border-green-500 dark:text-green-500 dark:hover:bg-green-600/20 dark:focus:ring-green-500",
        warning:
          "border border-yellow-600 text-yellow-600 hover:bg-yellow-600/20 focus:ring-yellow-500 dark:border-yellow-500 dark:text-yellow-500 dark:hover:bg-yellow-600/20 dark:focus:ring-yellow-500",
      },
      text: {
        primary:
          "text-blue-600 hover:bg-blue-600/15 focus:ring-blue-500 dark:text-blue-500 dark:hover:bg-blue-600/15 dark:focus:ring-blue-500",
        secondary:
          "text-gray-800 hover:bg-gray-800/15 focus:ring-gray-300 dark:text-gray-200 dark:hover:bg-gray-800/15 dark:focus:ring-gray-600",
        danger:
          "text-red-600 hover:bg-red-600/15 focus:ring-red-500 dark:text-red-500 dark:hover:bg-red-600/15 dark:focus:ring-red-500",
        success:
          "text-green-600 hover:bg-green-600/15 focus:ring-green-500 dark:text-green-500 dark:hover:bg-green-600/15 dark:focus:ring-green-500",
        warning:
          "text-yellow-600 hover:bg-yellow-600/15 focus:ring-yellow-500 dark:text-yellow-500 dark:hover:bg-yellow-600/15 dark:focus:ring-yellow-500",
      },
    }[level][variant],
    className
  );

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
