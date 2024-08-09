import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import FeaturesPage from "./pages/FeaturesPage";
import ServicesPage from "./pages/ServicesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ServicesPage />,
  },
  {
    path: "/features",
    element: <FeaturesPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
