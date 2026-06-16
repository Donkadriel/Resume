import type { ReactNode } from 'react'

type Props = {
  title: string
  children: ReactNode
}

export default function Section({ title, children }: Props) {
  return (
    <section className="mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
        <h2 className="text-lg sm:text-xl font-bold text-blue-600 uppercase tracking-wide">{title}</h2>
        <div className="flex-1 h-1 bg-gradient-to-r from-blue-400 to-transparent rounded-full"></div>
      </div>
      <div>{children}</div>
    </section>
  )
}
