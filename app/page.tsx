// Home page component

import Link from "next/link";

export default function Home() {
    const links = [
        "https://www.instagram.com/gdgnsut/",
        "https://youtube.com",
        "https://instagram.com",
        "https://www.instagram.com/gdgnsut",
        "https://www.instagram.com/gdgnsut",
        "https://www.instagram.com/gdgnsut",
    ];
    return (

        // Main container (page background + padding)
        <main
            className="
        min-h-screen w-full
        bg-[url('/background.png')]   // page background image
        bg-cover bg-center bg-no-repeat
        px-6 lg:px-12 py-10
      "
        >

            {/* ------------ HEADING ------------ */}
            <section className="mb-10">
                <h1 className="text-6xl font-bold text-gray-900">
                    Take a look at our Feed
                </h1>

                <p className="mt-3 text-xl text-gray-600">
                    Follow us on{" "}
                    <a
                        href="https://instagram.com/GDGNSUT"
                        target="_blank"
                        className="text-blue-600 font-semibold hover:underline"
                    >
                        @GDGNSUT
                    </a>{" "}
                    and stay tuned to our upcoming events and announcements.
                </p>
            </section>

            {/* ------------ FILTERS (Search + Dropdown) ------------ */}
            <section className="mb-4 flex items-center gap-5">

                {/* Search input */}
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search"
                        className="
              w-72 rounded-2xl
              bg-emerald-100
              px-6 py-3 pr-12
              text-emerald-900 placeholder-emerald-700
              outline-none
              focus:ring-2 focus:ring-emerald-400
            "
                    />

                    {/* Search icon (positioned inside input) */}
                    <svg
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-emerald-700"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                </div>

                {/* Dropdown (Event types) */}
                <div className="relative">
                    <select
                        className="
              w-48 rounded-2xl
              bg-blue-100
              px-5 py-3 pr-10
              text-blue-900
              outline-none
              appearance-none
              focus:ring-2 focus:ring-blue-400
            "
                    >
                        <option>Event types</option>
                        <option>Workshops</option>
                        <option>Hackathons</option>
                        <option>Talks</option>
                    </select>

                    {/* Dropdown arrow icon */}
                    <svg
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-blue-700"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </div>
            </section>

            {/* ------------ FEED (Background + Grid) ------------ */}
            <section
                className="

          py-4
        "
            >

                {/* Grid wrapper (centers content) */}
                <div className="mx-auto max-w-screen-xl grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    {/* Render 6 grid items */}
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="flex justify-center">
                            <a
                                href={links[i]}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full max-w-sm"
                            >
                                <div
                                    className="
          w-full max-w-sm aspect-square
          rounded-2xl overflow-hidden
          border-3 border-blue-200
          hover:-translate-y-1 transition-all duration-300
          hover:shadow-[0_8px_30px_rgba(66,133,244,0.35)]
        "
                                >
                                    <img
                                        src="/grid.png"
                                        alt="Event"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </a>
                        </div>
                    ))}

                </div>
            </section>
        </main>
    );
}
