/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */
/**
 * @param {string}
 * @return {boolean}
 */
var isValid = function(s) {
  let map = {
      ')': '(',
      ']': '[',
      '}': '{'
  }
  let arr = [];
  for (let i = 0; i < s.length; i ++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      arr.push(s[i])
    } else {
      if(arr[arr.length - 1] === map[s[i]]){
        arr.pop()
      }
      else return false
    }
  }
  return arr.length === 0 ? true : false
}

