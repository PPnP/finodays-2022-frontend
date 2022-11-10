import {
  BlockContentParams,
  BlockHeaderParams,
  BlockParams,
} from "./interfaces";
import {
  BlockContent,
  BlockHeader,
  BlockHeaderSeparator,
  BlockWrapper,
} from "./styles";

const _Block: React.FC<BlockParams> = ({ className, children }) => {
  return <BlockWrapper className={className}>{children}</BlockWrapper>;
};

const Header: React.FC<BlockHeaderParams> = ({ className, children }) => {
  return (
    <BlockHeader className={className}>
      {children}
      <BlockHeaderSeparator />
    </BlockHeader>
  );
};

const Content: React.FC<BlockContentParams> = ({ className, children }) => {
  return <BlockContent className={className}>{children}</BlockContent>;
};

const Footer: React.FC<BlockHeaderParams> = ({ className, children }) => {
  return (
    <BlockHeader className={className}>
      <BlockHeaderSeparator />
      {children}
    </BlockHeader>
  );
};

export const Block = Object.assign(_Block, { Header, Content, Footer });
