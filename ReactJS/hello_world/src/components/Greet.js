import React from 'react'

//function components//
//function Greet(){
//    return <hi>Hi, John</hi>
//}

//const Greet = () => <h1>Hi, John. This is function component</h1>                       //arrow functions  (main start code)

//props for function components = properties//
/*const Greet = props => {                                                  //returning only one value
    console.log(props);
    return <h1>Hello, {props.name} aka {props.heroName}</h1>
}*/

const Greet = props => {                                                    //returning multiple values like children
    console.log(props);
    return (
        <div>
            <h1>Hello function, {props.name} aka {props.heroName}</h1>
            {props.children}
        </div>
    )
}

//export const Greet = () => <h1>Hi, John</h1>    //named exports

export default Greet                              //default exports














