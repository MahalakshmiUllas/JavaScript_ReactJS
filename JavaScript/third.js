//objects and keywords        
//method = functions attached to objects
const user = {                                  //object
    name: 'John',
    age: '20',
    purchase: ['laptop','phone','airpods']
}
console.log(user.purchase)                      //['laptop','phone','airpods']
const aa = user.name
console.log(aa)                                 //John
const bb = user.purchase[1]
console.log(bb)                                 //phone


function apples(){
    console.log("10 apples");  // present in window object 
}
apples()
//THIS 
console.log(this);             //'this' window object = contains multiple methods or functions 


const user1 = {
    name: 'Max',
    age: '21',
    purchase: ['pant','shirt','shoes'],

    sayName: function(){
        console.log(this);              //{name: 'Max', age: '21', purchase: Array(3), sayName: ƒ}
        console.log(this.name);         //Max
        const cc = this.age;            
        console.log(cc);                //21
    }
};
user1.sayName()                         //when the function gets invoked then only the value to the left of dot(.) will be assigned to 'this'


function sayAge(){
    console.log(`my age is ${this}`);   //my age is [object Window] (nothing is there lect of the function called/invoked)
}
sayAge()


//loops
//for on loops are used most of the times
const names = ['Harry','Potter','Emily','David','Lilly'];
for (nam of names){                                        //'for of' will give the values in the array
    console.log(nam);                                      //Harry,Potter,Emily,David,Lilly
    console.log(`hi there ${nam}`);                        //hi there Harry, hi there Potter,...
}

for (na of names){
    if(na === 'Emily'){
        console.log(`${na} is on the list`)                //Emily is on the list & all the values in the list till end will be printed 
    }
}

for (n of names){
    if(n === 'Emily'){                                     //once we find Emily then stop the loop, break is used
        console.log(`${n} is on the list`);                //Emily is on the list
        break;                                             //to break out of loop as soon as we find the given value                  
    }       
}

const digits = [0,1,2,3,4,5,6,7,8,9];
for(digit of digits){
    if(digit % 2 === 0){
        console.log(digit);                                //0,2,4,6,8
        continue;                                          //to continue till the end even taugh we find the given value
    }
}

let obj={a:1, b:2}   
for( const key in obj){
    console.log(obj[key]);                              //1 and 2
    console.log(key);                                   //a and b
}

for (nam1 in names){                                       //'for in' gives the index of the element in the array
    console.log(nam1);                                     //0,1,2,3,4
    if(nam1 === 2){
        console.log(`${nam1} is on the list`);
        break;
    }
}

//very important: iterate through object in for loop we have to use 'for in' mainly
let profile = {
    name : "Naphtali",
    age : 24,
    favCar : "Mustang",
    favDrink : "Baileys"
    }

for(let keys in profile){                         //Getting the keys/property
    console.log(`The key of my object property is ${keys}`)                         //The key of my object property is name
  }

for(let keys in profile){                           //Getting the values of the property
    console.log(`The value of my object property is ${profile[keys]}`)              //The value of my object property is Naphtali
}

for(let keys in profile){                                         //Getting both keys and values
    console.log(`The keys of my object is ${keys} and its value is ${profile[keys]}`)        //The keys of my object is name and its value is Naphtali
}


console.log("--------------------------------------------");

const cars = ['Volvo', 'BMW', 'Ford', 'Fiat', 'Audi'];
let text = ""
for (let i = 0; i<cars.length; i++){
    text += cars[i];
    //console.log(text);                                    //Volvo/n VolvoBMW/n VolvoBMWFord/n VolvoBMWFordFiat/n VolvoBMWFordFiatAudi
    console.log(cars[i]);                                 //Volvo/n BMW/n Ford/n Fiat/n Audi
}
// or we can write in another method 
const cars1 = ["BMW", "Volvo", "Ford"];
let i, len, text1;
for (i = 0, len = cars1.length, text1 = ""; i < len; i++){
    text += cars[i];
    console.log(cars[i]);                                    //Volvo/n BMW/n Ford
}


//while loop
let loading = 0;
while(loading < 10){
    console.log(`it's loading for time`);                  //10 it's loading for time
    //console.log(`it's loading for ${loading} time`);     //prints every time in next line as we are printing the number
    loading++;
}

//do while
let i1=0;
do{
    console.log(i1)                                     //0 1 2 3 4 5 6 7 8 9
    i++;
}while(i1 <= 10)


//iterate over one object inside another object
//how to convert object to array
//how to check an empty object in js 