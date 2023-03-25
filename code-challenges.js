// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:
// This code  will take 2 strings and determine which one of the two has more characters.
// variable
// I will make an if-else code with .length to see which word is longer than the other. 
// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"


// const isLonger = (apple,banana)=> {
//     if ("apple".length > "banana".length){
//       return "apple"
//     } else {
//       return "banana"
//     }
//   }
//   console.log(isLonger())
// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"

// const isLonger = (cherry,kiwi)=> {
//     if ("cherry".length > "kiwi".length){
//       return "cherry"
//     } else {
//       return "kiwi"
//     }
//   }
//   console.log(isLonger())

//Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:
// Use else-if code with >,>=,<= to see if a value is greater than the established function.
// const temperature1 = 42

// const temperature1 = (bp) => {
//  if (bp>212){
//     return ' is Above Boiling point'
// } else if (bp<212){
//     return 'is Below Boiling Point'
// }else if (bp>=212){
//     return ' is At Boiling point'
// }
// }
// console.log(temperature1(42))

// Expected output: "42 is below boiling point"


//const temperature2 = 350
// Expected output: "350 is above boiling point"

// const temperature2 = (bp) => {
//     if (bp>212){
//        return ' is Above Boiling point'
//    } else if (bp<212){
//        return 'is Below Boiling Point'
//    }else if (bp>=212){
//        return ' is At Boiling point'
//    }
//    }
//console.log(temperature2(350))


//const temperature3 = 212
// Expected output: "212 is at boiling point"
// const temperature3= (bp) => {
//     if (bp>212){
//        return ' is Above Boiling point'
//    } else if (bp<212){
//        return 'is Below Boiling Point'
//    }else if (bp>=212){
//        return ' is At Boiling point'
//    }
//    }
//    console.log(temperature3(212))
//const dataTypes = ["number", "string", "Boolean", "undefined"]/
//console.log(typeof dataTypes.length)


// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:
// Will use .concat to combine the 2 arrays into a new variable.
//Once combined with concat will use .length with new variable in console.log
const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9
var twoWorldSeries = (padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns))
console.log(twoWorldSeries.length)

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code: 

const currentCohort = "Bravo 2023"

console.log(currentCohort.split("").reverse().join(""))

// Expected output: "3202 ovarB"

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:
// will use indexOf or lastIndexOf to find out the index of desired values.
//indexOf will be used to find the index of the first instance where the value appears whilst lastIndexof will be used to find the last index of where the value last appears.

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
// Expected output: 7
console.log(myNumbers.lastIndexOf(42))

const givenValue2 = 10
// Expected output: 8
console.log(myNumbers.lastIndexOf(10))

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:
//Will use sort with the const to sort from smallest to largest.
// After its sorted will use a reverse array to reverse the order of the array.

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]
sanDiegoSummerTemperatures.sort()
console.log(sanDiegoSummerTemperatures)
 console.log(sanDiegoSummerTemperatures.reverse())

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]
sanDiegoWinterTemperatures.sort()
console.log(sanDiegoWinterTemperatures)
console.log(sanDiegoWinterTemperatures.reverse())
    
