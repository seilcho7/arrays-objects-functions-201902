// // add your solutions here
// // Write a function which takes an array of numbers as input and returns a new array containing only the positive numbers in the given array.

// const numbers = [1, 2, 5, -4, -5, 5];

// function positiveNumbers(numb) {
//     let posNumb = [];
//     numb.forEach(function (numbs) {
//         if (numbs > 0) {
//             posNumb.push(numbs);
//         }
//     });
//     console.log(posNumb);
// }
// positiveNumbers(numbers);

// // Write a function which takes an array of numbers as input and returns a new array containing only the even numbers in the given array.

// function evenNumbers(numb) {
//     let evenNumb = [];
//     numb.forEach(function (numbs) {
//         if (numbs % 2 === 0) {
//             evenNumb.push(numbs);
//         }
//     });
//     console.log(evenNumb);
// }
// evenNumbers(numbers);

// // Write a function which takes an array of numbers as input and returns a new array containing result of squaring each of the numbers in the given array by two. Example: squareTheNumbers([1, 2, 3]) should give [1, 4, 9].

// function squareNumbers(numb) {
//     let squareNumb = [];
//     numb.forEach(function (numbs) {
//         squareNumb.push(numbs * numbs);
//     });
//     console.log(squareNumb);
// }
// squareNumbers(numbers);





// // Write a function which takes an array of city objects like such:
// // as input and returns a new array containing the cities whose temperature is cooler than 70 degrees.

// const cities = [
//     { name: 'Los Angeles', temperature: 60.0},
//     { name: 'Atlanta', temperature: 52.0 },
//     { name: 'Detroit', temperature: 48.0 },
//     { name: 'New York', temperature: 80.0 }
// ];

// function coolCities(cities) {
//     let coolList = [];
//     cities.forEach(function (temp) {
//         if (temp.temperature < 70) {
//             coolList.push(temp.name);
//         }
//     });
//     console.log(coolList);
// }
// coolCities(cities);

// // Write a function which takes an array of city objects like the above problem as input and returns an array of the cities names.

// function cityNames(cities) {
//     let names = [];
//     cities.forEach(function (name) {
//         names.push(name.name);
//     })
//     console.log(names);
// }
// cityNames(cities);





// // Given an array of people's names:
// // Print out 'Good Job, {{name}}!' for each person's name, one on a line.

// var people = [
//     'Dom',
//     'Lyn',
//     'Kirk',
//     'Autumn',
//     'Trista',
//     'Jesslyn',
//     'Kevin',
//     'John',
//     'Eli',
//     'Juan',
//     'Robert',
//     'Keyur',
//     'Jason',
//     'Che',
//     'Ben'
// ];

// people.forEach(function (name) {
//     console.log(`Good job, ${name}!`)
// });




// // Given this function:
// // Use the call3Times function to print "Hello, world!" 3 times.

// function call3Times(fun) {
//     fun();
//     fun();
//     fun();
// }

// function hello() {
//     console.log("Hello world!");
// }

// call3Times(hello);


// // You will write a function callNTimes that takes two arguments: times as a number, and fun as a function. It will call that function for that many times. You are allowed to use a loop in the implementation of callNTimes.

// function callNTimes(times, fun) {
//     for (let i = 0; i < times; i++) {
//         fun();
//     }
// }

// function hello() {
//     console.log("Hello world!");
// }

// callNTimes(5, hello);




// Write a strMultiply function which takes two arguments:
// str - the string to multiply
// times - number of times to multiply

function range(min, max) {
    let arr = [];
    for (let i = min; i < max; i++) {
      arr.push(i);
    }
    return arr;
}

function strMultiply(str, times) {
    let result = '';
    for (let i = 0; i < times; i++) {
        result += str;
    }
    console.log(result);   
}
strMultiply('abc', 5);