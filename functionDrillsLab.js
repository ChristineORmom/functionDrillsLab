/*
  Some of the following questions will ask you to use
  arrow function syntax. On the problems that don't,
  feel free to practice with any syntax.
*/


////////////////// PROBLEM 1 ////////////////////
/*
  Create a function called helloWorld which simply console logs 'Hello, World!'
  Call the function.
*/
function helloWorld() {
  console.log('Hello, World')
}
helloWorld()



////////////////// PROBLEM 2 ////////////////////

/*
    Write an arrow function called 'jsNinja' that returns the string: 'I am a JavaScript ninja!'
*/
const jsNinja = () => 'I am a JavaScript ninja.'


////////////////// PROBLEM 3 ////////////////////
/*
  Create a function called printName which takes in a person's name and console logs it.
  Ex. If 'Cameron' were passed in as the argument, Cameron would be console logged.
  Call the function, passing in an argument.
*/  

function printName (name) {
  console.log(name)
}

printName('Cameron')


////////////////// PROBLEM 4 ////////////////////
/*
  Create a function called greeting that
  accepts name as its only parameter.
  Convert the name param into a string.
  greeting should log the string 'Hello, '
  plus the value of the name parameter.
  Ex. If Jake were passed in as the argument, the function would log 'Hello, Jake'
  Make sure to call your function and pass in an argument.
*/

function greeting(name) {
  name = String(name)
  console.log(`Hello, ${name}`)
}

greeting('Dave')

////////////////// PROBLEM 5 ////////////////////

/*
    Write an arrow function called 'compareNums' that takes in 2 parameters, 
    which will be numbers. 
    The function should return the bigger number. 
    If the numbers are the same, just return the number.

    Brownie points if you use a ternary statement (only spend significant time on this if you have wiggle room)
*/

const comparesNumbers = (num1, num2) => {
  if (num1 > num2) {
      return num1
  } else {
    return num2
  }s
}

  
  

////////////////// PROBLEM 6 ////////////////////
/*
  Create a function called add that takes in two parameters 
  Inside, convert the arguments to be numbers (just in case strings get sent in)
  The add function should RETURN the two parameters added together.
  Create a variable outside the function called 'sum' and set it equal to add invoked (called), passing in 2 arguments.
*/

function add (num1, num2) {
  num1 = +num1
  num2 = +num2 
  return num1 + num2 
}

let sum = add(10, 20)
  





////////////////// PROBLEM 7 ////////////////////

/*
  Which syntax was used to create the function below?
  Uncomment the answer underneath.
*/

const exclaim = function(str) {
  return str.toUpperCase() + '!!!'
}

// arrow
// declaration
// expression is the answer. A function expression has an equals sign.



////////////////// PROBLEM 8 ////////////////////

/*
  Which syntax was used to create the function below?
  Uncomment the answer underneath.
*/

const exclaimTwo = str => { 
  return str.toUpperCase() + '!!!'
}

const exclaimThree = str => `${str.toUpperCase()}!!!`

// arrow is the type of function. Has the arrow symbol also has str string noted. Running a method to manipulate string to upper case.
// declaration
// expression

/*
  Rewrite exclaimTwo to be a single line.
  Call your new function exclaimThree

  Brownie points if you use a template string
*/

/* 
New line exclaimThree is a single line short hand of arrow function expression 
with a template literal $ delimited with back ticks allowing embedded 
expressions called substitutions. Useful in string interpolation. You need to 
call a function to make it work. Alone function will not run.
*/  


////////////////// PROBLEM 9 ////////////////////

/*
  Which syntax was used to create the function below?
  Uncomment the answer underneath.
*/

function exclaimFour(str) {
  return str.toUpperCase() + '!!!'
}

// arrow
// declaration is the answer. This is the traditional way to write functions that we've been using.
// expression


////////////////// PROBLEM 10 ////////////////////
/*
  Write a function called nameCheck that takes in a name parameter.
  nameCheck should check if the name equals 'Steven'. If it does, return 'What is up Steven?'
  If the name parameter is equal to Bryan, return 'Hey Bryan!'
  If the name parameter is anything else, return 'Cool name, name parameter' (with name parameter being the value of the name parameter being passed in).
  Create a variable called 'nameGreeting' and set it equal to your function invoked (called) passing in an argument.
*/

function nameCheck(name) {
  if (name === "Steven") {
    return "What's is up Steven?"
  } else if (name === "Bryan") {
    return "Hey Bryan!"
  } else {
    return `Cool name, ${name}`
  }
}

