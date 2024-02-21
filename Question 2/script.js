// Ask user for inputs
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var birthYear = prompt("Enter your birth year:");

// Calculate age
var currentYear = new Date().getFullYear();
var age = currentYear - birthYear;

// Generate output message and display using alert()
alert("Hello " + firstName + " " + lastName + "! How does it feel to be " + age + " years old?");
