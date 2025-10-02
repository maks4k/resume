import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./AppLayout";
import { Routes } from "@/constants/routes";
import { AboutPage } from "@/pages/AboutPage";
import { ContactsPage } from "@/pages/ContactsPage";
import { RouterProvider } from "react-router";
import { ProductsPage } from "@/pages/ProductsPage";
import { HelloAnimation } from "@/components/welcome/ui/HelloAnimation";

// src/app/AppRouter.jsx
const router = createBrowserRouter([
  {
    path: Routes.ANIMATION,          
    element: <HelloAnimation />,
  },
  {
    element: <AppLayout />,       
    children: [
      {
        path: Routes.ABOUT,    
        element: <AboutPage />,
      },
      {
        path: Routes.CONTACTS,
        element: <ContactsPage />,
      },
      {
        path: Routes.PRODUCTS,
        element: <ProductsPage />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router}/>    ;
};
