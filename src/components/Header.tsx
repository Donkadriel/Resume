type Contact = {
  location: string
  email: string
  phone: string
  alternatePhone: string
  linkedin: string
  github?: string
  youtube?: string
}

type Props = {
  name: string
  title: string
  contact: Contact
}

function IconContact() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
      <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
      <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
    </svg>
  )
}

function IconPhone() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
      <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
    </svg>
  )
}

function IconLocation() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
      <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
    </svg>
  )
}

function IconLink() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
      <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
      <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
    </svg>
  )
}

function IconGitHub() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
      <path fillRule="evenodd" d="M10 1C4.475 1 0 5.475 0 11a9.994 9.994 0 006.838 9.49c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.012-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.337 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.112-4.55-4.937 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.274.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.113 2.5.337 1.912-1.3 2.75-1.025 2.75-1.025.55 1.376.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.837-2.337 4.687-4.562 4.937.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0020 11c0-5.525-4.475-10-10-10z" clipRule="evenodd" />
    </svg>
  )
}

function IconYouTube() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
      <path fillRule="evenodd" d="M10 3C5.6 3 2 3.5 2 5.5v9c0 2 3.6 2.5 8 2.5s8-.5 8-2.5v-9c0-2-3.6-2.5-8-2.5zm-2 4.5a.5.5 0 00-.5.5v4a.5.5 0 00.5.5h4a.5.5 0 00.5-.5V8a.5.5 0 00-.5-.5H8z" clipRule="evenodd" />
    </svg>
  )
}

export default function Header({ name, title, contact }: Props) {
  return (
    <header className="relative mb-10 overflow-hidden rounded-[32px] bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 px-6 py-10 sm:px-10 sm:py-12 shadow-xl">
      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="relative z-10 text-center">
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight mb-2">{name}</h1>
        <p className="text-blue-300 font-medium text-base sm:text-lg mb-6">{title}</p>
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-2 text-sm text-slate-300 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-5 sm:gap-y-1">
          <span className="inline-flex items-center gap-1.5">
            <IconLocation /> {contact.location}
          </span>
          <span className="hidden h-3 w-px bg-slate-600 sm:block" />
          <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-1.5 text-blue-200 hover:text-white transition-colors">
            <IconContact /> {contact.email}
          </a>
          <span className="hidden h-3 w-px bg-slate-600 sm:block" />
          <span className="inline-flex items-center gap-1.5">
            <IconPhone /> {contact.phone}
          </span>
          <span className="hidden h-3 w-px bg-slate-600 sm:block" />
          <a href={contact.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-blue-200 hover:text-white transition-colors">
            <IconLink /> LinkedIn
          </a>
          <span className="hidden h-3 w-px bg-slate-600 sm:block" />
          <a href={contact.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-blue-200 hover:text-white transition-colors">
            <IconGitHub /> GitHub
          </a>
          <span className="hidden h-3 w-px bg-slate-600 sm:block" />
          <a href={contact.youtube} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-blue-200 hover:text-white transition-colors">
            <IconYouTube /> YouTube
          </a>
        </div>
      </div>
    </header>
  )
}
