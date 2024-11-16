//string concatination
console.log("Hello "+"World");       //Hello World

//console.log('hello it's me');     //error to change that put '\' escape character
console.log('hello it\'s me') ;      //hello its me
console.log("hello it's me");        //hello its me (inside double quotes)

const name1 = 'John';
const age = 20;
console.log("hi it's me " + name1 + " and my age is " + age)   //hi it's me John and my age is 20

console.log(`hi it's me ${name1}`);        //hi it's me John (easy method)
console.log(`hi its me ${name1} and my age is ${age}`);        //hi it's me John and my age is 20

const a1 = 'John';
const b1 = 20;
const c1 = a1+b1;
console.log(c1)                            //John20
console.log(typeof a1);                    //typeof() is used to get the type of the variable //string
console.log(typeof b1);                    //number
console.log(typeof c1);                    //string


//if else 
const age1 = 15;
if(age1 > 18){
    console.log("good to go..!");
} 
else if(age1 < 15){
    console.log("you are very younf");
} 
else if(age1 === 18){
    console.log("just landed");
}
else{
    console.log("you are young");
}


const dice1 = 3;
const dice2 = 6;
if(dice1 === 6 && dice2 === 6){                     //&& and operator
    console.log("rolled a double")
} 
else{
    console.log("you didn't")
}


const dice3 = 4;
const dice4 = 5;
if(dice3 === 4 || dice4 === 5){                     //|| or operator
    console.log("any one condition is true");
}
else{
    console.log("both condition is not true");
}


//arrays
const schedule = ["abc", "def", "ghi", "jkl"]
console.log(schedule)                                      //['abc', 'def', 'ghi', 'jkl', 'mno']
console.log(schedule[0])                                   //abc


const learn = ["ghi", "jkl", "mno"]
learn.push("pqr")                                       //push() to add new element in array(at last)
console.log(learn)                                      //['ghi', 'jkl', 'mno', 'pqr']

learn.pop()                                             //pop() to remove element in array(at last)
console.log(learn)                                      //['ghi', 'jkl', 'mno']

learn.shift()                                           //shift() to remove/delete 1st element in array
console.log(learn)                                      //['jkl', 'mno']

learn.unshift("abc")                                    //unshift() to add 1st element in array
console.log(learn)                                      //['abc', 'jkl', 'mno']

const learning = learn.indexOf('jkl')                   //indexOf() is used to get the index of the element
console.log(learning)                                   //1
console.log(learn[learning])                            //jkl gets the value of the element











