import { createHashRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import Page from './page'

const router = createHashRouter(
    createRoutesFromElements(
        <Route path='/' element={<Page />} />
    )
)

export default function App() {
    return (
        <RouterProvider router={router} />
    )
}