'use client';

interface FilterDropdownProps {
  label: string;
  options?: string[];
  highlighted?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}

export default function FilterDropdown({
  label,
  options = [],
  highlighted = false,
  value,
  onChange
}: FilterDropdownProps) {
  return (
    <div className="relative flex items-center">
      <select
        value={value || ''}
        onChange={(e) => onChange?.(e.target.value)}
        className={`w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2.5 pr-10 text-sm text-[var(--color-text-black)] focus:border-[var(--color-primary-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-blue)] focus:ring-opacity-20 ${
          highlighted
            ? 'border-[var(--color-primary-green)] bg-[var(--color-primary-green)] bg-opacity-10'
            : ''
        }`}
      >
        <option value="" disabled>
          {label}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute right-3 flex items-center">
        <svg
          className="h-5 w-5 text-[var(--color-text-gray)]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}

