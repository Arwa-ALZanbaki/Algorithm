/* 
  Given in an alumni interview in 2021.
  String Encode
  You are given a string that may contain sequences of consecutive characters.
  Create a function to shorten a string by including the character,
  then the number of times it appears. 

  If final result is not shorter (such as "bb" => "b2" ),
  return the original string.
  */

const str1 = "aaaabbcddd";
const expected1 = "a4b2c1d3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "bbcc";
const expected4 = "bbcc";

/**
 * Encodes the given string such that duplicate characters appear once followed
 * by a number representing how many times the char occurs. Only encode strings
 * when the result yields a shorter length.
 * @param {string} str The string to encode.
 * @returns {string} The given string encoded.
 * const str1 = "aaaabbcddd";
 */
function encodeStr(str) {
    var previousChar = str[0]
    var repeatedCount = 1
    var encoded = ""
    for(var i=1; i < str.length; i++) {
        var currentChar = str[i]
        if(previousChar == currentChar) {
            repeatedCount++;
            console.log({currentChar, repeatedCount})
        } else {
            encoded += previousChar + repeatedCount
            console.log({encoded})
            previousChar = currentChar
            repeatedCount = 1
        }

        if(i == str.length -1) {
            if(previousChar == currentChar) {
                encoded += previousChar + repeatedCount
            }
        }
    }

    return encoded.length < str.length ? encoded : str
}
// * const str1 = "aaaabbcddd";
function encodeStr2(str) {
    var encoded = "";
    for(var i=0; i < str.length; i++) {
        var char = str[i];
        var count = 1;
        while(char == str[i+1]) {
            count++;
            i++;
        }
        encoded += char + count;
    }
    return encoded.length < str.length ? encoded : str;
}

console.log(encodeStr2(str1))
