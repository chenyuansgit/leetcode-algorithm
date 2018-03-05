/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
    let i = 0;
    for (; i < bits.length - 1; i++) {
        if (bits[i] === 1) {
            i += 1;
        }
    }
    //console.log("length:", bits.length, "i:", i);
    if( i === bits.length - 1 && bits[i]  === 0) {
        return true;
    }
    return false;
};


console.log(isOneBitCharacter([1, 0, 0])); // true
console.log(isOneBitCharacter([1, 1, 1, 0])); // false
console.log(isOneBitCharacter([1, 1, 0, 0])); // true