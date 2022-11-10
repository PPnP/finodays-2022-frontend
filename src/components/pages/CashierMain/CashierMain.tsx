import { useNavigate } from "react-router-dom";

import { ReactComponent as ChevronRight } from "../../../assets/icons/chevron-right.svg";

import { ButtonVariant } from "../../shared/Button";
import { Layout } from "../../widgets/Layout";
import { StatFullWidth, StatHalfWidth } from "../LandingPage/styles";
import {
  ButtonFixed,
  PpayProAddressCentered,
  PpayProLogoCentered,
} from "./styles";

export const CashierMain: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <PpayProLogoCentered />
      <PpayProAddressCentered
        orgName={'"Азбука Вкуса №37", касса 5'}
        address="Москва, Кутузовский 44"
      />
      <StatFullWidth
        title="Вся аналитика покупок"
        description={
          <div style={{ display: "flex", alignItems: "center" }}>
            Перейти <ChevronRight style={{ marginLeft: 4 }} />
          </div>
        }
        showAnalytics
      />
      <StatHalfWidth title="8843₽" description="Заработано" />
      <StatHalfWidth title="+12 чел." description="Привлечено" />
      <ButtonFixed
        variant={ButtonVariant.ACCENT}
        onClick={() => navigate("/cashier/checkout")}
      >
        Новая покупка
      </ButtonFixed>
    </Layout>
  );
};
