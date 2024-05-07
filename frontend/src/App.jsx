import './App.scss'
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Header from "./components/header";
import Footer from "./components/footer";

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <HomeLayout />,
    children:[
    {
      path: "/home",
      element: <Home />,
    },
   
  ]

  }
]);

function HomeLayout (){
  return(
    <div> 
     <Header />
      <Outlet />
     <Footer />
    </div>

  )
}

function App() {


  return (
    <div className='App-container'>
        <RouterProvider router={router} />
    </div>
  )
}

export default App
