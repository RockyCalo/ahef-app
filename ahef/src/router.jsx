import { Navigate, createBrowserRouter } from "react-router-dom";
import Children from "./category/Children";
import Adolescent from "./category/Adolescent";
import Adult from "./category/Adult";
import AhefDefaultLayout from "./components/AhefDefaultLayout";
import Patients from "./category/patients";


const  router = createBrowserRouter([
    {
        path: '/',
        element: <AhefDefaultLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to='/patients' />
            },
            {
                path: '/patients',
                element: <Patients />,
            },
            {
                path: '/children',
                element: <Children />,
            },
            {
                path: '/adolescent',
                element: <Adolescent />
            },
            {
                path: '/adult',
                element: <Adult />
            }
        ]
    }
])

export default router;
