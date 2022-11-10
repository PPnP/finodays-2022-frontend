import { ILayout } from "./interfaces";
import { NavBar } from "../NavBar";
import { ContentWrapper, LayoutWrapper } from "./styles";
import { useLocation } from "react-router-dom";

export const Layout: React.FC<ILayout> = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <LayoutWrapper>
      <ContentWrapper>{children}</ContentWrapper>
      {pathname === "/" ? <NavBar /> : null}
    </LayoutWrapper>
  );
};

export default Layout;
