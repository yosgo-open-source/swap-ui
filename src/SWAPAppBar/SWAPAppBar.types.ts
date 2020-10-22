export interface SWAPAppBarProps {
  logo?: React.ReactNode | string;
  primaryButton: {
    title: string;
    onClick: () => void;
    disabled?: boolean;
  };
  navigations?: [
    {
      title: string;
      onClick: () => void;
      disabled?: boolean;
    }
  ];
  secondaryButton?: {
    title: string;
    onClick: () => void;
    disabled?: boolean;
  };
}
