import { ButtonParams, ButtonVariant } from "./interfaces";
import { ButtonStyled } from "./styles";

export const Button: React.FC<ButtonParams> = ({
  icon,
  variant = ButtonVariant.DEFAULT,
  className,
  children,
}) => {
  return (
    <ButtonStyled variant={variant} className={className}>
      {icon ? <span>{icon}</span> : null}
      <span>{children}</span>
    </ButtonStyled>
  );
};
