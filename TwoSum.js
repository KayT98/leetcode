/**
 * @param {number[]} nums
 * @param {number} target //these are LC defaults to describe parameters for the function
 * @return {number[]} //return array of numbers
 */
let twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){//iterates through elements in the nums array using the index i
        for(let j = i+1; j<nums.length; j++){ //iterates through elements following the current i in the nums array using the index j
            if(nums[i] + nums[j] == target){ //check if the sums equal to target
                return [i,j]; //if the condition is met, returns an array containing the indices i, j as a pair.
            }
        }
    }
};

let numbers = [2, 7, 11, 15];
let targetSum = 9;
let result = twoSum(numbers, targetSum);
console.log("Result: " + result);