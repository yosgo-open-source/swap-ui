export interface SWAPAppBarProps {
  logo?: React.ReactNode | string;
  primaryButton: {
    title: string;
    onClick: () => void;
    disabled?: boolean;
  };
  navigations?: Array<{
    title: string;
    onClick: () => void;
    disabled?: boolean;
  }>;
  secondaryButton?: {
    title: string;
    onClick: () => void;
    disabled?: boolean;
  };
}
