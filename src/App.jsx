import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import RootLayout from "./pages/Root.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "product/:id", element: <ProductDetails /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
