import { Block } from "../../shared/Block";
import { CheckoutParams } from "./interfaces";

export const Checkout: React.FC<CheckoutParams> = ({
  receiptNumber,
  items,
  total,
  className,
}) => {
  return (
    <Block className={className}>
      <Block.Header>
        <>Чек №{receiptNumber}</>
      </Block.Header>
      <Block.Content>
        <div style={{ display: "grid", rowGap: "12px", fontSize: "14px" }}>
          {items.map((item) => (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "32px",
              }}
            >
              <span>{item.title}</span>
              <span>{item.price}₽</span>
            </div>
          ))}
        </div>
      </Block.Content>
      <Block.Footer>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>ИТОГО</span>
          <span style={{ fontSize: "24px", color: "var(--white-inno)" }}>
            {total}₽
          </span>
        </div>
      </Block.Footer>
    </Block>
  );
};
