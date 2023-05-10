import React from "react";
import ReactDOM from "react-dom/client";

const LeftLogo = () => (
  <div className="left">
    <h2>Namaste React</h2>
  </div>
);

const SearchBar = () => (
  <div className="middle">
    <input type="text" id="search-bar" placeholder="Search" />
    <button id="search">Search</button>
  </div>
);

const User = () => (
  <div className="right">
    <span>
      <i className="fa fa-user"></i>
    </span>
  </div>
);

const HeaderComponent = () => (

    <div className="navbar">
        < LeftLogo />

        < SearchBar />

        < User />

    </div>
    
        
        
    
);

const root = ReactDOM.createRoot(document.getElementById("header"));
root.render(<HeaderComponent />);
