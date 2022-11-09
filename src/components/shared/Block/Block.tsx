import { BlockHeaderParams, BlockParams } from "./interfaces";
import { BlockHeader, BlockHeaderSeparator, BlockWrapper } from "./styles";

const _Block: React.FC<BlockParams> = ({ className, children }) => {
  return <BlockWrapper className={className}>{children}</BlockWrapper>;
};

const Header: React.FC<BlockHeaderParams> = ({ children }) => {
  return (
    <BlockHeader>
      {children}
      <BlockHeaderSeparator />
    </BlockHeader>
  );
};

export const Block = Object.assign(_Block, { BlockHeader: Header });
