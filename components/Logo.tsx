
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => {
  return (
    <div className={`${className} relative flex items-center justify-center`}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
        {/* Stem & Leaf */}
        <path d="M50 25 C50 15, 55 10, 60 12" stroke="#4B2C20" strokeWidth="3" strokeLinecap="round" />
        <path d="M52 18 C65 10, 75 25, 52 22" fill="#22C55E" />
        
        {/* Apple Body */}
        <path d="M50 30 C30 30, 15 45, 15 65 C15 85, 35 95, 50 95 C65 95, 85 85, 85 65 C85 45, 70 30, 50 30Z" fill="#E11D48" />
        <path d="M50 30 C40 30, 35 35, 35 40" stroke="white" strokeWidth="1" opacity="0.3" strokeLinecap="round" />
        
        {/* Face */}
        <circle cx="40" cy="58" r="3" fill="black" />
        <circle cx="60" cy="58" r="3" fill="black" />
        <path d="M45 68 C45 72, 55 72, 55 68" stroke="black" strokeWidth="2" strokeLinecap="round" />
        
        {/* Measuring Tape (The Yellow Belt) */}
        <path d="M15 68 Q50 85 85 68" stroke="#FACC15" strokeWidth="8" strokeLinecap="round" />
        {/* Measuring Tape Ticks */}
        <path d="M25 73 L25 77 M35 77 L35 81 M45 79 L45 83 M55 79 L55 83 M65 77 L65 81 M75 73 L75 77" stroke="#422006" strokeWidth="1" />
      </svg>
    </div>
  );
};

export default Logo;
