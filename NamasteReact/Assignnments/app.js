import React from "react";
import ReactDOM from "react-dom/client";


// const headElement = React.createElement('h1',{},
// [React.createElement('h2',{},'This is a h2 tag'),
//     React.createElement('h3',{},'This is a h3 tag')]);


const Title = () => ( 
        <h1>
            This is a h1 tag
        </h1>
);

const TitleComponent = () => (
    <>
        < Title />
        <h2>This is a h2 tag</h2>
        <h3>This is a h3 tag</h3>
    </>
    
);

const root = ReactDOM.createRoot(document.querySelector('.title'));
root.render( <TitleComponent /> );
