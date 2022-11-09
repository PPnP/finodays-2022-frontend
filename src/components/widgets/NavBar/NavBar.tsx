import { memo } from "react";

import { NavBarWrapper, NavLinkStyled } from "./styles";

export const NavBar: React.FC = () => {
  return (
    <NavBarWrapper>
      <NavLinkStyled
        to="/"
        style={({ isActive }) =>
          isActive ? { textDecoration: "underline" } : undefined
        }
      >
        landing
      </NavLinkStyled>
      <NavLinkStyled
        to="/other"
        style={({ isActive }) =>
          isActive ? { textDecoration: "underline" } : undefined
        }
      >
        other
      </NavLinkStyled>
      <NavLinkStyled
        to="/"
        style={({ isActive }) =>
          isActive ? { textDecoration: "underline" } : undefined
        }
      >
        landing
      </NavLinkStyled>
    </NavBarWrapper>
  );
};

export default memo(NavBar);
