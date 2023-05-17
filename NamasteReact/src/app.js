import React, { lazy, Suspense } from "react";
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
import Form from "./Components/Form.js";
import Profile from "./Components/Profile.js";
import Shimmer from "./Components/Shimmer";

//Never ever do lazy loading inside a component
const Instamart = lazy( () => import('./Components/instamart.js'));

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
                element : <About />,
                children : [
                    {
                        path : "profile",
                        element : <Profile />
                    }
                ]
            },
            {
                path : "/contact",
                element : <Contact />
            },
            {
                path : "/restaurant/:resId",
                element : <RestaurantMenu />
            },
            {
                path : "/form",
                element : <Form />
            },
            {
                path : "/instamart",
                element : (
                    <Suspense fallback={<Shimmer type="thumbnail"/>}>
                        <Instamart />
                    </Suspense>
                )
            }

        ],
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <RouterProvider router = {appRouter} /> );