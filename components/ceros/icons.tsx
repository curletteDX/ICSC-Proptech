export function InnovationIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className={className} stroke="currentColor" strokeWidth="2">
      <circle cx="32" cy="20" r="8" />
      <path d="M32 28v8" />
      <path d="M24 40c0-4 4-4 8-4s8 0 8 4" />
      <circle cx="28" cy="48" r="4" />
      <circle cx="36" cy="48" r="4" />
      <path d="M28 52v4M36 52v4" />
    </svg>
  )
}

export function NetworkIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className={className} stroke="currentColor" strokeWidth="2">
      <circle cx="20" cy="16" r="4" />
      <circle cx="32" cy="16" r="4" />
      <circle cx="44" cy="16" r="4" />
      <circle cx="20" cy="28" r="4" />
      <circle cx="32" cy="28" r="4" />
      <circle cx="44" cy="28" r="4" />
      <path d="M20 32v8M32 32v8M44 32v8" />
      <path d="M16 48h32" />
    </svg>
  )
}

export function ShowcaseIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className={className} stroke="currentColor" strokeWidth="2">
      <rect x="12" y="20" width="40" height="24" rx="4" />
      <circle cx="20" cy="32" r="3" />
      <circle cx="44" cy="32" r="3" />
      <path d="M12 28h40" />
    </svg>
  )
}

export function ArrowDown({ className = "" }: { className?: string }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className={className} stroke="currentColor" strokeWidth="2">
      <path d="M8 12l8 8 8-8" />
      <path d="M8 18l8 8 8-8" />
    </svg>
  )
}
