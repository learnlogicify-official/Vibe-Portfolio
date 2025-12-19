import Link from "next/link";
import profileData from "@/src/data/profile.json";

export default function Hero() {
  const { name, role, tagline } = profileData;

  return (
    <section className="relative flex min-h-screen items-center justify-center bg-gradient-to-b from-neutral-50 to-white px-4 py-20 dark:from-neutral-900 dark:to-neutral-800 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        {/* Name */}
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-5xl md:text-6xl lg:text-7xl">
          {name}
        </h1>

        {/* Role */}
        <p className="mt-6 text-lg font-medium text-neutral-600 dark:text-neutral-400 sm:text-xl md:text-2xl">
          {role}
        </p>

        {/* Tagline */}
        <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-500 dark:text-neutral-500 sm:text-lg md:text-xl">
          {tagline}
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <Link
            href="#projects"
            className="w-full rounded-full bg-neutral-900 px-8 py-3 text-base font-semibold text-white transition-all hover:bg-neutral-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 sm:w-auto"
          >
            View Projects
          </Link>
          <Link
            href="#contact"
            className="w-full rounded-full border-2 border-neutral-900 bg-transparent px-8 py-3 text-base font-semibold text-neutral-900 transition-all hover:bg-neutral-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 dark:border-neutral-100 dark:text-neutral-100 dark:hover:bg-neutral-100 dark:hover:text-neutral-900 sm:w-auto"
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}

