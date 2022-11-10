import { Button, ButtonSize, ButtonVariant } from "../../shared/Button";
import { Payment } from "../Payment";
import { SharedPaymentParams } from "./interface";
import {
  Description,
  LogoWrapper,
  PaymentInfo,
  SharedPaymentWrapper,
  Title,
} from "./styles";

export const SharedPayment: React.FC<SharedPaymentParams> = ({
  logo,
  orgName,
  clientName,
  amount,
  date,
}) => {
  return (
    <Payment
      logo={logo}
      title={`${orgName} / ${clientName}`}
      description={`${amount} ${date}`}
      rightContent={
        <Button variant={ButtonVariant.SECONDARY} size={ButtonSize.SMALL}>
          Оплатить
        </Button>
      }
    />
  );
};
