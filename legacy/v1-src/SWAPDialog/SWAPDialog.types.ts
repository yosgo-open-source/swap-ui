export interface SWAPDialogProps {
  status: "success" | "warning" | "critical";
  title: string;
  helpText?: string;
  open: boolean;
  primaryButton: {
    title: string;
    onClick: () => void;
    disabled?: boolean;
  };
  secondaryButton?: {
    title: string;
    onClick: () => void;
    disabled?: boolean;
  };
  children?: React.ReactNode;
}
