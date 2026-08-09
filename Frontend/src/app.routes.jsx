import {createBrowserRouter} from "react-router"
import Register from "./Features/auth/pages/Register"
import Login from "./Features/auth/pages/Login"
import LandingPage from "./Features/landing/pages/LandingPage"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element:<Register />
    }
])

