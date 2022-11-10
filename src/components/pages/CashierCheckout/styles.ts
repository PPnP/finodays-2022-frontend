import styled from "@emotion/styled";
import { Loader } from "../../shared/Loader";
import { Checkout } from "../../widgets/Checkout/Checkout";

export const CheckoutFullWidth = styled(Checkout)`
  grid-column: 1 / 5;
`;

export const CenteredLoader = styled(Loader)`
  display: block !important;
  margin: 0 auto;
  grid-column: 1 / 5;
`;
