export function CatLogo({ className = "size-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M6 14V6l5.5 4A12 12 0 0 1 16 9c1.6 0 3.1.35 4.5 1L26 6v8" />
      <path d="M26 15.5C26 21.3 21.5 26 16 26S6 21.3 6 15.5" />
      <path d="M12.5 15.5h.01M19.5 15.5h.01" />
      <path d="M16 19v1.2M16 20.2c-.8 0-1.4.5-1.4.5M16 20.2c.8 0 1.4.5 1.4.5" />
    </svg>
  );
}
