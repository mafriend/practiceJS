//   *
//  ***
// *****

//spaces
// x + 1 + x = 5  2x + 1 = 5  x = (maxStars - 1) / 2 
// y + 3 + y = 5  2y + 3 = 5  y = (maxStars - 3) / 2
// z + 5 + z = 5  2z + 5 = 5  z = (maxStars - 5) / 2 

//Stars
// 0 = (maxStars - x) / 2  2 * 0 = maxStars - x -(2 * i - maxStars) = x
// 1 = (maxStars - y) / 2  2 * 1 = maxStars - y -(2 * i - maxStars) = y
// 2 = (maxStars - z) / 2  2 * 2 = maxStars - z -(2 * i - maxStars) = z

// function row(rowNum, maxStars) {
//     var numStars = rowNum * 2 + 1;
//     var numSpaces = (maxStars - numStars) / 2; 
    
//     var starPrint = new Array(numStars+1).join("*");
//     var spacePrint = new Array(numSpaces+1).join(" ");
//     return spacePrint + starPrint;
// }

let maxStars = 9;

function triangle(rowNum, maxStars) {
    var numStars = rowNum * 2 + 1;
    var numSpaces = (maxStars - numStars) / 2; 
    
    var starPrint = new Array(numStars+1).join("*");
    var spacePrint = new Array(numSpaces+1).join(" ");
    return spacePrint + starPrint;
}

for (rowNum = 0; rowNum <= (maxStars / 2); rowNum++) {
    console.log(triangle(rowNum,maxStars))
}

// TODO: get the above working for numbers other than 5!

// Attempt 2
// let maxStars = 5;
// let rowNum = 0;

// for (rowNum; rowNum <= 3; rowNum++) {

//     function triangle(rowNum, maxStars) {
//         var numStars = rowNum * 2 + 1;
//         var numSpaces = (maxStars - numStars) / 2; 
    
//         var starPrint = new Array(numStars+1).join("*");
//         var spacePrint = new Array(numSpaces+1).join(" ");
//         return spacePrint + starPrint; 
//     }
// }

// console.log(triangle(rowNum, maxStars))


// ATTEMPT 1
// function triangle(rowNum, maxStars){
//     //for loop for numStars
//     for (let rowNum = 0; rowNum <= 3; rowNum * 2 + 1){
//         let starPrint = new Array(rowNum).join("*");
//     }

//     for (let ) {

//     }
// }

// console.log(row(0,5));

