export function Logo({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 185 110" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '100%', width: 'auto' }}>
      {/* Oval border */}
      <ellipse cx="92.5" cy="55" rx="85" ry="45" stroke="#1A1A1A" strokeWidth="4" />
      
      {/* M (Black, left leg and V) */}
      <path d="M 30 85 L 30 25 L 45 25 L 62.5 55 L 80 25 L 80 50 L 62.5 80 L 45 50 L 45 85 Z" fill="#1A1A1A" />
      
      {/* I / Right leg of M (Blue) */}
      <rect x="80" y="25" width="15" height="60" fill="#00A0E9" />
      
      {/* Y (Red) */}
      <path d="M 95 25 L 110 25 L 125 45 L 140 25 L 155 25 L 132.5 55 L 132.5 85 L 117.5 85 L 117.5 55 Z" fill="#E60012" />
    </svg>
  );
}
