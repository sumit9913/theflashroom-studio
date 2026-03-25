export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-7 bg-background">

      {/* Aperture icon — blades spin like a camera shutter */}
      <svg
        viewBox="0 0 100 100"
        className="w-20 h-20"
        aria-hidden="true">
        <defs>
          <clipPath id="lc">
            <circle cx="50" cy="50" r="44" />
          </clipPath>
        </defs>

        {/* Static yellow base */}
        <circle cx="50" cy="50" r="44" fill="hsl(42 75% 55%)" />

        {/* Spinning blade group — invisible anchor circle keeps rotation centred */}
        <g
          className="animate-spin"
          style={{
            animationDuration: '3s',
            transformBox: 'fill-box',
            transformOrigin: 'center',
          }}>
          <circle cx="50" cy="50" r="44" fill="none" />
          <ellipse
            cx="50" cy="26" rx="19" ry="33"
            fill="#16130E"
            clipPath="url(#lc)" />
          <ellipse
            cx="50" cy="26" rx="19" ry="33"
            fill="#16130E"
            transform="rotate(120,50,50)"
            clipPath="url(#lc)" />
          <ellipse
            cx="50" cy="26" rx="19" ry="33"
            fill="#16130E"
            transform="rotate(240,50,50)"
            clipPath="url(#lc)" />
        </g>

        {/* Static centre hub */}
        <circle cx="50" cy="50" r="14" fill="#16130E" />
        <circle cx="50" cy="50" r="4.5" fill="hsl(42 75% 55%)" />
      </svg>

      {/* Brand name */}
      <p className="font-display text-gold tracking-[0.35em] uppercase text-xs">
        The Flash Room Studio
      </p>

    </div>
  );
}
