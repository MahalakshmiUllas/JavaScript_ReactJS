const text = document.querySelector(".title");
const changeColor = document.querySelector(".changeColor");
const text1 = document.querySelector(".title1");
const text2 = document.querySelector(".title2");


text.style.color = 'green';
text.style.backgroundColor = 'yellow';

text1.classList.add("change");        //to add the class from css file 
//text1.classList.remove("change");

//event listener is a function that gets executed based on what the event is(eg: click, scroll etc..) and takes 2 parameters
changeColor.addEventListener("click", function(){                   //here the function is called call back function, it gets executed once the event occurs
    //text2.classList.add("change1");
    text2.classList.toggle("change1");                          //the activity will toggle once we click on the button
});


const userList = document.querySelectorAll(".name-list li");         // we used querySelectorAll() bcz we want all(individual) values that is inside <ul>
for(user of userList){
    user.addEventListener("click", function(){
        this.style.color = 'red';
    });
}


const userList1 = document.querySelector(".name-list");             // we used querySelector() bcz we are getting the whole <ul>
const listInput = document.querySelector(".input-list");
const addList = document.querySelector(".addListBtn");

addList.addEventListener("click", function(){
    //Create an li 
    const newLi = document.createElement("LI");                    //createElement() this lets us create any element we want(eg: button, li, p etc..)
    const liContent = document.createTextNode(listInput.value);  //createTextNode() creates a text box where we can input the value 
                                                                   //listInput.value dynamically getting input text value directly to insernt to li
    //add the input value inside the new li 
    newLi.appendChild(liContent);                                  //appendChild() appends the content 
    //attaching the li to the userlist1
    userList1.appendChild(newLi);
});


//getElementById
