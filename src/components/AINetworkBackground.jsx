export default function AINetworkBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-gradient-to-br from-[#f8fbff] via-[#eaf3ff] to-[#dbeafe]">
      {/* Subtle Animated Dots - Only 12 dots, low opacity, slow animation */}
      <div className="absolute inset-0">
        {/* Row 1 - 3 dots */}
        <div 
          className="absolute w-1.5 h-1.5 bg-blue-400/30 rounded-full animate-pulse"
          style={{ top: '15%', left: '20%', animationDelay: '0s', animationDuration: '4s' }}
        />
        <div 
          className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-pulse"
          style={{ top: '20%', left: '50%', animationDelay: '1s', animationDuration: '4s' }}
        />
        <div 
          className="absolute w-1.5 h-1.5 bg-blue-400/30 rounded-full animate-pulse"
          style={{ top: '12%', left: '80%', animationDelay: '2s', animationDuration: '4s' }}
        />
        
        {/* Row 2 - 3 dots */}
        <div 
          className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-pulse"
          style={{ top: '40%', left: '15%', animationDelay: '0.5s', animationDuration: '4s' }}
        />
        <div 
          className="absolute w-2 h-2 bg-blue-400/25 rounded-full animate-pulse"
          style={{ top: '45%', left: '45%', animationDelay: '1.5s', animationDuration: '4s' }}
        />
        <div 
          className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-pulse"
          style={{ top: '38%', left: '75%', animationDelay: '2.5s', animationDuration: '4s' }}
        />
        
        {/* Row 3 - 3 dots */}
        <div 
          className="absolute w-1.5 h-1.5 bg-blue-400/30 rounded-full animate-pulse"
          style={{ top: '65%', left: '25%', animationDelay: '1s', animationDuration: '4s' }}
        />
        <div 
          className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-pulse"
          style={{ top: '70%', left: '55%', animationDelay: '2s', animationDuration: '4s' }}
        />
        <div 
          className="absolute w-1.5 h-1.5 bg-blue-400/30 rounded-full animate-pulse"
          style={{ top: '62%', left: '85%', animationDelay: '3s', animationDuration: '4s' }}
        />
        
        {/* Row 4 - 3 dots */}
        <div 
          className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-pulse"
          style={{ top: '85%', left: '35%', animationDelay: '1.5s', animationDuration: '4s' }}
        />
        <div 
          className="absolute w-1.5 h-1.5 bg-blue-400/25 rounded-full animate-pulse"
          style={{ top: '88%', left: '60%', animationDelay: '2.5s', animationDuration: '4s' }}
        />
        <div 
          className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-pulse"
          style={{ top: '82%', left: '90%', animationDelay: '3.5s', animationDuration: '4s' }}
        />
      </div>
    </div>
  )
}
