//1. Write a program that takes input a name from user & greet the user
var userName = Number(prompt('Enter your name'));
alert(`Hello, ${userName}`);

//2. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default. 
var num1 = Number(prompt('Enter a number', 5));
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

//3. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights” 
var cityName = prompt('Enter your city name');
if(city === 'karachi'){
    alert('Welcome to the city of lights');
};

//4. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am. 
var gender = prompt('Enter your gender');
if(gender === 'male'){
    alert('Hello, sir');
}else if(gender === 'female'){
    alert("Hello, ma'am");
};

//5. Write a program to take input color of road traffic signal from the user & show the message 
var light = prompt('Enter the colour of light');
if(light === 'green'){
    alert('vehicles can move now');
}else if(light === 'yellow'){
    alert('vehicles should get ready to move');
}else if(light === 'red'){
    alert('vehicles must stop now');
};

//6. Write a program to take input max age & current age from user. If the current age is less than or equal to max age, show the message “You are welcome” 
var maxAge = Number(prompt('Enter your max age'));
var crntAge = Number(prompt('Enter your current age'));
if(crntAge <= maxAge){
    alert("You're welcome");
};

//7. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car” 
var fuel = Number(prompt('Enter your remaining fuel'));
if(fuel < 0.25){
    alert('Please refillthe fuel');
};

//8. Run this script, & check whether alert message would be displayed or not. Record the outputs. 
//a
var a = 4; 
if(++a === 5){ 
    alert("given condition for variable a is true"); //true
};
//b
var b = 82; 
if(b++ === 83){ 
    alert("given condition for variable b is true"); //false
};
//c
var c = 12; 
if(c++ === 13){ 
    alert("condition 1 is true"); //false
} 
if(c === 13){ 
    alert("condition 2 is true"); //true
} 
if(++c < 14){ 
    alert("condition 3 is true"); //false
} 
if(c === 14){ 
    alert("condition 4 is true"); //true
}; 
//d 
var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if(totalCost === laborCost + materialCost){
    alert("The cost equals"); //true
}; 
//e 
if(true){ 
    alert("True");    //true
} 
if(false){ 
    alert("False");  //false
};
//f 
if("car" < "cat"){ 
    alert("car is smaller than cat");  //false
};

//9. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade
var sub1 = Number(prompt('Enter marks of first subject'));
var sub2 = Number(prompt('Enter marks of second subject'));
var sub3 = Number(prompt('Enter marks of third subject'));
var totalmarks = Number(prompt('Enter total marks'));
var percent = ((sub1 + sub2 + sub3)/totalmarks) * 100;
var grade;
if(percent >= 80){
    grade = 'A-one';
    document.write(`Total Marks : ${totalmarks}, Obtained marks : ${sub1+sub2+sub3}, Percentage : ${percent},  Grade : ${grade}`);
}else if(percent >= 70){
    grade = 'A';
    document.write(`Total Marks : ${totalmarks}, Obtained marks : ${sub1+sub2+sub3}, Percentage : ${percent},  Grade : ${grade}`);
}else if(percent >= 60){
    grade = 'B';
    document.write(`Total Marks : ${totalmarks}, Obtained marks : ${sub1+sub2+sub3}, Percentage : ${percent},  Grade : ${grade}`);
}else{
    grade = 'Fail';
    document.write(`Total Marks : ${totalmarks}, Obtained marks : ${sub1+sub2+sub3}, Percentage : ${percent},  Grade : ${grade}`);
};

//10. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Take input from users, the following:
// a. Name of item1  
// b. Name of item2 
// c. Price of item 1 
// d. Price of item 2 
// e. Ordered quantity of item 1  
// f. Ordered Quantity of item 2 
// g. Shipping charges Compute the total cost. 
// If the total cost is above 2000 PKR , offer them 10% discount & show the receipt in your browser
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
if(total > 2000){
    total = total * 0.9;
    document.write(`Discounted price is ${total} PKR`);
};

//11. Guess game:  Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number. 
// a. If user guesses the same number, show  “Bingo! Correct answer”.  
// b. If the guessed number +1 is the secret number, show  “Close enough to the correct answer”.  

var secretNum = 7;
var guess = Number(prompt('Enter your guess'));
if(guess === secretNum){
    alert('Bingo! Correct answer');
}else if(++guess === secretNum){
    alert('Close enough to correct answer');
};

//12. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3. 
var num = Number(prompt('Enter a number'));
if(num % 3 === 0){
    alert('It is divisible by 3');
};

//13. Names & Total scores of two teams are taken as input. Write a program that shows which team has won the game or show if there is a tie. (Team A or Team B) 
var TeamA = prompt('Enter team A name');
var score1 = Number(prompt('Enter score of team A'));
var TeamB = prompt('Enter team B name');
var score2 = Number(prompt('Enter score of team B'));
if(score1 < score2){
    alert(`${TeamB} won`);
}else if(score1 > score2){
    alert(`${TeamA} won`)
}else{
    alert('Tie')
};

//15. Write a program that checks whether the given input is an even number or an odd number. 
var evenCheck = Number(prompt('Enter a number'));
if(evenCheck % 2 === 0){
    alert('It is an even number');
}else{
    alert('It is an odd number');
};

//17. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input: 
// a. First number 
// b. Second number 
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user. 
var num1 = Number(prompt('Enter a number'));
var operation = prompt('Enter an operation: +, -, /, x');
var num2 = Number(prompt('Enter a number'));
if(operation === '+'){
    alert(num1 + num2)
}else if(operation === '-'){
    alert(num1 - num2)
}else if(operation === '/'){
    alert(num1 / num2)
}else{
    alert(num1 * num2)
};

//chap 12- 13
//3. Write an if/else statement with the following condition: If the variable age is greater than 18, output "Old enough", otherwise output "Too young". 
var age = prompt('Enter your age');
if(age === '18'){
    alert('Old enough')
}else{
    alert('Too young')
};

