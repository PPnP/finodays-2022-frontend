import { Link, useNavigate } from "react-router-dom";

import { ReactComponent as RequestIcon } from "../../../assets/icons/request.svg";
import { ReactComponent as QRIcon } from "../../../assets/icons/qr.svg";
import { ReactComponent as ChevronRight } from "../../../assets/icons/chevron-right.svg";

import pyatorochkaLogo from "../../../assets/logos/pyatorochka.png";
import dodoPizzaLogo from "../../../assets/logos/dodo-pizza.png";
import azbukaVkusaLogo from "../../../assets/logos/azbuka-vkusa.png";

import { Block } from "../../shared/Block";
import { ButtonVariant } from "../../shared/Button";
import { Layout } from "../../widgets/Layout";
import {
  BlockFullWidth,
  PaymentButton,
  IndicatioStyled,
  PaymentsLog,
  StatHalfWidth,
  StatFullWidth,
} from "./styles";
import { SharedPayment } from "../../widgets/SharedPayment";
import { Payment } from "../../widgets/Payment";
import { Logo } from "../../shared/Logo/Logo";
import { SelectCard } from "../../widgets/SelectCard";
import { useState } from "react";

export const LandingPage: React.FC = () => {
  const [card, setCard] = useState(0);
  const navigate = useNavigate();

  return (
    <Layout>
      <SelectCard card={card} setCard={setCard} />
      <PaymentButton icon={<RequestIcon />}>Запросить</PaymentButton>
      <PaymentButton
        icon={<QRIcon />}
        variant={ButtonVariant.ACCENT}
        onClick={() => navigate("/qr")}
      >
        Оплатить
      </PaymentButton>
      <BlockFullWidth>
        <Block.Header>
          <Link
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "inherit",
              textDecoration: "none",
            }}
            to="/"
          >
            <span
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <IndicatioStyled>2</IndicatioStyled> Совместная оплата
            </span>
            <span>
              <ChevronRight />
            </span>
          </Link>
        </Block.Header>
        <Block.Content>
          <PaymentsLog>
            <SharedPayment
              logo={<Logo src={azbukaVkusaLogo} />}
              orgName="Азбука Вкуса"
              clientName="pavel"
              amount="153 ₽"
              date="Сегодня в 8:43"
            />
          </PaymentsLog>
        </Block.Content>
      </BlockFullWidth>
      <BlockFullWidth>
        <Block.Header>
          <Link
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "inherit",
              textDecoration: "none",
            }}
            to="/"
          >
            <span
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              История
            </span>
            <span>
              <ChevronRight />
            </span>
          </Link>
        </Block.Header>
        <Block.Content>
          <PaymentsLog>
            <Payment
              logo={<Logo src={pyatorochkaLogo} />}
              title={"Пятерочка"}
              description={"Сегодня в 18:43"}
              rightContent={"1000₽"}
            />
            <Payment
              logo={<Logo src={dodoPizzaLogo} />}
              title={"Додо Пицца"}
              description={"Сегодня в 17:12"}
              rightContent={"154₽"}
            />
            <Payment
              logo={<Logo src={azbukaVkusaLogo} />}
              title={"Азбука Вкуса"}
              description={"Сегодня в 8:43"}
              rightContent={"1200₽"}
            />
          </PaymentsLog>
        </Block.Content>
      </BlockFullWidth>
      <StatHalfWidth title="8843₽" description="Потрачено" />
      <StatHalfWidth title="+1243₽" description="Сэкономлено" />
      <StatFullWidth
        title="Вся аналитика покупок"
        description={
          <div style={{ display: "flex", alignItems: "center" }}>
            Перейти <ChevronRight style={{ marginLeft: 4 }} />
          </div>
        }
        showAnalytics
      />
    </Layout>
  );
};
