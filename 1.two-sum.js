/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 *
 * https://leetcode.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (40.98%)
 * Total Accepted:    1.5M
 * Total Submissions: 3.5M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * Given an array of integers, return indices of the two numbers such that they
 * add up to a specific target.
 * 
 * You may assume that each input would have exactly one solution, and you may
 * not use the same element twice.
 * 
 * Example:
 * 
 * 
 * Given nums = [2, 7, 11, 15], target = 9,
 * 
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 * 
 * 
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// force loop
var twoSum = function(nums, target) {
  const numsLength = nums.length
  for (let i = 0; i < numsLength; i++) {
    for (let j = i + 1; j < numsLength; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
  throw new Error('No Solution!')
};

// one-pass hash map
var twoSum = function(nums, target) {
  const numsLength = nums.length
  let map = new Map
  for (let i = 0; i < numsLength; i++) {
    const complement = target - nums[i]
    if (map.has(complement)) {
      return [map.get(complement), i]
    }
    map.set(nums[i], i)
  }
  throw new Error('No Solution!')
}
