/*Start writing Javascript code right away, no head.*/
//Function that adds a string to the console. 
//Use the console tool in the browser to learn basic syntax as well as debugging
console.log("Hello World");
 
//console object has many different methods, use MDN Web Docs
//Example: Creating an error and warning in the console.
/*
console.error("This is an error")
console.warn("This is a warning")
*/

//Three Ways to set a variable
/*
var: Avoid, because var is globally scoped.
let: Ability to reassign values
    - Example: Score for a game
const: Cannot change value to the constant variable
    - Always use const unless it is certain that the value will be changed.
*/

// use ";" after each line of javascript, not mandatory but prefered. 

//Main Datatypes
/*
- Strings
- Numbers
- Boolean
- Null
- Undefined
*/
const name = "John";
const age = 30;
const rating = 4.5 //Registers as a number (no float and integer like Python)
const isCool = true;
const x = null; //No value, empty. typeof function returns type object but that is not true
const y = undefined; //Explictly call it undefined or use let and don't assign value
let z; //Undefined

//typeof function followed by variable name returns the type
console.log(typeof name)

// Concatenation
console.log("My name is " + name + " and I am " + age);

//Template String (Use backtick instead of quotation)
//Use ${} to insert a variable
const hello = `my name is ${name} and I am ${age}`;

//length property for the number of brackets(no brackets)
console.log(name.length);

//toUpperCase method to change the everything to uppercase
console.log(name.toUpperCase());

//Substrings with substring method, passing in two indexes
console.log(name.substring(0,3)); //Does not include final index

//Can use multiple methods
console.log(name.substring(0,2).toUpperCase());

//Splits a string into an array, parameter is the character the seperator.
console.log(name.split(""));

//Arrays - variables that hold multiple values

//Method 1: Constructors (less common)
//anything after keyword "new" is a constructor
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);

//Method 2: 
const fruits = ["apples", "oranges", "pears"]; //Can use multiple data types
//You can change the contents within the array, but not reassign the array itself when const is used

fruits.push("mangoes"); //Appends to the end
fruits.unshift("strawberries"); //Adds it to the beginning  
fruits.pop(); //Removes the last value
console.log(fruits); //Use indexing to access value, Note: arrays are 0 based

console.log(Array.isArray(fruits)); //Returns a boolean based on if the variable is an array or not

console.log(fruits.indexOf("oranges")); //Returns the index

//Object literals are key value pairs
const person = {
    firstName: "John",
    lastName: "Smith",
    age: 30,
    hobbies: ["music", "coding"]
}

console.log(person); //Shows the different values in the object

//Accessing one value
console.log(person.firstName, person.lastName); //Use . syntax, comma to seperate logs
console.log(person.hobbies[1]);

const {firstName, lastName} = person;
//Pulling out the values from the object "person"
console.log(firstName);

person.email = "john@gmail.com"; //Adds the value to the object

//Objects in a list
const todos = [
    {
        id: 1,
        task: "Take out the trash",
        isCompleted: true
    },
    {
        id: 2,
        task: "Meet with personal project mentor",
        isCompleted: true
    },    
    {
        id: 3,
        task: "finish website",
        isCompleted: false
    },
]

//For Loops (3 parameters: assignment of iterator, condition and increment )
for(let i = 0; i <= 10; i++ /*Adds 1 each time*/) { //Seperated by semicolon
    console.log(`For loop number: ${i}`);
}

//While Loops (set variable outside of loop)
let i = 0;
while(i < 10) {
    console.log(`While loop number: ${i}`);
    i++;
}

//Loop through arrays
for(let todo of todos) { //Takes the current value of array and stores in todo
    console.log(todo.id);
    console.log(todo.task);
}

//High order array methods: forEach, map, filter
//forEach takes in a function as the first parameter. 
//The function() function takes in the variable used as each item
todos.forEach(function(todo) {
    console.log(todo.id);
});

//map returns a new array. Assign the variable to the map method. Use return key 
//word to append the value to the new array
let todoTask = todos.map(function(todo) {
    return todo.task;
});

console.log(todoTask);

//filter adds to a new array based on a condition. Returns the first two objects
//if isCompleted is true.
const todoComplete =  todos.filter(function(todo) {
    return todo.isCompleted === true;
});

console.log(todoComplete);

todoTask = todoComplete.map(function(todo){
    return todo.task;
});

