import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Dashboard from "./pages/dashboard/Dashoard"
import { Theme } from "@radix-ui/themes";
import RootLayout from "./layouts/RootLayout";
import ManageAds from "./pages/dashboard/ManageAds";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Products from "./pages/Products";

const echoFarmsRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element:<Login/>
  },
  {
    path: "/sign-up",
    element: <SignUp/>
  },

  {
    path: "/Products",
    element: <Products/>
  },
  // {
  //   path: "*",
  //   element: <NotFound/>
  // },
  {
    path: "/dashboard",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
        {
          path: 'manage-ads',
          element:<ManageAds/>
        },
      //   {
      //     path: 'genres',
      //     element:<GenresPage/>
      //   }
    ]
  }

])

export default function App() {
  return (
    <>
  
        <RouterProvider router={echoFarmsRoutes} />
     

    </>
  )
}