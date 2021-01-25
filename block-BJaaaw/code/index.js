// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let number = Number(prompt("enter the number"))
if (number % 2 === 0) {
  alert("number is even")
}
else{
  alert("number is odd")
}
// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
let num1 = Number(prompt("enter first number"))
let num2 = Number(prompt("enter second number"))
if(num1 < num2) {
  alert(`The greater number is ${num2}`)}
  else {
    alert(`The greater number is ${num1}`)
  }

// 3. Convert the above code using`?` terniary operator
let num3 = Number(prompt("enter first number"))
let num4 = Number(prompt("enter second number"))
let random = (num3 < num4) ? num4 : num3
alert(`The greater number is ${random}`);
/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let houseName = prompt("enter your house name")
if(houseName == "stark") {
  alert("Winter is coming")}
else if (houseName=="lannister") {
  alert(" A lannister always pays his debt")}
  else {
    alert(" All men must die")
  }
  


// 5. Convert the above code using`?` terniary operator
let nameHouse = prompt("enter your house name")
let houseTag = (nameHouse=="stark") ? " Winter is coming" : (nameHouse=="lannister" ? " A lannister always pays his debt" : " All men must die")
alert(houseTag)
// Switch
let honame = prompt("enter your house name")
switch(honame) {
  case "stark":
    alert("Winter is coming")
    break;
  case "lannister" :
    alert(" A lannister always pays his debt")
    break;
  default:
    alert(" All men must die")
    break;
}

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let month = Number(prompt("enter the month"))
if (month < 8) {
  if (month == 2) {
    alert("This month has 28 days")
  }
  else if (month % 2 == 0) {
    alert("This month has 30 days")
  }
  else {
    alert("This month has 31 days")
  }
}
else{
  if(month % 2 == 0) {
    alert("This month has 31 days")
  }
  else{
    alert("This month has 30 days")
  }
}  

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
let inHand;
let salary = Number(prompt("enter the salary"))
if(salary <= 20000) {
  inHand = alert((90 * salary) / 100)
}
else if (salary <= 40000 && salary > 20000) {
  inHand = alert((80 * salary) / 100)
}
else if (salary > 50000) {
  inHand = alert((70 * salary) / 100)
}
else{
  alert("salary doesnt fall under the specified category")
}

//  if..else vs switch
let initialSalary = Number(prompt("enter the salary"))
switch(true) {
  case (initialSalary <= 20000):
    alert((90 * initialsalary) / 100)
    break;
  case (initialSalary <=40000 && initialSalary > 20000):
    alert((80 * initialSalary) / 100);
    break;
  case (initialSalary > 50000):
    alert((70 * initialSalary) / 100);
    break;
  default:
    alert("salary doesnt fall under the specified category")
    break;
}

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
let marks = Number(prompt("Enter the marks"))
if (marks > 0 && marks <= 30) {
  alert("Grade D")
}
else if (marks > 30 && marks < 50) {
  alert("Grade C")
} 
else if(marks > 50 && marks < 80) {
  alert("Grade B")
}
else if(marks > 80 && marks < 100) {
  alert("Grade A")
}
else{
  alert("Marks can't be greater than 100")
}

let studentMarks = Number(prompt("Enter the marks"))
switch(true){
  case(studentMarks > 0 && studentMarks <= 30):
  alert("Grade D")
  break;
  case(studentMarks > 30 && studentMarks < 50):
  alert("Grade C")
  break;
  case(studentMarks > 50 && studentMarks < 80):
  alert("Grade B")
  break;
  case(studentMarks > 80 && studentMarks < 100):
  alert("Grade A")
  break;
  default:
    alert("Marks can't be greater than 100")
    break;
}

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let weather = prompt(`What is the weather like outside?`)
switch(weather) {
  case "sunny":
    alert(`Wear a T-shirt`)
    break;
    case "rainy":
      alert(`Don't forget to take your raincoat`)
      break;
     case "hot":
        alert(`Get a hanky`)
        break; 
        case "freezing":
        alert(`Get your swea  ter on`)
        break;  
        default:
          alert(`Not a valid input`)
          break;

}
