import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./routes/AppLayout.jsx";
import ErrorPage from "./routes/Error-Page.jsx";
import Clientes from "./routes/Clientes";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ClienteId from "./routes/ClienteId";
import Horas from "./routes/HorasPage.jsx";
import TrabajoId from "./routes/TrabajoId";
import Dashboard from "./routes/Dashboard";
import Login from "./routes/Login";
import ProtectedRoute from "./components/ui/ProtectedRoute";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "empleados/horas",
        element: <Horas />,
      },
      {
        path: "clientes",
        element: <Clientes />,
      },
      {
        path: "clientes/:clienteId",
        element: <ClienteId />,
      },
      {
        path: "trabajos/:urlId",
        element: <TrabajoId />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
