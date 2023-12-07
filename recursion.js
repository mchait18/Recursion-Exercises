/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;
  return nums[0] * product(nums.slice(1))
}
product([2, 3, 4])

/** longest: return the length of the longest word in an array of words. */

function longest(words, max = 0, i = 0) {
  if (words.length === i) return max;
  if (words[i].length > max) max = words[i].length
  return longest(words, max, i + 1)

}

/** everyOther: return a string with every other letter. */

function everyOther(str, newStr = "", i = 0) {
  if (str.length === i) return newStr
  if (i % 2 === 0) newStr += str[i]
  return everyOther(str, newStr, i + 1)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, isPal = false, i = 0) {
  if (str.length === i) return isPal
  if (str[i] === str[str.length - 1 - i]) isPal = true
  else isPal = false
  return isPalindrome(str, isPal, i + 1)
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, indx = -1, i = 0) {
  if (arr.length === i) return indx
  if (arr[i] === val) return i
  return findIndex(arr, val, indx, i + 1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, newStr = "", i = str.length - 1) {
  if (i < 0) return newStr
  newStr += str[i]
  return revString(str, newStr, i - 1)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, arr = []) {
  for (let item in obj) {
    if (obj[item] instanceof Object) {
      gatherStrings(obj[item], arr)
    }
    if (typeof obj[item] === "string") {
      arr.push(obj[item])
    }
  }
  return arr
}
/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, leftIdx = 0, rightIdx = arr.length - 1) {
  if (leftIdx > rightIdx) return -1
  let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
  let middleVal = arr[middleIdx];
  if (middleVal < val) {
    // middleVal is too small, look at the right half
    leftIdx = middleIdx + 1;
  } else if (middleVal > val) {
    // middleVal is too large, look at the left half
    rightIdx = middleIdx - 1;
  } else {
    // we found our value!
    return middleIdx;
  }
  return binarySearch(arr, val, leftIdx, rightIdx)
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
