import { PpayProLogoParams } from "./interfaces";
import { OutlinedText, PpayProLogoWrapper } from "./styles";

export const PpayProLogo: React.FC<PpayProLogoParams> = ({ className }) => {
  return (
    <PpayProLogoWrapper className={className}>
      PPAY <OutlinedText>PRO</OutlinedText>
    </PpayProLogoWrapper>
  );
};
