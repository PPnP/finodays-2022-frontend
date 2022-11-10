import { BeatLoader } from "react-spinners";
import { LoaderParams } from "./interfaces";

export const Loader: React.FC<LoaderParams> = ({ className }) => {
  return <BeatLoader className={className} color="#1449F5" />;
};
