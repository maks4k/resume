import React from 'react';

export const Loader = () => {
  return (
    <div className="text-[28px] relative inline-block w-[1em] h-[1em] absolute left-0 right-0 top-0 bottom-0 m-auto">
      {/* Blade 1 */}
      <div className="absolute left-[0.4629em] bottom-0 w-[0.074em] h-[0.2777em] rounded-[0.0555em] bg-transparent origin-[center_-0.2222em] animate-spinner-fade animation-delay-[0s] rotate-0" />
      
      {/* Blade 2 */}
      <div className="absolute left-[0.4629em] bottom-0 w-[0.074em] h-[0.2777em] rounded-[0.0555em] bg-transparent origin-[center_-0.2222em] animate-spinner-fade animation-delay-[0.083s] rotate-[30deg]" />
      
      {/* Blade 3 */}
      <div className="absolute left-[0.4629em] bottom-0 w-[0.074em] h-[0.2777em] rounded-[0.0555em] bg-transparent origin-[center_-0.2222em] animate-spinner-fade animation-delay-[0.166s] rotate-[60deg]" />
      
      {/* Blade 4 */}
      <div className="absolute left-[0.4629em] bottom-0 w-[0.074em] h-[0.2777em] rounded-[0.0555em] bg-transparent origin-[center_-0.2222em] animate-spinner-fade animation-delay-[0.249s] rotate-[90deg]" />
      
      {/* Blade 5 */}
      <div className="absolute left-[0.4629em] bottom-0 w-[0.074em] h-[0.2777em] rounded-[0.0555em] bg-transparent origin-[center_-0.2222em] animate-spinner-fade animation-delay-[0.332s] rotate-[120deg]" />
      
      {/* Blade 6 */}
      <div className="absolute left-[0.4629em] bottom-0 w-[0.074em] h-[0.2777em] rounded-[0.0555em] bg-transparent origin-[center_-0.2222em] animate-spinner-fade animation-delay-[0.415s] rotate-[150deg]" />
      
      {/* Blade 7 */}
      <div className="absolute left-[0.4629em] bottom-0 w-[0.074em] h-[0.2777em] rounded-[0.0555em] bg-transparent origin-[center_-0.2222em] animate-spinner-fade animation-delay-[0.498s] rotate-[180deg]" />
      
      {/* Blade 8 */}
      <div className="absolute left-[0.4629em] bottom-0 w-[0.074em] h-[0.2777em] rounded-[0.0555em] bg-transparent origin-[center_-0.2222em] animate-spinner-fade animation-delay-[0.581s] rotate-[210deg]" />
      
      {/* Blade 9 */}
      <div className="absolute left-[0.4629em] bottom-0 w-[0.074em] h-[0.2777em] rounded-[0.0555em] bg-transparent origin-[center_-0.2222em] animate-spinner-fade animation-delay-[0.664s] rotate-[240deg]" />
      
      {/* Blade 10 */}
      <div className="absolute left-[0.4629em] bottom-0 w-[0.074em] h-[0.2777em] rounded-[0.0555em] bg-transparent origin-[center_-0.2222em] animate-spinner-fade animation-delay-[0.747s] rotate-[270deg]" />
      
      {/* Blade 11 */}
      <div className="absolute left-[0.4629em] bottom-0 w-[0.074em] h-[0.2777em] rounded-[0.0555em] bg-transparent origin-[center_-0.2222em] animate-spinner-fade animation-delay-[0.83s] rotate-[300deg]" />
      
      {/* Blade 12 */}
      <div className="absolute left-[0.4629em] bottom-0 w-[0.074em] h-[0.2777em] rounded-[0.0555em] bg-transparent origin-[center_-0.2222em] animate-spinner-fade animation-delay-[0.913s] rotate-[330deg]" />

      <style>{`
        @keyframes spinner-fade {
          0% {
            background-color: #69717d;
          }
          100% {
            background-color: transparent;
          }
        }
        .animate-spinner-fade {
          animation: spinner-fade 1s infinite linear;
        }
      `}</style>
    </div>
  );  
}