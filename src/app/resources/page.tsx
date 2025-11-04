const ResourcesPage = () => (
  <div className="mx-auto max-w-5xl px-6 py-16">
    <div className="space-y-3 text-center sm:text-left">
      <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600">Resource Library</span>
      <h1 className="text-3xl font-semibold text-neutral-900 sm:text-4xl">Guides for modern Somali classrooms.</h1>
      <p className="text-sm text-neutral-500 sm:text-base">
        Access free lesson plans, digital tools, and curriculum-aligned resources to elevate learning outcomes in your
        school or learning center.
      </p>
    </div>

    <div className="mt-12 space-y-8">
      <section>
        <h2 className="text-xl font-semibold text-neutral-900">Curriculum Guides</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {[
            {
              title: 'National Primary Curriculum Toolkit (Grades 1-8)',
              description: 'Lesson templates, assessment trackers, and Somali-language worksheets.',
            },
            {
              title: 'IGCSE & A-Level Revision Planner',
              description: 'Weekly planner, subject-specific revision checklists, and exam strategy tips.',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-neutral-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-neutral-900">{item.title}</h3>
              <p className="mt-2 text-sm text-neutral-500">{item.description}</p>
              <button
                type="button"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600"
              >
                Download PDF →
              </button>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-neutral-900">Digital Learning</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {[
            { title: 'Offline-first LMS toolkit', description: 'Deploy Moodle/Poe with low bandwidth configuration.' },
            { title: 'Coding clubs starter kit', description: 'Scratch and Python modules for Form 1-3 students.' },
            { title: 'Teacher digital upskilling', description: 'Guides for Google Classroom, Kahoot, and Canva.' },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-neutral-200 bg-white p-6">
              <h3 className="text-base font-semibold text-neutral-900">{item.title}</h3>
              <p className="mt-2 text-xs text-neutral-500">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8">
        <h2 className="text-xl font-semibold text-neutral-900">Training & Webinars</h2>
        <p className="mt-3 text-sm text-neutral-600">
          Join monthly webinars for teacher training, marketplace success stories, and tech adoption best practices.
        </p>
        <div className="mt-6 space-y-4 text-sm text-neutral-600">
          <p>• October: Building sustainable school book exchange programs</p>
          <p>• November: Leveraging Firebase analytics to understand learning resource demand</p>
          <p>• December: Integrating Google Classroom with EduSwap resource planning</p>
        </div>
      </section>
    </div>
  </div>
);

export default ResourcesPage;
