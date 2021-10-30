// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

function incrementString(strng) {
  const words = strng.split('');
  let str = [];
  let num = [];

  // console.log(strng.length);
  // if (strng.length === 0) {
  //   return 1;
  // }

  strng.length === 0;

  words.forEach((e) => {
    parseInt(e) ? num.push(e) : str.push(e);
  });

  const str2 = str.join('');
  const num2 = Number(num.join(''));
  const num3 = num2 + 1;
  console.log(num3);
  console.log(str2 + num3);
  return str2 + num2;
}

incrementString('red00');
