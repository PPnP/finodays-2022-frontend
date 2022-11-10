import { PaymentParams } from "./interfaces";
import {
  Description,
  LogoWrapper,
  PaymentInfo,
  PaymentWrapper,
  Title,
} from "./styles";

export const Payment: React.FC<PaymentParams> = ({
  logo,
  title,
  description,
  rightContent,
}) => {
  return (
    <PaymentWrapper>
      <PaymentInfo>
        <LogoWrapper>{logo}</LogoWrapper>
        <div>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </div>
      </PaymentInfo>
      {rightContent}
    </PaymentWrapper>
  );
};
