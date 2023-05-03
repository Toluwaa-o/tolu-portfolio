import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import Page from './page'
import Error from "../pages/Error";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Page />} errorElement={<Error />} />
    )
)

export default function App() {
    return (
        <RouterProvider router={router} />
    )
}