import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode ;
  className?: string;
}

const Button = ({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) => {
  return (
    <>
      <button
        className={cn(
          className,
          "px-4 py-2 rounded font-medium transition-colors outline-none",
          variant === "primary"
            ? "bg-zinc-900 text-zinc-50 hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-300"
            : "bg-transparent border-2 border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-zinc-50 dark:border-zinc-50 dark:text-zinc-50 dark:hover:bg-zinc-50 dark:hover:text-zinc-900"
        )}
        {...props}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
