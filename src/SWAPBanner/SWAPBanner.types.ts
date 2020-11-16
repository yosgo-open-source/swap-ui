export interface SWAPBannerProps {
  status: "success" | "warning" | "critical";
  title: string;
  content: string;
  focus?: boolean;
  primaryButton?: {
    title: string;
    onClick: () => void;
    disabled?: boolean;
  };
  secondaryButton?: {
    title: string;
    onClick: () => void;
    disabled?: boolean;
  };
}
