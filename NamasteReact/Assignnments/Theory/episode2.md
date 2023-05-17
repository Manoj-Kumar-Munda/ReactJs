**Assignment 2**

Q.1) What is NPM?
- Node Package Manager (NPM) is a command line tool that installs, updates or uninstalls Node.js packages in your application. It is also an online repository for open-source Node.js packages. The node community around the world creates useful modules and publishes them as packages in this repository.

Q.2) What is 'Parcel'? Why do we need it?
- When developing a site or web application, it’s good practice to separate your code into smaller, more manageable chunks. In production, requesting all of your resources individually can slow down your application. A bundler is a tool used to solve this latency issue by combining and merging your code into a single file. This limits the amount of HTTP requests to a server for those resources. Using a bundler is useful for optimizing the experience for both the user and developer.
Parcel.js is an open-source bundler. It supports many popular languages like Typescript and SASS, and can also handle file types like images and fonts. Parcel comes with a few extra tools built-in: a development server, diagnostics, minification, and even image compression. If your project requires additional configurations, you have the option to use Parcel’s many plugins.
<ul>
<li>.parcel-cache folder : The .parcel-cache folder holds information about your project and is used by Parcel to rebuild your application. When you make changes to your files, Parcel will detect those changes and re-run your build with these files instead of starting from scratch.
</li>
<li>
dist folder : The other folder, dist, holds the dynamically generated files that Parcel created for you. Notice that this folder includes your HTML, CSS, and JavaScript files, but are all named index with random characters in between. It also includes .map files. Parcel generates what is called a source map for you when you use the npx parcel command. The source map tells the browser how to locate the original source code from your bundled code. It is used to assist with debugging your code in development and in production.
</li>
</ul>