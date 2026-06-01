"use client";

import { useId } from "react";

type LogoProps = {
  size?: number;
  variant?: "default" | "light";
  className?: string;
};

export default function Logo({
  size = 40,
  variant = "default",
  className = "",
}: LogoProps) {
  const uid = useId().replace(/:/g, "");
  const isLight = variant === "light";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id={`${uid}-bg`} x1="8" y1="6" x2="40" y2="42">
          <stop offset="0%" stopColor={isLight ? "#3949ab" : "#303f9f"} />
          <stop offset="55%" stopColor={isLight ? "#283593" : "#1a237e"} />
          <stop offset="100%" stopColor={isLight ? "#1a237e" : "#0d1642"} />
        </linearGradient>
        <linearGradient id={`${uid}-gold`} x1="12" y1="8" x2="36" y2="22">
          <stop offset="0%" stopColor="#ffe082" />
          <stop offset="45%" stopColor="#f9a825" />
          <stop offset="100%" stopColor="#ef6c00" />
        </linearGradient>
        <linearGradient id={`${uid}-red`} x1="4" y1="38" x2="44" y2="44">
          <stop offset="0%" stopColor="#ef5350" />
          <stop offset="100%" stopColor="#b71c1c" />
        </linearGradient>
        <linearGradient id={`${uid}-shine`} x1="8" y1="6" x2="28" y2="24">
          <stop offset="0%" stopColor="#ffffff" stopOpacity={isLight ? 0.18 : 0.22} />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <filter id={`${uid}-shadow`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1" stdDeviation="1.2" floodColor="#000" floodOpacity="0.28" />
        </filter>
      </defs>

      {/* Badge */}
      <rect
        x="3"
        y="3"
        width="42"
        height="42"
        rx="12"
        fill={`url(#${uid}-bg)`}
        stroke={isLight ? "#f9a825" : "#3949ab"}
        strokeWidth={isLight ? 1.5 : 1}
        strokeOpacity={isLight ? 1 : 0.45}
      />
      <path
        d="M8 8 H34 C24 8 18 18 8 28 Z"
        fill={`url(#${uid}-shine)`}
      />

      {/* Base strip */}
      <path
        d="M3 37 H45 V42 C45 43.1 44.1 44 43 44 H5 C3.9 44 3 43.1 3 42 Z"
        fill={`url(#${uid}-red)`}
      />
      <path d="M3 37 H45" stroke="#ffcdd2" strokeOpacity="0.35" strokeWidth="0.75" />

      {/* Graduation cap */}
      <g filter={`url(#${uid}-shadow)`}>
        <path d="M24 9.5 L37 15.2 L24 20.9 L11 15.2 Z" fill={`url(#${uid}-gold)`} />
        <path d="M24 9.5 L37 15.2 L33.5 16.8 L24 13.2 L14.5 16.8 L11 15.2 Z" fill="#ef6c00" opacity="0.35" />
        <path
          d="M11 15.2 V18.2 C11 21.4 16.2 24 24 24 C31.8 24 37 21.4 37 18.2 V15.2"
          stroke="#ffb300"
          strokeWidth="1.4"
          fill="none"
        />
        <path d="M11 15.2 H37" stroke="#fff8e1" strokeWidth="0.6" opacity="0.55" />
        <circle cx="37.2" cy="15.2" r="1.35" fill="#c62828" />
        <path d="M37.2 15.2 V20.8" stroke="#c62828" strokeWidth="1.15" strokeLinecap="round" />
        <circle cx="37.2" cy="20.8" r="0.9" fill="#c62828" />
      </g>

      {/* Open book */}
      <g filter={`url(#${uid}-shadow)`}>
        <path
          d="M13.5 27.2 C13.5 24.8 18.2 23.2 24 24.6 C29.8 23.2 34.5 24.8 34.5 27.2 V33.2 H13.5 Z"
          fill="#eceff1"
        />
        <path
          d="M13.5 27.2 C13.5 25.6 17.8 24.2 24 25.4 C24 25.4 24 33.2 24 33.2 H13.5 Z"
          fill="#ffffff"
        />
        <path
          d="M34.5 27.2 C34.5 25.6 30.2 24.2 24 25.4 C24 25.4 24 33.2 24 33.2 H34.5 Z"
          fill="#fafafa"
        />
        <path d="M24 24.8 V33.2" stroke="#f9a825" strokeWidth="1.35" strokeLinecap="round" />
        <path d="M16.5 27.8 H21" stroke="#cfd8dc" strokeWidth="0.7" strokeLinecap="round" />
        <path d="M16.5 29.6 H20.5" stroke="#cfd8dc" strokeWidth="0.7" strokeLinecap="round" />
        <path d="M16.5 31.4 H21.5" stroke="#cfd8dc" strokeWidth="0.7" strokeLinecap="round" />
        <path d="M26.5 27.8 H31" stroke="#cfd8dc" strokeWidth="0.7" strokeLinecap="round" />
        <path d="M27 29.6 H31.5" stroke="#cfd8dc" strokeWidth="0.7" strokeLinecap="round" />
      </g>

      {/* Upward growth arrow */}
      <path
        d="M24 34.2 L24 39.2 M19.2 36.8 L24 32.2 L28.8 36.8"
        stroke="#ffe082"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Bright future star */}
      <path
        d="M38.5 10.5 L39.1 12.1 L40.8 12.2 L39.5 13.3 L39.9 15 L38.5 14 L37.1 15 L37.5 13.3 L36.2 12.2 L37.9 12.1 Z"
        fill="#ffe082"
        opacity="0.95"
      />
    </svg>
  );
}
