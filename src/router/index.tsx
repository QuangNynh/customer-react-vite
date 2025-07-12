import DefaultLayout from "@/layout/DefaultLayout";
import LoginPage from "@/layout/Login";
import AccountBalance from "@/pages/account-balance";
import AccountList from "@/pages/account-list";
import CardSettings from "@/pages/card-settings";
import Dashboard from "@/pages/dashboard";
import { Navigate, Outlet } from "react-router-dom";

export const routesOutlets = [
  {
    element: (
      <DefaultLayout>
        <Outlet />
      </DefaultLayout>
    ),
    children: [
      {
        path: "/",
        index: true,
        element: <></>,
      },
      {
        path: "dashboard",
        element: (
          // <ProtectedRoute roles={[PERMISSIONS.ADMIN]}>
          <Dashboard />
          // </ProtectedRoute>
        ),
      },
      {
        path: "sub-account",
        element: <></>,
      },
      {
        path: "/member/account-list",
        element: <AccountList />,
      },
      {
        path: "/member/account-balance",
        element: <AccountBalance />,
      },
      {
        path: "/member/card-settings",
        element: <CardSettings />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <Navigate replace to="/" />,
  },
];
