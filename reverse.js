//<---------For Reversing the String--------->
function reverseString(arr) {                            // This function is a reverse function to reverse the string.
    let out = "";
    for (let i = arr.length - 1; i >= 0; i--) {
        out += arr[i];
    }
    return out;
}

module.exports = {reverseString}