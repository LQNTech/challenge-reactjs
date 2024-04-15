import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Index } from "./views/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
