export interface SecondaryInputProps {
  placeholder: string;
  value?: string | number;
  onChange: (text: string) => void;
  className?: string;
  required?: boolean;
  infoText?: string;
  readOnly?: boolean;
  successMessage?: string;
  disabled?: boolean;
  errorMessage?: string;
  inputClassName?: string;
  loading?: boolean;
  message?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement> &
    React.RefAttributes<HTMLInputElement>;
}

export interface SecondaryInputState {
  isFocused: boolean;
}
