Namaste React

...

#Parcel

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

Assignments:

    Episode 1

    Q.1) What is emmet ?
    -    Emmet is a free add-on for your text editor that allows you to type shortcuts that are then expanded into full pieces of code.

    Q.2) What is CDN? Why do we use it?
    - A content delivery network (CDN) is a network of interconnected servers that speeds up webpage loading for data-heavy applications. CDN can stand for content delivery network or content distribution network. When a user visits a website, data from that website's server has to travel across the internet to reach the user's computer. If the user is located far from that server, it will take a long time to load a large file, such as a video or website image. Instead, the website content is stored on CDN servers geographically closer to the users and reaches their computers much faster.
    The primary purpose of a content delivery network (CDN) is to reduce latency, or reduce the delay in communication created by a network's design. Because of the global and complex nature of the internet, communication traffic between websites (servers) and their users (clients) has to move over large physical distances. The communication is also two-way, with requests going from the client to the server and responses coming back.
    A CDN improves efficiency by introducing intermediary servers between the client and the website server. These CDN servers manage some of the client-server communications. They decrease web traffic to the web server, reduce bandwidth consumption, and improve the user experience of your applications.

    Q.) React vs. React DOM
    -   React: React is a javascript library, designed for building better user interfaces.
        React-DOM: React-DOM is a complimentary library to React which glues React to the browser DOM
        In a nutshell, Whenever we use component, classes, elements, etc. We’re using React and whenever we use methods like render() or findDOMNode() we’re using React-DOM.

    Q.) What is Parcel? Why do we use it?

    - When developing a site or web application, it’s good practice to separate your code into smaller, more manageable chunks. In production, requesting all of your resources individually can slow down your application. A bundler is a tool used to solve this latency issue by combining and merging your code into a single file. This limits the amount of HTTP requests to a server for those resources. Using a bundler is useful for optimizing the experience for both the user and developer.
    Parcel.js is an open-source bundler. It supports many popular languages like Typescript and SASS, and can also handle file types like images and fonts. Parcel comes with a few extra tools built-in: a development server, diagnostics, minification, and even image compression. If your project requires additional configurations, you have the option to use Parcel’s many plugins.

    .parcel-cache folder : The .parcel-cache folder holds information about your project and is used by Parcel to rebuild your application. When you make changes to your files, Parcel will detect those changes and re-run your build with these files instead of starting from scratch.

    dist folder : The other folder, dist, holds the dynamically generated files that Parcel created for you. Notice that this folder includes your HTML, CSS, and JavaScript files, but are all named index with random characters in between. It also includes .map files. Parcel generates what is called a source map for you when you use the npx parcel command. The source map tells the browser how to locate the original source code from your bundled code. It is used to assist with debugging your code in development and in production.



    
