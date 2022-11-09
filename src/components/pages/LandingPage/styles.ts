import styled from "@emotion/styled";

import { Block } from "../../shared/Block";
import { Button } from "../../shared/Button";

export const PaymentButton = styled(Button)`
  grid-column: span 2;
  height: 100%;
  text-align: left;
`;

export const BlockFullWidth = styled(Block)`
  grid-column: span 4;
  border-radius: var(--border-radius);
`;
