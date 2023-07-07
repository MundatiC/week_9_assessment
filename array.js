// JavaScript program that takes an array with mixed data type and calculates the sum of all numbers.

function sumNumbers(arr) {
    let sum = 0;
    for (let element of arr) {
      if (typeof element === "number") {
        sum += element;
      }
    }
    return sum;
  }
  
  // Example usage
  const arr1 = [2, "11", 3, "a2", false, 5, 7, 1];
  const arr2 = [2, 3, 0, 5, 7, 8, true, false];
  
  console.log("Original array: " + arr1.join(","));
  console.log("Sum all numbers of the said array: " + sumNumbers(arr1));
  
  console.log("Original array: " + arr2.join(","));
  console.log("Sum all numbers of the said array: " + sumNumbers(arr2));
  