import QRCode from "react-qr-code";
import { useNavigate } from "react-router-dom";

import { ReactComponent as ChevronLeft } from "../../../assets/icons/chevron-left.svg";
import { useGetQRQuery } from "../../../redux/api";

import { ButtonSize, ButtonVariant } from "../../shared/Button";
import { Loader } from "../../shared/Loader";
import { Layout } from "../../widgets/Layout";
import { BrandWrapperFullWidth } from "../CachierSuccess/styles";
import { ButtonStyled, LoaderWrapper, QRWrapper } from "./styles";

export const QRShowPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    data: qrValue,
    error,
    isLoading,
  } = useGetQRQuery("123e4567-e89b-12d3-a456-426655440000");

  return (
    <Layout>
      <ButtonStyled
        variant={ButtonVariant.SECONDARY}
        size={ButtonSize.SMALL}
        icon={<ChevronLeft />}
        onClick={() => navigate("/")}
      >
        Назад
      </ButtonStyled>
      <div />
      <div />
      <div />
      {!isLoading && qrValue ? (
        <BrandWrapperFullWidth>
          <QRWrapper>
            <QRCode
              size={256}
              viewBox={`0 0 256 256`}
              style={{ height: "auto", width: "100%", display: "block" }}
              value={qrValue}
              bgColor="#fff"
              fgColor="#000"
            />
          </QRWrapper>
        </BrandWrapperFullWidth>
      ) : (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}
    </Layout>
  );
};
