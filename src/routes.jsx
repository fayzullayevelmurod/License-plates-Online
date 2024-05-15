import { Route, Routes } from "react-router-dom";
import { Card, Home, PersonalArea, SellNumber } from "./pages";

export const AppRoutes = () => (
  <Routes>
    {routes.map((route) => (
      <Route key={route.path} path={route.path} element={route.element} />
    ))}
  </Routes>
);

const routes = [
  { path: "/", element: <Home /> },
  { path: "/card", element: <Card /> },
  { path: "/personal-area", element: <PersonalArea /> },
  { path: "/sel-number", element: <SellNumber /> },
];
