/*
    Today's algorithm is gonna be array join
    concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

    const arr = ["a", "b", "c", "d"]
    join(arr, ".")
    output => a.b.c.d
*/

function join(array, separator)
{
    var result = array[0]
    for(var i=1; i < array.length; i++) {
        result += separator + array[i]
    }

    return result;
}

const arr1 = ["a", "b", "c", "d"]
const separator = ","

console.log(join(arr1, separator))
