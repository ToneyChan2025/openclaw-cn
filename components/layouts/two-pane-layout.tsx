import Link from 'next/link'
import { ReactNode } from 'react'

type NavItem = {
  title: string
  href: string
  description?: string
}

type TwoPaneLayoutProps = {
  title: string
  description: string
  items: NavItem[]
  children: ReactNode
}

export function TwoPaneLayout({ title, description, items, children }: TwoPaneLayoutProps) {
  return (
    <div className="mx-auto grid max-w-6xl gap-6 px-4 py-6 lg:grid-cols-[280px_minmax(0,1fr)]">
      <aside className="h-fit rounded-xl border border-slate-200 bg-white p-4 shadow-sm lg:sticky lg:top-20">
        <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
        <p className="mt-1 text-sm text-slate-600">{description}</p>
        <nav className="mt-4 space-y-1">
          {items.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-md px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
            >
              <div className="font-medium">{item.title}</div>
              {item.description ? <div className="text-xs text-slate-500">{item.description}</div> : null}
            </Link>
          ))}
        </nav>
      </aside>

      <main className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="oc-prose">{children}</div>
      </main>
    </div>
  )
}
