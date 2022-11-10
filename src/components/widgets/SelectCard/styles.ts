import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { Button } from "../../shared/Button";

export const CardButton = styled(Button)<{ selected: boolean }>`
  grid-column: span 2;
  height: 100%;
  text-align: left;

  ${({ selected }) =>
    selected
      ? css`
          border: 2px solid var(--blue-inno);
        `
      : css`
          opacity: 0.5;
        `}
`;
