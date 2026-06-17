export function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="relative overflow-hidden rounded-3xl border-2 border-border bg-gradient-to-br from-primary/15 via-card to-secondary/40 px-6 py-8 shadow-sm">
      <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10" />
      <div className="pointer-events-none absolute -bottom-8 left-10 h-20 w-20 rounded-full bg-accent/20" />
      <div className="relative">
        <h1 className="font-display text-2xl font-bold text-foreground text-balance sm:text-3xl">{title}</h1>
        {subtitle ? <p className="mt-1 text-sm text-muted-foreground text-pretty">{subtitle}</p> : null}
      </div>
    </header>
  )
}
