import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import { RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes';
import AuthProvider from './Components/AuthProvider/AuthProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthProvider>
<RouterProvider router={router} />
</AuthProvider>
  </React.StrictMode>,
)
