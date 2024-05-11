import './App.scss'; // adding scss to the app.
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

//creating a router using a react dom.
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

//this function uses outlet function 
function HomeLayout (){
  return(
    <div> 
     <Header />
      <Outlet />
     <Footer />
    </div>

  )
}

//This holds up the routing and pages that setup.
function App() {


  return (
    <div className='App-container'>
        <RouterProvider router={router} />
    </div>
  )
}

export default App