let nameGreeting = nameCheck('Steven')

////////////////// PROBLEM 11 ////////////////////
/*
  Write a function called faveColorFinder that takes in one parameter called color (which will be a string).
  If the passed in color equals 'red', return 'red is a great color'
  If the passed in color equals 'green', return 'green is a solid favorite color'
  If the passed in color equals 'black', return 'so trendy'
  Otherwise, you should return the string 'you need to evaluate your favorite color choice'
  Create a variable called 'colorRating' and set it equal to faveColorFinder invoked (called), passing in an argument.
*/

function faveColorFinder(color) {
  if (color === "red") {
    return "red is a great color"
  } else if (color === "green") {
    return "green is a solid favorite color"
  } else if (color === "black") {
    return "so trendy"
  } else {
    return "you need to evaluate your favorite color choice"
  }
}

let colorRating = faveColorFinder("red")


////////////////// PROBLEM 12 ////////////////////
let namesArr = ['Cameron', 'Riley', 'Eric', 'Brenna', 'Karl']
/*
  Create a function called printAllNames that takes in a single argument (an array of names).
  Using a for loop, iterate over that array and console log each name.
  Call the function, passing in the 'namesArr' array (above).
*/

function printAllNames(names) {
  for (let i = 0; i < names.length; i++) {
    console.log (names[i])
  }
}

printAllNames(namesArr)

// Oops didn't finish. Print each name in the array starting with index 0 and ending at the length of the array 4.


////////////////// PROBLEM 13 ////////////////////
/*
  Create a function called thatsOdd that takes in a single argument (a number).
  Using conditional logic, if the number is even, return 'That's not odd!'
  Otherwise, return 'That is odd indeed!'
  Outside the function, create a variable called 'oddChecker' and set it equal to your function invoked, making sure to pass in an argument.
*/

function thatsOdd(number) {
  if (number % 2 === 0) {
    return "That's not odd" 
}   else {
    return "That's is odd indeed!"
  }
}

let oddChecker = thatsOdd(3) 
// remember that the % sign is divide and dividing number by two is even.


////////////////// PROBLEM 14 ////////////////////

/*
    Write a one line arrow function called 'bestMovie' that takes in one parameter,
    which will be a string of a movie title. 
    The function should return the string: 'movie parameter' is the best movie ever!'. 
    For example, if we passed in 'Toy Story', 
    we would expect the function to return 'Toy Story' is the best movie ever!'
*/

const bestMovie = title => {
  return title + 'is the best movie ever!'
}

const bestMovie = title => `${title} is the best movie ever!`

// The first part of code with two lines is a traditional arrow function. A return is and end result of what you want to know at the end of the function.
// The second part of code is a short hand arrow function that is useful if you only have one parameter. 
// Both codes will not provide anything un till you pass a title like 'Toy Story' through it.
////////////////// PROBLEM 15 ////////////////////

let bigOrSmallArray = [1,101, 102, 2, 103, 4, 5, 6, 107]
/* 
  Create a function called 'bigOrSmall' that takes in one parameter, 'arr',  which will be an array of numbers. 
  Inside of the bigOrSmall function, create a new array called 'answers'. 
  Then, loop over the passed in arr parameter, and check to see if the number in the array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string to the answers array. 
  Return the answers array inside of the function to a variable called 'arrayEvaluator'.
*/

function bigOrSmall(arr) {
  let answers = [ ]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 100) {
      answers.push("small")
    }
  }
  return answers
}

let arrayEvaluator = bigOrSmall(bigOrSmallArray)
// editing array using .push() allows you to add an item to the end of an array.

////////////////// PROBLEM 16 ////////////////////
let contestants = ['Katniss', 'Peeta', 'Fox-face', 'Glimmer', 'Cato', 'Rue', 'Thresh', 'Clove', 'Marvel']
let loser = 'Glimmer'
/*
  Write a function that is called theEliminator, which takes in two arguments, contestants (which will each be an array of strings), and loser (which will be a string).
  The function should loop over the array of contestant names. If the loser string appears in the array, splice it out. Return the new contestants array.
*/

function theEliminator(contestants, loser) {
  for (let i = 0; i < contestants.length; i++) {
    if (contestants[i] === loser) {
      contestants.splice(i, 1)
    }
  }
  return contestants
}

let updatedContestants = theEliminator(contestants, loser)
// You are editing array with .splice() to single out loser.  

