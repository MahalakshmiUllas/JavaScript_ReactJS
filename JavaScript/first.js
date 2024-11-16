//printing
console.log("running 1st Js")  //running 1st Js
console.log(1+2)               //3

//variables
var a = 100;
var b = 'Maha';
console.log(a);               //100

var c = 10;                   //once declared we can change the value, use the same variable for multiple times
console.log(c);               //10
c = c - 1;
console.log(c);               //9
c = c - 1; 
console.log(c);               //8
c = c * 2;
console.log(c)                //16

var d = true;
console.log(d)                //true

var e;
console.log(e);               //undefined

var f = null;
console.log(f)                //null


const g = 100;               //once declared we cannot change the value
console.log(g)               //100
//const g = 1000;
//console.log(g)               //error bcz 'g' is already declared once, we cannot do that in const type 


let h = 100;
console.log(h)              //100 
h = h - 50;                 //same variable but we can change the value of the variable in let type
console.log(h)              //50


//functions and parameters
const name = "Maha";
function logger(){
    console.log("Good start")  //Good start 
}
logger()


const fname = "Max";           //global variable
function scopeCheck(){
    const lname = "John"       //function variable or scope
    console.log("checking if the variable scope is available inside function"); //prints the value
    console.log(fname);       //Max
    console.log(lname);        //John
}
scopeCheck()
//console.log(lname)            //error bcz the variable is inside the func and cannot be called outside 
console.log(fname);           //Max


const num1 = 20, num2 = 30;
function add(){
    console.log("adding numbers...", num1+num2);    //adding numbers... 50
    console.log(num1+num2);                         // 50
}
add()


function addition(add1, add2){
    console.log(add1+add2);                         //30

    const result = add1+add2;
    console.log(result);                            //30
}
addition(10,30);


const uname = 'Mahalakshmi'
const sname = 'ullas'
function toUpper(text){
    const upperCased = text.toUpperCase();          //toUpperCase() converts to upper case
    console.log(upperCased);                        //MAHALAKSHMI //ULLAS
}
toUpper(uname)
toUpper(sname)


const vname = 'SECOND'
const tname = 'SESSION'
function toLower(text1){
    console.log(text1.toLowerCase());           //second //session  
    const lowerCased = text1.toLowerCase();     //toLowerCase() converts to lower case
    console.log(lowerCased);                    //second //session
}
toLower(vname)
toLower(tname)


//another way of defining function
const upper = function(x,y){
    console.log(x+y);
}
upper(2,3)


const good1 = 'Maha';
function greet(){
    return `hello ${good1}!`
}
let ss = greet();
console.log(ss);                    //this is how we print the return value inside function


function outer(){                       //closure 
    var state = 'rabbit';
    function inner(){
        return `hello ${state}`;
    }
    return inner;
}
var rr = outer();
console.log(rr);


//function declaration
function greet(good){
    return `hello ${good}`;
}

//function expression
const good2 = function(good){
    return `hello, ${good}`;
}

//arrow function
const good3 = (good) => `hello, ${good}`;

