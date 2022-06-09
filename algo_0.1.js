/* 
  String: Is Palindrome
  Create a function that returns a boolean whether the string is a strict palindrome. 
    - palindrome = string that is same forwards and backwards
  
  Do not ignore spaces, punctuation and capitalization
 */

const str1 = "a x a";
const expected1 = true;

const str2 = "racecar";
const expected2 = true;

const str3 = "Dud";
const expected3 = false;

const str4 = "oho!";
const expected4 = false;

/**
 * Determines if the given str is a palindrome (same forwards and backwards).
 * @param {string} str
 * @returns {boolean} Whether the given str is a palindrome or not.
 */
function isPalindrome(str) {
    for(var i=0; i < Math.floor(str.length/2); i++) {
        var leftChar = str[i]
        var rightChar = str[str.length - i - 1]
        if(leftChar !== rightChar) {
            return false;
        }
    }
    return true;
}
function isPalindrome2(str) {
    var left = 0
    var right = str.length-1
    while(left < right) {
        if(str[left] !== str[right]) {
            return false;
        }
        ++left;
        --right;
    }
    return true;
}

console.log(isPalindrome2(str1) == expected1)
