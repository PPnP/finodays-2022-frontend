import { Block } from "../../shared/Block";
import { StatParams } from "./interfaces";
import { Analytics, Description, Title } from "./styles";

export const Stat: React.FC<StatParams> = ({
  title,
  description,
  showAnalytics = false,
  className,
}) => {
  return (
    <Block className={className}>
      <>
        {showAnalytics ? (
          <Analytics>
            <div style={{ backgroundColor: "#9747FF", width: "17.5%" }} />
            <div style={{ backgroundColor: "#8CA2EB", width: "5%" }} />
            <div style={{ backgroundColor: "#CADD57", width: "13.5%" }} />
            <div
              style={{ backgroundColor: "var(--blue-inno)", width: "64%" }}
            />
          </Analytics>
        ) : null}
        <Title>{title}</Title>
        <Description>{description}</Description>
      </>
    </Block>
  );
};
