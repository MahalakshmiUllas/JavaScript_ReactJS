import React, {Component} from "react";

//state = is an object privately maintained by component
class Message extends Component{
    constructor(){
        super()
        this.state = {
            message: 'Kudoos, Good learning'
        }
    }

    changeMessage(){
        this.setState({
            message:'Thank you for subscribing'
        })                         //this method accepts objects, the new state of the component
    }

    render(){                                   //returning multiple lines so enclose with <div> tag
        return(                                 //added handler to the button inside{}
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>      
            </div>
        ) 
    }
}


export default Message