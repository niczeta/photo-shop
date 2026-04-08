import clsx from "clsx";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export const Button = ({
  text,
  onClick,
  className = "",
  variant = "primary",
  type = "button",
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition disabled:cursor-not-allowed disabled:opacity-50",
        {
          "border border-red-700/60 bg-red-700/15 text-red-100 hover:bg-red-700/25":
            variant === "primary",
          "border border-white/10 bg-white/5 text-white hover:border-red-700/50 hover:bg-red-700/10":
            variant === "secondary",
        },
        className
      )}
    >
      {text}
    </button>
  );
};