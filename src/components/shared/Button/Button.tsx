import { ButtonParams, ButtonSize, ButtonVariant } from "./interfaces";
import { ButtonStyled } from "./styles";

export const Button: React.FC<ButtonParams> = ({
  icon,
  variant = ButtonVariant.DEFAULT,
  size = ButtonSize.MEDIUM,
  className,
  style,
  children,
  onClick,
}) => {
  return (
    <ButtonStyled
      variant={variant}
      size={size}
      className={className}
      style={style}
      onClick={onClick}
    >
      {icon ? <span>{icon}</span> : null}
      <span>{children}</span>
    </ButtonStyled>
  );
};
