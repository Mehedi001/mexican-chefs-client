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
          return fetch(`http://localhost:5000/chefData/${params.id}`)
        },
        element: <Recipe></Recipe>,
        
       }
        
      ]
    },
    {
      path:"*",
      element: <Error></Error>
    }
  ]);


  export default router;
