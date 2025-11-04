const CommunityPage = () => (
  <div className="mx-auto max-w-5xl px-6 py-16">
    <div className="space-y-3 text-center sm:text-left">
      <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600">
        Community Initiatives
      </span>
      <h1 className="text-3xl font-semibold text-neutral-900 sm:text-4xl">
        Learning thrives when we collaborate.
      </h1>
      <p className="text-sm text-neutral-500 sm:text-base">
        EduSwap Somalia supports grassroots educational drives, school book banks, and teacher-led study circles. Join a
        program or start your own initiative using the resources below.
      </p>
    </div>

    <div className="mt-12 grid gap-6 sm:grid-cols-2">
      {[
        {
          title: 'School Book Bank Toolkit',
          description:
            'Launch a pop-up book bank in your district with poster templates, volunteer guide, and donation tracking sheet.',
          href: 'https://docs.google.com',
        },
        {
          title: 'STEM Sisters Mentorship',
          description:
            'Connect girls interested in STEM with mentors across Somalia and diaspora professionals for monthly sessions.',
          href: 'https://docs.google.com',
        },
        {
          title: 'Community Tutoring Playbook',
          description:
            'Run evening study circles for national exams with facilitator guides, attendance tracker, and WhatsApp templates.',
          href: 'https://docs.google.com',
        },
        {
          title: 'University Prep Cohort',
          description:
            'Structured 8-week curriculum to help Form 4 graduates transition into university-level expectations.',
          href: 'https://docs.google.com',
        },
      ].map((resource) => (
        <a
          key={resource.title}
          href={resource.href}
          className="flex flex-col gap-4 rounded-2xl border border-neutral-200 bg-white p-6 transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg"
        >
          <div>
            <h2 className="text-lg font-semibold text-neutral-900">{resource.title}</h2>
            <p className="mt-2 text-sm text-neutral-500">{resource.description}</p>
          </div>
          <span className="text-sm font-semibold text-emerald-600">Download kit →</span>
        </a>
      ))}
    </div>
  </div>
);

export default CommunityPage;
