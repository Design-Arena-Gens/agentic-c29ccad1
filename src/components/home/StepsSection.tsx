const steps = [
  {
    title: 'Create your account',
    description: 'Sign in with Google or email to unlock selling, saved searches, and secure messaging.',
  },
  {
    title: 'List or find items',
    description: 'Post textbooks and supplies in minutes, or browse region-specific recommendations.',
  },
  {
    title: 'Coordinate safely',
    description: 'Message verified sellers, pick your preferred delivery, and leave helpful reviews.',
  },
];

export const StepsSection = () => (
  <section className="mx-auto max-w-6xl px-6 py-20">
    <div className="grid gap-12 lg:grid-cols-2">
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">How EduSwap Works</span>
        <h2 className="mt-4 text-3xl font-semibold text-neutral-900 sm:text-4xl">
          Built for students, parents, and teachers to collaborate.
        </h2>
        <p className="mt-4 text-base text-neutral-600">
          Our marketplace ensures affordability and trust by combining identity verification, localized discovery, and
          community-driven reviews.
        </p>
        <div className="mt-8 grid gap-6">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-2xl border border-neutral-200 bg-white p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-lg font-semibold text-emerald-600">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900">{step.title}</h3>
                  <p className="mt-2 text-sm text-neutral-600">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center gap-6 rounded-3xl border border-emerald-100 bg-emerald-50 p-8">
        <h3 className="text-2xl font-semibold text-neutral-900">Marketplace safeguards</h3>
        <ul className="space-y-4 text-sm text-neutral-600">
          <li>• Google-backed authentication and optional school email verification</li>
          <li>• Trusted seller badges for community organizations and bookstores</li>
          <li>• Region-aware pricing insights to keep trades fair and accessible</li>
          <li>• In-app dispute guidance and safety checklist for meetups</li>
        </ul>
      </div>
    </div>
  </section>
);
