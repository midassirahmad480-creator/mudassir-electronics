export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  id,
}: {
  eyebrow: string
  title: string
  subtitle?: string
  id?: string
}) {
  return (
    <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-3 text-center">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</span>
      <h2 id={id} className="font-heading text-3xl font-bold text-balance text-foreground md:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="leading-relaxed text-pretty text-muted-foreground">{subtitle}</p>}
    </div>
  )
}
