import styled from "@emotion/styled";

import { Block } from "../../shared/Block";
import { Button } from "../../shared/Button";
import { Indicatior } from "../../shared/Indicator";
import { Stat } from "../../widgets/Stat";

export const PaymentButton = styled(Button)`
  grid-column: span 2;
  height: 100%;
  text-align: left;
`;

export const BlockFullWidth = styled(Block)`
  grid-column: span 4;
`;

export const StatHalfWidth = styled(Stat)`
  grid-column: span 2;
`;

export const StatFullWidth = styled(Stat)`
  grid-column: span 4;
`;

export const IndicatioStyled = styled(Indicatior)`
  margin-right: 8px;
`;

export const PaymentsLog = styled.div`
  display: grid;
  row-gap: 12px;
`;