////////////////// PROBLEM 17 ////////////////////
let sampleString = "Hi, my name is Kylo."
/*
  Write a function that takes in one argument, a string. The function should then console.log that string, in entirely uppercase characters.
  Invoke the function, passing in the sampleString (above).
*/

function makeUppercase(str) {
  console.log(str.toUpperCase())
}

makeUppercase(sampleString)

// Simple manipulation changing original string to uppercase using str.toUpperCase(). Will not affect original string just edit.

////////////////// PROBLEM 18 ////////////////////
/*
  Write a function called emailCheck that takes in
  one parameter - email.
  Inside the function, convert the email param into 
  a string and trim off any excess whitespace.
  Check to make sure the email contains an '@' symbol.
  If it does, return 'email verified' and if doesn't, 
  return 'must provide a valid email address'
*/

function emailCheck(email) {
email = String(email).trim()

  if (email.includes('@')) {
    return 'email verified'
  } else {
    return 'must provide a valid email address'
  }
}
// A traditional function with return outcome.
// Manipulating string by trimming whitespace off beginning and end of a string. 
////////////////// PROBLEM 19 ////////////////////
/*
  Write a function, naming it whatever you believe to be appropriate, that buys as many chocolate frogs as possible with a certain amount of gold. Each chocolate frog costs 3 gold.
   Your function should take in a single parameter, which is the amount of gold you are willing to spend. Your function should return a total amount of chocolate frogs you were able to purchase.
  Create a variable called 'totalFrogs' and set it equal to your function invoked, passing in the amount of gold you are willing to spend.
*/

function chocolatePurchaser(gold) {
  return gold / 3
}

let totalChocolates = chocolatePurchaser(100)
//Traditional function with return outcome. Not an even number. Not an even amount of items you wish to buy.
////////////////// PROBLEM 20 ////////////////////
/*
  You might have noticed a slight bug in the previous problem. If you were to pass in 4 gold, the function would return to you 1.3333... However,
  you can't really go to a store and by 1.333 products. You would just be able to purchase 1 product. Re-write the function you used in the previous problem (give it the same name,
    just add a 2 to the end of it) that fixes this bug. Invoke the function and store the returned value to a variable called 'totalFrogs2'.
*/

function chocolatePurchaser2(gold) {
  if (gold % 3 === 0) {
    return gold / 3
  }else if ((gold - 1) % 3 === 0) {
    return (gold - 1) / 3
  }
}

let totalChocolates2 = chocolatePurchaser(100) 
//Doing the math to figure out how many chocolates you can buy for the gold you have. Making sure you divide into a number with no remainders. 
//If you can divide 3 into the amount you have and git and even gold amount.
////////////////// PROBLEM 21 ////////////////////
let sampleArray = [0,1,2,3,4,7,5,6,8,9]
/*
  Write a function that takes in an array of numbers as an argument. In the body of the function, write logic to determine if the array is in ascending order.
  The function should return true, if it is sorted in ascending order, false if it is not. Create a variable, 'arrayIsAscending' and set it equal to your function invoked. Use the sample array to test this function.
*/

function CheckArrayAscending(arr) {
  let comparisonValue = arr[0]
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] <= comparisonValue) {
      return false
    } else {
      comparisonValue = arr[i]
    }
  }
  return true
}

let arrayIsAscending = CheckArrayAscending(sampleArray)
// Using a for loop to iterate over an array. In this case is the sample array in ascending oder. 

////////////////// PROBLEM 22 ////////////////////

let duck = "cute";

function bathroom() {
  let rubberDuck = "squeaky";
  function bathtub() {
    let sailorDuck = "nautical";
  }
}

function pond() {
  let realDuck = "fluffy";
}

/*
  There are 4 variables above: duck, rubberDuck, sailorDuck and realDuck.
  All within different scopes.
  Given the functions and variables above, edit the arrays below to contain only the appropriate variable names (as strings).
*/

//This array should contain the variable names (as strings) accessible in the global scope.
let globalScope = ["duck"]

//This array should contain the variable names (as strings) accessible in the bathroom function.
let bathroomScope = ["duck", "rubberDuck"]

//This array should contain the variable names (as strings) accessible in the bathtub function.
let bathtubScope = ["duck", "sailorDuck", "rubberDuck"]

//This array should contain the variable names (as strings) accessible in the pond function.
let pondScope = ["duck", "realDuck"]

//Evaluating if item is a toy duck with certain features in the bathroom or a real duck that lives in a pond.