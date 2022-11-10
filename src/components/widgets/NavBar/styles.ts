import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { NavLink, NavLinkProps } from "react-router-dom";

export const NavBarWrapper = styled.nav`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: var(--max-width);
  /* width: 268px; */
  border-radius: var(--border-radius);
  background-color: var(--black);
`;

export const NavLinkStyled = styled(NavLink)<
  NavLinkProps & { active: boolean }
>`
  padding: 4px 18px;
  text-decoration: none;
  color: var(--brand-color);

  ${({ active }) =>
    !active &&
    css`
      svg path {
        fill: var(--gray-inno);
      }
    `}
`;
