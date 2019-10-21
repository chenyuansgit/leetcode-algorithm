/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  let hash = [];
  let aNum = 0;
  let bNum = 0;
  let newGuess = '';
  // 获取位置和值都正确的数
  for (let i = 0; i < secret.length; i++) {
    const item = secret[i];
    hash[item] = hash[item] ? ++hash[item] : 1;

    if (secret[i] === guess[i]) {
      aNum++;
      hash[item]--;
    } else {
      newGuess += guess[i];
    }
  }
  //console.log('guess:', newGuess);
  // 获取值正确但是位置不正确的数
  for (let i = 0; i < newGuess.length; i++) {
    const item = newGuess[i];
    if (hash[item]) {
      bNum++;
      hash[item]--;
    }
  }
  return `${aNum}A${bNum}B`;
};

console.log(getHint('1807', '7810')); // 1A3B
console.log(getHint('1123', '0111')); // 1A1B
console.log(getHint('11', '10')); // 1A0B