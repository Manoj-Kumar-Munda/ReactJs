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

- useState() - Super powerful react state variables
- useEffect()