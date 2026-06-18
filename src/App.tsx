import Header from './components/Header'
import Section from './components/Section'
import data from './data'

function ProfileIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
      <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
    </svg>
  )
}

function EducationIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
      <path d="M10.362 1.093a.75.75 0 00-.724 0L2.523 5.018 10 9.143l7.477-4.125-7.115-3.925zM18 6.443l-7.25 4v8.25l6.862-3.786A.75.75 0 0018 14.25V6.443zm-8.75 12.25v-8.25l-7.25-4v7.807a.75.75 0 00.388.657l6.862 3.786z" />
    </svg>
  )
}

function SkillsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
      <path fillRule="evenodd" d="M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V7.621a1.5 1.5 0 00-.44-1.06l-4.12-4.122A1.5 1.5 0 0011.378 2H4.5zm2.25 8.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 3a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" clipRule="evenodd" />
    </svg>
  )
}

function ExperienceIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
      <path fillRule="evenodd" d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.666 2 10.54V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z" clipRule="evenodd" />
      <path d="M3 15.055v-.467c-.09.196-.164.403-.207.622C3.899 16.482 6.775 17.5 10 17.5c3.225 0 6.101-1.018 7.207-2.29a2.76 2.76 0 00-.207-.622v.467c0 .747-.483 1.446-1.254 1.674-1.702.504-3.542.77-5.746.77s-4.044-.266-5.746-.77A1.757 1.757 0 013 15.055z" />
    </svg>
  )
}

function ProjectsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
      <path fillRule="evenodd" d="M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V7.621a1.5 1.5 0 00-.44-1.06l-4.12-4.122A1.5 1.5 0 0011.378 2H4.5zm8.846 5.14a.75.75 0 01.014 1.06l-4.47 4.72a.75.75 0 01-1.08.008l-2.01-2.08a.75.75 0 011.073-1.04l1.473 1.524 3.94-4.162a.75.75 0 011.06-.03z" clipRule="evenodd" />
    </svg>
  )
}

function CertIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
      <path fillRule="evenodd" d="M10 2c-1.716 0-3.408.106-5.07.31C3.806 2.45 3 3.414 3 4.517V17.25a.75.75 0 001.075.676L10 15.082l5.925 2.844A.75.75 0 0017 17.25V4.517c0-1.103-.806-2.068-1.93-2.207A41.403 41.403 0 0010 2z" clipRule="evenodd" />
    </svg>
  )
}

function InterestsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
      <path d="M10.362 1.093a.75.75 0 00-.724 0L2.523 5.018 10 9.143l7.477-4.125-7.115-3.925zM18 6.443l-7.25 4v8.25l6.862-3.786A.75.75 0 0018 14.25V6.443zm-8.75 12.25v-8.25l-7.25-4v7.807a.75.75 0 00.388.657l6.862 3.786z" />
    </svg>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-4xl bg-white rounded-3xl shadow-lg border border-slate-200 p-6 sm:p-8 md:p-10 lg:p-12 resume-card">
        <button
          onClick={() => window.print()}
          className="no-print fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 text-sm px-4 py-2.5 rounded-xl shadow-lg border border-slate-200 transition-all hover:shadow-xl hover:-translate-y-0.5"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M5 2.5A2.5 2.5 0 017.5 0h5A2.5 2.5 0 0115 2.5v1.25h1.5A2.5 2.5 0 0119 6.25v5.5a2.5 2.5 0 01-2.5 2.5H15v1.25A2.5 2.5 0 0112.5 18h-5A2.5 2.5 0 015 15.5V14.25H3.5A2.5 2.5 0 011 11.75v-5.5A2.5 2.5 0 013.5 3.75H5V2.5zm2.5 0h5v1.25h-5V2.5zM5 8.75a.75.75 0 000 1.5h.01a.75.75 0 000-1.5H5z" clipRule="evenodd" />
          </svg>
          Save as PDF
        </button>

        <Header name={data.name} title={data.title} contact={data.contact} />

        <main>
          <Section title="Profile" icon={<ProfileIcon />}>
            <p className="text-slate-700 leading-relaxed text-[15px]">{data.profile}</p>
          </Section>

          <Section title="Education" icon={<EducationIcon />}>
            {data.education.map((edu) => (
              <div key={edu.degree} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 rounded-xl border border-slate-200 bg-slate-50/50 p-4">
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-slate-900">{edu.degree}</h3>
                  <p className="text-sm text-slate-600">{edu.school}</p>
                </div>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider whitespace-nowrap">{edu.period}</span>
              </div>
            ))}
          </Section>

          <Section title="Technical Skills" icon={<SkillsIcon />}>
            <div className="space-y-5">
              {data.technicalSkills.map((group) => (
                <div key={group.category}>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2.5">{group.category}</h4>
                  <ul className="flex flex-wrap gap-2">
                    {group.skills.map((s) => (
                      <li
                        key={s}
                        className="bg-slate-50 px-3.5 py-2 rounded-lg text-sm text-slate-800 font-medium border border-slate-200/70 hover:border-blue-300 hover:bg-blue-50/50 transition-colors"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Experience" icon={<ExperienceIcon />}>
            <div className="relative pl-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
              {data.experience.map((exp, i) => (
                <div key={exp.company + exp.period} className="relative pb-8 last:pb-0">
                  <span className="absolute -left-[21px] top-1.5 h-3 w-3 rounded-full border-2 border-blue-500 bg-white" />
                  <div>
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">{exp.period}</span>
                    {i === 0 && (
                      <span className="ml-2 inline-flex items-center rounded-full bg-blue-600 px-2 py-0.5 text-[10px] font-bold text-white uppercase leading-tight">
                        Now
                      </span>
                    )}
                    <h3 className="text-lg font-bold text-slate-900 mt-0.5">{exp.company}</h3>
                    <p className="text-sm text-slate-500 font-medium mb-2">{exp.role}</p>
                    <ul className="space-y-1.5">
                      {exp.details.map((d) => (
                        <li key={d} className="text-sm text-slate-600 leading-relaxed flex items-start gap-2">
                          <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-slate-300" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Projects" icon={<ProjectsIcon />}>
            <div className="grid gap-4 sm:grid-cols-2">
              {data.projects.map((p) => (
                <div key={p.title} className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 hover:border-blue-200 hover:bg-blue-50/30 transition-colors">
                  <h3 className="font-bold text-sm text-slate-900 mb-2.5">{p.title}</h3>
                  <ul className="space-y-1.5">
                    {p.items.map((it) => (
                      <li key={it.text} className="text-sm leading-relaxed flex items-start gap-2">
                        <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-blue-400" />
                        {it.url ? (
                          <a href={it.url} target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-800 underline underline-offset-2 decoration-blue-300">
                            {it.text}
                          </a>
                        ) : (
                          <span className="text-slate-600">{it.text}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Certifications & Training" icon={<CertIcon />}>
            <div className="grid gap-3 sm:grid-cols-2">
              {data.certifications.map((c) => (
                <div key={c.title} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <h3 className="font-bold text-sm text-slate-900 mb-2">{c.title}</h3>
                  <ul className="flex flex-wrap gap-1.5">
                    {c.items.map((it) => (
                      <li key={it} className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Interests" icon={<InterestsIcon />}>
            <ul className="flex flex-wrap gap-2">
              {data.interests.map((i) => (
                <li
                  key={i}
                  className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700 font-medium hover:bg-slate-200 transition-colors"
                >
                  {i}
                </li>
              ))}
            </ul>
          </Section>
        </main>
      </div>
    </div>
  )
}
