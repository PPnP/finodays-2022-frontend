import styled from "@emotion/styled";
import { ButtonVariant } from "./interfaces";

export const ButtonStyled = styled.button<{ variant: ButtonVariant }>`
  display: grid;
  gap: 10px;
  padding: 20px 24px;
  background-color: ${({ variant }) =>
    variant === ButtonVariant.DEFAULT
      ? "var(--deep-dark)"
      : "var(--blue-inno)"};
  font-size: 1.25rem;
`;
