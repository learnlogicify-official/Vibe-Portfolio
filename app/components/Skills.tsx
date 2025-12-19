import profileData from "@/src/data/profile.json";

export default function Skills() {
  const { skills } = profileData;

  return (
    <section
      id="skills"
      className="bg-neutral-50 px-4 py-20 dark:bg-neutral-800 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">
            Skills
          </h2>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
            Technologies and tools I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:scale-105 hover:border-neutral-300 hover:shadow-lg dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600"
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 to-neutral-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-neutral-800 dark:to-neutral-700" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="mb-3 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-100 transition-colors group-hover:bg-neutral-200 dark:bg-neutral-800 dark:group-hover:bg-neutral-700">
                    <svg
                      className="h-6 w-6 text-neutral-600 dark:text-neutral-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-base font-semibold text-neutral-900 transition-colors group-hover:text-neutral-700 dark:text-neutral-100 dark:group-hover:text-neutral-300">
                  {skill}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

