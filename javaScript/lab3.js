//TASK 1 DECLARING ARRAYS
//• Declare an array colors using the Array Constructor and initialize it with three
//colors.
console.log("TASK 1.1");
let colors = new Array('brown', 'white', 'yellow');
console.log(colors);
//• Declare an array sizes using the Array Literal Notation and initialize it with three
//sizes.
console.log("\nTASK 1.2");
let sizes = ['Small', 'Medium', 'Large'];
console.log(sizes);
//• Declare an array numbers using Array.of() and initialize it with three numbers.
console.log("\nTASK 1.3");
let numbers = Array.of(1, 23, 29);
console.log(numbers);
//TASK 2 MODIFYING ARRAYS
//• Add an element to the end of the colors array using push().
console.log("\nTASK 2.1");
colors.push('pink');
console.log(colors);
//• Remove the last element from the sizes array using pop().
console.log("\nTASK 2.2");
let lastSize = sizes.pop();
console.log(sizes);
console.log(lastSize);
//• Access the second element in the numbers array and print it to the console.
console.log("\nTASK 2.3");
console.log(numbers[1]);
//TASK 3 ARRAY METHODS
//• Create a new array filteredNumbers by filtering the numbers array for values greater than 10 using filter().
console.log("\nTASK 3.1");
let filterednumbers = numbers.filter(numbers => numbers >= 10);
console.log(filterednumbers);
//• Use map() to create a new array squaredNumbers by squaring each element in the numbers array.
console.log("\nTASK 3.2");
let count = [4, 8 , 16, 32];
let squared = count.map(num => num*num);//(num => num**2) Also works [if you want the cubic number just change for a 3]
console.log(squared);
//• Use forEach() to print each element in the colors array to the console.
console.log("\nTASK 3.3");
colors.forEach(color => console.log(color));
//TASK 4 ITERATING ARRAYS
//• Iterate over the numbers array using a for...of loop and print each element.
console.log("\nTASK 4.1");
let number2 = [85, 90, 95];
for (let numbers of number2){
    console.log(numbers);
}
//• Iterate over the sizes array using a traditional for loop and print each element.
console.log("\nTASK 4.2");
for (let i = 0; i < sizes.length; i++){
    console.log(sizes[i]);
}
//• Use the entries() method to get an iterator for the colors array and print each index and element pair.
console.log("\nTASK 4.3");
for (let [index, color] of colors.entries()) {
  console.log(`Index: ${index}, Color: ${color}`);
}

