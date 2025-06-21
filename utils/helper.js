const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};
export const findNthPrime = (n) => {
  n = parseInt(n, 10);
  if (isNaN(n) || n < 1) {
    return;
  }
  let count = 0;
  let num = 1;
  while (count < n) {
    num++;
    if (isPrime(num)) {
      count++;
    }
  }
  return num;
};
