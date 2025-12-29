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
  const colors = {
    bg: 'var(--color-light-red)',
    text: 'var(--color-dark-red)',
  };

  return (
    <div className="relative flex items-center">
      <style>{`
        .search-input-placeholder::placeholder {
          color: ${colors.text};
          opacity: 1;
        }
      `}</style>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="search-input-placeholder w-full rounded-full border-0 font-medium px-4 py-2.5 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-opacity-100"
        style={{ 
          backgroundColor: colors.bg, 
          color: colors.text,
        }}
      />
      <div className="absolute right-3 flex items-center">
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
          style={{ color: colors.text }}
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

