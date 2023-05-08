


Q.) What is npm?
    - Node Package Manager (NPM) is a command line tool that installs, updates or uninstalls Node.js packages in your application. It is also an online repository for open-source Node.js packages. The node community around the world creates useful modules and publishes them as packages in this repository.

Q.) What is Parcel? Why do we use it?

    - When developing a site or web application, it’s good practice to separate your code into smaller, more manageable chunks. In production, requesting all of your resources individually can slow down your application. A bundler is a tool used to solve this latency issue by combining and merging your code into a single file. This limits the amount of HTTP requests to a server for those resources. Using a bundler is useful for optimizing the experience for both the user and developer.
    Parcel.js is an open-source bundler. It supports many popular languages like Typescript and SASS, and can also handle file types like images and fonts. Parcel comes with a few extra tools built-in: a development server, diagnostics, minification, and even image compression. If your project requires additional configurations, you have the option to use Parcel’s many plugins.

    .parcel-cache folder : The .parcel-cache folder holds information about your project and is used by Parcel to rebuild your application. When you make changes to your files, Parcel will detect those changes and re-run your build with these files instead of starting from scratch.

    dist folder : The other folder, dist, holds the dynamically generated files that Parcel created for you. Notice that this folder includes your HTML, CSS, and JavaScript files, but are all named index with random characters in between. It also includes .map files. Parcel generates what is called a source map for you when you use the npx parcel command. The source map tells the browser how to locate the original source code from your bundled code. It is used to assist with debugging your code in development and in production.

Q.) What is '.parcel-cache'?

    - The .cache folder (or .parcel-cache in parcel v2) stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode. I think committing it to git would be a bad idea - it would add a large number of (unnecessary) changes to your commit history, and it could easily get out-of-sync with the code that generated it.

Q.) What is npx?

   - NPX stands for Node Package eXecute. It is simply an NPM package runner. It allows developers to execute any Javascript Package available on the NPM registry without even installing it. NPX is installed automatically with NPM version 5.2.0 and above.
   The primary use case of NPX  is when we need to use a particular package just once. In such cases, first installing it and then executing it becomes a very redundant task. This is why NPX is a powerful tool. 

Q.) What is the difference between 'dependencies' and 'devDependencies'?

    - Dependencies: In package.json file, there is an object called dependencies and it consists of all the packages that are used in the project with its version number. So, whenever you install any library that is required in your project that library you can find it in the dependencies object. 
    e.g: npm install moment

    Dev Dependencies: In package.json file, there is an object called as dev Dependencies and it consists of all the packages that are used in the project in its development phase and not in the production or testing environment with its version number. So, whenever you want to install any library that is required only in your development phase then you can find it in the dev Dependencies object. 
    e.g: npm install bootstrap --save-dev
Q.) What is tree shaking?

    - In production builds, Parcel statically analyzes the imports and exports of each module, and removes everything that isn't used. This is called "tree shaking" or "dead code elimination".

Q.) What is Hot Module Replacement?

    - Hot Module Replacement is a feature that enables you to see code changes in the browser without having to refresh it, allowing you to preserve the state of your front-end application.

Q.) 