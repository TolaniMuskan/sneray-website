import React from 'react';

export default function SectionDivider({ className = '' }) {
  return (
    <div className={`section-divider w-full overflow-hidden ${className}`} aria-hidden="true">
      <svg className="wave" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,16 C150,90 350,0 600,32 C850,64 1050,10 1200,40 L1200 120 L0 120 Z" fill="rgba(255,255,255,0.12)" />
      </svg>
    </div>
  );
}
