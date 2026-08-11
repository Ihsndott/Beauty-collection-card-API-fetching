import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Notfound from './Notfound'
import Contact from './Contact'
import About from './About'
import Product from "./Product";
import Addtocart from "./Addtocart"
//import App from './App.jsx'

const router = createBrowserRouter([
  {
     path: '/',
     element:<Layout/>,
     errorElement:<Notfound/>,
     children:[
      {
        index:true,
        element:<Product/>
      },
      {
        path:"Contact",
        element:<Contact/>
      },
      {
        path:"About",
        element:<About/>
      },
      {
        path:"Addtocart",
        element:<Addtocart/>
      }
     ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="bg-[#d3b3d5] min-h-screen">
    <RouterProvider router={router}></RouterProvider>
    </div>
  </StrictMode>,
)
