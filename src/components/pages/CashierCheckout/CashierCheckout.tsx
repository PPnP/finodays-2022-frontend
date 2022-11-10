import { useNavigate } from "react-router-dom";
import { useGetBasketQuery } from "../../../redux/api";

import { ButtonVariant } from "../../shared/Button";
import { Loader } from "../../shared/Loader";
import { Checkout } from "../../widgets/Checkout/Checkout";
import { Layout } from "../../widgets/Layout";
import {
  ButtonFixed,
  PpayProAddressCentered,
  PpayProLogoCentered,
} from "../CashierMain/styles";
import { StatFullWidth, StatHalfWidth } from "../LandingPage/styles";
import { CenteredLoader, CheckoutFullWidth } from "./styles";

export const CashierCheckout: React.FC = () => {
  const navigate = useNavigate();
  const {
    data: basketData,
    isLoading,
    error,
  } = useGetBasketQuery("123e4567-e89b-12d3-a456-426655440000");

  return (
    <Layout>
      <PpayProLogoCentered />
      <PpayProAddressCentered
        orgName={'"Азбука Вкуса №37", касса 5'}
        address="Москва, Кутузовский 44"
      />
      {!isLoading ? (
        <CheckoutFullWidth
          receiptNumber={337}
          items={basketData.basket}
          total={basketData.total}
        />
      ) : (
        <CenteredLoader />
      )}

      <ButtonFixed
        variant={ButtonVariant.ACCENT}
        onClick={() => navigate("/cashier/scan")}
      >
        Сканировать QR
      </ButtonFixed>
    </Layout>
  );
};
