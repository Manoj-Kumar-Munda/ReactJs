import { Component } from "react";
import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";

const About = () => {
    return (
        <div>
            <h1>About us Page</h1>
            <p>This is the namaste react live course Chapter-07 finding the path</p>
            <Outlet />
        </div>

    )

}


/*
class About extends Component {

    constructor(props){
        super(props);
        console.log("Parent constructor");
    }

    componentWillUnmount(){
        console.log("ComponentWillUnmount");
    }

    componentDidMount(){
        
        console.log("Parent mount");
    }
  
  render() {
    console.log('parent render')
    return (
      <div>
        <h1>About us Page</h1>
        <p>This is the namaste react live course Chapter-07 finding the path</p>
        <ProfileClass name = {"First"}  greet = "Hello"/>
        <ProfileClass name = {"Second"} greet = "Namaste"/>

      </div>
    );
  }
}
*/

export default About;
