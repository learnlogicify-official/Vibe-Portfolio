import profileData from "@/src/data/profile.json";

export default function About() {
  const { bio, company } = profileData;

  return (
    <section
      id="about"
      className="bg-white px-4 py-20 dark:bg-neutral-900 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">
            About
          </h2>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
            Learn more about my journey and mission
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* Bio Card */}
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 shadow-sm transition-shadow hover:shadow-md dark:border-neutral-800 dark:bg-neutral-800/50">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 dark:bg-neutral-100">
                  <svg
                    className="h-6 w-6 text-white dark:text-neutral-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-4 flex-1">
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                  Bio
                </h3>
                <p className="mt-3 text-base leading-7 text-neutral-600 dark:text-neutral-400">
                  {bio}
                </p>
              </div>
            </div>
          </div>

          {/* Company Card */}
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 shadow-sm transition-shadow hover:shadow-md dark:border-neutral-800 dark:bg-neutral-800/50">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 dark:bg-neutral-100">
                  <svg
                    className="h-6 w-6 text-white dark:text-neutral-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-4 flex-1">
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                  Company
                </h3>
                <div className="mt-3 space-y-2">
                  <div>
                    <p className="text-sm font-medium text-neutral-500 dark:text-neutral-500">
                      Company Name
                    </p>
                    <p className="mt-1 text-base text-neutral-900 dark:text-neutral-100">
                      {company.name}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-500 dark:text-neutral-500">
                      Platform
                    </p>
                    <p className="mt-1 text-base text-neutral-900 dark:text-neutral-100">
                      {company.platform}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-500 dark:text-neutral-500">
                      Slogan
                    </p>
                    <p className="mt-1 text-base text-neutral-600 dark:text-neutral-400">
                      {company.slogan}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

