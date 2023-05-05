import Blog from '../Components/Blog/Blog';
import ChefDetails from '../Components/ChefDetails/ChefDetails';
import Error from '../Components/Error/Error';
import Gallery from '../Components/Gallery/Gallery';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';
import Training from '../Components/Training/training';
import Home from '../Home/Home';
import Main from '../Layout/Main/Main';
import {
  createBrowserRouter,
} from "react-router-dom";
import Recipe from '../Recipe/Recipe';
import PrivateRoute from '../PrivateRoute/PrivateRoute';





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
          path:"/gallery",
          element: <Gallery></Gallery>
        },
        {
          path:"/chefDetails/:id",
          element: <ChefDetails></ChefDetails>
        },
        {
          path:"/training",
          element: <Training></Training>
        },
       {
        path: "/recipe/:id",
        loader: async ({params}) => {
          return fetch(`https://mexican-cheifs-server-mehedi001.vercel.app/chefData/${params.id}`)
        },
        element: <PrivateRoute><Recipe></Recipe></PrivateRoute>,
        
       }
        
      ]
    },
    {
      path:"*",
      element: <Error></Error>
    }
  ]);


  export default router;
