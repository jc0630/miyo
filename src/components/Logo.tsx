export function Logo({ className = '' }: { className?: string }) {
  return (
    <img 
      src="/miyo_logo.png" 
      alt="MIYO Technology" 
      className={className} 
      style={{ height: '100%', width: 'auto' }} 
    />
  );
}
