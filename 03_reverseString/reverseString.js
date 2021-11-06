const reverseString = function(str) {
    let strArray = str.split("");
    let strReverse = "";
    for (i = strArray.length - 1; i >= 0; i--) {
        strReverse += strArray[i];
    }
    return strReverse;
};
console.log(reverseString("Hello"));
// Do not edit below this line
module.exports = reverseString;
