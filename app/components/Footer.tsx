import profileData from "@/src/data/profile.json";

export default function Footer() {
  const { name, company } = profileData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-white px-4 py-8 dark:border-neutral-800 dark:bg-neutral-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            © {currentYear} {name}
          </p>
          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-500">
            {company.name}
          </p>
        </div>
      </div>
    </footer>
  );
}


