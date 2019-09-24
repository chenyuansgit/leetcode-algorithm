/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const s1 = s.split('').sort().join('');
  const s2 = t.split('').sort().join('');
  return s1 === s2;
};

console.log(isAnagram('anagram', 'nagaram')); // true