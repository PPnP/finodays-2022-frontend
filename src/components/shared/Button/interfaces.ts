import React from "react";

export enum ButtonVariant {
  DEFAULT = "DEFAULT",
  ACCENT = "ACCENT",
}

export interface ButtonParams extends React.HTMLProps<HTMLButtonElement> {
  icon?: JSX.Element | string;
  variant?: ButtonVariant;
  className?: string;
}
