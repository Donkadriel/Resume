type Contact = {
  location: string
  email: string
  phone: string
  alternatePhone: string
  linkedin: string
}

type Props = {
  name: string
  contact: Contact
}

export default function Header({ name, contact }: Props) {
  return (
    <header className="mx-auto mb-10 max-w-3xl rounded-[32px] bg-gradient-to-r from-sky-700 via-slate-600 to-slate-500 px-6 py-8 shadow-xl shadow-slate-400/20 backdrop-blur-sm sm:px-8">
      <div className="text-center">
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight mb-3">{name}</h1>
        <div className="mx-auto flex max-w-3xl flex-col gap-2 text-sm sm:text-base text-slate-200 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-3">
          <span>{contact.location}</span>
          <span className="hidden sm:inline">•</span>
          <a href={`mailto:${contact.email}`} className="text-slate-700 hover:text-slate-900 transition-colors">
            {contact.email}
          </a>
          <span className="hidden sm:inline">•</span>
          <span>{contact.phone}</span>
          <span className="hidden sm:inline">•</span>
          <a href={contact.linkedin} target="_blank" rel="noreferrer" className="text-sky-700 hover:text-sky-900 transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  )
}
