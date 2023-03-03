import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import NotFound from "../pages/NotFound";
import ProjectAdd from "../pages/ProjectAdd";
import ProjectList from "../pages/ProjectList";



export default createBrowserRouter([
    {
        path:'/',
        element: <Layout/>,
        errorElement:<NotFound />,
        children:[
            {
                index:true,
                element: <ProjectList />
            },
            {
                path:'projects/new',
                element:<ProjectAdd/>
            }
        ]
    }
])