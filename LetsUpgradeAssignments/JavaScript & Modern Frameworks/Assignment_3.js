// ASSIGNMENT 3
// Q.1 Write a JavaScript program to display the reading status (i.e. display book name, author name,
//     and reading status) of the following books.
//          var library = [
//          {
//          author: 'Bill Gates',
//          title: 'The Road Ahead',
//          readingStatus: true
//          },
//          {
//          author: 'Steve Jobs',
//          title: 'Walter Isaacson',
//          readingStatus: true
//          },
//          {
//          author: 'Suzanne Collins',
//          title: 'Mockingjay: The Final Book of The Hunger Games',
//          readingStatus: false
//          }];
//          The output should look like this:
//          Already read 'Bill Gates' by The Road Ahead.
//          Already read 'Steve Jobs' by Walter Isaacson.
//          You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.
// A.1
var library = [
  {
    title: "Bill Gates",
    author: "The Road Ahead",
    readingStatus: true,
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    readingStatus: true,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    readingStatus: false,
  },
];

for (var i = 0; i < library.length; i++) {
  var book = "'" + library[i].title + "'" + " by " + library[i].author + ".";
  if (library[i].readingStatus) {
    console.log("Already read " + book);
  } else {
    console.log("You still need to read " + book);
  }
}
//***************************************************************************************************************
// Q.2 Write a javascript program that generates an alert "Not legal age to drive" if the driver age is
//     below 18 years old, if driver age is greater than or equal to 18, it generates an alert "Drive safe".
// A.2 
var age = prompt("Enter Your Age:");
if (age < 18) {
  alert("Not Legal To Drive");
} else {
  alert("Legal To Drive");
}
