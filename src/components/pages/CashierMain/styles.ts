import styled from "@emotion/styled";
import { Button } from "../../shared/Button";
import { PpayProAddress } from "../../shared/PpayProAddress/PpayProAddress";
import { PpayProLogo } from "../../shared/PpayProLogo/PpayProLogo";

export const PpayProLogoCentered = styled(PpayProLogo)`
  margin-bottom: 24px;
  grid-column: 1 / 5;
  text-align: center;
  white-space: nowrap;
`;

export const PpayProAddressCentered = styled(PpayProAddress)`
  margin-bottom: 24px;
  grid-column: 1 / 5;
  text-align: center;
  white-space: nowrap;
`;

export const ButtonFixed = styled(Button)`
  position: fixed;

  width: calc(100vw - 32px);
  max-width: calc(var(--max-width) - 32px);
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  margin: 0 auto;
  white-space: nowrap;
`;
