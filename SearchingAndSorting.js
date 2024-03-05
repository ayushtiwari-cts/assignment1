/*JavaScript code for the searching and sorting 
1.  Searching
*/


// Define an array and a value to search for
let array = [10, 20, 30, 40, 50];
let value = 30;

// 1. Searching
// 1.1 Linear Search
// 1.1.1 Linear Search using for loop
function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) return i;
    }
    return -1;
}

// Call the first linearSearch function
let result1 = linearSearch(array, value);
console.log(result1); 

// 1.1.2 Linear Search using while loop
function linearSearch(arr, val) {
    let i = 0;
    while (i < arr.length) {
        if (arr[i] === val) return i;
        i++;
    }
    return -1;
}


// Call the first linearSearch function
let result2 = linearSearch(array, value);
console.log(result2); 

// 1.1.3 Linear Search using for of loop
function linearSearch(arr, val) {
    for (let i of arr) {
        if (i === val) return arr.indexOf(i);
    }
    return -1;
}

// Call the first linearSearch function
let result3 = linearSearch(array, value);
console.log(result3);

// 1.1.4 Linear Search using forEach loop
function linearSearch(arr, val) {
    let index;
    arr.forEach((element, i) => {
        if (element === val) index = i;
    });
    return index;
}


// Call the first linearSearch function
let result4 = linearSearch(array, value);
console.log(result4);

// 1.2 Binary Search
// 1.2.1 Binary Search using while loop
function binarySearch(arr, val) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);

    while (arr[middle] !== val && start <= end) {
        if (val < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === val ? middle : -1;
}

// Call the first binarySearch function
let result5 = binarySearch(array, value);
console.log(result5);

// 1.2.2 Binary Search using for loop
function binarySearch(arr, val) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);

    for (let i = 0; i < arr.length; i++) {
        if (arr[middle] === val) return middle;
        if (val < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return -1;
}

let result6 = binarySearch(array, value);
console.log(result6);


//2.  Sorting
// 2.1 Bubble Sort
// 2.1.1 Bubble Sort using for loop
function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}


let strings = ["banana", "apple", "cherry", "date"];
let sortedStrings = bubbleSort(strings);
console.log(sortedStrings); // This will print: ["apple", "banana", "cherry", "date"]


//merge sort
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let middle = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, middle));
    let right = mergeSort(arr.slice(middle));
    return merge(left, right);
}

let strings1 = ["banana", "apple", "cherry", "date"];
let sortedStrings1 = bubbleSort(strings);
console.log(sortedStrings1); // This will print: ["apple", "banana", "cherry", "date"]
