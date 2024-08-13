import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import FeaturesPage from "./pages/FeaturesPage";
import ServicesPage from "./pages/ServicesPage";
import LoginPage from "./pages/LoginPage";
import ContentCreate from "./pages/ContentCreate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ServicesPage />,
  },
  {
    path: "/features",
    element: <FeaturesPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/content-create",
    element: <ContentCreate />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
