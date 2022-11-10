import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as AzbukaVkusaStroke } from "../../../assets/logos/azbuka-vkusa-stroke.svg";

import { Block } from "../../shared/Block";
import { Button, ButtonVariant } from "../../shared/Button";
import { Layout } from "../../widgets/Layout";
import {
  ButtonFixed,
  PpayProAddressCentered,
  PpayProLogoCentered,
} from "../CashierMain/styles";
import { BlockFullWidth } from "../LandingPage/styles";

export const CashierLoyalty: React.FC = () => {
  const navigate = useNavigate();

  const [buttonId, setButtonId] = useState(-1);

  return (
    <Layout>
      <PpayProLogoCentered />
      <PpayProAddressCentered
        orgName={'"Азбука Вкуса №37", касса 5'}
        address="Москва, Кутузовский 44"
      />
      <BlockFullWidth>
        <Block.Content>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <AzbukaVkusaStroke />
            <div style={{ textAlign: "right" }}>
              <div style={{ marginBottom: "8px" }}>4395034985034</div>
              <div>Баланс: 540 бонусов</div>
            </div>
          </div>
        </Block.Content>
      </BlockFullWidth>

      <Button
        variant={
          buttonId === 0 ? ButtonVariant.ACCENT : ButtonVariant.SECONDARY
        }
        style={{ gridColumn: "span 2", height: "130px", alignItems: "center" }}
        onClick={() => setButtonId(0)}
      >
        Списать
      </Button>
      <Button
        variant={
          buttonId === 1 ? ButtonVariant.ACCENT : ButtonVariant.SECONDARY
        }
        style={{ gridColumn: "span 2", height: "130px", alignItems: "center" }}
        onClick={() => setButtonId(1)}
      >
        Накопить
      </Button>

      {buttonId !== -1 ? (
        <>
          <div style={{ gridColumn: "1 / 5", padding: "0 8px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 16,
                marginBottom: 6,
              }}
            >
              <span>
                {buttonId === 0 ? "Потрачено бонусов" : "Начислено бонусов"}
              </span>
              <span>{buttonId === 0 ? "540" : "30"}</span>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 12,
              }}
            >
              <span>Баланс бонусов</span>
              <span>{buttonId === 0 ? "0" : "570"}</span>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 4,
              }}
            >
              <span>Чек</span>
              <span>5 640 ₽</span>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 4,
              }}
            >
              <span>Скидка</span>
              <span>{buttonId === 0 ? "-540 ₽" : "0 ₽"}</span>
            </div>
          </div>
          <BlockFullWidth>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontWeight: "700",
              }}
            >
              <div>Итого</div>
              <div>{buttonId === 0 ? "5 100 ₽" : "5 640 ₽"}</div>
            </div>
          </BlockFullWidth>
        </>
      ) : null}

      <ButtonFixed
        variant={
          buttonId !== -1 ? ButtonVariant.ACCENT : ButtonVariant.SECONDARY
        }
        onClick={() =>
          navigate(
            `/cashier/success?total=${buttonId === 0 ? "5 100 ₽" : "5 640 ₽"}`
          )
        }
        style={{ opacity: buttonId !== -1 ? 1 : 0.34 }}
      >
        Принять оплату
      </ButtonFixed>
    </Layout>
  );
};
