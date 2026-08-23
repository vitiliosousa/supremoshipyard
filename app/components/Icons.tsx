type IconProps = {
  className?: string;
};

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconHull({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M3 14h18l-2.2 5H5.2L3 14Z" />
      <path d="M6 14V8h12v6" />
      <path d="M12 8V4" />
      <path d="M9 4h6" />
    </svg>
  );
}

export function IconCompass({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M14.6 9.4 13 13l-3.6 1.6L11 11l3.6-1.6Z" />
    </svg>
  );
}

export function IconWrench({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M14.5 6.5a4 4 0 0 0-5.4 4.9L4 16.5V20h3.5l5.1-5.1a4 4 0 0 0 4.9-5.4l-2.6 2.6-2-2 2.6-2.6Z" />
    </svg>
  );
}

export function IconRig({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 3v6" />
      <path d="M8 5.5h8" />
      <path d="M6 21l2-8h8l2 8" />
      <path d="M9 13v-2l3-2 3 2v2" />
    </svg>
  );
}

export function IconWeld({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M4 18 18 4" />
      <path d="M14 4h4v4" />
      <path d="M6 20h4v-4" />
      <circle cx="11" cy="11" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconCertificate({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="12" cy="9" r="5" />
      <path d="M9 13.5 8 21l4-2 4 2-1-7.5" />
    </svg>
  );
}

export function IconExport({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M3 8.5 12 4l9 4.5-9 4.5-9-4.5Z" />
      <path d="M3 8.5V16l9 4.5 9-4.5V8.5" />
      <path d="M12 13v7.5" />
    </svg>
  );
}

export function IconSpark({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 3v3.5" />
      <path d="M12 17.5V21" />
      <path d="M4.2 12H3" />
      <path d="M21 12h-1.2" />
      <path d="M6.3 6.3 7.5 7.5" />
      <path d="M16.5 16.5l1.2 1.2" />
      <path d="M17.7 6.3 16.5 7.5" />
      <path d="M7.5 16.5 6.3 17.7" />
      <circle cx="12" cy="12" r="3.2" />
    </svg>
  );
}

export function IconAnchor({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="12" cy="5" r="1.8" />
      <path d="M12 7v13" />
      <path d="M7 12H3a9 9 0 0 0 9 8 9 9 0 0 0 9-8h-4" />
      <path d="M8.5 9.5h7" />
    </svg>
  );
}

export function IconGear({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3.5v2.4M12 18.1v2.4M4.7 7.3l2 1.2M17.3 15.5l2 1.2M4.7 16.7l2-1.2M17.3 8.5l2-1.2M3.5 12h2.4M18.1 12h2.4" />
    </svg>
  );
}

export function IconClipboard({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="5" y="4.5" width="14" height="16" rx="1.5" />
      <path d="M9 4.5V3h6v1.5" />
      <path d="M8.5 11h7M8.5 15h4.5" />
    </svg>
  );
}

export function IconBlueprint({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="3.5" y="4" width="17" height="16" rx="1" />
      <path d="M7 8h5v5H7z" />
      <path d="M14 8h3M14 11h3M14 14h3M7 16h10" />
    </svg>
  );
}

export function IconShieldCheck({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 3.5 19 6v6c0 4.4-3 7.6-7 8.5-4-.9-7-4.1-7-8.5V6l7-2.5Z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function IconDelivery({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M3 16V7h11v9" />
      <path d="M14 10h4l3 3v3h-7" />
      <circle cx="7.5" cy="17.5" r="1.6" />
      <circle cx="17" cy="17.5" r="1.6" />
    </svg>
  );
}

export function IconArrowUpRight({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

export function IconMenu({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function IconClose({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function IconMail({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
      <path d="M4 6.5 12 13l8-6.5" />
    </svg>
  );
}

export function IconPhone({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M6.5 3.5h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a1.5 1.5 0 0 1-1.6 1.5A16 16 0 0 1 5 5.1 1.5 1.5 0 0 1 6.5 3.5Z" />
    </svg>
  );
}

export function IconPin({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </svg>
  );
}

export function IconLinkedin({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
      <path d="M8 10.5v6M8 7.9v.1M12 16.5v-4c0-1 .8-2 2-2s2 1 2 2v4M12 12.5v0" />
    </svg>
  );
}

export function IconInstagram({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="16.6" cy="7.4" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconFacebook({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
      <path d="M13.5 20v-6h2l.4-2.6h-2.4V9.6c0-.8.3-1.4 1.5-1.4h1V5.8c-.5-.1-1.3-.2-2.1-.2-2.2 0-3.4 1.3-3.4 3.6v2.2H8.5V14h2v6" />
    </svg>
  );
}

export function IconChevronDown({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
