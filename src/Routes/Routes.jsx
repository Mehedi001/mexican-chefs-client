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
        }
        
      ]
    },
    {
      path:"*",
      element: <Error></Error>
    }
  ]);


  export default router;
