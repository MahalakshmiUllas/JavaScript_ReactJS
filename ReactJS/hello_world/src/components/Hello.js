//functional class with and without JSX
import React from "react";

const Hello = () => {
    /*return(                                   //with JSX
        <div className = "dummyClass">
            <h1>Hi John, with JSX</h1>
        </div>
    )*/

    return React.createElement('div',                    //without JSX
        {id:'hello', className:'dummyClass'},            //2nd parameter is the object of key value pair that will be applied to element                                       
        React.createElement('h1', null, "Hi John, without JSX")             //if we want an id attribute on <div> tag, check by inspect on browser
    )
}

export default Hello