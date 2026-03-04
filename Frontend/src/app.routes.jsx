import {createBrowserRouter} from "react-router"
import Register from "./Features/auth/pages/Register"
import Login from "./Features/auth/pages/Login"

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element:<Register />
    }
])

