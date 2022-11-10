import { ReactComponent as TinkoffLogo } from "../../../assets/cards/tinkoff.svg";
import { SelectCardParams } from "./interfaces";

import { CardButton } from "./styles";

export const SelectCard: React.FC<SelectCardParams> = ({ card, setCard }) => {
  return (
    <>
      <CardButton
        icon={<TinkoffLogo style={{ marginTop: 20, marginBlock: 8 }} />}
        onClick={() => setCard(0)}
        selected={card === 0}
      >
        ****0345
      </CardButton>
      <CardButton
        icon={<TinkoffLogo style={{ marginTop: 20, marginBlock: 8 }} />}
        onClick={() => setCard(1)}
        selected={card === 1}
      >
        ****1563
      </CardButton>
    </>
  );
};
