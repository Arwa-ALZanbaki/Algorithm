
/* 
  Given an array, move the minimum value to the front in-place
  return the array after done.
  No built in methods.

  1) find the minimum value in the array
  2) move the minimum value to the front of the array
*/

const arr = [6, 4, 5];

function minToFront(arr) {

    if(arr.length == 1) {
        return arr;
    }

    var minIndex = getMinIndexInArray(arr);
    var minValue = arr[minIndex]

    // Shifting the array to the right
    for(var i = minIndex; i > 0; i--) {
        arr[i] = arr[i - 1]
    }
    // Put our min value that we found in the very beginning of the array
    arr[0] = minValue

    return arr;
}

function getMinIndexInArray(arr) {
    var minValue = arr[0]; 
    var minIndex = 0;
    // Finding the smallest number in the array
    for(var i = 1; i < arr.length; i++) {
        if(arr[i] < minValue) {
            minValue = arr[i];
            minIndex = i;
        }
    }

    return minIndex;
}

console.log(minToFront(arr))
