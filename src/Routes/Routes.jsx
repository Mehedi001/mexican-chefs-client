import Blog from '../Components/Blog/Blog';
import ChefDetails from '../Components/ChefDetails/ChefDetails';
import Error from '../Components/Error/Error';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';
import Home from '../Home/Home';
import Main from '../Layout/Main/Main';
import {
  createBrowserRouter,
} from "react-router-dom";





const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path:"/blog",
          element: <Blog></Blog>
        },
        {
          path:"/login",
          element: <Login></Login>
        },
        {
          path:"/register",
          element: <Register></Register>
        },
        {
          path:"/chefDetails/:id",
          element: <ChefDetails></ChefDetails>
        }
      ]
    },
    {
      path:"*",
      element: <Error></Error>
    }
  ]);


  export default router;
