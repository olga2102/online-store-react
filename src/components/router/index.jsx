import { createBrowserRouter } from "react-router-dom";

import Root from "./Root";

import Main from "../pages/main";
import Login from "../pages/login";
import Logout from "../pages/logout";
import Catalog from "../pages/catalog";
import ErrorPage from "../pages/error-page";
import ProductPage from "../pages/product-page";
import Basket from "../pages/basket-page";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Main />
        },
        {
            path: "/login",
            element: <Login />
        },
        {
          path: "/logout",
          element: <Logout />
      },
        {
            path: "/catalog",
            element: <Catalog />
        },
        {
          path: "/catalog/:productId",
          element: <ProductPage />,
        },
        {
          path: "/basket",
          element: <Basket />
      },
    ]
    }
  ]);

  export default router;