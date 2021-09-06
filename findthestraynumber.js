function stray(array) {
  let strayChar = array[0];

  if (strayChar !== array[1] && strayChar !== array[2]) return strayChar;

  for (let i = 1; i < array.length; i++) {
    if (strayChar !== array[i]) return array[i];
  }
  return 0;
}

const array = [3, 17, 17, 17, 17, 17, 17];
stray(array);
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)