console.log(todoTask);

//Conditionals
const is10 = 10;
//double equal solely matches the character, while triple matches the datatype as well
if( is10 === 10) {
    console.log("x  is 10! yay")
} else if( is10 > 10) {
    console.log("x is greater than 10")
} else {
    console.log("x is less than 10:(")
}

//or keyword is represented as ||, and is &&

const random = 10;

//Turnary Operator assigns value based on if the condition is true or false.
//? is then and : is else
const colour = x > 10 ? "red" : "green";

console.log(colour)

//Switches, perform an action based on the value of a variable
switch(colour) {
    case "red":
        console.log("colour is red");
        break; //Break is needed
    
    case "green":
        console.log("colour is green");
        break;
    
    default: //If the other cases are not met
        console.log("colour is not red or green")
}

//Functions
function addNums(num1, num2){
    return num1 + num2
}

//Default values can be added

function subtractNums(num1 = 1, num2 = 1) {
    console.log(num1 - num2) //If no parameters are specified, it will use these values.
};

const sum = addNums(5,4); //Perform the function with the parameters. If there are not parameters,
//it returns NaN (not a number)

console.log(sum);

//Arrow Functions
//Can be done all in one line, no need for curly braces (shorthand)
//return keyword is not needed. 
const addNum = (num1 = 1, num2 = 1) => 
    num1 + num2;

console.log(addNum(5,5));

//DOM/Document Object Model (Manipulating the HTML and CSS Elements)
//Window object is the parent object of the browser
//Any function in the window object does not need to be specified as it is the highest level
console.log(window);

//The document object is going to be used for my purposes
//Selecting Elements 

    //Single Elements
    const form = document.getElementById("my-form"); //Can store in variable
    //When it is console logged, it will appear in the console with its nested elements
    console.log(form);
    //Query Selector obtains the first one that meets the requirements. 
    console.log(document.querySelector("h1"));

    //Multiple Elements
    console.log(document.querySelectorAll(".item")); //Returns node list, which is similar to an array
    console.log(document.getElementsByClassName("item")); //HTML Collection, cannot use array methods
    //Recommended to use querySelector, as it is a newer version 
    console.log(document.getElementsByTagName("li"));

//Obtains each element with class item and logs them.
const items = document.querySelectorAll(".item");
items.forEach((item) => console.log(item));

//Manipulating the DOM/User Interface
const ul = document.querySelector(".items");
//ul.remove() //Removes the list from the UI

ul.lastElementChild.remove() //Removes the last element child from the ui
ul.firstElementChild.textContent = "hello"; //Changes the text content of the first one
ul.children[1].innerText = "Brad"; //From the node list of children, get the index 
//and change that inner text to "Brad"

ul.lastElementChild.innerHTML = "<h4>Hello</h4>"; //Nests the HTML into the element

const btn = document.querySelector(".btn")
btn.style.background = "red" //Changes the styling of the button

//Events
//Two Parameters, the event and the function that is run when the event happens

//btn.addEventListener("click", (e /*Event object parameter */) => {
    /*
    e.preventDefault() //Stop the form from submitting like it would usually
    console.log(e.target) //Gives the element which the event is on, in this case the button.
    //Can get the attributes of the element
    document.querySelector("#my-form").style.background = "#ccc"; //Changes the background of the form when clicked.
    document.querySelector("body").classList.add("bg-dark") //Adds class to the body;
    ul.lastElementChild.innerHTML = "<h1>Hello</h1>"
})
//hover event is "mouseover", "mouseout" is when the cursor enters then leaves the element.
*/
//Create a usable form

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

//Takes in the event parameter
function onSubmit(e) {
    e.preventDefault()
    //To test, you can log the element with .value 

    //Form Validation, to check if either inputs are empty.
    if(nameInput.value === '' || emailInput.value === "") {
        //Adds the error class to the message, and displays the message. After 3 seconds, it disappears
        msg.classList.add("error");
        msg.innerHTML = "Please Enter all fields";
        setTimeout(() => msg.remove(), 3000);
    } else {
        //Creates a list element
        const li = document.createElement("li");
        //Appends text to the list item as a child
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        //Appends the list inside the user list 
        userList.appendChild(li);

        //Clear Fields
        nameInput.value = "";
        emailInput.value = "";
    }
}

//This only appends to the UI and does not save when the page reloads
