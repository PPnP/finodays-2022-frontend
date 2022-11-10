import styled from "@emotion/styled";
import { Button } from "../../shared/Button";

export const ButtonStyled = styled(Button)`
  display: flex;
  gap: 4px;
  align-items: center;
  color: var(--gray-inno);
  justify-content: center;
  z-index: 1;
`;

export const QRWrapper = styled.div`
  grid-column: 2 / 4;
  aspect-ratio: 1 / 1;
  padding: 16px;
  border-radius: var(--border-radius);
  background-color: #fff;
`;

export const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: 2 / 4;
  aspect-ratio: 1 / 1;
  width: 100%;
`;
