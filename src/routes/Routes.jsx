import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "../contexts/AuthProvider";
import PrivateRoutes from "./PrivateRoutes";
import Login from "../pages/Login";
import Signup from "../pages/Signup.1";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  // PAGINAS PRINCIPALES
  { path: "/", element: <Login /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/home", element: <PrivateRoutes route={<Home />} /> },
  // PAGINAS DEL NAVBAR
  { path: " /products", element: <PrivateRoutes route={<Products />} /> },
  { path: "/about", element: <PrivateRoutes route={<About />} /> },
  { path: "/contact", element: <PrivateRoutes route={<Contact />} /> },

  { path: "/*", element: <h1>404 Not Found</h1> },
]);

const Routes = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default Routes;
