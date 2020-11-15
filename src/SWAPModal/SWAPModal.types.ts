export interface SWAPModalProps {
  title: string;
  helpText?: string;
  onClose: () => void;
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
  steps?: Array<{
    stepTitle: string;
    stepChildren?: React.ReactNode;
    prevStepText?: string;
    nextStepText?: string;
  }>;
  children?: React.ReactNode;
  successMessage?: string;
  errorMessage?: string;
  closeWindowOnSuccessMessage?: boolean;
  reloadOnWindowClose?: boolean;
}
