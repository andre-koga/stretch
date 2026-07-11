import { Link } from 'react-router-dom'

type Props = {
  to?: string
  onClick?: () => void
  label?: string
}

export function BackLink({ to = '/', onClick, label = 'Back' }: Props) {
  const className =
    'inline-flex items-center gap-1 text-sm text-ink-muted transition hover:text-ink'

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={className}>
        <span aria-hidden>←</span> {label}
      </button>
    )
  }

  return (
    <Link to={to} className={className}>
      <span aria-hidden>←</span> {label}
    </Link>
  )
}
