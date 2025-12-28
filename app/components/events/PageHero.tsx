interface PageHeroProps {
  title?: string;
}

export default function PageHero({ title = "Events and Workshops" }: PageHeroProps) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <h1 className="text-3xl font-bold leading-tight text-[var(--color-text-black)] md:text-4xl lg:text-5xl">
        {title}
      </h1>
      <div className="flex items-center">
        <svg
          className="h-7 w-7 text-[var(--color-primary-yellow)] md:h-8 md:w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
  );
}

