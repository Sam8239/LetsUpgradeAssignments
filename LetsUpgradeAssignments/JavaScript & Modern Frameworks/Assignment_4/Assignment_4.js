// ASSIGNMENT 4
// Q.1 By how many ways we can access elements in the DOM and write about them in brief?
// A.1 There are 5 ways to access elements in the DOM which are: 
//     Finding elements by id
//     Finding elements by tag name
//     Finding elements by class name
//     Finding elements by CSS selectors
//     Finding elements by HTML object collections

document.getElementById("id_of_the_element"); // It will access the element with the id "id_of_the_element".
document.getElementsByTagName("body"); // It will access all the elements inside the body tag.
document.getElementsByClassName("class_of _the_element"); // It will access the element with the classname "class_of _the_element".
document.querySelectorAll("body#id"); // It will access all the elements inside the body tag having "id" as ID.
document.getElementById("print").innerHTML = text; // It will set the value of the element having "print" as the ID to the value of "text" identifier.
// **************************************************************************************************************
// Q.2 Write a javascript program that will take 2 numbers from the HTML page and display them on the HTML page after the addition of those 2 numbers.
function myFunction() {
  var x = Number(document.getElementById("fno").value);
  var y = Number(document.getElementById("sno").value);
  var sum = x + y;
  document.getElementById("add").innerHTML = sum;
  }
