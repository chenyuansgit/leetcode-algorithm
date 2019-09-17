/**
 * @param {number} n
 * @return {string}
 */
/*
    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB
    ...
 */
var convertToTitle = function (n) {
  let hash = [];
  for (let i = 0; i < 26; i++) {
    hash[i] = String.fromCharCode(65 + i);
  }
  if (n <= 26) {
    return hash[n - 1];
  }

  let n1 = n % 26;
  let n2 = Math.floor(n / 26);

  let small = n1 > 0 ? n1 : 26;
  let big = small === 26 ? n2 - 1 : n2;

  return convertToTitle(big) + hash[small - 1];
};

console.log(convertToTitle(1)); // A
console.log(convertToTitle(26)); // Z
console.log(convertToTitle(28)); //AB
console.log(convertToTitle(52)); //AZ
console.log(convertToTitle(701)); // ZY