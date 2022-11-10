import { useLocation, useNavigate } from "react-router-dom";

import { ReactComponent as GreenCheckmark } from "../../../assets/icons/green-checkmark.svg";

import { ButtonVariant } from "../../shared/Button";
import { Layout } from "../../widgets/Layout";
import {
  ButtonFixed,
  PpayProAddressCentered,
  PpayProLogoCentered,
} from "../CashierMain/styles";
import { BrandWrapperFullWidth } from "./styles";

export const CachierSuccess: React.FC = () => {
  let { search } = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(search);
  const total = query.get("total");

  return (
    <Layout>
      <PpayProLogoCentered />
      <PpayProAddressCentered
        orgName={'"Азбука Вкуса №37", касса 5'}
        address="Москва, Кутузовский 44"
      />
      <BrandWrapperFullWidth>
        <div style={{ textAlign: "center" }}>
          <div style={{ marginBottom: "6px", fontWeight: 700 }}>
            Оплата принята!
          </div>
          <div style={{ marginBottom: "6px", fontWeight: 700 }}>{total}</div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "var(--deep-dark)",
              borderRadius: "var(--border-radius-small)",
              marginTop: 12,
              padding: "8px 12px",
              color: "var(--gray-inno)",
              fontSize: 14,
            }}
          >
            Успешно <GreenCheckmark style={{ marginLeft: 4 }} />
          </div>
        </div>
      </BrandWrapperFullWidth>
      <ButtonFixed
        variant={ButtonVariant.ACCENT}
        onClick={() => navigate(`/cashier/`)}
      >
        Новая Покупка
      </ButtonFixed>
    </Layout>
  );
};
