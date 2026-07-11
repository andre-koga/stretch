type Props = {
  value: number
  className?: string
}

export function ProgressBar({ value, className = '' }: Props) {
  const clamped = Math.min(1, Math.max(0, value))
  return (
    <div
      className={`h-1 w-full overflow-hidden rounded-full bg-white/15 ${className}`}
      role="progressbar"
      aria-valuenow={Math.round(clamped * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full rounded-full bg-amber transition-[width] duration-300 ease-out"
        style={{ width: `${clamped * 100}%` }}
      />
    </div>
  )
}
