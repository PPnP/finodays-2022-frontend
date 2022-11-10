import styled from "@emotion/styled";

import { ILayout } from "./interfaces";

export const LayoutWrapper = styled.div<ILayout>``;

export const ContentWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: max-content;
  gap: 10px;
  align-items: flex-start;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 100px 16px 180px;

  & > * {
    align-items: flex-start;
  }
`;
