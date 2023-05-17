import { Component } from "react";


class ProfileClass extends Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0
        };
        console.log(this.props.name+" child constructor");
    }

    componentDidMount(){
        console.log(this.props.name+" child mount");
    }

    render(){
        const {count} = this.state;
        console.log(this.props.name+" Child render");
        return(
            <div>
                <p>Count :{count}</p>
                <h1>This is a class based component</h1>
                <h2>Profile Section</h2>
                <h3>Name : {this.props.name}</h3>
                <button onClick={() => {
                    this.setState({ count : 2})
                }}>CLick</button>
                
            </div>
        )
    }
}

export default ProfileClass;