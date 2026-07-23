import Authentication from "../pages/Authentication";
import Course from "../pages/Course";
import Kategory from "../pages/Kategory";
import Home from "../pages/Home";
import Payment from "../pages/Payment";
import { createBrowserRouter } from "react-router-dom";
import { Component } from "react";


export const router = createBrowserRouter ([
    {
        path: "/",
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "auth",
                Component: Authentication
            },
            {
                path: "/course/:id",
                Component: Course,
            },
            {
                path: "kategory" ,
                Component: Kategory
            },
            {
                path: "/course/:id/payment",
                Component: Payment
            }
        ]
    }
])
