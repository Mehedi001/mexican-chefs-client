import Blog from '../Components/Blog/Blog';
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
        }
      ]
    }
  ]);


  export default router;
