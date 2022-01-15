let name = "mahesh";
// alert(name)
// creating variable array
let name_obj = ["mahesh", "harish", "ram", "suraj"];

// see syntax how same it is just the comma and outer square bracket is added
// creating object and its array;
let object_1 = { name: "mahesh", class: 14 };

// object array
let object_array = [
  { name: "mahesh", age: 14 },
  { name: "sam", age: 16 },
  { name: "roy", age: 18 },
  { name: "gon", age: 18 },
];
// array are special type of object that can look inside it's own method's and variables
object_array.push({ id: "suraj", standard: 12, height: 5.9 });
console.log(object_array[4]);
// see in console window that weather object is pushed into  an array or not
