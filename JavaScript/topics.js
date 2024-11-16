//Closure, Hoisting, temporial dead zone, strict mode,
//Arrow Function, Promises, prototype, notations, asynchronous js, event bubbling,  generator functions, callbacks
//weakmap in js, rest parameters, isnan function, typecasting, 
//this, filter, map, reduce, let, const, default parameters, template literals, object literals, rest&spread operator, destructuring assignment

//JS is a 'Dynamically typed language'

//Closure = a function defined inside of another function
//          the inner function has access to the variables and scope of the outer function
function outer(){                                   //example 1 - print message
    let message = "Hi";   
    function inner(){
        console.log(message);
    }
    inner();
}
outer();


function createCounter(){                           //example 2 - get the count
    let count = 0;
    function increment(){
        count++;
        console.log(`count increased to ${count}`);                 //count increased to 1
    }
    function getCount(){                                          //if we want to get the count for that separate function
        return count;
    }
    return {increment, getCount};                                 //if we want to return multiple values use{} brackets
}
const a = createCounter();
a.increment();                                                      //count increased to 1
a.increment();                                                      //count increased to 2
a.increment();                                                      //count increased to 3
console.log(`the current count ${a.getCount()}`);                   //the current count 3


function createGame(){                                 //example 3 - get score game                
    let score = 0;
    function increaseScore(points){
        score += points;
        console.log(`+${points}pts`);                 //template string - values inside this ``(back ticks), 
    }
    function decreaseScore(points){
        score -= points;
        console.log(`-${points}pts`)
    }
    function getScore(){
        return score;
    }
    return {increaseScore, decreaseScore, getScore};
}
const game = createGame();
game.increaseScore(2);
game.increaseScore(3);
game.decreaseScore(2);
console.log(`final score ${game.getScore()}pts`);


//Hoisting = Its a default behaviour of JS where all the variable & function are moved to the top 
//where ever the variable & function are declared it is moved to top of the scope
//variable declaration is moved not the variable initalization
//only var can be used in hoisting, let & const can't be used
hoistedVariable = 2;
console.log(hoistedVariable);          //3 ex1
var hoistedVariable;

hoistedFunction();
function hoistedFunction(){    
    console.log("hello");              //hello ex2
}

function doSomething(){                //hoisting takes place in local scope
    x = 23;
    console.log(x);                    //23
    var x;
}

"use strict";                       //to avoid hosting use "use strict"    strict mode
x = 23;                            //gives an error since 'x' is not declared
var x;
//Strict Mode = in strict mode we cannot use undeclared variables
"use strict";  
var x;                     
x = 43;                            


//Temporial dead zone = its a concept in JS related to hoisting of variables & visibility of 'let & const' variables
//until the code is executed the variable doesnot have any use
console.log(a);   //error
a = 33;
//let a;          //error


//Arrow Functions = 

