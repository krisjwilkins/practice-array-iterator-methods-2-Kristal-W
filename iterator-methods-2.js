let cities = ["New Orleans", "New York", "Portland", "Toronto", "Dublin"];

cities.forEach(function(city) {
    console.log(city.toUpperCase());
});

// Expected output:
// NEW ORLEANS
// NEW YORK
// PORTLAND
// TORONTO
// DUBLIN



let numbers = [1, 2, 3, 4, 5];

let squares = numbers.map(function(number) {
    return number * number;
});

console.log(squares);

// Expected output: [1, 4, 9, 16, 25]



let scores = [85, 42, 90, 75, 30, 100];

let highScores = scores.filter(function(score) {
    return score >= 80;
});

console.log(highScores);

// Expected output: [85, 90, 100]



let favoriteFood = ["pizza", "tacos", "fried shrimp", "gumbo", "fried rice", "pasta"];

let firstLongFood = favoriteFood.find(function(food) {
    return food.length > 4;
});

let firstLongFoodIndex = favoriteFood.findIndex(function(food) {
    return food.length > 4;
});

console.log(firstLongFood);
console.log(firstLongFoodIndex);

// Expected output: 
// pizza
// 0


let temperatures = [75, 82, 88, 91, 85];

let temperatureResults = [
    temperatures.some(function(temperature) {
        return temperature > 90;
    }),
    temperatures.every(function(temperature) {
        return temperature > 50;
    })
];

console.log(temperatureResults);

// Expected output: [true, true]


let budget = 200;
let prices = [45, 30, 55, 25];

let remainingBudget = prices.reduce(function(total, price) {
    return total - price;
}, budget);

console.log(remainingBudget);

// Expected output: 45
