import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Dashboard from "./pages/dashboard/Dashoard"
import { Theme } from "@radix-ui/themes";
import RootLayout from "./layouts/RootLayout";
import ManageAds from "./pages/dashboard/ManageAds";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails"
import Trials from "./pages/trials";
import AdForm from "./pages/dashboard/AdForm";
import ProductsPage from "./pages/products/ProductPage";
import AdvertsForm from "./pages/AdvertsFrom";
import NotFound from "./pages/NotFoundPage";


const echoFarmsRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/sign-up",
    element: <SignUp />
  },

  {
    path: "/products",
    element: <Products />
  },

  {
    path: "product-details",
    element: <ProductDetails />
  },
  {
    path: "/trials",
    element: <Trials />
  },
   {
    path: "/products-page",
    element: <ProductsPage/>
  },
  {
    path: "/adverts-form",
    element: <AdvertsForm/>
  },

  {
    path: "*",
    element: <NotFound/>
  },

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
        element: <ManageAds />
      },
      {
        path: 'ad-form',
        element: <AdForm />
      },
      // {
      //   path: '/notFound',
      //   element: <NotFound/>
      // },
     
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