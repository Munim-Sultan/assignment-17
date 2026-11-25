//1. Declare a variable called username. 
var userName;

//2. Declare a variable called myName & assign to it a string that represents your Full Name. 
var myName = 'Munim Sultan';

//3. Write a script to  a. declare a JS variable, titled message  b. assign “Hello World” to the variable message c. display the message in alert box  
var message = 'Hello World';
alert(message);

//4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.
var stdName = 'Ali';
var age = 17;
var clg = 'SSUET'
var course = 'Mobile and Cloud Computing - Module A';
alert(stdName);
alert(age);
alert(clg);
alert(course);

//5. Write a script to display the following alert using one JS variable: 
alert('PIZZA \n PIZZ \n PIZ \n PI \n P');

//6. Fortune Teller: Why pay a fortuneteller when you can just program your fortune yourself? Store the following into variables: number of children, partner’s name, geographic location, and job title. 
var job = 'Software Developer';
var loc = 'USA';
var partnerName = 'ABC';
var noOfChildren = 2;
alert(`You will be a ${job} in ${loc}, and married to ${partnerName} with ${noOfChildren} kids.`);

//7. Declare a variable called email & assign to it a string that represents your Email Address (e.g. abc@xyz.com). Show the below mentioned message in an alert box. (Hint: use string concatenation) 
var email = 'munimsultan72@gmail.com';
alert('my email is ' + email);

//8. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box: 
var book = 'A smarter way to learn Javascript';
alert(`I am learning from a book '${book}'`);

//9. Use the variables, declared in exercise 4 & show the details giving meaning to data. Like “My name is Ali Khan”, “I am 17 years old”,  “I study in SSUET”, “I take Mobile & Cloud Computing, Module A classes” 
alert(`My name is ${stdName}`);
alert(`I am ${age} years old`);
alert(`I study at ${clg}`);
alert(`I selected ${course}`);

//10. Write a script to display this in browser through JS 
document.write('Yay! I can write HTML content through JS');