import * as React from "react";

export interface ControlProps {
  onChange?: (args: { value: React.ReactText; checked: boolean }) => void;
  value: React.ReactText;
  label: string;
  checked?: boolean;
  disabled?: boolean;
  children?: (props: ControlProps) => React.ReactNode | React.ReactNodeArray;
  type: "radio" | "checkbox";
  className?: string;
}