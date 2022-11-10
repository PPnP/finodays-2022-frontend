import { memo } from "react";

import { ReactComponent as HomeIcon } from "../../../assets/icons/home.svg";
import { ReactComponent as WidgetsIcon } from "../../../assets/icons/widgets.svg";
import { ReactComponent as CardsIcon } from "../../../assets/icons/cards.svg";

import { NavBarWrapper, NavLinkStyled } from "./styles";
import { useLocation } from "react-router-dom";

export const NavBar: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <NavBarWrapper>
      <NavLinkStyled to="/" active={pathname === "/"}>
        <HomeIcon />
      </NavLinkStyled>
      <NavLinkStyled to="/" active={pathname === "/"}>
        <WidgetsIcon />
      </NavLinkStyled>
      <NavLinkStyled to="/" active={pathname === "/"}>
        <CardsIcon />
      </NavLinkStyled>
    </NavBarWrapper>
  );
};

export default memo(NavBar);
