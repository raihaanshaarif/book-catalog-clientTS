import App from "@/App";
import Books from "@/Pages/Home/Books/Books";
import Home from "@/Pages/Home/Home/Home";
import ProductDetail from "@/Pages/ProductDetail";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product-details/:id",
        element: <ProductDetail />,
      },
      {
        path: "/books",
        element: <Books />,
      },
    ],
  },
]);
