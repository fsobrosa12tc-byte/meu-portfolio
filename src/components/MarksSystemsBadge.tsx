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
    <span className={`inline-flex items-center gap-1.5 font-bold align-middle ${className}`}>
      <img
        src="/assets/logo_marks_systems.svg"
        alt="Marks Systems Icon"
        style={{ height: `${size}px`, width: `${size}px`, verticalAlign: 'middle' }}
        className="shrink-0 rounded-md shadow-sm"
        referrerPolicy="no-referrer"
      />
      {showText && <span className="tracking-tight">Marks Systems</span>}
    </span>
  );
};
