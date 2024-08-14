import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import FeaturesPage from "./pages/FeaturesPage";
import ServicesPage from "./pages/ServicesPage";
import LoginPage from "./pages/LoginPage";
import ContentCreate from "./pages/ContentCreate";
import Contents from "./pages/Contents";

import NavBar from "./components/NavBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        index: true,
        element: <ServicesPage />,
      },
      {
        path: "features",
        element: <FeaturesPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "content-create",
        element: <ContentCreate />,
      },
      {
        path: "contents",
        element: <Contents />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
