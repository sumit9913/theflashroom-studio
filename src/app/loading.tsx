export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="relative w-16 h-16">
        {/* Spinning gold ring */}
        <div className="absolute inset-0 rounded-full border-2 border-gold/20" />
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-gold animate-spin" />
        {/* Center dot */}
        <div className="absolute inset-[6px] rounded-full bg-gold/10 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-gold" />
        </div>
      </div>
    </div>
  );
}
