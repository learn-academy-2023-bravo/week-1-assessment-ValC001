// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
console.log(colors.push("indigo"))

// a) Your answer: It will log 5.
// b) Verify and explain: When I ran the code it logged 5 which is the index of where Indigo would be. 

// --------------------1) What will this log?

const cohort = "LEARN 2023"
console.log(cohort.length)

// a) Your answer:It will print out the number of digits in LEARN 2023.
// b) Verify and explain: It logged 10 becausew the length array counts and prints out how many digits there are in a word.

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: It will print "Hello World!"
// b) Verify and explain: It logged "o" due to "o" being in index 4.
// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: It will say "Ruby", which is on index 1.
// b) Verify and explain: It logged "Ruby." It didn't log "Javascript" because it goes 0,1,2,3. Ruby was at 1.

// ---------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
console.log(weekendDays.toUpperCase())

// a) Your answer:it will print "Saturday,Sunday "all uppercase.
// b) Verify and explain: It didnt't log anything ,instead it displayed an error. I can't find the reason why it displayed an error.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: It will log the length of all words together.
// b) Verify and explain: It just logged "number". I don't understand why it logged "number"
