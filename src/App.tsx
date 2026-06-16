import Header from './components/Header'
import Section from './components/Section'
import data from './data'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl sm:max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 sm:p-8 md:p-10 lg:p-12 overflow-hidden">
        <Header name={data.name} contact={data.contact} />

        <main className="space-y-8 sm:space-y-10">
          <Section title="Profile">
            <p className="text-slate-700 leading-relaxed">{data.profile}</p>
          </Section>

          <Section title="Technical Skills">
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 list-none p-0 m-0">
              {data.technicalSkills.map((s) => (
                <li key={s} className="bg-slate-50 px-4 py-3 rounded-2xl text-sm text-slate-900 font-medium border border-slate-200 hover:shadow-lg transition-shadow duration-200">
                  {s}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Experience">
            {data.experience.map((exp) => (
              <div key={exp.company} className="mb-6 pb-6 border-b border-slate-200 last:border-b-0">
                <h3 className="font-bold text-lg sm:text-xl text-slate-900 mb-3">{exp.company}</h3>
                <ul className="space-y-2 pl-5 text-slate-700">
                  {exp.details.map((d) => (
                    <li key={d} className="text-sm sm:text-base leading-relaxed">{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Section>

          <Section title="Projects">
            {data.projects.map((p) => (
              <div key={p.title} className="mb-6 pb-6 border-b border-slate-200 last:border-b-0">
                <h3 className="font-bold text-lg text-slate-900 mb-3">{p.title}</h3>
                <ul className="space-y-2 pl-5 text-slate-700">
                  {p.items.map((it) => (
                    <li key={it} className="text-sm leading-relaxed">{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Section>

          <Section title="Certifications / Training">
            {data.certifications.map((c) => (
              <div key={c.title} className="mb-6 pb-6 border-b border-slate-200 last:border-b-0">
                <h3 className="font-bold text-lg text-slate-900 mb-3">{c.title}</h3>
                <ul className="space-y-2 pl-5 text-slate-700">
                  {c.items.map((it) => (
                    <li key={it} className="text-sm leading-relaxed">{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Section>

          <Section title="Skills & Interests">
            <ul className="space-y-2 pl-5 text-slate-700">
              {data.interests.map((i) => (
                <li key={i} className="text-sm leading-relaxed">{i}</li>
              ))}
            </ul>
          </Section>

          <Section title="Referees">
            <p className="text-slate-700 italic">Available on request</p>
          </Section>
        </main>
      </div>
    </div>
  )
}
