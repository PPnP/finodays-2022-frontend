import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ButtonParams, ButtonSize, ButtonVariant } from "./interfaces";

export const ButtonStyled = styled.button<ButtonParams>`
  display: grid;
  gap: 10px;
  background-color: ${({ variant }) =>
    variant === ButtonVariant.DEFAULT
      ? "var(--deep-dark)"
      : variant === ButtonVariant.ACCENT
      ? "var(--blue-inno)"
      : "var(--black-inno)"};

  ${({ size }) =>
    size === ButtonSize.MEDIUM
      ? css`
          padding: 20px 24px;
          font-size: 1.25rem;
          border-radius: var(--border-radius);
        `
      : css`
          padding: 8px;
          font-size: 0.875;
          border-radius: var(--border-radius-small);
        `}

  &:active {
    opacity: 0.75;
  }
`;
