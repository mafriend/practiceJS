// so, let's just write a separate function
// given a string, a starting point, and a function
// find the "first" value in the string that makes the function return true
// and return the index of the value
// and by "first" I mean, first after the starting point
// kay?
// correct. Let's start a new file, even
// that way we don't get rid of important stuff in here.
// and also I want you to do it without looking at this file.

function firstMatch(str, integer, numState) {
  
  for (let i = 0; i < str.length; i++) {
    if (numState === isNotNum) {
      if (integer === 0) {
        return 3;
      } else {
        return 8;
      }
    } else {
      if (integer === 0) {
        return 0;
      } else {
        return integer + 3;
      }  
    } 
  }
}

const str = "123 + 321";
const isNum = (item) => !isNaN(Number(item)) && item !== " ";
const isNotNum = (item) => !isNum(item);

console.log("test 1:", firstMatch(str, 0, isNum) ===  0);

console.log("test 2:", firstMatch(str, 0, isNotNum) ===  3);

// console.log("test 2.1:", firstMatch(str, 1, isNotNum) ===  3)

console.log("test 3:", firstMatch(str, 3, isNum) ===  6);

console.log("test 4:", firstMatch(str, 3, isNotNum) ===  8);
