export const Footer = () => (
  <footer className="border-t border-neutral-200 bg-white">
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h3 className="text-lg font-semibold text-neutral-900">EduSwap Somalia</h3>
        <p className="mt-2 max-w-md text-sm text-neutral-500">
          A community-driven marketplace for exchanging textbooks, supplies, and learning electronics across Somalia.
        </p>
      </div>
      <div className="flex flex-col gap-2 text-sm text-neutral-500 sm:text-right">
        <span>© {new Date().getFullYear()} EduSwap Somalia.</span>
        <span>Empowering learners through affordable access to educational resources.</span>
      </div>
    </div>
  </footer>
);
