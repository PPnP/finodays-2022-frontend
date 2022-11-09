import { ReactComponent as RequestIcon } from "../../../assets/icons/request.svg";
import { ReactComponent as QRIcon } from "../../../assets/icons/qr.svg";

import { ButtonVariant } from "../../shared/Button";
import { Layout } from "../../widgets/Layout";
import { BlockFullWidth, PaymentButton } from "./styles";
import { Block } from "../../shared/Block";

export const LandingPage: React.FC = () => {
  return (
    <Layout>
      <PaymentButton icon={<RequestIcon />}>Bluetooth</PaymentButton>
      <PaymentButton icon={<QRIcon />} variant={ButtonVariant.ACCENT}>
        Bluetooth
      </PaymentButton>
      <BlockFullWidth>
        <Block.BlockHeader>Совместная оплата</Block.BlockHeader>
        <span>Азбука Вкуса</span>
      </BlockFullWidth>
    </Layout>
  );
};
