import React, {Component} from "react";

//class components//
/*class Welcome extends Component{                              //1st start code example
    render(){
        return <h1>Class Components</h1>
    }
}*/

//props for class components = properties//
class Welcome extends Component{
    render(){
        return <h1>Hello class, {this.props.name} aka {this.props.heroName}</h1>
    }
}


export default Welcome