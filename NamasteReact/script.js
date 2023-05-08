import React from "react";
import ReactDOM  from "react-dom/client";

// const heading = React.createElement('h1', {id : "heading"}, "I am a h1 tag");

const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(jsxHeading);