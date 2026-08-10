import React from 'react';

interface MarksSystemsBadgeProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const MarksSystemsBadge: React.FC<MarksSystemsBadgeProps> = ({
  className = "",
  size = 22,
  showText = true,
}) => {
  return (
    <span className={`inline-flex items-center font-bold align-middle ${className}`}>
      {showText && <span className="tracking-tight">Marks Systems</span>}
    </span>
  );
};
