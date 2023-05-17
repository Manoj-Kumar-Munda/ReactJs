**Assignments - 1**

Q.1) What is emmet ?
 -    Emmet is a free add-on for your text editor that allows you to type shortcuts that are then expanded into full pieces of code.

Q.2) Difference between a library and a framework?
 -   Library is like building your home from the ground up. The house can be made in any style you prefer and the rooms can be arranged and decorated however you like. Framework, on the other hand, is like buying a new home. The house is already built, so you don’t have to worry about building problems, but you can’t choose how the rooms are arranged.
 In developing applications, libraries and frameworks play a key role. Essentially, both the library and the Framework are reusable pieces of code written by developers to solve complicated problems.
 ...To be written

Q.3) What is CDN? Why do we use it?
 - A content delivery network (CDN) is a network of interconnected servers that speeds up webpage loading for data-heavy applications. CDN can stand for content delivery network or content distribution network. When a user visits a website, data from that website's server has to travel across the internet to reach the user's computer. If the user is located far from that server, it will take a long time to load a large file, such as a video or website image. Instead, the website content is stored on CDN servers geographically closer to the users and reaches their computers much faster.
 The primary purpose of a content delivery network (CDN) is to reduce latency, or reduce the delay in communication created by a network's design. Because of the global and complex nature of the internet, communication traffic between websites (servers) and their users (clients) has to move over large physical distances. The communication is also two-way, with requests going from the client to the server and responses coming back.
 A CDN improves efficiency by introducing intermediary servers between the client and the website server. These CDN servers manage some of the client-server communications. They decrease web traffic to the web server, reduce bandwidth consumption, and improve the user experience of your applications.

Q.4) Why is React known as React?
 - React is called "React" because of its core feature, which is its ability to "react" or respond dynamically to changes in data. React was originally created by Facebook in 2011 for use in their own web applications, and it was released as an open-source project in 2013.
 React's primary goal is to simplify the creation of complex, interactive user interfaces by breaking them down into smaller, reusable components. These components are built using a declarative syntax that allows developers to describe what the interface should look like at any given moment, and React takes care of efficiently updating the DOM (Document Object Model) as needed when the data changes.
 The name "React" also reflects the fact that the library is built around the concept of a unidirectional data flow, where changes in data flow down through the component hierarchy, triggering updates and re-renders as necessary. This approach helps to avoid common issues with two-way data binding, such as performance problems and hard-to-debug code.


Q.5) What is cross-origin in the script tag?
 - The crossorigin attribute sets the mode of the request to an HTTP CORS Request. Web pages often make requests to load resources on other servers. Here is where CORS comes in. A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.

Q.6) React vs. React DOM
 - React: React is a javascript library, designed for building better user interfaces.
   React-DOM: React-DOM is a complimentary library to React which glues React to the browser DOM
   In a nutshell, Whenever we use component, classes, elements, etc. We’re using React and whenever we use methods like render() or findDOMNode() we’re using React-DOM.

Q.6) What are the differences between react.development.js and react.production.js files via CDN?
 - The main difference between react.development.js and react.production.js files via CDN is that react.development.js is minified and  optimized for development, while react.production.js is minified and optimized for production.

 react.development.js is larger and slower than react.production.js because it includes debugging tools and source maps, which are helpful for developers while they are working on their React applications. However, these tools and maps can make the React application slower, so they should not be used in production.

 react.production.js is smaller and faster than react.development.js because it does not include debugging tools and source maps. This makes the React application faster, which is important for production environments.

 Here are some additional details about the differences between react.development.js and react.production.js:

 - react.development.js includes debugging tools, such as console.log() and debugger statements. These tools can be helpful for developers while they are working on their React applications, but they can make the React application slower.
 - react.development.js includes source maps, which can be helpful for developers who are debugging React applications. Source maps allow developers to see the original source code of a React component, which can be helpful for understanding why a React component is behaving the way it is.
 - react.production.js does not include debugging tools or source maps. This makes the React application faster, which is important for production environments.
 
In general, you should use react.development.js while you are developing your React application and react.production.js when you deploy your React application to production.