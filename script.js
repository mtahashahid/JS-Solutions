// Question : Find the largest and second largest number within the array

// input array
let array = [2, 3, 6, 6, 5];
// Function for evaluating Largest and Second Largest number
function getSecondLargest(array) {
  // variable to store values
  let largestNumber = 0;
  let secondLargest = 0;

  // looping through each element of array to compare
  for (let i = 0; i < array.length; i++) {
    // conditions for checking largestNumber and secondLargest and swapping the values
    if (array[i] > largestNumber) {
      secondLargest = largestNumber;
      largestNumber = array[i];
    }
    if (array[i] > secondLargest && array[i] < largestNumber) {
      secondLargest = array[i];
    }
  }
  // console logging
  console.log(secondLargest);
  console.log(largestNumber);
}
// Function call
getSecondLargest(array);
