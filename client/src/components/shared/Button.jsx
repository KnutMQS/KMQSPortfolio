const Button = ({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  ...props
}) => {
  const baseStyles =
    "m-2 font-semibold rounded-full transition ease-in-out duration-150";
  const variantStyles = {
    primary:
      "bg-bg border-2 border-violet-500 hover:bg-gray-200 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset-2 focus:ring-blue-600",
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-inset-2 focus:ring-gray-500",
    danger:
      "bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-inset-2 focus:ring-red-500",
  };
  const sizeStyles = {
    small: "px-2.5 py-1.5 text-xs",
    medium: "px-4 py-2 text-sm",
    large: "px-6 py-3 text-base",
  };
  const disabledStyles = "opacity-50 cursor-not-allowed";
  const classes = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    disabled ? disabledStyles : "",
  ]
    .join(" ")
    .trim();

  return (
    <button className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
