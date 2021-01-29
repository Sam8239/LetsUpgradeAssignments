// ASSIGNMENT 2
// Q.1 What is the value of clothes[0] and why?
//          const clothes = ['jacket', 't-shirt'];
//          clothes.length = 0;
//          console.log(clothes[0]);
// A.1
const clothes = ["jacket", "t-shirt"];
clothes.length = 0; // Items of the array clothes are deleted.
console.log(clothes[0]);
// Output: undefined
// Reason: clothes[0] is undefined, because clothes array was emptied.
// **************************************************************************************************************
// Q.2 Write a Javascript program to find the sum of all elements of a given array?
// A.2
given_array = ["1","5","1","7",4.5];
var sum = 0;
for (var i = 0; i < given_array.length; i++) {
  sum += Number(given_array[i]); //Number() is a function which converts other values to the the Number type. 
}
console.log("Sum of all elements of a given array is:",sum);
// Output: 18.5