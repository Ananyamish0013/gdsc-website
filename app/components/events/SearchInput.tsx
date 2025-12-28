'use client';

interface SearchInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export default function SearchInput({
  placeholder = "Search",
  value,
  onChange
}: SearchInputProps) {
  return (
    <div className="relative flex items-center">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 pr-10 text-sm text-[var(--color-text-black)] placeholder:text-[var(--color-text-light-gray)] focus:border-[var(--color-primary-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-blue)] focus:ring-opacity-20"
      />
      <div className="absolute right-3 flex items-center">
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
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
}

