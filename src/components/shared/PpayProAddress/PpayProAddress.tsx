import { PpayProAddressParams } from "./interfaces";

export const PpayProAddress: React.FC<PpayProAddressParams> = ({
  orgName,
  address,
  className,
}) => {
  return (
    <div className={className}>
      {orgName}
      <br />
      {address}
    </div>
  );
};
