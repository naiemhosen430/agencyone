import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Service from "../Pages/Services/Service";
import OurClient from "../Pages/OurClient/OurClient";
import AboutUS from "../Pages/AboutUs/AboutUS";
import FAQ from "../Pages/FAQ/FAQ";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/client",
        element: <OurClient />,
      },
      {
        path: "/aboutus",
        element: <AboutUS />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
