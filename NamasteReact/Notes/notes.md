- React Components
    When you’re using React you start by dividing your site into smaller components. For a news site, this could be a header, a search bar and an article with title, image and text. You build your different components separately and then assemble them in a main file.

- JSX
    As previously mentioned, HTML is what structures your website (the skeleton), and it’s written in its own file. With React, you can use something called JSX which allows you to bring HTML into your JavaScript files and build components that consist of both.
    JSX accepts something called “props” (properties) which make it possible to insert custom data into the components. In our newspaper example, this means we can use the article component as a kind of template but then add unique props like title, image and text to create different articles for our news.

- Virtual DOM
   There is something called the DOM, which is the programming interface for HTML documents. It represents the data on a web page   and  makes it possible to change what we see on it. When you’re using JSX, React creates something called a Virtual DOM which is a copy of the actual DOM. It compares the data on both places and only replaces the thing in the DOM that is different, like a comment being added, a button being pressed etc. It may not sound like a big deal, but when you have a lot of things constantly changing on a site, this selective updating results in way better loading time and computing power.

Q.) What is '.parcel-cache'?

    - The .cache folder (or .parcel-cache in parcel v2) stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode. I think committing it to git would be a bad idea - it would add a large number of (unnecessary) changes to your commit history, and it could easily get out-of-sync with the code that generated it.

Q.) What is npx?

- NPX stands for Node Package eXecute. It is simply an NPM package runner. It allows developers to execute any Javascript Package available on the NPM registry without even installing it. NPX is installed automatically with NPM version 5.2.0 and above.
  The primary use case of NPX is when we need to use a particular package just once. In such cases, first installing it and then executing it becomes a very redundant task. This is why NPX is a powerful tool.

Q.) What is the difference between 'dependencies' and 'devDependencies'?

    - Dependencies: In package.json file, there is an object called dependencies and it consists of all the packages that are used in the project with its version number. So, whenever you install any library that is required in your project that library you can find it in the dependencies object.
    e.g: npm install moment

    Dev Dependencies: In package.json file, there is an object called as dev Dependencies and it consists of all the packages that are used in the project in its development phase and not in the production or testing environment with its version number. So, whenever you want to install any library that is required only in your development phase then you can find it in the dev Dependencies object.
    e.g: npm install bootstrap --save-dev

Q.) What is tree shaking?

    - In production builds, Parcel statically analyzes the imports and exports of each module, and removes everything that isn't used. This is called "tree shaking" or "dead code elimination".

Q.) What is Hot Module Replacement?

    - Hot Module Replacement is a feature that enables you to see code changes in the browser without having to refresh it, allowing you to preserve the state of your front-end application.

Q.) What are React hooks?

    - React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component. Hooks can be stateful and can manage side-effects.
    React provides a bunch of standard in-built hooks:

    - useState: To manage states. Returns a stateful value and an updater function to update it.
    - useEffect: To manage side-effects like API calls, subscriptions, timers, mutations, and more.
    - useContext: To return the current value for a context.
    - useReducer: A useState alternative to help with complex state management.
    - useCallback: It returns a memorized version of a callback to help a child component not re-render unnecessarily.
    - useMemo: It returns a memoized value that helps in performance optimizations.
    - useRef: It returns a ref object with a .current property. The ref object is mutable. It is mainly used to access a child                 component imperatively.
    - useLayoutEffect: It fires at the end of all DOM mutations. It's best to use useEffect as much as possible over this one as the useLayoutEffect fires synchronously.
    - useDebugValue: Helps to display a label in React DevTools for custom hooks.
