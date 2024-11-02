import { createBrowserRouter } from "react-router-dom";
import Landing from "./component/landingPage/Landing";
import Layout from "./layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [{ path: "/", element: <Landing></Landing> }],
  },
]);
