import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../category/Category";
import NewsLayout from "../Main/NewsLayout";
import News from "../pages/News/News";
import LoginLayout from "../Main/LoginLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";


const router = createBrowserRouter([
  {
    path: '/',
    element:<LoginLayout></LoginLayout>,
    children:[
      {
        path:'/',
        element:<Navigate to="/category/0"></Navigate>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'register',
        element:<Register></Register>
      }
    ]
  },
    {
      path: "category",
      element: <Main></Main>,
      children:[
        // {
        //     path:"/",
        //     element:<Category></Category>,
        //     loader:() => fetch(`http://localhost:5000/news/`)
        // },
        {
          path:':id',
          element:<Category></Category>,
          loader:({params})=>fetch(`http://localhost:5000/categories/${params.id}`)
        }
      ],
    
    },
    {
      path:'news',
      element:<NewsLayout></NewsLayout>,
      children:[
        {
          path:':id',
          element:<News></News>,
          loader:({params})=>fetch(`http://localhost:5000/news/${params.id}`)
        }
      ]
    }
  ]);

  export default router;