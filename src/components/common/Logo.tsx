import React from 'react';
import { BookOpen } from 'lucide-react';

interface LogoProps {
  color?: string;
}

const Logo: React.FC<LogoProps> = ({ color = 'primary' }) => {
  const textColor = color === 'white' ? 'text-white' : 'text-primary';
  const iconColor = color === 'white' ? 'text-accent' : 'text-primary';
  
  return (
    <div className="flex items-center">
      <div className={`${iconColor} mr-2`}>
        <BookOpen size={32} strokeWidth={2} />
      </div>
      <div>
        <h1 className={`text-xl font-bold leading-none ${textColor}`}>Takshasila</h1>
        <p className={`text-sm font-medium leading-none ${textColor}`}>Vidyapeeth</p>
      </div>
    </div>
  );
};

export default Logo;