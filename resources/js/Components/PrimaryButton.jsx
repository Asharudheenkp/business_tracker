export default function PrimaryButton({
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={`inline-flex items-center rounded-md px-6 py-2 text-secondary bg-primary border-2 border-accent shadow-md hover:bg-accent hover:border-accent hover:shadow-lg transition-all duration-300 ${
                disabled ? "opacity-25 cursor-not-allowed" : ""
            } ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
