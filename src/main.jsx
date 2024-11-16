import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./Route";
import "./index.css";
import Cursor from "./provider/Cursor";
import Provider from "./provider/Provider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <Cursor>
        <RouterProvider router={router} />
      </Cursor>
    </Provider>
  </React.StrictMode>
);
