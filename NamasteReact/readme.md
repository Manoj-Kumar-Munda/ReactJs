Namaste React

...

**Parcel**

- Dev build
- Local server
- HMR - Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent hashing
- Code splitting
- Differential bundling - support older browsers
- Diagnostic
- Error handling
- HTTPS
- Tree Shaking - remove unused code
- Different dev and prod bundles



**Structure of FoodDelivery App**
*Header
    - Logo
    - nav-items
*Body
    - Search
    - Resturant container
        -Resturant cards
            - Img
            - name of res., rating, cuisine ,delivery time
*Footer
    - Copyright
    - Links
    - Address
    - Contact


**Two types of import/export**

- Default export/import

export default Component;
import Component from "path";

- Named Export/Import

export const Component;
import {Component} from "path"

....

**React Hooks**

- ( Normal JS Utility functions )

- useState() 
    - Super powerful react state variables.
    - react gives us useState to create local state variable inside a functional component,so never declare a state variable outside a functional  component.
    - It should not be called inside a for loop or if-else.




**React Routers**

-   There are two kinds of routing:
    - i.) Client-side routing
    - ii.) Server-side routing

-   If you want to create nested routes then you have to use <Outlet />
-   All the childrens inside the router variable goes into the outlet component.

***Important components***
- createBrowserRouter
- RouterProvider
- Outlet

***Formik***
It is an npm package that is used for - 
- i.) Managing the form state
- ii.) Handling form submissions
- iii.) Validation and error messages
