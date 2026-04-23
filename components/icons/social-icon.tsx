import { Mail } from "lucide-react";

export type SocialName =
  | "email"
  | "linkedin"
  | "github"
  | "bilibili"
  | "youtube"
  | "instagram";

const STROKE = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function SocialIcon({ name, size = 22 }: { name: SocialName; size?: number }) {
  switch (name) {
    case "email":
      return <Mail size={size} strokeWidth={1.6} />;

    case "linkedin":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" {...STROKE}>
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <line x1="7.5" y1="10" x2="7.5" y2="17" />
          <circle cx="7.5" cy="7.2" r="0.9" fill="currentColor" stroke="none" />
          <path d="M11 17 V 11 M 11 12.5 C 12 11, 16 11, 16 13.5 V 17" />
        </svg>
      );

    case "github":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" {...STROKE}>
          <path d="M12 3 C 7 3, 3 7, 3 12 C 3 16, 5.5 19.3, 9 20.5 C 9.5 20.6, 9.7 20.3, 9.7 20 V 18.3 C 7 18.8, 6.4 17.1, 6.4 17.1 C 6 16, 5.3 15.7, 5.3 15.7 C 4.5 15.1, 5.4 15.1, 5.4 15.1 C 6.3 15.2, 6.8 16.1, 6.8 16.1 C 7.6 17.5, 9 17.1, 9.7 16.8 C 9.8 16.2, 10 15.8, 10.3 15.6 C 8 15.3, 5.7 14.4, 5.7 10.8 C 5.7 9.8, 6.1 9, 6.7 8.4 C 6.6 8.1, 6.3 7.2, 6.8 6 C 6.8 6, 7.6 5.7, 9.7 7.1 C 10.5 6.9, 11.3 6.8, 12 6.8 C 12.7 6.8, 13.5 6.9, 14.3 7.1 C 16.4 5.7, 17.2 6, 17.2 6 C 17.7 7.2, 17.4 8.1, 17.3 8.4 C 17.9 9, 18.3 9.8, 18.3 10.8 C 18.3 14.4, 16 15.3, 13.7 15.6 C 14.1 15.9, 14.4 16.5, 14.4 17.4 V 20 C 14.4 20.3, 14.6 20.6, 15.1 20.5 C 18.5 19.3, 21 16, 21 12 C 21 7, 17 3, 12 3 Z" />
        </svg>
      );

    case "bilibili":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" {...STROKE}>
          <rect x="2.5" y="7" width="19" height="13" rx="3.5" />
          <path d="M7 3.5 L 10 7 M 17 3.5 L 14 7" />
          <circle cx="9" cy="13.5" r="1.05" fill="currentColor" stroke="none" />
          <circle cx="15" cy="13.5" r="1.05" fill="currentColor" stroke="none" />
        </svg>
      );

    case "youtube":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" {...STROKE}>
          <rect x="2.5" y="6" width="19" height="12" rx="3.5" />
          <path d="M10 9.5 L 15 12 L 10 14.5 Z" fill="currentColor" stroke="none" />
        </svg>
      );

    case "instagram":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" {...STROKE}>
          <defs>
            <linearGradient id="ig-gradient-stroke" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f09433" />
              <stop offset="100%" stopColor="#bc1888" />
            </linearGradient>
          </defs>
          <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none" />
        </svg>
      );

    default:
      return null;
  }
}
