function findSum(n) {
  let sum = null;
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum = sum + i;
    }
  }
  return sum;
}
findSum(5);
// findSum(10);
