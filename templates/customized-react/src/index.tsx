import React from "react";
import ReactDOM from "react-dom/client";
import { HomePage, AuthPage, ErrorPage, CustomPage } from "./pages";
import "./styles/global.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    // This is the home page with the path "/"
    path: "/",
    element: <HomePage />,
    // This is the error page where if the route is not found, it will render this page
    errorElement: <ErrorPage />,
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
  {
    // This is the custom page with the path "/custom/:id" where ":id" is a parameter
    path: "/custom/:id",
    element: <CustomPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
