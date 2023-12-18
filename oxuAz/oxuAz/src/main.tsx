import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home.tsx";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Siyaset from "./pages/Siyaset/Siyaset.tsx";
import { store } from "./config/store.tsx";
import { Provider } from "react-redux";
import Iqtisadiyyat from "./pages/Iqtisadiyyat/Iqtisadiyyat.tsx";
import Cemiyyet from "./pages/Cemiyyet/Cemiyyet.tsx";
import SouBiznes from "./pages/SouBiznes/SouBiznes.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "siyaset",
        element: <Siyaset />,
      },
      {
        path: "iqtisadiyyat",
        element: <Iqtisadiyyat />,
      },
      {
        path: "cemiyyet",
        element: <Cemiyyet />,
      },
      {
        path: "soubiznes",
        element: <SouBiznes />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
