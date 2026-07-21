import Authentication from "../pages/Authentication";
import Course from "../pages/Course";
import Kategory from "../pages/Kategory";
import Home from "../pages/Home";

import { createBrowserRouter } from "react-router-dom";


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
                path: "/Course/:id",
                Component: Course
            },
            {
                path: "kategory" ,
                Component: Kategory
            }
        ]
    }
])
