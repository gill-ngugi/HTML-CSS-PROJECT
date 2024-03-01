// JS CONCEPTS 
// Read on regex

x = 1 + 2
console.log(x);

y = '300' + '2500'
console.log(y);

const myNumber = 1;
e^10
myNumber.toExponential(3);
myNumber.toFixed(2);
myNumber.toString();

const myString = "Australia";
myString.toUpperCase();
myString.toLowerCase();
myString.startsWith("A"); //returns true or false
myString.endsWith("j"); //returns true or false
myString.includes('A'); //returns true or false
myString.toUpperCase().startsWith("A");

let myString2 = "hello"
myString2.slice(0,3); //Returns hel
myString2.split("e"); //['h', 'llo']
myString2.substr(2,2); //'ll'
myString2.substr(2,3); //llo

const num = '1';
Number(num); //Returns 1 as a number not a string

const myList =  [1, 2, 3, 4, 5];
myList.length; //Returns 5
myList[2]; //returns 3

//Push adds and pop removes to the end of an array
myList.pop();
myList.push("add_end");
//Shift removes the first item on the list.
//Unshift add the first item on the list.
myList.shift();
myList.unshift("add_beginning");

const person = {"name": "Goodness", "age": "19", "town": "Perth"};
person['name']; //Goodness
person['age']; //19
person.town; // Perth

const message = "The universe is expanding at a fast pace.";
message.split(" ");
// Returns ["The", "universe", "is" , ...];
message.includes("The universe"); // Returns true
message.includes("The universe") && message.includes("Gillian");// Returns false
