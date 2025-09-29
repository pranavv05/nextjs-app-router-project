"use client";

import React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 32, className = '' }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={`pixelated ${className}`}
      style={{ imageRendering: 'pixelated' }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Pixel art character - converted from the provided image */}
      {/* Hair/Turquoise border */}
      <rect x="12" y="5" width="2" height="1" fill="#40e0d0"/>
      <rect x="10" y="6" width="6" height="1" fill="#40e0d0"/>
      <rect x="8" y="7" width="10" height="1" fill="#40e0d0"/>
      <rect x="7" y="8" width="12" height="1" fill="#40e0d0"/>
      <rect x="6" y="9" width="14" height="1" fill="#40e0d0"/>
      <rect x="5" y="10" width="16" height="1" fill="#40e0d0"/>
      <rect x="4" y="11" width="18" height="1" fill="#40e0d0"/>
      <rect x="3" y="12" width="20" height="1" fill="#40e0d0"/>
      <rect x="3" y="13" width="20" height="1" fill="#40e0d0"/>
      <rect x="3" y="14" width="20" height="1" fill="#40e0d0"/>
      <rect x="3" y="15" width="20" height="1" fill="#40e0d0"/>
      <rect x="3" y="16" width="20" height="1" fill="#40e0d0"/>
      <rect x="3" y="17" width="20" height="1" fill="#40e0d0"/>
      <rect x="3" y="18" width="20" height="1" fill="#40e0d0"/>
      <rect x="3" y="19" width="20" height="1" fill="#40e0d0"/>
      <rect x="4" y="20" width="18" height="1" fill="#40e0d0"/>
      <rect x="5" y="21" width="16" height="1" fill="#40e0d0"/>
      <rect x="6" y="22" width="14" height="1" fill="#40e0d0"/>
      <rect x="7" y="23" width="12" height="1" fill="#40e0d0"/>
      <rect x="8" y="24" width="10" height="1" fill="#40e0d0"/>
      <rect x="9" y="25" width="8" height="1" fill="#40e0d0"/>
      <rect x="10" y="26" width="6" height="1" fill="#40e0d0"/>
      <rect x="11" y="27" width="4" height="1" fill="#40e0d0"/>
      
      {/* Hair/Dark outline */}
      <rect x="13" y="6" width="2" height="1" fill="#1a1a1a"/>
      <rect x="11" y="7" width="4" height="1" fill="#1a1a1a"/>
      <rect x="9" y="8" width="8" height="1" fill="#1a1a1a"/>
      <rect x="8" y="9" width="10" height="1" fill="#1a1a1a"/>
      <rect x="7" y="10" width="3" height="1" fill="#1a1a1a"/>
      <rect x="16" y="10" width="3" height="1" fill="#1a1a1a"/>
      
      {/* Face - skin tone */}
      <rect x="10" y="10" width="6" height="1" fill="#e6b888"/>
      <rect x="8" y="11" width="10" height="1" fill="#e6b888"/>
      <rect x="7" y="12" width="12" height="1" fill="#e6b888"/>
      <rect x="6" y="13" width="14" height="1" fill="#e6b888"/>
      <rect x="5" y="14" width="16" height="1" fill="#e6b888"/>
      <rect x="5" y="15" width="16" height="1" fill="#e6b888"/>
      <rect x="5" y="16" width="16" height="1" fill="#e6b888"/>
      <rect x="5" y="17" width="16" height="1" fill="#e6b888"/>
      <rect x="5" y="18" width="16" height="1" fill="#e6b888"/>
      <rect x="6" y="19" width="14" height="1" fill="#e6b888"/>
      <rect x="7" y="20" width="12" height="1" fill="#e6b888"/>
      <rect x="8" y="21" width="10" height="1" fill="#e6b888"/>
      <rect x="9" y="22" width="8" height="1" fill="#e6b888"/>
      
      {/* Eyes - blue */}
      <rect x="9" y="13" width="3" height="2" fill="#4a90e2"/>
      <rect x="14" y="13" width="3" height="2" fill="#4a90e2"/>
      
      {/* Eye highlights */}
      <rect x="10" y="13" width="1" height="1" fill="#ffffff"/>
      <rect x="15" y="13" width="1" height="1" fill="#ffffff"/>
      
      {/* Nose */}
      <rect x="12" y="16" width="2" height="1" fill="#d4a574"/>
      
      {/* Mouth */}
      <rect x="11" y="18" width="4" height="1" fill="#1a1a1a"/>
      
      {/* Shirt/Collar */}
      <rect x="10" y="23" width="6" height="1" fill="#d0d0d0"/>
      <rect x="9" y="24" width="8" height="1" fill="#d0d0d0"/>
      <rect x="8" y="25" width="10" height="1" fill="#d0d0d0"/>
      <rect x="9" y="26" width="8" height="1" fill="#d0d0d0"/>
      
      {/* Shirt collar detail */}
      <rect x="11" y="24" width="4" height="1" fill="#ffffff"/>
    </svg>
  );
}