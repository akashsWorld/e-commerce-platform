import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootPage from "./RootPage";
import Home,{loader as homeLoader} from "./pages/Home";



const router= createBrowserRouter([
  {
    path:'/',
    element:<RootPage/>,
    children:[
      {
        index:true,
        element:<Home/>,
        loader: homeLoader
      }
    ]
  }
])



const App = () => {

  

  return (
    <RouterProvider router={router}/>
  );
};

export default App;
