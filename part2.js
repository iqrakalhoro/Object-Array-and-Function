"use strict";
// Assignment 2:Manipulating an Array: Rearranging Words
// Step 1
const scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
// Step 2
scrambledArray.splice(2, 2);
scrambledArray.pop();
scrambledArray.unshift("I");
scrambledArray[1] = "am";
scrambledArray[2] = "a";
scrambledArray[3] = "student";
scrambledArray[4] = "of";
scrambledArray[5] = "GIAIC";
//  Step 3
console.log(scrambledArray.join(" "));
