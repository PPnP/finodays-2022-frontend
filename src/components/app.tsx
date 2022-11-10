import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { CashierMain } from "./pages/CashierMain/CashierMain";
import { QRShowPage } from "./pages/QRShowPage/QRShowPage";
import { CashierCheckout } from "./pages/CashierCheckout/CashierCheckout";
import { CashierQRScan } from "./pages/CashierQRScan/CashierQRScan";
import { CashierLoyalty } from "./pages/CashierLoyalty/CashierLoyalty";
import { CachierSuccess } from "./pages/CachierSuccess/CachierSuccess";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/qr" element={<QRShowPage />} />
      <Route path="/cashier" element={<CashierMain />} />
      <Route path="/cashier/checkout" element={<CashierCheckout />} />
      <Route path="/cashier/scan" element={<CashierQRScan />} />
      <Route path="/cashier/loyalty" element={<CashierLoyalty />} />
      <Route path="/cashier/success" element={<CachierSuccess />} />
    </Routes>
  );
};
