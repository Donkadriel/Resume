import type { ReactNode } from 'react'

type Props = {
  title: string
  icon?: ReactNode
  children: ReactNode
}

export default function Section({ title, icon, children }: Props) {
  return (
    <section className="mb-10">
      <div className="flex items-center gap-3 mb-5">
        {icon && <span className="text-blue-600">{icon}</span>}
        <h2 className="text-lg sm:text-xl font-bold text-slate-900">{title}</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-slate-300 to-transparent" />
      </div>
      <div className="space-y-4">{children}</div>
    </section>
  )
}
