import { createBrowserRouter } from "react-router-dom";
import Landing from "./component/landingPage/Landing";
import Product from "./component/productsPage/Product";
import ProductDetils from "./component/shreadPage/ProductDetils";
import Layout from "./layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      { path: "/", element: <Landing></Landing> },
      { path: "/product", element: <Product></Product> },
      {
        path: "/productDetils/:id",
        element: <ProductDetils></ProductDetils>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
    ],
  },
]);
