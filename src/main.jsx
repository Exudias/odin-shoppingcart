import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import routes from "./routes";
import "./index.css";
import Header from "./components/Header";
import { CartProvider } from "./components/CartProvider";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router}>
        <Header />
        <Outlet />
      </RouterProvider>
    </CartProvider>
  </React.StrictMode>
);
