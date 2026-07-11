/**
 * @param {number[]} digits
 * @return {number[]}
 */
// var plusOne = function(digits) {
//     const arr = [];
//     let str = "";

//     for (let i = 0; i < digits.length; i++) {
//         str += digits[i];
//     }

//     let strPlusOne = (BigInt(str) + 1n).toString();

//     for (let i = 0; i < strPlusOne.length; i++) {
//         arr.push(Number(strPlusOne[i]));
//     }

//     return arr;
// };

var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    digits.unshift(1);
    return digits;
};