import React from "react";

export enum ButtonVariant {
  DEFAULT = "DEFAULT",
  ACCENT = "ACCENT",
  SECONDARY = "SECONDARY",
}

export enum ButtonSize {
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
}

export interface ButtonParams
  extends Omit<React.HTMLProps<HTMLButtonElement>, "size"> {
  icon?: JSX.Element | string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}
