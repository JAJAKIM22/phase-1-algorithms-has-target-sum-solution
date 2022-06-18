function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++)
     {
      //if the sum  does not equal to zero return false
     const sum = target - array[i];
      //iterate through the array
      for (let j = i + 1; j < array.length; j++)
       {
        // if the target number is equal to the sum of the two umbers in the array return true
        if (array[j] === sum) return true;
      }
    }
  
   return false;
}

/* 
  Write the Big O time complexity of your function here
  Runtime: O(n^2)
  function findPair(laundry) {
  // look through each item in the pile
  for (let i = 0; i < laundry.length; i++) {
    // look through the rest of the pile
    for (let j = i + 1; j < laundry.length; j++) {
      // check if it matches the first sock
      if (laundry[i] === laundry[j]) {
        return [laundry[i], laundry[j]];
      }
    }
  }
}

findPair(["sock 5", "sock 2", "sock 1", "sock 3", "sock 1"]);
*/

/* 
  Add your pseudocode here
  take one number from the array
  sum it to one other number  in the array
    if they total sum matches a number from the pile, return true 
    else false
*/

/*
  Add written explanation of your solution here
  take one number from the array
  sum it to one other number  in the array
    if they total sum matches a number from the pile, return true 
    else false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
