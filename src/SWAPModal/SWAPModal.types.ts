export interface SWAPModalProps {
  title: string;
  helpText?: string;
  onClose: () => void;
  open: boolean;
  primaryButton: {
    title: string;
    onClick: () => void;
    disabled: boolean;
  };
  secondaryButton?: {
    title: string;
    onClick: () => void;
    disabled: boolean;
  };
  children: React.ReactNode;
}
