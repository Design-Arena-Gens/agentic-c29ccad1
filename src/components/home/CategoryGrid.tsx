const categories = [
  {
    title: 'Textbooks',
    description: 'Curriculum-aligned books for primary, secondary, and university levels.',
    href: '/listings?category=textbooks',
  },
  {
    title: 'Supplies',
    description: 'School bags, stationery bundles, and art essentials for students.',
    href: '/listings?category=supplies',
  },
  {
    title: 'Educational Electronics',
    description: 'Laptops, tablets, calculators, and e-learning devices.',
    href: '/listings?category=electronics',
  },
  {
    title: 'Tutoring & Services',
    description: 'Find study groups, tutors, and digital learning resources.',
    href: '/listings?category=services',
  },
];

export const CategoryGrid = () => (
  <section className="mx-auto max-w-6xl px-6 py-16">
    <div className="mb-10 flex flex-col gap-2 text-center">
      <h2 className="text-3xl font-semibold text-neutral-900 sm:text-4xl">Discover learning essentials</h2>
      <p className="text-sm text-neutral-500 sm:text-base">
        Browse curated categories designed for students, parents, and educators across Somalia.
      </p>
    </div>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {categories.map((category) => (
        <a
          key={category.title}
          href={category.href}
          className="flex flex-col gap-3 rounded-2xl border border-neutral-200 bg-white p-6 text-left transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg"
        >
          <h3 className="text-lg font-semibold text-neutral-900">{category.title}</h3>
          <p className="text-sm text-neutral-500">{category.description}</p>
          <span className="text-sm font-semibold text-emerald-600">Browse {category.title} →</span>
        </a>
      ))}
    </div>
  </section>
);
