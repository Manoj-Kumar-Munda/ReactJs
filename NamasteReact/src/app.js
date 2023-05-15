import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header.js"
import Body from "./Components/Body.js";
import { createBrowserRouter , RouterProvider} from "react-router-dom";
import { Outlet } from "react-router-dom";
import About from "./Components/About.js";
import Error from "./Components/Error.js"
import Footer from "./Components/Footer.js";
import Contact from "./Components/Contact.js";
import RestaurantMenu from "./Components/RestaurantMenu.js";

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path :"/",
        element : <AppLayout />,
        errorElement : <Error />,
        children : [
            {
                path : "/",
                element : <Body />
            },
            {
                path : "/about",
                element : <About />
            },
            {
                path : "/contact",
                element : <Contact />
            },
            {
                path : "/restaurant/:resId",
                element : <RestaurantMenu />
            }

        ],
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <RouterProvider router = {appRouter} /> );