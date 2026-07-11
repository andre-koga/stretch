import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'ghost' | 'control'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  children: ReactNode
}

const variants: Record<Variant, string> = {
  primary:
    'bg-amber text-moss-deep hover:bg-amber-bright active:scale-[0.98] font-medium',
  ghost:
    'bg-white/8 text-ink hover:bg-white/12 border border-white/10 active:scale-[0.98]',
  control:
    'bg-white/10 text-ink hover:bg-white/16 border border-white/12 active:scale-[0.97] min-w-14',
}

export function Button({ variant = 'primary', className = '', children, ...rest }: Props) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center rounded-2xl px-5 py-3.5 text-base transition disabled:opacity-40 disabled:pointer-events-none ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}
