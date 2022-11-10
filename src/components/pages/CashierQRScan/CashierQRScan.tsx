import { QrReader } from "react-qr-reader";
import { useNavigate } from "react-router-dom";

import { Layout } from "../../widgets/Layout";
import {
  PpayProAddressCentered,
  PpayProLogoCentered,
} from "../CashierMain/styles";

export const CashierQRScan = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <PpayProLogoCentered />
      <PpayProAddressCentered
        orgName={'"Азбука Вкуса №37", касса 5'}
        address="Москва, Кутузовский 44"
      />
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            // @ts-ignore
            navigate("/cashier/loyalty");
          }

          // if (!!error) {
          //   alert(error);
          // }
        }}
        constraints={{
          facingMode: "environment",
        }}
        containerStyle={{ gridColumn: "1 / 5" }}
      />
    </Layout>
  );
};
