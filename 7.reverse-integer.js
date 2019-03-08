/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 *
 * https://leetcode.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (25.09%)
 * Total Accepted:    619K
 * Total Submissions: 2.5M
 * Testcase Example:  '123'
 *
 * Given a 32-bit signed integer, reverse digits of an integer.
 * 
 * Example 1:
 * 
 * 
 * Input: 123
 * Output: 321
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: -123
 * Output: -321
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: 120
 * Output: 21
 * 
 * 
 * Note:
 * Assume we are dealing with an environment which could only store integers
 * within the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose
 * of this problem, assume that your function returns 0 when the reversed
 * integer overflows.
 * 
 */
/**
 * @param {number}
 * @return {number}
 */

// Math method solution
var reverse = function(x) {
  let state = 1
  if (x < 0) {
    x = -x
    state = -1
  }
  let result = 0
  let y = 0
  while(x > 0) {
    y = x % 10
    x = (x - y) / 10
    result = result * 10 + y
  }
  result = result * state
  let maxInteger = Math.pow(2, 31)
  const overflowCondition = result > (maxInteger - 1) || result < -maxInteger
  return overflowCondition ? 0 : result
};