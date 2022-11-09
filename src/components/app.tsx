import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { OtherPage } from "./pages/OtherPage/OtherPage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/other" element={<OtherPage />} />
    </Routes>
  );
};
