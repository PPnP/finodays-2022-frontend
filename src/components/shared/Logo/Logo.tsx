import { LogoParams } from "./interfaces";
import { Img } from "./styles";

export const Logo: React.FC<LogoParams> = ({ src }) => <Img src={src} alt="" />;
