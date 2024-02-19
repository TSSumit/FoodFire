import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import Footer from "./components/Footer.js";
import SignIn from "./components/signIn.js";
import LogIn from "./components/logIn.js";
import Profile from "./components/Profile.js";
import RestaurentMenues from "./components/RestaurentMenues.js";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";

const AppLayout= ()=>{
    return (
        <div className="app">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />,
                children: [
                    {
                      path: "profile", 
                      element: <Profile />
                    }
                ]
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurent/:resId",
                element: <RestaurentMenues/>
            },
            {
                path:"/login",
                element:<LogIn/>
            },
            {
                path:"/signin",
                element:<SignIn/>
            }
        ]
    },
    

])
const root=ReactDOM.createRoot(document.getElementById("root"));
// console.log(<)
root.render(<RouterProvider router={appRouter}/>);
// root.render(<About/>);

