import { createHashRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import Page from './page'
import Index from "../pages/index";
import Info from '../pages/Info'

const router = createHashRouter(
    createRoutesFromElements(
        <Route path='/' element={<Page />} >
            <Route index element={<Index />} />
            <Route path='/info' element={<Info />} />
        </Route>
    )
)

export default function App() {
    return (
        <RouterProvider router={router} />
    )
}