import { createHashRouter } from "react-router-dom";
import InitialPage from "./pages/InitialPage";

export const router = createHashRouter([
  {
    path: '/',
    index: true,
    element: <InitialPage />
  }
])