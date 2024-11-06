import { createBrowserRouter } from "react-router-dom";
import Landing from "./component/landingPage/Landing";
import ProductDetils from "./component/shreadPage/ProductDetils";
import Layout from "./layout/Layout";
import AddCart from "./component/cartPage/AddCart";
import Products from "./component/productsPage/Products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      { path: "/", element: <Landing></Landing> },
      { path: "/product", element: <Products></Products>},
      {
        path: "/productDetils/:id",
        element: <ProductDetils></ProductDetils>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
      {
        path:'/addCart',
        element:<AddCart></AddCart>,
        loader:()=> fetch('http://localhost:5000/informa')
      }
    ],
  },
]);
