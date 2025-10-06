//let studentNames = [];//empty array
//let provinces = ['ontario', 'British Columbia', 'Quebec'];//Literal Notation

//let names = new Array ('bob', 'cleber', 'jeff');//Array constructor
//console.log(provinces);

//let cities = Array.of('Toronto', 'Hamilton', 'Mississauga');// 'of' method of Array
//console.log(cities);

//let arr1 = new Array(3, 56);
//let arr2 = Array.of(5, 20);
//console.log(arr1);
//console.log(arr2);

//Add element
//names[3] = 'jane';
//names.push('john');//Add to the end of the Array
//names[0] = 'Nash';
//names.unshift('Nash');//Add to the start of the Array

//Remove element
//let removedElement = names.pop();//Remove the element at the end and returns it
//console.log ('Remove Element:' + removedElement);
//console.log('Array : '+ names);
//names.shift();
//let firstElementRemoved = names.shift();
//console.log ('first Element Removed : ' + firstElementRemoved);
//console.log('Array : '+ names);

//write a program that creates an array of number and
//find both the maximum and minimum values in the array
//let arr3 = [34, 3, 45, 12, 67, 33, 78, 22]
//let max = arr3[0];
//for (const element of arr3){
//    if(element > max){
//        max = element;
//    }
//}
//console.log('Max:' ,max);
//
//let arr4 = [34, 3, 45, 12, 67, 33, 78, 22]
//let min = arr4[0];
//for (const element of arr4){
//    if(element < min){
//        min = element;
//    }
//}
//console.log('Min:' ,min);
//write a program that takes an array of strings and reverses the order of the elements
//let names = new Array('bob', 'ben', 'sam', 'john', 'tom', 'paul');
//let reversedNames =[];
//for (let index = names.length - 1; index >=0; index--){
//    reversedNames.push(names[index]);
//}
//console.log(names);
//console.log(reversedNames);

let arr4 = [34, 3, 45, 12, 67, 33, 78, 22]
let arr5 = arr4.filter(elem => elem < 50);
console.log(arr5);
let arr6 = arr4.map(elem => elem + 10);
console.log(arr6);

arr4.forEach(elem => console.log(elem));

