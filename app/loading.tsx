export default function Loading() {
  return (
    <div className="relative h-screen">
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-8 h-8 relative transform rotate-45">
          <div
            className="absolute bg-orange-600 w-3.5 h-3.5 animate-ping"
            style={{ top: 0, left: 0, animationDuration: '1.2s' }}
          />
          <div
            className="absolute bg-orange-600 w-3.5 h-3.5 animate-ping"
            style={{
              top: 0,
              right: 0,
              animationDuration: '1.2s',
              animationDelay: '0.15s',
            }}
          />
          <div
            className="absolute bg-orange-600 w-3.5 h-3.5 animate-ping"
            style={{
              bottom: 0,
              right: 0,
              animationDuration: '1.2s',
              animationDelay: '0.3s',
            }}
          />
          <div
            className="absolute bg-orange-600 w-3.5 h-3.5 animate-ping"
            style={{
              bottom: 0,
              left: 0,
              animationDuration: '1.2s',
              animationDelay: '0.45s',
            }}
          />
        </div>
      </div>
    </div>
  );
}
