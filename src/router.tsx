import { createHashRouter } from "react-router-dom";
import InitialPage from "./pages/InitialPage";
import CartPage from "./pages/CartPage";
import FinalizeOrder from "./pages/FinalizeOrder";

export const router = createHashRouter([
  {
    path: '/',
    index: true,
    element: <InitialPage />
  },
  {
    path: '/cart',
    element: <CartPage />
  },
  {
    path: '/finalize',
    element: <FinalizeOrder />
  }
])
