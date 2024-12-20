export default function PrimaryButton({
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center rounded-md px-6 py-2 text-white bg-[#F9A826] border-2 border-[#D84A05] shadow-md hover:bg-[#D84A05] hover:border-[#4F2E14] hover:shadow-lg transition-all duration-300 ${
                    disabled && "opacity-25"
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
