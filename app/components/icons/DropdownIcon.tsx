type DropdownIconProps = {
    className?: string;
};

export function DropdownIcon({ className = "" }: DropdownIconProps) {
    return (
        <svg
            className={className}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
        >
            <polyline points="6 9 12 15 18 9" />
        </svg>
    );
}
