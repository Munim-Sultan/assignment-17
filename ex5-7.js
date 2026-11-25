//1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
var a = Number(prompt('Enter first number : '));
var b = Number(prompt('Enter second number : '));
var sum = a + b;
alert(`Sum of ${a} and ${b} is ${sum}`);

//2. Repeat task1 for subtraction, multiplication, division & modulus. 
var diff = a - b;
alert(`Difference od ${a} and ${b} is ${diff}`);
var prod = a * b;
alert(`Product of ${a} and ${b} is ${prod}`);
var div = a / b;
alert(`Division of ${a} by ${b} is ${div}`);
var mod = a % b;
alert(`Remainder after division od ${a} by ${b} is ${mod}`);

//3. Do the following using JS Mathematic Expressions 
//a. Declare a variable.  
//b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
//c. Initialize the variable with some number. 
//d. Show the value of variable in your browser like “Initial value: 3”. 
//e. Increment the variable. 
//f. Show the value of variable in your browser like “Value after increment is: 4”. 
//g. Add 7 to the variable. 
//h. Show the value of variable in your browser like “Value after addition is: 11”.  
//i. Decrement the variable. 
//j. Show the value of variable in your browser like “Value after decrement is: 10”. 
//k. Show the remainder after dividing the variable’s value by 3. Output : “The remainder is : 1"
var num;
document.write(`Value after declaration is : ${num}`);
num = 3;
document.write(`Initial value : ${num}`);
++num;
document.write(`Value after increment : ${num}`);
num += 7;
document.write(`Value after addition : ${num}`);
--num;
document.write(`Value after decrement : ${num}`);
var rem = num % 3;
document.write(`Remainder is : ${rem}`);

//4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie.
var ticketPrice = 600;
var qty = 5;
var totalCost = ticketPrice * qty;
document.write(`Total cost to buy ${qty} tickets is ${totalCost} PKR`);

//5. Write a script to display multiplication table of any number in your browser.
var num1 = Number(prompt('Enter a number'));
document.write(`Multiplication by ${num1}`);
document.write(`${num1} x 1 = ${num1 * 1}`);
document.write(`${num1} x 2 = ${num1 * 2}`);
document.write(`${num1} x 3 = ${num1 * 3}`);
document.write(`${num1} x 4 = ${num1 * 4}`);
document.write(`${num1} x 5 = ${num1 * 5}`);
document.write(`${num1} x 6 = ${num1 * 6}`);
document.write(`${num1} x 7 = ${num1 * 7}`);
document.write(`${num1} x 8 = ${num1 * 8}`);
document.write(`${num1} x 9 = ${num1 * 9}`);
document.write(`${num1} x 10 = ${num1 * 10}`);

//6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. 
//a. Store a Celsius temperature into a variable. 
//b. Convert it to Fahrenheit & output “NNoC is NNoF”.
//c. Now store a Fahrenheit temperature into a variable. 
//d. Convert it to Celsius & output “NNoF is NNoC”. 
var tempCel = 12;
var fahrenheit = (tempCel * 9 / 5) + 32;
var tempFar = 68;
var celcius = (tempFar - 32) * 5 / 9;
document.write(`${tempCel}C is ${fahrenheit}F`);
document.write(`${tempFar}F is ${celcius}C`);

//7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables 
// a. Price of item 1 
// b. Price of item 2 
// c. Ordered quantity of item 1  
// d. Ordered Quantity of item 2 
// e. Shipping charges 
//Compute the total cost & show the receipt in your browser. 
var item1 = 560;
var item2 = 200;
var qty1 = 2;
var qty2 = 5;
var charges = 150;
var total = (item1 * qty1) + (item2 * qty2) + charges;
document.write(`Shopping cart`);
document.write(`Price of item 1 is ${item1}`);
document.write(`Quantity of item 1 is ${qty1}`);
document.write(`Price of item 2 is ${item2}`);
document.write(`Quantity of item 1 is ${qty2}`);
document.write(`Shipping charges are ${charges}`);
document.write(`Total cost is ${total} PKR`);

//8. Write a script to take total marks & marks obtained by a student. Compute the percentage & show the result in your browser. 
var marksObt = Number(prompt(`Enter obtained marks : `));
var totalMarks = Number(prompt(`Enter total marks : `));
var percent = (marksObt/totalMarks) * 100;
document.write(`MarkSheet`);
document.write(`Obtained marks : ${marksObt}`);
document.write(`Total marks : ${totalMarks}`);
document.write(`Percentage : ${percent}`);

//9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates :  1 US Dollar  = 104 Pakistani Rupee  and  1 Saudi Riyal = 28 Pakistani Rupee) 
var dollars = 10;
var riyal = 25;
var pkr = (dollars * 104) + (riyal * 28);
document.write('Currency in PKR');
document.write(`Total currency is ${pkr} PKR`);

//10. Write a program to initialize a variable with some number and do arithmetic in following sequence: 
// a. Add 5 
// b. Multiply by 10 
// c. Divide the result by 2  
// Perform all calculations in a single expression. 
var num2 = 3;
var exp = ((num2 + 5) * 10) / 2;
alert(exp);

//11. The Age Calculator: Forgot how old someone is? Calculate it! 
// a. Store the current year in a variable. 
// b. Store their birth year in a variable. 
// c. Calculate their 2 possible ages based on the stored values. 
// Output them to the screen like so: “They are either NN or NN years old”.
var currentYear = 2015;
var birthYear = 1992;
var age = currentYear - birthYear;
document.write(`They are either ${age} or ${age + 1} years old`);

//12. The Geometrizer: Calculate properties of a circle. 
// a. Store a radius into a variable. 
// b. Calculate the circumference based on the radius, and output “The circumference is NN”.  (Hint : Circumference of a circle = 2 π r ,   π = 3.142) 
// c. Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2,  π = 3.142) 
var rad = 12;
const pie = 3.142;
var circum = 2 * rad * pie;
var area = pie * rad ** 2;
document.write("Geometrizer");
document.write(`Radius of circle : ${rad}`);
document.write(`Circumference of circle : ${circum}`);
document.write(`Area of circle : ${area}`);

//13. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser: 
var val = 10;
document.write(`Initial value is : ${val}`);
++val;
document.write(`after ++val value is : ${val}`)
document.write(`Now value is : ${val}`);
val++;
document.write(`after val++ value is : ${val}`);
document.write(`Now value is : ${val}`);
--val;
document.write(`after --val value is : ${val}`);
document.write(`Now value is : ${val}`);
val--;
document.write(`after val-- value is : ${val}`);
document.write(`Now value is : ${val}`);

//14. What will be the output in variables a, b & result after execution of the following script: var a = 2, b = 1; var result = --a   -   --b   +   ++b  +   b--; Explain the output at each stage: 
// --a; makes a = 1 before execution
// --a   -   --b; makes 1 - 0 after making b = 0 before execution 
// --a   -   --b   +   ++b; makes 1 - 0 + 1 after making b = 1 before execution
// --a   -   --b   +   ++b  +   b--; makes 1 - 0 + 1 + 1 before making b = 0 after execution so ans is 3

//15. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. 
// a. Store your favorite snack into a variable 
// b. Store your current age into a variable. 
// c. Store a maximum age into a variable. 
// d. Store an estimated amount per day (as a number). 
// e. Calculate how many would you eat total for the rest of your life. 
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”. 
var favSnack = 'Oreo biscuits';
var nowAge = 15;
var maxAge = 85;
var perDay = 2;
var totalAmount = ((maxAge * 365) - (15 * 365)) * 2;
document.write(`you will need ${totalAmount} to last until you turn ${maxAge}`);