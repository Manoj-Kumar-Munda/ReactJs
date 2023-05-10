import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement('h1', {id : "heading"}, "I am a h1 tag");

//React Element
const Title = () => (
     <h1 id="heading">Namaste React using JSX</h1>
);

const Title2 = () => {
    return <h1>This is heading 2</h1>
}

/*React Functional Component
A function that returns a React Element(JSX) is a functional component.
We will prefer functional component over class component in this tutorial
*/

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h2>{100 + 200}</h2>
    <h1>Namste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);