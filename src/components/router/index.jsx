import { createBrowserRouter } from "react-router-dom";

import Root from "./Root";

import Main from "../pages/main";
import Login from "../pages/login";
import Catalog from "../pages/catalog";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <div>ERROR 404</div>,
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
            path: "/catalog",
            element: <Catalog />
        }
    ]
    }
  ]);

  export default router;