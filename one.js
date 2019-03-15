// 1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
// Sample Output : Today is : Tuesday. 
// Current time is : 10 PM : 30 : 38

// function currentDay() {
//     return "Today is : Tuesday.";
// }

// function currentTime() {
//     return "Current time is : 10 PM : 30 : 38";
// }

// console.log(currentDay());
// console.log(currentTime());

// function currentTime(date) {
//     const hour = date.getHours() % 12;
//     const minute = date.getMinutes();
//     const second = date.getSeconds();
//     let timeThing;
    
//     if (date.getHours() >= 12) {
//         timeThing = "PM";
//     } else {
//         timeThing = "AM";
    
//     }
//     return `Current time is : ${hour} ${timeThing} : ${minute} : ${second}`;
// }

// const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// function currentDay(date) {
//     return `Today is : ${day[date.getDay()]}.`;
// }

// var x = new Date();

// console.log(currentDay(x), "\n" + currentTime(x));

function currentDate(date) {
    const hour = date.getHours() % 12;
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let timeThing;
    
    if (date.getHours() >= 12) {
        timeThing = "PM";
    } else {
        timeThing = "AM";
    }

    return `Today is : ${day[date.getDay()]}. \nCurrent time is : ${hour} ${timeThing} : ${minute} : ${second}`;
}

console.log(currentDate(new Date()));


