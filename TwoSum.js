/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j<nums.length; j++){
            if(nums[i] + nums[j] == target){
                return [i,j];
            }
        }
    }
};

let numbers = [2, 7, 11, 15];
let targetSum = 9;
let result = twoSum(numbers, targetSum);
console.log("Result: " + result);