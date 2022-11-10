import { IndicatorParams } from "./interfaces";
import { IndicatorWrapper } from "./styles";

export const Indicatior: React.FC<IndicatorParams> = ({
  className,
  children,
}) => {
  return <IndicatorWrapper className={className}>{children}</IndicatorWrapper>;
};
