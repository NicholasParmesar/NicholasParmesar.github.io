//function add(a, b) {
//    return a + b;
//}
//let sum = add(5, 10); 
//console.log(sum);

function product(...numbers) {
    return numbers.reduce((total, number) => total * number, 1);
}
 
console.log(product(1, 2, 3)); 
console.log(product(10, 20, 30, 40, 50));  