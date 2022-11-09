import { ILayout } from "./interfaces";
import { NavBar } from "../NavBar";
import { ContentWrapper, LayoutWrapper } from "./styles";

export const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <LayoutWrapper>
      <ContentWrapper>{children}</ContentWrapper>
      <NavBar />
    </LayoutWrapper>
  );
};

export default Layout;
