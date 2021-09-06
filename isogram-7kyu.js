function isIsogram(str) {
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    for (let k = i + 1; k < str.length; k++) {
      if (str[i] === str[k]) {
        return false
      }
    }
  }
  return true
}

isIsogram("12334");

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
